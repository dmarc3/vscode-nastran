## [FLOW](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FLOW.xhtml) - Flow Boundary Condition

Defines the properties of a material for the boundaries of an Eulerian mesh. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FLOW    LID     BCID    MESH    DIR                                     +       
+       XMIN    XMAX    YMIN    YMAX    ZMIN    ZMAX                    +       
+       TYPE1   VALUE1  TYPE2   VALUE2  TYPE3   VALUE3  TYPE4   VALUE4  +       
+       TYPE5   VALUE5                                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FLOW    120     122                                                     +       
+                                                                       +       
+       XVEL    100.0                                                           
```

```text
┌───────────┬───────────────────────────────────────────────────┬────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ LID       │ Number of a set of flow boundary conditions.      │                                                │
│           │ (Integer > 0; Required)                           │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ BCID      │ Number of a set of segments, specified by BCSEG   │                                                │
│           │ entries, where the flow boundary is located. See  │                                                │
│           │ Remark 5. (Integer > 0)                           │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ MESH      │ Denotes the ID of the Euler mesh to which the     │                                                │
│           │ boundary condition has to be applied. See Remark  │                                                │
│           │ 6. (Integer > 0)                                  │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ DIR       │ Allowed values are: NEGX, POSX, NEGY, POSY, NEGZ  │                                                │
│           │ and POSZ. See Remark 7. (Character)               │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ XMIN-ZMAX │ Defines a square by specifying the ranges of the  │                                                │
│           │ x,y,z coordinates. For a square in for example    │                                                │
│           │ the x-plane it is required that either XMIN =     │                                                │
│           │ XMAX or that XMAX is left blank. See Remark 8.    │                                                │
│           │ (Real)                                            │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ TYPEi     │ The flow boundary property being defined.         │                                                │
│           │ (Character)                                       │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ Material                                          │ The MATDEUL ID number.                         │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ XVEL                                              │ The material velocity in the x-direction.      │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ YVEL                                              │ The material velocity in the y-direction.      │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ ZVEL                                              │ The material velocity in the z-direction.      │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ PRESSURE                                          │ The pressure of the material at the boundary.  │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ DENSITY                                           │ The density of the material at inflow.         │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ SIE                                               │ The specific internal energy at inflow         │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ FLOW                                              │ The type of flow boundary required.            │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ HYDSTAT                                           │ A Hydrostatic pressure profile using a HYDSTAT │
│           │                                                   │ entry.                                         │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ VALUEi    │ The value for the property defined. (Real;        │                                                │
│           │ Integer or Character; Required)                   │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ For TYPEi set to FLOW, the value is a character   │                                                │
│           │ entry being either IN, OUT, BOTH or SYM defining  │                                                │
│           │ that the flow boundary is defined as an inflow,   │                                                │
│           │ outflow,  possibly an in- or outflow or symmetry  │                                                │
│           │ boundary. The default is BOTH.                    │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ VALUEi is required data only if one or more of    │                                                │
│           │ the TYPEi entries are defined. The TYPEi entries  │                                                │
│           │ are not required. Thus, a flow boundary by        │                                                │
│           │ default allows for in- or outflow of the material │                                                │
│           │ adjacent to the boundary.                         │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ For TYPE = HYDSTAT, the value is an integer entry │                                                │
│           │ denoting the HYDSTAT entry to be used.            │                                                │
└───────────┴───────────────────────────────────────────────────┴────────────────────────────────────────────────┘
```

#### Remarks:

1. LID must be referenced by a TLOAD1 entry.
2. Any material properties not specifically defined have the same value as the element with the flow boundary condition.
3. TLOAD entries referencing FLOW entries must have the TID field blank or zero.
4. In the case of material flow into a multi-material Euler mesh, the density and specific energy have to be set. On the other hand when material flows out of a multi-material Euler mesh it is assumed that each of the materials present in the outflow Euler element contributes to the out flow of mass. The materials are transported in proportion to their relative volume fractions.
5. BCID is optional. If used, all other inputs are ignored. If not used, the flow boundary can be defined by either using DIR or by using XMIN, XMAX, YMIN, etc.
6. The MESH-ID is only used when multiple Euler domains have been defined and when BCID is blank. If multiple Euler domains have been defined but if the MESH-ID is blank all Euler domains will be considered in assigning the boundary condition.
7. DIR is optional. It will only be used when BCID is blank. When DIR is used XMIN, XMAX, YMIN etc. are ignored.
8. XMIN, XMAX, YMIN, etc. are only used when both BCID and DIR are blank. If neither the MIN nor MAX value has been set the default value is respectively -1E+20 and 1E+20 for the MIN and MAX value. If the MIN value has been set the default value of the MAX value is the Min value.
9. Prescribing both pressure and velocity may lead to the instabilities.
10. For TYPE = HYDSTAT, the pressure is set using HYDSTAT, the velocity equals the element velocity. In case of inflow the density follows from the hydrostatic pressure by using the equation of state.
