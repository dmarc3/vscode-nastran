## [PORFLOW](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PORFLOW.xhtml) - Porous Flow Boundary

Defines the material properties for the in- or outflow of an Eulerian mesh through a porous area of the couple surface. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PORFLOW FID             TYPE1   VALUE1  TYPE2   VALUE2  TYPE3   VALUE3  +       
+       TYPE4   VALUE4  -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PORFLOW 120             XVEL    100.0   1                                       
```

```text
┌───────────┬──────────────────────────────────────────────────┬─────────────────────────────────────────────┐
│ Describer │ Meaning                                          │                                             │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ FID       │ Unique number of a PORFLOW entry. (Integer > 0;  │                                             │
│           │ Required)                                        │                                             │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ TYPE      │ The properties on the flow boundary. (Character, │                                             │
│           │ Required)                                        │                                             │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│           │ MATERIAL                                         │ MATDEUL ID number.                          │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│           │ XVEL                                             │ Velocity in the x-direction.                │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│           │ YVEL                                             │ Velocity in the y-direction.                │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│           │ ZVEL                                             │ Velocity in the z-direction.                │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│           │ PRESSURE                                         │ Pressure.                                   │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│           │ DENSITY                                          │ Density.                                    │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│           │ SIE                                              │ Specific internal energy.                   │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│           │ FLOW                                             │ The type of flow boundary required.         │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│           │ METHOD                                           │ The method used for the material transport. │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ VALUEi    │ The value of the property specified in the TYPE  │                                             │
│           │ field. (Real or Character, Required) For TYPEi   │                                             │
│           │ set to FLOW, the value is a character entry:     │                                             │
│           │ either IN, OUT or BOTH, indicating that the flow │                                             │
│           │ boundary is defined as an inflow, outflow, or    │                                             │
│           │ possibly an in- or outflow boundary. The default │                                             │
│           │ is BOTH. See Remark 4.  For TYPEi set to METHOD, │                                             │
│           │ the value is a character entry: either VELOCITY  │                                             │
│           │ or PRESSURE, indicating that the material        │                                             │
│           │ transport is based on the velocity method or the │                                             │
│           │ pressure method. The default is VELOCITY. See    │                                             │
│           │ Remark 4.                                        │                                             │
└───────────┴──────────────────────────────────────────────────┴─────────────────────────────────────────────┘
```

#### Remarks:

1. Reference FID by a LEAKAGE entry.
2. Any material properties not specifically defined have the same value as the element that the (SUB)SURFACE segment is intersecting.
3. The SURFACE can be only a general coupling surface (see the COUPLE entry).
4. The different methods used to calculate the material transport through a porous (sub)surface are described in General Coupling.
5. METHOD=VELOCITY is valid for all equation of state models.
METHOD=PRESSURE is valid for EOSGAM (ideal gas) in combination with the single material hydrodynamic Euler solver.
6. Alternative methods are available to define holes and permeable sections in an air bag. See the entries: LEAKAGE, PORHOLE, PERMEAB, PORFGBG and PERMGBG.
7. In the case of material flow into a multi-material Euler mesh, the material number, the density and specific energy have to be set. On the other hand when material flows out of a multi-material Euler mesh it is assumed that each of the materials present in the outflow Euler element contributes to the out flow of mass. The materials are transported in proportion to their relative volume fractions
8. Prescribing both pressure and velocity may lead to the instabilities.
