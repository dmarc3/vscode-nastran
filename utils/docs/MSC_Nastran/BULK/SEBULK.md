## [SEBULK](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SEBULK1.xhtml) - Partition Superelement Connection

Defines superelement boundary search options and a repeated, mirrored, or collector superelement.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEBULK  SEID    TYPE    RSEID   METHOD  TOL     LOC     UNITNO                  
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEBULK  14      REPEAT  4       AUTO    1.0E-3                                  
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEBULK  20      EXTROM          MANUAL                  25                      
```

```text
┌───────────┬───────────────────────────────────────────────────┬──────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                              │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────┤
│ SEID      │ Partitioned superelement identification number.   │                                              │
│           │ (Integer > 0). See Remark 11.                     │                                              │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────┤
│ TYPE      │ Superelement type.  (Character; no Default)       │                                              │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────┤
│           │ PRIMARY                                           │ Primary. See Remarks 2. and 5.               │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────┤
│           │ COLLCTR                                           │ Collector. See Remark 3.                     │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────┤
│           │ EXTERNAL                                          │ External. See Remarks 4. and 5.              │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────┤
│           │ EXTOP2                                            │ External using an OUTPUT2 file created in an │
│           │                                                   │ earlier run. See Remarks 4. and 5.           │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────┤
│           │ EXTOP4                                            │ External using an OUTPUT4 file created in an │
│           │                                                   │ earlier run. See Remarks 4. and 5.           │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────┤
│           │ REPEAT                                            │ Identical. See Remark 6.                     │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────┤
│           │ MIRROR                                            │ Mirror. See Remark 6.                        │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────┤
│           │ EXTROM                                            │ Smart Superelement (SSE). See Remark 12.     │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────┤
│ RSEID     │ Identification number of the reference            │                                              │
│           │ superelement, used only if TYPE = “REPEAT” or     │                                              │
│           │ “MIRROR”.  (Integer > 0; Default = 0). See Remark │                                              │
│           │ 6.                                                │                                              │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────┤
│ METHOD    │ Method to be used when searching for boundary     │                                              │
│           │ grid points.  (Character:  “AUTO” or “MANUAL”;    │                                              │
│           │ Default = “AUTO”). See Remarks 7. and 8.          │                                              │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────┤
│ TOL       │ Location tolerance to be used when searching for  │                                              │
│           │ boundary grid points.  (Real; Default = 10E-5).   │                                              │
│           │ See Remarks 10. and 11.                           │                                              │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────┤
│ LOC       │ Coincident location check option for manual       │                                              │
│           │ connection option.  (Character:  “YES” or “NO”;   │                                              │
│           │ Default = “YES”). See Remark 10.                  │                                              │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────┤
│ UNITNO    │ FORTRAN unit number for the OUTPUT2 or OUTPUT4    │                                              │
│           │ file (applicable and meaningful only when         │                                              │
│           │ TYPE = “EXTOP2” or “EXTOP4”). See Remarks 4. and  │                                              │
│           │ 5.                                                │                                              │
└───────────┴───────────────────────────────────────────────────┴──────────────────────────────────────────────┘
```
