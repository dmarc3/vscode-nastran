## [PACABS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PACABS.xhtml) - Acoustic Absorber Property

Defines the properties of the acoustic absorber element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PACABS  PID     SYNTH   TID1    TID2    TID3            CUTFR   B       +       
+       K       M                                                               
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PACABS  12              1       2       3       3.5     500.0                   
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number. (Integer > 0)                                                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SYNTH     │ Request the calculation of B, K, and M from the tables TIDi below. (Character = “YES” or “NO”;    │
│           │ Default = “YES”)                                                                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TID1      │ Identification of the TABLEDi entry that defines the resistance. See Remark 2. (Integer > 0 or    │
│           │ blank)                                                                                            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TID2      │ Identification of the TABLEDi entry that defines the reactance. See Remark 2. (Integer > 0 or     │
│           │ blank)                                                                                            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TID3      │ Identification of the TABLEDi entry that defines the weighting function. See Remark 2. (Integer > │
│           │ 0 or blank)                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CUTFR     │ Cutoff frequency for tables referenced above. (Real > 0.0)                                        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ B, K, M   │ Equivalent damping, stiffness and mass values per unit area. (Real > 0.0)                         │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. PACABS is referenced by a CHACAB entry only.
2. If SYNTH = “YES”, then TID1 and TID2 must be supplied (TID3 is optional) and the equivalent structural model will be derived from tables TIDi. If TID3 is blank, then the weighting function defaults to 1.0.
3. If SYNTH = “NO”, then the equivalent structural model will be derived from one of B, K, or M.
4. The continuation entry is optional.
5. All data defined in tables TIDi must be a function of frequency in cycles/unit time.
