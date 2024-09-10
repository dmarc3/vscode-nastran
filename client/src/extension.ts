 /* ----------------------------------------------------------------------- */
"use strict";

import * as path from "path";
import * as vscode from "vscode";
import { TreeDataProvider } from "./treeview";
import { executeFind } from "./find";
import { executeNastran, setKeywords, showKeywords } from "./execute";
import { setComment, insertComment } from "./comments";
import { openFile } from "./open";
import * as fs from 'fs';
import * as os from 'os';
import { execSync } from 'child_process';

import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions,
} from "vscode-languageclient/node";

// Important paths
const EXTENSION_DIR = path.join(__dirname, '..', '..');
const VENV_DIR = path.join(EXTENSION_DIR, 'venv_prod');
const REMAKE_FILE = path.join(EXTENSION_DIR, '.venv_prod_remake');
const REQUIREMENTS_FILE = path.join(EXTENSION_DIR, 'requirements.txt');

let client: LanguageClient | undefined;
let outputChannel: vscode.LogOutputChannel | undefined;

function log(message: string, show: boolean = false) {
    if (outputChannel) {
        outputChannel.appendLine(message);
    } else {
        outputChannel = vscode.window.createOutputChannel('[pygls] NastranLanguageServer', { log: true });
        outputChannel.appendLine(message);
    }
    if (show) {
        outputChannel.show(true);
    }
}

function getClientOptions(): LanguageClientOptions {
    return {
        // Register the server for plain text documents
        documentSelector: [
            { scheme: "file", language: "nastran" },
            { scheme: "untitled", language: "nastran" },
        ],
        markdown: {
            isTrusted: true,
        },
        outputChannelName: "[pygls] NastranLanguageServer",
        synchronize: {
            // Notify the server about file changes to '.clientrc files contain in the workspace
            fileEvents: vscode.workspace.createFileSystemWatcher("**/.clientrc"),
        },
    };
}

function startLangServer(
    command: string,
    args: string[],
    cwd: string
): LanguageClient {
    const serverOptions: ServerOptions = {
        args,
        command,
        options: { cwd },
    };

    return new LanguageClient(command, serverOptions, getClientOptions());
}

