## [FLOWT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FLOWT.xhtml) - Time Dependent Flow Boundary

Defines the material properties for the in- or outflow of material trough the boundary of an Euler mesh. Inflow velocity and material properties can be chosen time dependent. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FLOWT   FID     BCID    TYPE    MESH    DIR                             +       
+       XMIN    XMAX    YMIN    YMAX    ZMIN    ZMAX                    +       
+       VELTYPE VELOCITYPRESTYP PRES                                    +       
+       MID     DENSTYP DENSITY SIETYPE SIE                                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FLOWT   2       122     IN                                              +       
+                                                                       +       
+       TABLE   101     TABLE   102                                     +       
+       91      TABLE   104     TABLE   107                                     
```

```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ FID       │ Unique number of a FLOWT entry. (Integer > 0;     │                                                   │
│           │ Required)                                         │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ BCID      │ Number of a set of segments specified by the      │                                                   │
│           │ BCSEG entries where the flow boundary is located. │                                                   │
│           │ See Remark 3. (Integer > 0)                       │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TYPE      │ IN                                                │ Inflow boundary. See Remarks 2.and 3. (Character; │
│           │                                                   │ Required) Only inflow is allowed. The inflow      │
│           │                                                   │ velocity and pressure can be optionally           │
│           │                                                   │ specified. If not given, the values in the        │
│           │                                                   │ adjacent Euler element will be used. The same     │
│           │                                                   │ holds for the density and sie.                    │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ OUT                                               │ Only outflow is allowed. The inflow velocity and  │
│           │                                                   │ pressure can be optionally specified. If not      │
│           │                                                   │ given, the values in the adjacent Euler element   │
│           │                                                   │ will be used. The outflow boundary will always    │
│           │                                                   │ use material mixture as present in the adjacent   │
│           │                                                   │ Euler element.                                    │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ BOTH                                              │ Material is allowed to flow in or out. In or      │
│           │                                                   │ outflow is based on the direction of the velocity │
│           │                                                   │ in the adjacent Euler element. Only pressure can  │
│           │                                                   │ be optionally defined. If not given the pressure  │
│           │                                                   │ in the adjacent Euler element will be taken.      │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MESH      │ Denotes the ID of the Euler mesh to which the     │                                                   │
│           │ boundary condition has to be applied. See Remark  │                                                   │
│           │ 4. (Integer > 0)                                  │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ DIR       │ Allowed values are: NEGX, POSX, NEGY, POSY, NEGZ  │                                                   │
│           │ and POSZ. See Remark 5. (Character)               │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ XMIN-ZMAX │ Defines a square by specifying the ranges of the  │                                                   │
│           │ x,y,z coordinates. For a square in for example    │                                                   │
│           │ the x-plane it is required that either XMIN =     │                                                   │
│           │ XMAX or that XMAX is left blank. See Remark 6.    │                                                   │
│           │ (Real)                                            │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ VELTYPE   │ Type of velocity definition. (Character, Element) │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ ELEMENT                                           │ Value of Euler Element                            │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ CONSTANT                                          │ Value is constant in time                         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ TABLE                                             │ Value varies in time                              │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ VELOCITY  │ Value of inflow or outflow velocity. If VELTYPE = │                                                   │
│           │ TABLE it refers to a TABLED1. The velocity        │                                                   │
│           │ direction is normal to the coupling surface or    │                                                   │
│           │ subsurface. A positive velocity corresponds with  │                                                   │
│           │ inflow. See Remark 6. (Integer or Real)           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PRESTYP   │ Type of pressure definition (Character, Element)  │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ ELEMENT                                           │ Value of Euler element                            │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ CONSTANT                                          │ Value is constant in time                         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ TABLE                                             │ Value varies in time                              │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PRES      │ Value of inflow or outflow pressure. If PRESTYPE  │                                                   │
│           │ = TABLE it refers to a TABLED1 ID. (Integer or    │                                                   │
│           │ Real)                                             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MID       │ MATDEUL ID of inflowing material. Input is not    │                                                   │
│           │ allowed for TYPE = OUT. When MID is specified, it │                                                   │
│           │ is required to also define density and sie for    │                                                   │
│           │ the inflowing material. (Integer)                 │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ DESTYP    │ Type of density definition. (Character, Default   │                                                   │
│           │ is required when MID is given.)                   │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ ELEMENT                                           │ Value of Euler element                            │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ CONSTANT                                          │ Value is constant in time                         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ TABLE                                             │ Value varies in time                              │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ DENSITY   │ Value of density. If DENSTYP = TABLE it refers to │                                                   │
│           │ a TABLED1 ID. (Character; Default is required     │                                                   │
│           │ when MID is given.)                               │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SIETYPE   │ Type of density definition. (Character; Default   │                                                   │
│           │ is required when MID is given.)                   │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ ELEMENT                                           │ Value of Euler element                            │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ CONSTANT                                          │ Value is constant in time                         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ TABLE                                             │ Value varies in time.                             │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SIE       │ Value of specific internal energy. If SIETYPE =   │                                                   │
│           │ TABLE it refers to a TABLED1 ID. (Integer or      │                                                   │
│           │ Real; Default is required when MID is given.)     │                                                   │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. LID must be referenced by a TLOAD1 entry.
2. TLOAD entries referencing FLOW entries must have the TID field blank or zero.
3. BCID is optional. If used, all other inputs are ignored. If not used, the flow boundary can be defined by either using DIR or by using XMIN, XMAX, YMIN, etc.
4. The MESH-ID is only used when multiple Euler domains have been defined and when BCID is blank. If multiple Euler domains have been defined but if the MESH-ID is blank all Euler domains will be considered in assigning the boundary condition.
5. DIR is optional. It will only be used when BCID is blank. When DIR is used XMIN, XMAX, YMIN etc. are ignored.
6. XMIN, XMAX, YMIN, etc. are only used when both BCID and DIR are blank. If neither the MIN nor MAX value has been set the default value is respectively -1E+20 and 1E+20 for the MIN and MAX value. If the MIN value has been set the default value of the MAX value is the Min value.
7. Any material properties not specifically defined have the same value as the element that with the boundary conditions.
8. In the case of material flow into a multi-material Euler mesh, the material number, the density and specific energy have to be set. On the other hand when material flows out of a multi-material Euler mesh it is assumed that each of the materials present in the outflow Euler element contributes to the out flow of mass. The materials are transported in proportion to their relative volume fractions
9. The boundary condition initiates/determines a wave in compressible material like gas and water. This can be either an outgoing or an ingoing wave. For stability it is important that the waves created are compatible with the flow type near the boundary. Relevant flow types are subsonic inflow, subsonic outflow, supersonic inflow and supersonic outflow. For example for subsonic inflow prescribing both pressure and velocity would initiate outgoing waves. Outgoing waves for an inflow boundary condition is known to be instable. However, for supersonic inflow one can specify both pressure and velocities there are no outgoing waves at a supersonic inflow boundary.
