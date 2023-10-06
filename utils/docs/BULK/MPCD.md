## [MPCD](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MPCD.xhtml) - Load Selectable Value for  of Non Homogenous Multipoint Constraint

Defines a load selectable value for  ![bulkno06056.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06056.jpg?_LANG=enus)  of a MPCY entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MPCD    SID     GM1     CM1     YM1     GM2     CM2     YM2                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MPCD    700     101     2       .06                                             
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Set identification number of the MPCD entry. (Integer > 0)                                      │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GMi       │ Grid or scalar point identification number. Along with Ci it identifies the Equation of a MPCY. │
│           │ (Integer > 0)                                                                                   │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component number. (Any one of the Integers 1 through 6 for grid points, blank, zero or 1 for    │
│           │ scalar points.)                                                                                 │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ YMi       │ Right hand side value of MPC equation. (Real)                                                   │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. In static solution sequences, the SID is selected by the LOAD Case Control command.
2. The Gi,Ci referenced on this entry must also be referenced on a MPCY Bulk Data entry and selected by an MPC Case Control command.
3. Values YMi will override the value specified on an MPCY Bulk Data entry.
4. The LOAD Bulk Data entry will not combine an MPCD load entry.
5. Two separate MPC equations may be pointed to per entry.
6. MPCD is not supported in SOL 400.
