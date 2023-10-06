## [TIC3](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TIC3.xhtml) - Transient Analysis Initial Velocity with Increment Options

Allows for the definition of a velocity field of grid points consisting of a rotation and a translation specification. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TIC3    SID     G               SCALE                                   +       
+       XVEL    YVEL    ZVEL    XROT    YROT    ZROT                    +       
+       G1      G2      THRU    G3      BY      G4                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TIC3    7       5               10.                                     +       
+       100.0                   5.0             -7.5                    +       
+       1       2       THRU    1000    BY      23                              
```

```text
┌─────────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                         │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID         │ Number of a set of loads. (Integer > 0; Required)                                               │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G           │ Number of a grid point at the center of rotation. (Integer > 0; Required)                       │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SCALE       │ Scale factor of initial velocity. (Real, Default=1.0)                                           │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XVEL, YVEL, │ Initial translational velocity components. (Real; Default = 0.0)                                │
│ ZVEL        │                                                                                                 │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XROT, YROT, │ Initial rotational velocity components. (Real; Default = 0.0)                                   │
│ ZROT        │                                                                                                 │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G1, G2, ... │ Grid points to be initialized. THRU indicates a range of grid points. BY is the increment to be │
│             │ used within this range. (Integer > 0; Required)                                                 │
└─────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
