## [DTABLE2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DTABLE2.xhtml) - Table Constants

Defines real constants from a field of property, material or connections bulk data entries which then can be invoked by a DVxREL2, DRESP2, or DRESP3 entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DTABLE2 LABL1   PNAME1  PID1    FNAME1  LABL2   PNAME2  PID2    FNAME2  +       
+       LABL3   PNAME3  PID3    FNAME3                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DTABLE2 PTHK10  PSHELL  10      T       MATIE   MAT1    38      E       +       
+       CBARX1  CBAR    3888    X1                                              
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                            │
├───────────┼────────────────────────────────────────────────────────────────────┤
│ LABLi     │ Label for the constant. (Character)                                │
├───────────┼────────────────────────────────────────────────────────────────────┤
│ PNAMEi    │ Property, material or connection bulk data entry name. (Character) │
├───────────┼────────────────────────────────────────────────────────────────────┤
│ PIDi      │ ID of PNAMEi entry. (Integer > 0)                                  │
├───────────┼────────────────────────────────────────────────────────────────────┤
│ FNAMEi    │ Field name of PNAMEi. (Character)                                  │
└───────────┴────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. LABLi on DTABLE2 and DTABLE must be unique.
2. LABLi on DTABLE2 can be referenced under DTABLE flag of DVxREL2 (where x=P, M or C)/DRESP2/DRESP3.
3. Values for the FNAMEi field of the PNAMEi Bulk Data entry with the ID of PIDi are taken from analysis model before updating of analysis values with the designed value. If the updated value is desired, use the DVxREL2 flag on DRESP2 or DRESP3 entries instead.
4. FNAMEi must be the same as the character string that appears on the PNAMEi Bulk Data entry.
5. DTABLE2 must be utilized along with ‘NASTRAN SYSTEM(444)=1’ in input file or ‘sys444=1’ during job submittal.
