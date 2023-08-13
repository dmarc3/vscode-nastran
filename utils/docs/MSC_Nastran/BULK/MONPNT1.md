## [MONPNT1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MONPNT1.xhtml) - Integrated Load Monitor Point

Defines an integrated load monitor point at a point (x,y,z) in a user defined coordinate system. The integrated loads about this point over the associated nodes will be computed and printed for statics, dynamics and static aeroelastic trim analyses and form integrated loads on the nonlinear static aeroelastic database.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MONPNT1 NAME    LABEL                                                   +
+       AXES    COMP    CP      X       Y       Z       CD                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MONPNT1 WING155 Wing Integrated Load to Butline 155
        34      WING            0.0     155.0   15.0                            
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NAME      │ Character string of up to 8 characters identifying the monitor point (Character; no Default)       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABEL     │ A string comprising no more than 56 characters (fields 3 through 9) that identifies and labels the │
│           │ monitor point. (Character; optional)                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AXES      │ Component axes to monitor. (Any unique combination of the integers 1 through 6 with no embedded    │
│           │ blanks.)                                                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COMP      │ The name of an AECOMP or AECOMPL entry that defines the set of grid points over which the monitor  │
│           │ point is defined. (Character; no Default)                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CP        │ The identification number of a coordinate system in which the input (x,y,z) coordinates are        │
│           │ defined. (Integer > 0; Default = 0)                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X,Y,Z     │ The coordinates in the CP coordinate system about which the loads are to be monitored. (Real;      │
│           │ Default = 0.0).                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CD        │ The identification number of a coordinate system in which the resulting load components are        │
│           │ output. (Integer > 0; Default = the coordinate system specified by the CP field)                   │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The MONPNT1 is available for SOLs 101, 108, 109, 111, 112, 144, 146, 200 and 400
(ANALYSIS = NLSTAT or NLTRAN).
2. The entry can create either an aerodynamic or a structural MONPNT1, depending on the data provided in the COMP field. A structural MONPNT1 can have the same name as an aerodynamic MONPNT1, but two structural or two aerodynamic MONPNT1s cannot have the same name.
3. In SOL 144, static aeroelasticity, the structural MONPNT1 integration is modified to account for the redistribution of loads and inertia caused by MPCs and rigid elements. In all other supported solution sequences, the integration is done using the g-set loads on all grid points specified on the referenced SET1 entry.
