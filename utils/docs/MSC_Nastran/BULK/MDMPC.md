## [MDMPC](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDMPC.xhtml) - Multipoint Constraint Between Two or More Modules

Defines a multipoint constraint equation of the form

![bulkno05992.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05992.jpg?_LANG=enus)  

where  u  j  represents degree-of-freedom Cj at grid or scalar point Gj. Gj may be contained in different Modules.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDMPC   SID     MOD1    G1      C1      A1                              +       
+       MOD2    G2      C2      A2      MOD3    G3      C3      A3      +       
+       MOD4    G4      C4      A4      -etc-                                   
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDMPC   3       10      28      3       6.2                                     
        11      2               4.29    21      1       4       -2.91           
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Set identification number. (Integer > 0)                                                     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODj      │ Module IDs that contain the GRID entries for Gj. (Integer ≥ 0).                              │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gj        │ Identification number of grid or scalar point. (Integer > 0)                                 │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ Cj        │ Component number. (Any one of the Integers 1 through 6 for grid points; blank, zero or 1 for │
│           │ scalar points.)                                                                              │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ Aj        │ Coefficient. (Real; Default = 0.0 except A1 must be nonzero.)                                │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The MDMPC entry must be defined in the main Bulk Data section only (Module 0).
2. See all remarks and figures under the MPC entry description. All remarks and figures under MPC apply to MDMPC.
