## [RTRPLT1](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RTRPLT1.xhtml) - Rigid Triangular Plate (Alternative Format)

Alternative format to define a rigid triangular plate element connecting three grid points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RTRPLT1 EID     GA      GB      GC      CMB     CMC     ALPHA   TREF            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RTRPLT1 7       1       2       3       1236    3       6.0-6                   
```

```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                        │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID        │ Element identification number. (0 < Integer < 100,000,000)                                     │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GA, GB, GC │ Grid point identification number of connection points. (Integer > 0)                           │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CMB, CMC   │ Component numbers at GB and GC in the global coordinate systems, which are constrained to move │
│            │ with the rigid body. See Remark 4. (Integers 1 through 6 with no embedded blanks or blank.)    │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALPHA      │ Thermal expansion coefficient. See Remark 9. (Real or blank)                                   │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TREF       │ Reference temperature for the calculation of thermal loads. (Real; Default=0.0).               │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```
