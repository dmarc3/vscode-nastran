## [DTABLE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DTABLE.xhtml) - Table Constants

Defines a table of real constants that are used in equations (see DEQATN entry).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DTABLE  LABL1   VALU1   LABL2   VALU2   LABL3   VALU3   LABL4   VALU4   +       
+       LABL5   VALU5   LABL6   VALU6   LABL7   VALU7   LABL8   VALU8   +       
+               -etc.-                                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DTABLE  PI      3.142   H       10.1    E       1.0E6                   +       
+       G       5.5E5   B       100.                                            
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                              │
├───────────┼──────────────────────────────────────────────────────────────────────┤
│ LABLi     │ Label for the constant.  (Character)                                 │
├───────────┼──────────────────────────────────────────────────────────────────────┤
│ VALUi     │ Value of the constant or TABLEDx ID. (Real or Integer, respectively) │
└───────────┴──────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Multiple DTABLE entries may be specified in the Bulk Data Section.
2. LABLi are referenced by the LABj on the DRESP2, DRESP3, DVCREL2, DVMREL2, or DVPREL2 entries.
3. Trailing blank fields are permitted at the end of each line of LABLi/VALUi pairs, but intermediate blanks are not. (See the example above for permitted trailing blanks.)
4. For PART SE, if LABLi is referenced on SEDRSP2 and/or SEDRSP3, DTABLE entries must be placed in a PART SE where companion design model entries, such as DESVAR, DRESP1 and etc, are available.
5. If the VALUi is an integer, this points to the ID of a TABLEDx Bulk Data entry that lists the constants as a function of frequency or time. See Remark   on the DRESP2 entry.
6. LABLi must be unique across all DTABLE and DTABLE2 entries.
