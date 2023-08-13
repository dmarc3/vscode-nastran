## [COUPINT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.COUPINT.xhtml) - Coupling Surface Interaction

Defines the surrounding variables when a segment of a coupling surface fails. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COUPINT CID     CID1    CID2                                                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COUPINT 33      2                                                               
```

```text
┌───────────┬───────────────────────────────────┐
│ Describer │ Meaning                           │
├───────────┼───────────────────────────────────┤
│ CIID      │ Unique number of a COUPINT entry. │
├───────────┼───────────────────────────────────┤
│ CID1      │ Number of COUPLE entry 1.         │
├───────────┼───────────────────────────────────┤
│ CID2      │ Number of COUPLE entry 2.         │
└───────────┴───────────────────────────────────┘
```

#### Remarks:

1. This entry can only be used in combination with DYPARAM,FASTCOUP, ,FAIL and with either the HYDRO, MMHYDRO or MMSTREN Euler Solver .  The interaction will be activated when failure of a Lagrangian structure with which the coupling surface is associated occurs. Therefore, you have to define a failure model for the material of the structure.
2. The coupling surface must consist of CQUAD and/or CTRIA elements.
