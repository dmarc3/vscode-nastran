## [DLINK](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DLINK.xhtml) - Multiple Design Variable Linking

Relates one design variable to one or more other design variables.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DLINK   ID      DDVID   C0      CMULT   IDV1    C1      IDV2    C2      +       
+       IDV3    C3      -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DLINK   10      2       0.1     0.33    4       2.0     6       -1.0    +       
+       8       7.0                                                             
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                           │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ ID        │ Unique identification number.  (Integer > 0)                      │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ DDVID     │ Dependent design variable identification number.  (Integer > 0)   │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ C0        │ Constant term.  (Real; Default = 0.0)                             │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ CMULT     │ Constant multiplier.  (Real; Default = 1.0)                       │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ IDVi      │ Independent design variable identification number.  (Integer > 0) │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ Ci        │ Coefficient i corresponding to IDVi.  (Real)                      │
└───────────┴───────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. DLINK defines the relationship

     ![bulkde03220.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03220.jpg?_LANG=enus)  

2. This capability provides a means of linking physical design variables such as element thicknesses to nonphysical design variables such as the coefficients of interpolating functions.
3. CMULT provides a simple means of scaling the Ci. For example if Ci = 1/7, 2/7, 4/7, etc. is desired, then CMULT = 1/7 and Ci = 1, 2, 4, etc., may be input.
4. An independent IDVi must not occur on the same DLINK entry more than once.
5. ID is for user reference only.
6. If a design variable is specified as dependent on a DLINK entry, then it cannot be specified as independent on another DLINK entry.
