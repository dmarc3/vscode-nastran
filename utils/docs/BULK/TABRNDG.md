## [TABRNDG](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TABRNDG.xhtml) - Gust Power Spectral Density

Defines the power spectral density (PSD) of a gust for aeroelastic response analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABRNDG TID     TYPE    L/U     WG                                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABRNDG 1020    1       1.3     .1                                              
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ TID       │ Table identification number.  (Integer > 0)                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ PSD type:  von Karman (TYPE = 1) or Dryden model (TYPE = 2).  (Integer = 1 or 2)      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ L/U       │ Scale of turbulence divided by velocity (units of time).  See L/U in Remark 2. (Real) │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ WG        │ Root-mean-square gust velocity.  (Real)                                               │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────┘
```
