# Change Log

All notable changes to the `vscode-nastran` extension will be documented in this file.

## [1.0.0] - 2023-08-28

### Added

- Syntax highlighting and documentation hover support for:
  - `Nastran` keyword
  - Section dividers
  - File Management
  - Executive Control
  - Case Control
  - Bulk Data
  - Parameters
- Include file hierarchy tree view for easy navigation of model
- "Find All" command for performing search through entire model
- `Nastran` execution command

## [1.0.1] - 2023-08-28

### Added

- Updated keybind for executing `Nastran` from `F5` to `F6` to avoid default `vscode` keybinds

## [1.0.2] - 2023-09-03

### Added

- Added Contribution guidelines, list of contributors, and Code of Conduct
- Fixes bug related to compatibility with newest versions of Python and regex changes ([#17](https://github.com/dmarc3/vscode-nastran/issues/17))

## [1.0.3] - 2023-09-05

### Added

- Fixes Include Hierarchy bug for include call-outs spanning multiple lines ([#30](https://github.com/dmarc3/vscode-nastran/issues/30))

## [1.0.4] - 2023-09-23

### Added

- Updated server semantic token-ing logic to load for partial range to improve performance while working with large files.

## [1.0.5] - 2023-09-26

### Added

- Added keybind (`F7`) for include hierarchy update
- Added text completion for rapid editing ([#36](https://github.com/dmarc3/vscode-nastran/issues/36))
- Added unittesting for `read_docs.py`

## [1.0.6] - 2023-10-05

### Added

- Added command to insert long and short field delineation comments (`F9` and `F10` keybinds)
- Updated all hover documentations to provide correct hyperlink given Hexagon's updated documentation center per [#40](https://github.com/dmarc3/vscode-nastran/issues/40)

## [1.0.7] - 2023-10-15

### Added

- Updated section (BULK, CASE, etc.) identification logic. Fixes [#44](https://github.com/dmarc3/vscode-nastran/issues/44) and [#45](https://github.com/dmarc3/vscode-nastran/issues/45) and accounts for live edits to file
- Updated include hierarchy logic to auto update if file is not within current includes list
- Added command to set user defined short field and long field delineation comments

## [1.0.8] - 2023-10-20

### Added

- Updated section (BULK, CASE, etc.) identification logic. Fixes [#50](https://github.com/dmarc3/vscode-nastran/issues/50).
- Updated include hierarchy logic to update once client is fully started
- Updated semantic tokening logic to color adjacent fields when using free field format. Addresses [#51](https://github.com/dmarc3/vscode-nastran/issues/51).
