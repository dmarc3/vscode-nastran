## [COUCOHF](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.COUCOHF.xhtml) - Cohesive Friction Model To Be Used For a COUPLE Entry

Defines a cohesive friction model suited for Euler Coupled analyses. The friction model is defined as part of the coupling surface. Use SOL700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COUCOHF CID     COHFRID SUBID   COHFR...                                        
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COUCOHF 112     14      12      12                                              
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID       │ Unique number of a COUCOHF entry. (Integer ≥0; required)                                          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COHFRID   │ Number of a set of COUCOHF entries. COUCOHF must be referenced from a COUPLE entry. (Integer ≥0;  │
│           │ required)                                                                                         │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SUBID     │ BSURF, BCSEG or BCPROP id, which must be a part of the BSID field of the COUPLE entry. See Remark │
│           │ 2. (Integer ≥0; default = blank)                                                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COHFRICID │ Cohesive friction ID (Integer ≥0; required)                                                       │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. One couple entry can reference more than one COUCOHF entry. This allows a cohesive friction that varies along the coupling surface.
2. When SUBID is left blank, then the cohesive friction applies to the whole coupling surface.
3. A coupling surface segment can only have one porosity or one cohesive friction definition assigned.
