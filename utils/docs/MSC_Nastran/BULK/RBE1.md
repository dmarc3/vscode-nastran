## [RBE1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RBE1.xhtml) - Rigid Body Element, Form 1

Defines a rigid body connected to an arbitrary number of grid points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RBE1    EID     GN1     CN1     GN2     CN2     GN3     CN3             +       
+               GN4     CN4     GN5     CN5     GN6     CN6             +       
+       “UM”    GM1     CM1     GM2     CM2     GM3     CM3             +       
+               GM4     CM4     -etc.-  ALPHA   TREF                            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RBE1    59      59      123456                                          +       
+       UM      61      246     6.5-6                                           
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)                                       │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GNi       │ Grid points at which independent degrees-of-freedom for the element are assigned.  (Integer > 0) │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CNi       │ Independent degrees-of-freedom in the global coordinate system for the rigid element at grid     │
│           │ point(s) GNi.  See Remark 1. (Integers 1 through 6 with no embedded blanks.)                     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “UM”      │ Indicates the start of the dependent degrees-of-freedom.  (Character)                            │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GMj       │ Grid points at which dependent degrees-of-freedom are assigned.  (Integer > 0)                   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CMj       │ Dependent degrees-of-freedom in the global coordinate system at grid point(s) GMj.  (Integers 1  │
│           │ through 6 with no embedded blanks.)                                                              │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALPHA     │ Thermal expansion coefficient. See Remark 13. (Real or blank)                                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TREF      │ Reference temperature for the calculation of thermal loads. (Real; Default=0.0).                 │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Two methods are available to process rigid elements: equation elimination or Lagrange multipliers. The Case Control command, RIGID, selects the method.
2. For the Lagrange method, Nastran will create internally the Lagrange multiplier degrees-of-freedom in addition to the displacement degrees-of-freedom given by connected grid points. The number of Lagrange multiplier degrees-of-freedom is equal to the number of dependent degrees-of-freedom given by CMj.
3. For the linear method, the total number of components in CN1 to CN6 must equal six; for example, CN1 = 123, CN2 = 3, CN3 = 2, CN4 = 3. Furthermore, they must jointly be capable of representing any general rigid body motion of the element.The first continuation entry is not required if there are fewer than four GN points. For the Lagrange method, the total number of components must also be six. In addition, CN1 must be 123456, and CN2 through CN6 must be blank.
4. For the linear method, the dependent degrees-of-freedom will be made members of the m-set. For the Lagrange method, they may or may not be member of the m-set, depending on the method selected on the RIGID Case Control command. However, the rules regarding to m-set described below apply to both types of methods.
5. Dependent degrees-of-freedom assigned by one rigid element may not also be assigned dependent by another rigid element or by a multipoint constraint.
6. A degree-of-freedom cannot be both independent and dependent for the same element.  However, both independent and dependent components can exist at the same grid point.
7. Element identification numbers should be unique with respect to all other element identification numbers.
8. RBE1, among other eligible rigid element types, can be selected via MPC and SET3.
9. Forces of multipoint constraint may be recovered in all solution sequences, except SOL 129, with the MPCFORCE Case Control command.
10. Rigid elements are ignored in heat transfer problems. If used in a multi-physics coupled problem using SUBSTEP, they participate in the mechanical substep but are ignored in the heat transfer subsstep through automatic deactivation. For more information on deactivation, see the DEACTEL keyword under the NLMOPTS Bulk Data entry and the associated Remark   for that entry.
11. Fluid Grids (Identified by a -1 in the CD field of the GRID entry) do not support the use of Rigid elements, use MPC entries. See   in the  MSC Nastran Reference Guide  for a discussion of rigid elements.
12. The m-set coordinates specified on this   entry may not be specified on other entries that define mutually exclusive sets.  See    for a list of these entries.
13. For the Lagrange method, the thermal expansion effect will be computed, if user supplies the thermal expansion coefficient ALPHA, and the thermal load is requested by the TEMPERATURE(INITIAL) and TEMPERATURE(LOAD) Case Control commands. The average temperature of the connected grid points is used as the temperature of the rigid body element. In this case, for the Lagrange method, PARAM, BAILOUT, -1 is activated within the solver.
