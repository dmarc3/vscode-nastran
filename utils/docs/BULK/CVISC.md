## [CVISC](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CVISC.xhtml) - Viscous Damper Connection

Defines a viscous damper element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CVISC   EID     PID     G1      G2                                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CVISC   21      6327    29      31                                              
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)                    │
├───────────┼───────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of a PVISC entry. (Integer > 0; Default = EID) │
├───────────┼───────────────────────────────────────────────────────────────────────────────┤
│ G1, G2    │ Grid point identification numbers of connection points. (Integer > 0; )       │
└───────────┴───────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Element identification numbers should be unique with respect to all other element identification numbers.
2. Only one viscous damper element may be defined on a single entry.
3. Grids G1 and G2 must not be coincident. If coincident grids are required, use either the CDAMP or CBUSH entry.
