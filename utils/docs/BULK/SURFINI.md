## [SURFINI](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SURFINI.xhtml) - Eulerian Initialization Surface

Defines a surface that is used for initialization of regions of an Eulerian mesh. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SURFINI VID     BSID    COVER   REVERSE CHECK                                   
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SURFINI 100     37                                                              
```

```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ VID       │ Unique number of an SURFINI region entry.         │                                                   │
│           │ Referenced from TICEUL1. (Integer > 0; Required)  │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ BSID      │ ID of a BSURF entry defining the initialization   │                                                   │
│           │ surface. (Integer > 0; Required)                  │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ COVER     │ The processing strategy for Eulerian elements     │                                                   │
│           │ inside and outside of the initialization surface. │                                                   │
│           │ (Character; Default = INSIDE)                     │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ INSIDE                                            │ The part of the Eulerian elements that lie inside │
│           │                                                   │ the closed volume of the initialization surface   │
│           │                                                   │ will obtain the initial conditions belonging to   │
│           │                                                   │ that surface.                                     │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ OUTSIDE                                           │ The part of the Eulerian elements that lie        │
│           │                                                   │ outside the closed volume of the initialization   │
│           │                                                   │ surface will obtain the initial conditions that   │
│           │                                                   │ belong to that surface                            │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ REVERSE   │ Auto reverse switch for SURFINI surface segments. │                                                   │
│           │ (Character; Default = ON)                         │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ ON                                                │ If necessary, the normals of the SURFINI surface  │
│           │                                                   │ segments are automatically reversed so that they  │
│           │                                                   │ all point in the same general direction and give  │
│           │                                                   │ a positive closed volume.                         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ OFF                                               │ The segments normals are not automatically        │
│           │                                                   │ reversed.                                         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ CHECK     │ Checking switch for SURFINI surface segments.     │                                                   │
│           │ (Character; Default = ON)                         │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ ON                                                │ The normals of the segments are checked to see    │
│           │                                                   │ whether they all point in the same general        │
│           │                                                   │ direction and give a positive closed volume.      │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ OFF                                               │ The segment normals are not checked.              │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ When “REVERSE” is set to “ON”, “CHECK” is         │                                                   │
│           │ automatically set to “ON”.                        │                                                   │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```
