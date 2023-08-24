## [RBE3](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RBE3.xhtml) - Interpolation Constraint Element

Defines the motion at a reference grid point as the weighted average of the motions at a set of other grid points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RBE3    EID             REFGRID REFC    WT1     C1      G1,1    G1,2    +       
+       G1,3    WT2     C2      G2,1    G2,2    -etc.-  WT3     C3      +       
+       G3,1    G3,2    -etc.-  WT4     C4      G4,1    G4,2    -etc.-  +       
+       “UM”    GM1     CM1     GM2     CM2     GM3     CM3             +       
+               GM4     CM4     GM5     CM5     -etc.-                  +       
+       “ALPHA” ALPHA   TREF                                                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RBE3    14              100     1234    1.0     123     1       3       +       
+       5       4.7     1       2       4       6       5.2     2       +       
+       7       8       9       5.1     1       15      16              +       
+       UM      100     14      5       3       7       2               +       
+       ALPHA   6.5-6                                                           
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number.  Unique with respect to all elements. (0 < Integer < 100,000,000)   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REFGRID   │ Reference grid point identification number.  (Integer > 0)                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REFC      │ Component numbers at the reference grid point.  (Any of the integers 1 through 6 with no embedded  │
│           │ blanks.)                                                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WTi       │ Weighting factor for components of motion on the following entry at grid points Gi,j.  (Real)      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component numbers with weighting factor WTi at grid points Gi,j.  (Any of the integers 1 through 6 │
│           │ with no embedded blanks.)                                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi,j      │ Grid points with components Ci that have weighting factor WTi in the averaging equations.          │
│           │  (Integer > 0)                                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “UM”      │ Indicates the start of the degrees-of-freedom belonging to the dependent degrees-of-freedom.  The  │
│           │ default action is to assign only the components in REFC to the dependent degrees-of-freedom.       │
│           │  (Character)                                                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GMi       │ Identification numbers of grid points with degrees-of-freedom in the m-set.  (Integer > 0)         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CMi       │ Component numbers of GMi to be assigned to the m-set.  (Any of the Integers 1 through 6 with no    │
│           │ embedded blanks.)                                                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “ALPHA”   │ Indicates that the next number is the coefficient of thermal expansion. (Character)                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALPHA     │ Thermal expansion coefficient. See Remark 14. (Real or blank)                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TREF      │ Reference temperature for the calculation of thermal loads. (Real; Default=0.0).                   │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Two methods are available to process rigid elements: equation elimination or Lagrange multipliers. The Case Control command, RIGID, selects the method.
2. For the Lagrange method, the REFC must be “123”, “456”, or “123456”. No other combination is allowed.
3. For the Lagrange method, Nastran will create internally the Lagrange multiplier degrees-of-freedom in addition to the displacement degrees-of-freedom given by connected grid points. The number of Lagrange multiplier degrees-of-freedom is equal to the number of degrees-of-freedom given by REFC.
4. For the linear method, the dependent degrees-of-freedom indicated by REFC will be made members of the m-set. For Lagrange rigid element, they may or may not be members of the m-set, depending on the method selected on the RIGID Case Control command. However, the rules regarding the m-set described below apply to both types of methods.
5. We recommend that for most applications only the translation components 123 be used for Ci.  An exception is the case where the Gi,j are colinear.  A rotation component may then be added to one grid point to stabilize its associated rigid body mode for the element.
6. Blank spaces may be left at the end of a Gi,j sequence.
7. For the Lagrange method, the default for “UM” must be used. For the linear method, the default for “UM” should be used except in cases where the user wishes to include some or all REFC components in displacement sets exclusive from the m-set.  If the default is not used for “UM”:
     - The total number of components in the m-set (i.e., the total number of dependent degrees-of-freedom defined by the element) must be equal to the number of components in REFC (four components in the example).
     - The components specified after “UM” must be a subset of the components specified under REFC and (Gi,j, Ci).
     - The m-rows by m-columns partition [Rm,m]  of the global stiffness containing the  dependent degrees-of-freedom of multipoint constraints and rigid elements must be nonsingular. PARAM,CHECKOUT in SOLs 101 through 200 may be used to check for this condition. For some complex constraints, forming a well-conditioned [Rm,m]  is difficult for a user to perform manually and PARAM,AUTOMSET,YES will automatically determine a well-conditioned partition  by employing a rectangular decomposition of the [Rm,g] matrix.
8. Dependent degrees-of-freedom assigned by one rigid element may not also be assigned dependent by another rigid element or by a multipoint constraint.
9. RBE3, among other eligible rigid element types, can be selected via MPC and SET3.
10. Forces of multipoint constraint may be recovered in all solution sequences, except SOL 129, with the MPCFORCE Case Control command.
11. Rigid elements are ignored in heat transfer problems. If used in a multi-physics coupled problem using SUBSTEP, they participate in the mechanical substep but are ignored in the heat transfer subsstep through automatic deactivation. For more information on deactivation, see the DEACTEL keyword under the NLMOPTS Bulk Data entry and the associated Remark   for that entry.
12. The m-set coordinates specified on this entry may not be specified on other entries that define mutually exclusive sets.  See   for a list of these entries.
13. The formulation for the RBE3 element was changed in Version 70.7. This change allowed the element to give consistent answers that are not dependent upon the units of the model. Only models that connected rotation degrees-of-freedom for Ci were affected. Note that these models are ignoring the recommendation in Remark   The formulation prior to Version 70.7 may be obtained by setting SYSTEM(310)=1.
14. For the Lagrange method, the thermal expansion effect will be computed, if user supplies the thermal expansion coefficient ALPHA, and the thermal load is requested by the TEMPERATURE(INITIAL) and TEMPERATURE(LOAD) Case Control commands. The average temperature of the connected grid points is used as the temperature of the rigid body element. In this case, for the Lagrange method, PARAM, BAILOUT, -1 is activated within the solver.
15. Fluid Grids (Identified by a -1 in the CD field of the GRID entry) do not support the use of Rigid elements, use MPC entries.
