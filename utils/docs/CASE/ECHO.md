## [ECHO (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.ECHO.Case.xhtml) - Bulk Data Echo Request

Controls echo (i.e., printout) of the Bulk Data.

#### Format:

![casecontrol4a00860.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00860.jpg?_LANG=enus)  

#### Examples:

```nastran
ECHO=UNSORT
ECHO=BOTH
ECHO=PUNCH, SORT (MAT1, PARAM)
ECHO=SORT (EXCEPT DMI, DMIG)
ECHO=BOTH,PUNCH,FILE
```

(In the above examples See Remark  7. : the PUNCH keyword will always result in the PUNCH file containing the entire bulk data input. Explicit inclusion indicators (CDNI) such as (MAT1, PARAM) will always cause a F06 file to be written that contains only the (CDNI) data.)

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT      │ The sorted (arranged in alphanumeric order) Bulk Data will be printed.                            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXCEPT    │ Excludes cdni Bulk Data entries from sorted echo printout. See Remark 6.                          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ cdni,...  │ Defines Bulk Data entry names to be included, or excluded by EXCEPT, in the sorted echo printout. │
│           │ The PUNCH (.pch) file is not affected by cdni.                                                    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNSORT    │ The unsorted Bulk Data will be printed. If SORT is also not specified, the sorted Bulk Data will  │
│           │ not be printed.                                                                                   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BOTH      │ Both sorted and unsorted Bulk Data will be printed. This is equivalent to ECHO=SORT, UNSORT.      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE      │ Neither sorted nor unsorted Bulk Data will be printed.                                            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH     │ The entire Bulk Data will be written to the punch (.pch) file. See Remark 7. for options.         │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FILE      │ The entire Bulk Data echo will be written to the separate file with a default suffix of .BECHO in │
│           │ *.f06 form. A user-defined filename must be specified in the ASSIGN statement.                    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NEWBULK   │ In SOL 200, a complete unsorted Bulk Data file is written to the PUNCH file with updated design   │
│           │ model entries.                                                                                    │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If   no ECHO command appears, sorted Bulk Data will be printed.
2. Comments will appear at the front of the sorted file if ECHO=PUNCH.
3. Portions of the unsorted Bulk Data can be selectively echoed by including the commands ECHOON and ECHOOFF at various places within the Bulk Data. ECHOOFF stops the unsorted echo until an ECHOON commands is encountered. Many such pairs of commands may be used. The ECHOON and ECHOOFF command may be used in the Executive and Case Control Sections; however, ECHOOFF should not be the first entry and continuation entries are not handled correctly.
4. If the SORT (cdni,...) describer is specified in a restart in SOLs 101 through 200, then the continuation entries will not be printed.
5. If the SORT (cdni,...) describer is used, then it must appear as the last describer, as in the preceding example.
6. If the EXCEPT describer is specified, then it must be specified before all cdni. All Bulk Data entry types will be listed except those given for cdn1, cdn2, etc. If EXCEPT is not specified, then only those Bulk Data entry types listed under cdn1, cdn2, etc. will be listed.
7. PUNCH without options or PUNCH(SORT) produces a sorted listing of the entire bulk data input in the punch file. PUNCH(NEWBULK) produces unsorted bulk data input with updated design model entries in the punch file. PUNCH(BOTH) combines these two outputs.
