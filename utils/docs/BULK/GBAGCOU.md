## [GBAGCOU](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.GBAGCOU.xhtml) - General Coupling to Gas-Bag Switch

Defines a switch from full gas dynamics to uniform pressure formulation. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GBAGCOU ID      CID     GID     TSTART  PERCENT                                 
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GBAGCOU 1       100     101     0.0     5                                       
```

```text
┌───────────┬──────────────────────────────────┬──────────┐
│ Describer │ Meaning                          │          │
├───────────┼──────────────────────────────────┼──────────┤
│ ID        │ Unique number of a GBAGCOU       │ I > 0    │
│           │ entry.                           │          │
├───────────┼──────────────────────────────────┼──────────┤
│ CID       │ Number of a COUPLE entry.        │ I > 0    │
├───────────┼──────────────────────────────────┼──────────┤
│ GID       │ Number of a GBAG entry.          │ I > 0    │
├───────────┼──────────────────────────────────┼──────────┤
│ TSTART    │ Time after which the coupling    │ Real > 0 │
│           │ algorithm checks if a switch to  │          │
│           │ the uniform pressure method is   │          │
│           │ valid. It is valid when the      │          │
│           │ following is true:   where       │          │
├───────────┼──────────────────────────────────┼──────────┤
│           │ Pmax = maximum Eulerian pressure │          │
│           │ exerted on the SURFACE Pmin =    │          │
│           │ minimum Eulerian pressure        │          │
│           │ exerted on the SURFACE Paverage  │          │
│           │ = average Eulerian pressure      │          │
│           │ exerted on the SURFACE           │          │
├───────────┼──────────────────────────────────┼──────────┤
│ PERCENT   │ Value used in validity check as  │ R > 0.   │
│           │ defined previously.              │          │
└───────────┴──────────────────────────────────┴──────────┘
```

#### Remarks:

1. The BSID referenced by the COUPLE entry CID and by the GBAG entry GID must be the same.
2. All Eulerian and general coupling calculations are deactivated after transition from gas dynamics to uniform pressure.