export function activate(context: vscode.ExtensionContext): void {
    // Production - Client is going to run the server (for use within `.vsix` package)
    const cwd = path.join(__dirname, "..", "..");
    let pythonPath = vscode.workspace
        .getConfiguration("nastranServer")
        .get<string>("pythonInterpreterPath");
    log(`Python interpreter path from configuration: ${pythonPath}`);

    // Resolve system aliases for 'python' or 'python3'
    if (pythonPath === 'python' || pythonPath === 'python3') {
        try {
            const command = os.platform() === 'win32' ? 'where' : 'which';
            const resolvedPath = execSync(`${command} ${pythonPath}`).toString().trim();
            pythonPath = resolvedPath.split('\n')[0]; // Use the first resolved path
            log(`Resolved system alias for ${pythonPath}: ${resolvedPath}`);
        } catch (error) {
            log(`Failed to resolve system alias for ${pythonPath}: ${error}`);
        }
    }

    // not sure if I need this, but 
    if (pythonPath) {
        pythonPath = path.resolve(pythonPath);
        log(`Resolved Python interpreter path from configuration: ${pythonPath}`);
    }

    // Check if the path is a valid file or symbolic link
    let statsync_condition = false;
    try {
        if (pythonPath) {
            let statsync = fs.lstatSync(pythonPath);
            statsync_condition = statsync.isFile() || statsync.isSymbolicLink();
        }
    } catch {
        statsync_condition = false;
    }

    if (!pythonPath || !statsync_condition) {
        let trialPythonPath = findPythonPath();
        log(`Python interpreter path from search: ${trialPythonPath}`);

        if (trialPythonPath) {
            vscode.window.showInformationMessage(`Python interpreter found at ${trialPythonPath}. Do you want vscode-nastran to use this?`, 'Yes', 'Open Settings', 'Open Settings (JSON)', 'Cancel')
                .then(selection => {
                    if (selection === 'Yes') {
                        vscode.workspace.getConfiguration('nastranServer').update('pythonInterpreterPath', trialPythonPath, vscode.ConfigurationTarget.Global);
                        fs.writeFileSync(REMAKE_FILE, '');
                        vscode.window.showInformationMessage('The Python interpreter path has changed. Do you want to restart the extensions to apply the changes?', 'Restart', 'Later')
                            .then(selection => {
                                if (selection === 'Restart') {
                                    vscode.commands.executeCommand('workbench.action.restartExtensionHost');
                                }
                            });
                    } else if (selection === 'Open Settings') {
                        vscode.commands.executeCommand('workbench.action.openSettings', 'nastranServer.pythonInterpreterPath');
                    } else if (selection === 'Open Settings (JSON)') {
                        vscode.commands.executeCommand('workbench.action.openSettingsJson', { revealSetting: { key: 'nastranServer.pythonInterpreterPath' } });
                    }
                    else {
                        vscode.window.showErrorMessage('Python interpreter not found. Please configure the pythonInterpreterPath setting.', 'Open Settings', 'Open Settings (JSON)')
                            .then(selection => {
                                if (selection === 'Open Settings') {
                                    vscode.commands.executeCommand('workbench.action.openSettings', 'nastranServer.pythonInterpreterPath');
                                } else if (selection === 'Open Settings (JSON)') {
                                    vscode.commands.executeCommand('workbench.action.openSettingsJson', { revealSetting: { key: 'nastranServer.pythonInterpreterPath' } });
                                }
                            });
                    }
                });
        } else {
            vscode.window.showErrorMessage('Python interpreter not found. Please configure the pythonInterpreterPath setting.', 'Open Settings', 'Open Settings (JSON)')
                .then(selection => {
                    if (selection === 'Open Settings') {
                        vscode.commands.executeCommand('workbench.action.openSettings', 'nastranServer.pythonInterpreterPath');
                    } else if (selection === 'Open Settings (JSON)') {
                        vscode.commands.executeCommand('workbench.action.openSettingsJson', { revealSetting: { key: 'nastranServer.pythonInterpreterPath' } });
                    }
                });
        }
    } else {
        let venvPath = setupVirtualEnv(pythonPath);
        log(`Virtual environment path: ${venvPath}`);
        client = startLangServer(venvPath, ["-m", "server.server"], cwd);
    
        // Execute on file edit
        vscode.workspace.onDidChangeTextDocument((e: vscode.TextDocumentChangeEvent) => {
            if (e.document.languageId === "nastran") {
                // Update sections and send to server
                includeHierarchyProvider.getSections()
                client.sendRequest('custom/getSections', includeHierarchyProvider.sections)
            }
        });
        // Execute on file change
        vscode.window.onDidChangeActiveTextEditor((e: vscode.TextEditor) => {
            if (e.document.languageId === "nastran") {
                if (!path.basename(e.document.fileName).startsWith("find_")) {
                    var isInclude = false
                    for (var include of includeHierarchyProvider.includes) {
                        const basename = path.basename(e.document.fileName)
                        if (include.endsWith(basename)) {
                            isInclude = true
                        }
                    }
                    if (!isInclude) {
                        vscode.commands.executeCommand('includeHierarchy.buildHierarchy')
                    }
                }
            }
        });
        // Register Tree View
        const includeHierarchyProvider = new TreeDataProvider();
        vscode.window.registerTreeDataProvider(
            'includeHierarchy',
            includeHierarchyProvider
        );
        // Register Commands
        vscode.commands.registerCommand('includeHierarchy.buildHierarchy', () => {
            // Register Tree View
            includeHierarchyProvider.reset()
            includeHierarchyProvider.getIncludes(vscode.window.activeTextEditor.document.fileName)
            includeHierarchyProvider.getSections()
            includeHierarchyProvider.refresh()
            client.sendRequest('custom/getIncludes', includeHierarchyProvider.includes)
            client.sendRequest('custom/getSections', includeHierarchyProvider.sections)
            client.sendRequest('custom/getLines', includeHierarchyProvider.lines)
            }
        );
        vscode.commands.registerCommand('find', () => {
            executeFind(includeHierarchyProvider.includes)
            }
        );
        vscode.commands.registerCommand('execute', () => {
            executeNastran(path.basename(vscode.window.activeTextEditor.document.fileName), context)
            }
        );
        vscode.commands.registerCommand('insert_short_comment', () => {
            insertComment(context, "short_comment")
            }
        );
        vscode.commands.registerCommand('insert_long_comment', () => {
            insertComment(context, "long_comment")
            }
        );
        vscode.commands.registerCommand('set_short_comment', () => {
            setComment(context, "Enter short field delineation comment:", "short_comment")
            }
        );
        vscode.commands.registerCommand('set_long_comment', () => {
            setComment(context, "Enter long field delineation comment:", "long_comment")
            }
        );
        vscode.commands.registerCommand('set_keywords', () => {
            setKeywords(context)
            }
        );
        vscode.commands.registerCommand('show_keywords', () => {
            showKeywords(context)
            }
        );
        vscode.commands.registerCommand('open_file', () => {
            const lineno = vscode.window.activeTextEditor.selection.active.line
            const lines = vscode.window.activeTextEditor.document.getText().split('\n')
            openFile(lineno, lines, includeHierarchyProvider.includes)
            }
        );
        client.onReady().then(() => {
            if (includeHierarchyProvider.includes.length != 0) {
                includeHierarchyProvider.getSections()
            } else {
                vscode.commands.executeCommand('includeHierarchy.buildHierarchy')
            }
            client.sendRequest('custom/getIncludes', includeHierarchyProvider.includes)
            client.sendRequest('custom/getSections', includeHierarchyProvider.sections)
            client.sendRequest('custom/getLines', includeHierarchyProvider.lines)
        });
        context.subscriptions.push(client.start());
    }



    // Listen for configuration changes
    vscode.workspace.onDidChangeConfiguration(event => {
        if (event.affectsConfiguration('nastranServer.pythonInterpreterPath')) {
            fs.writeFileSync(REMAKE_FILE, '');
            vscode.window.showInformationMessage('The Python interpreter path has changed. Do you want to restart the extensions to apply the changes?', 'Restart', 'Later')
                .then(selection => {
                    if (selection === 'Restart') {
                        vscode.commands.executeCommand('workbench.action.restartExtensionHost');
                    }
                });
        }
    });

}

