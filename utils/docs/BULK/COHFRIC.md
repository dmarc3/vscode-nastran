## [COHFRIC](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.COHFRIC.xhtml) - Cohesive Friction

Allows friction and sticking during tensile conditions at the coupling surface. Use SOL700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COHFRIC CID     MAXSTRS FRIC    REFVEL                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COHFRIC 112     8e+10   8e+5    2                                               
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID       │ Unique number of a COHFRIC entry. (Integer>0; required)                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAXSTRS   │ Maximal normal stress. Allows tensile stresses at the coupling surface as long as the normal │
│           │ stress does not exceed MAXSTRS. (Real ≥ 0.0; default=0.0)                                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ FRIC      │ Friction stress under tensile conditions. (Real ≥ 0.0; default=0.0)                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ REFVEL    │ Reference value for velocity. (Real ≥ 0.0; default=0.0)                                      │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If the cohesive friction parameters is uniform across the coupling surface then DYPARAM, COHESION can be used instead.
2. During tension any relative tangential velocity between coupling surface and Eulerian material will yield a shear stress whose magnitude equals  ![bulkc202624.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202624.jpg?_LANG=enus) . This is a viscous-like friction law.
3. This shear force opposes the relative tangential movement along the coupling surface.
