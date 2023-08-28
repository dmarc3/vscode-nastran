## [PDAMP5](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PDAMP5.xhtml) - Scalar Damper Property for CDAMP5

Defines the damping multiplier and references the material properties for damping. CDAMP5 is intended for heat transfer analysis only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PDAMP5  PID     MID     B                                                       
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PDAMP5  2       3       4.0                                                     
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                               │
├───────────┼───────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number. (Integer > 0)                         │
├───────────┼───────────────────────────────────────────────────────────────────────┤
│ MID       │ Material identification number of a MAT4 or MAT5 entry. (Integer > 0) │
├───────────┼───────────────────────────────────────────────────────────────────────┤
│ B         │ Damping multiplier. (Real > 0.0)                                      │
└───────────┴───────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. B is the mass that multiplies the heat capacity CP on the MAT4 or MAT5 entry.
