## [SEDLINK](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SEDLINK.xhtml) - Multiple Design Variable Linking Across PART SE Boundary

Relates one design variable of a PART SE to one or more other design variables from other PART SEs.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEDLINK ID      DSEID   DDVID   C0      CMULT   ISEID1  IDV1    C1      +       
+       ISEID2  IDV2    C2      ISEID3  IDV3    C3                      +       
+       ISEID4  IDV4    C4      -etc.-                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEDLINK 10      10      2       0.1     0.33    8       8       -1.0            
        11      6       -1.0    20      8       7.0                             
        11      2       2.0                                                     
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                          │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ ID        │ Unique identification number. (Integer > 0)                      │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ DSEID     │ PART SE identification number for DDVID (Integer > 0)            │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ DDVID     │ Dependent design variable identification number. (Integer > 0)   │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ C0        │ Constant term. (Real; Default = 0.0)                             │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ CMULT     │ Constant multiplier. (Real; Default = 1.0)                       │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ ISEIDi    │ PART SE identification number for IDVi (Integer > 0)             │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ IDVi      │ Independent design variable identification number. (Integer > 0) │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ Ci        │ Coefficient i corresponding to IDVi. (Real)                      │
└───────────┴──────────────────────────────────────────────────────────────────┘
```
