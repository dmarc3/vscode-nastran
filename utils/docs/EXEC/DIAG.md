## [DIAG](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/TOC.DIAG.xhtml) - Requests Diagnostic Output

Requests diagnostic output or special options.

#### Format:

```nastran
DIAG [=] k1[k2, ..., kn]
```

#### Examples:

```nastran
DIAG 8,53
```

or

```nastran
DIAG 8
```

```nastran
DIAG 53
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                          │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ ki        │ A list separated by commas and/or spaces of desired diagnostics. │
└───────────┴──────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The DIAG statement is optional.
2. Multiple DIAG statements are allowed.
3. The following table lists the possible values for ki and their corresponding actions:

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ k=1       │ Dumps memory when a nonpreface fatal message is generated.                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=2       │ Prints database directory information before and after each DMAP statement. Prints bufferpooling   │
│           │ information.                                                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=3       │ Prints “DATABASE USAGE STATISTICS” after execution of each functional module. This message is the  │
│           │ same as the output that appears after the run terminates. See the Output Description in the MSC    │
│           │ Nastran Reference Guide.                                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=4       │ Prints cross-reference tables for compiled sequences. Equivalent to the COMPILER REF statement.    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=5       │ Prints the BEGIN time on the operator’s console for each functional module. See the Output         │
│           │ Description in the MSC Nastran Reference Guide.                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=6       │ Prints the END time for each functional module in the log file or day file, and on the operator’s  │
│           │ console. Modules that consume less time than the threshold set by SYSTEM (20) do not create a      │
│           │ message. See the Output Description in the MSC Nastran Reference Guide.                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=7       │ Prints eigenvalue extraction diagnostics for the complex determinate method.                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=8       │ Prints matrix trailers as the matrices are generated in the execution summary table. See the       │
│           │ Output Description in the MSC Nastran Reference Guide.                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=9       │ Prints a message in the .f04 file when EQUIV and EQUIVX perform a successful equivalence; in other │
│           │ words, both the input and output exists.                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=10      │ Selects an alternate option for averaging nonlinear loading (NOLINi Bulk Data entry) in linear     │
│           │ transient analysis. Replaces Nn+1 with (Nn+1 + Nn + Nn-1)/3.                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=11      │ DBLOAD, DBUNLOAD, and DBLOCATE diagnostics.                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=12      │ Prints eigenvalue extraction diagnostics for complex inverse power and complex Lanczos methods.    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=13      │ Prints the open core length (the value of REAL). See the Output Description in the MSC Nastran     │
│           │ Reference Guide.                                                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=14      │ Prints solution sequence. Equivalent to the COMPILER LIST statement.                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=15      │ Prints table trailers.                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=16      │ Traces real inverse power eigenvalue extraction operations                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=17      │ Punches solution sequences. Equivalent to the COMPILER DECK statement.                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=18      │ In aeroelastic analysis, prints internal grid points specified on SET2 Bulk Data entries.          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=19      │ Prints data for MPYAD and FBS method selection in the execution summary table.                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=20      │ Similar to DIAG 2 except the output appears in the execution summary table and has a briefer and   │
│           │ more user-friendly format. However, the .f04 file will be quite large if DIAG 20 is specified with │
│           │ an MSC Nastran solution sequence. A DMAP alter with DIAGON(20) and DIAGOFF(20) is recommended.     │
│           │ DIAG 20 also prints DBMGR, DBFETCH, and DBSTORE subDMAP diagnostics. See the MSC Nastran DMAP      │
│           │ Programmer’s Guide.                                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=21      │ Prints diagnostics of DBDICT and DBENTRY table.                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=22      │ EQUIV and EQUIVX module diagnostics.                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=23      │ Not used.                                                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=24      │ Prints files that are left open at the end of a module execution. Also prints DBVIEW diagnostics.  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=25      │ Outputs internal plot diagnostics.                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=27      │ Prints Input File Processor (IFP) table. See the MSC Nastran Programmer’s Manual, Section 4.5.9.   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=28      │ Punches the link specification table (XBSBD). The Bulk Data and Case Control Sections are ignored, │
│           │ and no analysis is performed.                                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=29      │ Process link specification table update. The Bulk Data and Case Control Sections are ignored, and  │
│           │ no analysis is performed.                                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=30      │ In link 1, punches the XSEMii data (i.e., sets ii via DIAG 1 through 15). The Bulk Data and Case   │
│           │ Control Sections are ignored, and no analysis is performed. After link 1, this turns on BUG        │
│           │ output. Used also by MATPRN module. See also Remark 5 on the TSTEP, 1549 Bulk Data entry.          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=31      │ Prints link specification table and module properties list (MPL) data. The Bulk Data and Case      │
│           │ Control Sections are ignored, and no analysis is performed.                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=32      │ Prints diagnostics for XSTORE and PVA expansion.                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=33      │ Not used.                                                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=34      │ Turns off plot line optimization.                                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=35      │ Prints diagnostics for 2-D slideline contact analysis in SOLs 106 and 129.                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=37      │ Disables the superelement congruence test option and ignores User Fatal Messages 4277 and 4278. A  │
│           │ better alternative is available with PARAM,CONFAC. See Parameters, 795.                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=38      │ Prints material angles for CQUAD4, CQUAD8, CTRIA3, and CTRIA6 elements. The angle is printed only  │
│           │ for elements that use the MCID option of the connection entry.                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=39      │ Traces module FA1 operations and aerodynamic splining in SOLs 145 and 146.                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=41      │ Traces GINO OPEN/CLOSE operations.                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=42      │ Prints output on .f04 file the usage statistic for datablock defined in the FMS command, MEMLIST.  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=43      │ Print output for Buffer Pool Diagnostics.                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=44      │ Prints a mini-dump for fatal errors and suppresses user message exit.                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=45      │ Prints the same database directory information as DIAG 2 except that it prints only after each     │
│           │ DMAP statement.                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=46      │ Used by MSC Nastran development for GINO printout.                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=47      │ Prints DBMGR, DBFETCH, and DBSTORE subDMAP diagnostics.                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=48      │ Used by MSC Nastran development for GINO printout.                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=49      │ DIAG 49 is obsolete and should not be used. The utility f04rprt should be used to summarize the    │
│           │ .f04 execution summary instead.                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=50      │ Traces the nonlinear solution in SOLs 106, 129, 153, and 159. Prints subcase status; echoes NLPARM,│
│           │ NLPCI, and  entry fields; and prints initial arc-length. Prints iteration summary only in SOLs 129,│
│           │ and 159. static aeroelastic analysis (SOL 144), prints transformation information associated with  │
│           │ the generation of the DJX matrix in the ADG module and intermediate solutions information in the   │
│           │ ASG module.                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=51      │ Prints intermediate displacement, load error vectors, and additional iteration information helpful │
│           │ in debugging in SOLs 106, 129, 153, and 159.                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=52      │ Disables the printing of errors at each time step in SOLs 129 and 159.                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=53      │ MESSAGE module output will also be printed in the execution summary table. See the Output          │
│           │ Description in the MSC Nastran Reference Guide.                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=54      │ Linker debug print.                                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=55      │ Performance timing.                                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=56      │ Extended print of execution summary table (prints all DMAP statements and RESTART deletions). See  │
│           │ the Output Description in the MSC Nastran Reference Guide.                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=57      │ Executive table (XDIRLD) performance timing and last-time-used (LTU) diagnostics.                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=58      │ Data block deletion debug and timing constants echo.                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=59      │ Buffpool debug printout.                                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=60      │ Prints diagnostics for data block cleanup at the end of each module execution in subroutines DBCLN,│
│           │ DBEADD, and DBERPL.                                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=61      │ GINO block allocator diagnostics.                                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=62      │ GINO block manager diagnostics.                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k=63      │ Prints each item checked by the RESTART module and its NDDL description.                           │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
