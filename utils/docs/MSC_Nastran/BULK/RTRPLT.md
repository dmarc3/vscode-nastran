## [RTRPLT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RTRPLT.xhtml) - Rigid Triangular Plate

Defines a rigid triangular plate.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RTRPLT  EID     GA      GB      GC      CNA     CNB     CNC             +       
+       CMA     CMB     CMC     ALPHA   TREF                                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RTRPLT  7       1       2       3       1236    3       3                       
```

```text
┌────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                           │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID        │ Element identification number. (0 < Integer < 100,000,000)                                        │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GA, GB, GC │ Grid point identification number of connection points.                                            │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CNA, CNB,  │ Independent degrees-of-freedom in the global coordinate system for the element at grid points GA, │
│ CNC        │ GB, and GC, indicated by any of the Integers 1 through 6 with no embedded blanks.  See Remark     │
│            │ 3. (Integer > 0 or blank)                                                                         │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CMA, CMB,  │ Component numbers of dependent degrees-of-freedom in the global coordinate system.  (Any of the   │
│ CMC        │ Integers 1 through 6 with no embedded blanks, or 0 or blank; Default = 0.)                        │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALPHA      │ Thermal expansion coefficient. See Remark 12. (Real or blank)                                     │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TREF       │ Reference temperature for the calculation of thermal loads. (Real; Default=0.0).                  │
└────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
