## [MONDSP1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MONDSP1.xhtml) - Displacement Monitor Point

Defines a virtual point displacement response at a user-defined reference location (coordinates and coordinates system) as a weighted average of the motions at a set of grid points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MONDSP1 NAME    LABEL                                                   +
+       AXES    COMP    CP      X       Y       Z       CD      INDDOF          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MONDSP1 WING195 Wing twist at station 150.
        5       WING150 1001    120     150.0   17.0    1002    
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NAME      │ Character string of up to 8 characters identifying the monitor point (Character)                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABEL     │ A string comprising no more than 56 characters (fields 3 through 9) that identifies and labels the │
│           │ monitor point.                                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AXES      │ Component axes to monitor. (Any unique combination of the integers 1 through 6 with no embedded    │
│           │ blanks.)                                                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COMP      │ The name of an AECOMP or AECOMPL entry that defines the set of grid points over which the monitor  │
│           │ point is defined.                                                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CP        │ The identification number of a coordinate system in which the input (x,y,z) coordinates are        │
│           │ defined. (Integer > 0; Default = 0)                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X,Y,Z     │ The coordinates in the CP coordinate system at which the displacement is to be monitored.          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CD        │ The identification number of a coordinate system in which the resulting displacement components    │
│           │ are output. (Integer > 0; Default = the coordinate system specified by the CP field)               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INDDOF    │ Component numbers of all the independent grids from which the derived, dependent, monitor DOF’s    │
│           │ are to be computed. (Any unique combination of the integers 1 through 6 with no embedded blanks.)  │
│           │ See Remark 3. (Default = 123)                                                                      │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The MONDSP1 is available for SOLs 101, 103, 105, 108, 109, 111, 112, 144, 146 and 200.
2. The entry can create either an aerodynamic or a structural MONDSP1, depending on the data provided in the COMP field. A structural MONDSP1 can have the same name as an aerodynamic MONDSP1, but two structural or two aerodynamic MONDSP1s cannot have the same name.
3. The INDDOF field defines the Ci field on the virtual RBE3; that is, it defines the components of the grids on the AECOMP that will be sampled to define the dependent (monitor point) displacement. Typically, the default is the correct choice. However, if there is only a single grid point, all six DOF’s can be used.
