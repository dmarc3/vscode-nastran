## [PORFLWT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PORFLWT.xhtml) - Time Dependent Porous Flow Boundary

Defines a time dependent flow trough a porous area of the couple surface. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PORFLWT FID     TYPE                                                    +       
+       VELTYPE VELOCITYPRESTYP PRES                                    +       
+       MID     DENSTYP DENSITY SIETYP  SIE                                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PORFLWT 2       IN                                                      +       
+       TABLE   101     TABLE   102                                     +       
+       91      TABLE   105     TABLE   107                                     
```

```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ FID       │ Unique number of a PORFLWT entry. (Integer > 0;   │                                                   │
│           │ Required)                                         │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TYPE      │ Type of flow boundary. (Character; Default =      │                                                   │
│           │ BOTH)                                             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ IN                                                │ Inflow boundary (see Remarks 2. and 3.). Only     │
│           │                                                   │ inflow is allowed. The inflow velocity and        │
│           │                                                   │ pressure can be optionally specified. If not      │
│           │                                                   │ given, the values in the adjacent Euler element   │
│           │                                                   │ will be used. The same holds for the density and  │
│           │                                                   │ sie.                                              │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ OUT                                               │ Only outflow is allowed. The outflow velocity and │
│           │                                                   │ pressure can be optionally specified. If not      │
│           │                                                   │ given, the values in the adjacent Euler element   │
│           │                                                   │ will be used. The outflow boundary will always    │
│           │                                                   │ use the material mixture as present in the        │
│           │                                                   │ adjacent Euler element.                           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ BOTH                                              │ Material is allowed to flow in or out. The switch │
│           │                                                   │ between inflow and outflow is based on the        │
│           │                                                   │ direction of the velocity in the adjacent Euler   │
│           │                                                   │ element. Only pressure can be left unspecified.   │
│           │                                                   │ If not given the pressure in the adjacent Euler   │
│           │                                                   │ element will be taken.                            │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ VELTYPE   │ Type of velocity definition. (Character; Default  │                                                   │
│           │ = ELEMENT)                                        │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ ELEMENT                                           │ Value of Euler element.                           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ CONSTANT                                          │ Value is constant in time.                        │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ TABLE                                             │ Value varies in time.                             │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ VELOCITY  │ Value of inflow or outflow velocity. If VELTYPE = │                                                   │
│           │ TABLE it refers to a TABLED1. The velocity        │                                                   │
│           │ direction is normal to the coupling surface or    │                                                   │
│           │ subsurface. A positive velocity corresponds with  │                                                   │
│           │ inflow. See Remark 6. (Integer or Real)           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PRESTYP   │ Type of pressure definition. See Remark 6.        │                                                   │
│           │ (Character)                                       │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ ELEMENT                                           │ Value of Euler element.                           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ CONSTANT                                          │ Value is constant in time.                        │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ TABLE                                             │ Value varies in time.                             │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PRES      │ Value of inflow or outflow pressure. If PRESTYPE  │                                                   │
│           │ = TABLE it refers to a TABLED1. (Integer or Real) │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MID       │ MATDEUL ID of inflowing material. Input is not    │                                                   │
│           │ allowed for TYPE = OUT. When MID is specified, it │                                                   │
│           │ is required to also define density and SIE for    │                                                   │
│           │ the inflowing material. (Integer; Default = 0)    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ DENSTYP   │ Type of density definition: (Character, Required  │                                                   │
│           │ when MID > 0.)                                    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ ELEMENT                                           │ Value of Euler element                            │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ CONSTANT                                          │ Value is constant in time                         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ TABLE                                             │ Value varies in time                              │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ DENSITY   │ Value of density. If DENSTYP = TABLE, it refers   │                                                   │
│           │ to a TABLED1 ID. (Integer or Real, Required when  │                                                   │
│           │ MID is given.)                                    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SIETYPE   │ Type of density definition. Required when MID is  │                                                   │
│           │ given. (Integer or Real)                          │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ ELEMENT                                           │ Value of Euler element.                           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ CONSTANT                                          │ Value is constant in time.                        │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ TABLE                                             │ Value varies in time.                             │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SIE       │ Value of specific internal energy. If SIETYPE =   │                                                   │
│           │ TABLE it refers to a TABLED1. Required when MID   │                                                   │
│           │ is given. (Integer or Real)                       │                                                   │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. Reference FID by a LEAKAGE entry.
2. Any material properties not specifically defined have the same value as the element that the segment of the coupling surface is intersecting.
3. The surface can be only a general coupling surface (see the COUPLE entry).
4. Alternative methods are available to define holes and permeable sections in an air bag. See the entries: LEAKAGE, PORHOLE, PERMEAB, PORFGBG and PERMGBG.
5. In the case of material flow into a multi-material Euler mesh, the material number, the density and specific energy have to be set. On the other hand when material flows out of a multi-material Euler mesh it is assumed that each of the materials present in the outflow Euler element contributes to the out flow of mass. The materials are transported in proportion to their relative volume fractions
6. The boundary condition initiates/determines a wave in compressible material like gas and water. This can be either an outgoing or an ingoing wave. For stability it is important that the waves created are compatible with the flow type near the boundary. Relevant flow types are subsonic inflow, subsonic outflow, supersonic inflow and supersonic outflow. For example for subsonic inflow prescribing both pressure and velocity would initiate outgoing waves. Outgoing waves for an inflow boundary condition is known to be instable. However, for supersonic inflow one can specify both pressure and velocity since there are no outgoing waves at a supersonic inflow boundary.  