export function deactivate(): Thenable<void> {
    return client ? client.stop() : Promise.resolve();
}

function findPythonPath(): string | null {
    const platform = os.platform();
    console.log('Platform:', platform);

    let pathsToCheck: string[] = [];



    if (platform === 'win32') {
        // We'll look for any python.exe in the PATH
        const pathEnv = process.env.PATH || '';
        const pathDirs = pathEnv.split(path.delimiter);
        pathDirs.forEach(dir => {
            pathsToCheck.push(path.join(dir, 'python.exe'));
        });

        // We'll look in some common installation locations
        const username = process.env.USERNAME;
        pathsToCheck = pathsToCheck.concat([
            'python.exe',
            `C:\\Users\\${username}\\AppData\\Local\\Microsoft\\WindowsApps\\python.exe`,
            `C:\\Users\\${username}\\AppData\\Local\\Programs\\Python\\Python312\\python.exe`,
            `C:\\Users\\${username}\\AppData\\Local\\Programs\\Python\\Python311\\python.exe`,
            `C:\\Users\\${username}\\AppData\\Local\\Programs\\Python\\Python310\\python.exe`,
            `C:\\Users\\${username}\\AppData\\Local\\Programs\\Python\\Python39\\python.exe`,
            `C:\\Users\\${username}\\AppData\\Local\\Programs\\Python\\Python38\\python.exe`,
            'C:\\Python312\\python.exe',
            'C:\\Python311\\python.exe',
            'C:\\Python310\\python.exe',
            'C:\\Python39\\python.exe',
            'C:\\Python38\\python.exe',
        ]);
    } else {
        pathsToCheck = [
            '/usr/local/bin/python3',
            '/usr/bin/python3',
            '/usr/local/bin/python',
            '/usr/bin/python'
        ];

    }

    console.log(pathsToCheck);
    for (const pythonPath of pathsToCheck) {
        const resolvedPath = path.resolve(pythonPath);
        try {
            let stats = fs.lstatSync(resolvedPath);
            console.log('Stats:', stats);

            // If the path is a symbolic link, resolve it
            if (stats.isSymbolicLink()) {
                console.log('Path is a symbolic link:', resolvedPath);
                const linkPath = fs.readlinkSync(resolvedPath);
                stats = fs.statSync(linkPath);
            }

            if (stats.isFile()) {
                console.log('Python path found:', resolvedPath);
                return resolvedPath;
            }
        } catch (err) {
            // Path does not exist or is not accessible
        }
    }

    return null;
}

function setupVirtualEnv(pythonPath: string) {
    const isWindows = os.platform() === 'win32';
    const venvPythonPath = isWindows
        ? path.join(VENV_DIR, 'Scripts', 'python.exe')
        : path.join(VENV_DIR, 'bin', 'python');
    const pipPath = isWindows
        ? path.join(VENV_DIR, 'Scripts', 'pip.exe')
        : path.join(VENV_DIR, 'bin', 'pip');

    log(`Checking for virtual environment at ${VENV_DIR} or need to remake it...`);

    if (!fs.existsSync(VENV_DIR) || fs.existsSync(REMAKE_FILE)) {
        log('Virtual environment does not exist or needs to be remade.');

        let error_status = false;

        log('Creating virtual environment...');
        try {
            const venvOutput = execSync(`"${pythonPath}" -m venv --clear ${VENV_DIR}`, { stdio: 'pipe' }).toString();
            log(`Virtual environment creation output: ${venvOutput}`);
        } catch (error) {
            log(`Error creating virtual environment: ${(error as Error).message}`);
            log('Please check the output for more information. Potentially, report error to Tony F.', true);
            error_status = true;
        }

        log('Installing requirements...');
        try {
            const pipOutput = execSync(`"${pipPath}" install -r ${REQUIREMENTS_FILE} --extra-index-url https://pypi.org/simple`, { stdio: 'pipe' }).toString();
            log(`Requirements installation output: ${pipOutput}`);
        } catch (error) {
            log(`Error installing requirements: ${(error as Error).message}`);
            log('Please check the output for more information. Potentially, report error to Tony F.', true);
            error_status = true;
        }

        if (error_status) {
            log('Virtual environment setup failed.');
            log('MSC Nastran Language Server will not start.');
            log('Please check the output above for more information.');
            log('If on a linux system, you may need to install the python3-venv and python3-pip packages.');
            return null;
        }

        // Only remove remake file if we make it here
        if (fs.existsSync(REMAKE_FILE) && !error_status) {
            fs.unlinkSync(REMAKE_FILE);
        }
    } else {
        log('Virtual environment already exists.');
    }

    // Return the Python path in the virtual environment
    return venvPythonPath;
}
