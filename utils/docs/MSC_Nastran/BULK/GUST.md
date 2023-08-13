## [GUST](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.GUST.xhtml) - Aerodynamic Gust Load Description

Defines a stationary vertical gust for use in aeroelastic response analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GUST    SID     DLOAD   WG      X0      V                                       
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GUST    133     61      1.0     0.      1.+4                                    
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Gust set identification number. (Integer > 0)                                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ DLOAD     │ Set identification number of a TLOADi or RLOADi entry that defines the time or frequency      │
│           │ dependence. (Integer > 0)                                                                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ WG        │ Scale factor (gust velocity/forward velocity) for gust velocity. (Real0.0)                    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ X0        │ Streamwise location in the aerodynamic coordinate system of the gust reference point.  (Real) │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ V         │ Velocity of vehicle. See Remark 5. (Real > 0.0)                                               │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The GUST entry must be selected with the Case Control command GUST = SID.
2. The gust angle is in the +z direction of the aerodynamic coordinate system.  The value is

     ![bulkfgil03930.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03930.jpg?_LANG=enus)  

     where  T  is the tabular function.

3. In random analysis, a unit gust velocity (WG = 1/velocity) is suggested.  The actual rms value is entered on the TABRNDG entry.
4. X0 and V may not change between subcases under one execution.
5. V must be equal to VELOCITY on the AERO Bulk Data entry.
