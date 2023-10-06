## [MKAERO2](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MKAERO2.xhtml) - Mach Number - Frequency Table

Provides a list of Mach numbers (m) and reduced frequencies (k) for aerodynamic matrix calculation.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MKAERO2 m1      k1      m2      k2      m3      k3      m4      k4              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MKAERO2 .10     .30     .10     .60     .70     .30     .70     1.0             
```

```text
┌───────────┬────────────────────────────────────────────┐
│ Describer │ Meaning                                    │
├───────────┼────────────────────────────────────────────┤
│ mi        │ Mach numbers.  (Real > 0.0). See remark 5. │
├───────────┼────────────────────────────────────────────┤
│ ki        │ Reduced frequencies.  (Real > 0.0)         │
└───────────┴────────────────────────────────────────────┘
```

#### Remarks:

1. MKAERO2 will cause the aerodynamic matrices to be computed for the given sets of parameter pairs.  Embedded blank pairs are skipped.
2. No continuation entries are allowed, but multiple MKAERO2 entries are permitted.
3. In SOL 146, the program selects only one value of mi to use in computing the dynamic response solution and, by default, the lowest value is selected.  The PARAM,MACH,m entry may be specified to select a different value.  If PARAM,MACH,m is specified, then the value of mi closest to m will be selected.
4. The very low nonzero value of ki required for aeroelastic divergence analysis of restrained vehicles with the K- and KE-methods of flutter analysis must be included on this entry.
5. mi = 1.0 is not supported except when used in conjunction with   entry (Strip Theory).
