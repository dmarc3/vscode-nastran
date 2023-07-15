## [RBE2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RBE2.xhtml) - Rigid Body Element, Form 2

Defines a rigid body with independent degrees-of-freedom that are specified at a single grid point and with dependent degrees-of-freedom that are specified at an arbitrary number of grid points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RBE2    EID     GN      CM      GM1     GM2     GM3     GM4     GM5             
        GM6     GM7     GM8     -etc.-  ALPHA   TREF                            
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RBE2    9       8       12      10      12      14      15      16              
        20      6.5-6                                                           
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)                                        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GN        │ Identification number of grid point to which all six independent degrees-of-freedom for the       │
│           │ element are assigned.  (Integer > 0)                                                              │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CM        │ Component numbers of the dependent degrees-of-freedom in the global coordinate system at grid     │
│           │ points GMi.  (Integers 1 through 6 with no embedded blanks.) See Remark 12.                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GMi       │ Grid point identification numbers at which dependent degrees-of-freedom are assigned.  (Integer > │
│           │ 0)                                                                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALPHA     │ Thermal expansion coefficient. See Remark 11. (Real or blank)                                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TREF      │ Reference temperature for the calculation of thermal loads. (Real; Default=0.0).                  │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Two methods are available to process rigid elements: equation elimination or Lagrange multipliers. The Case Control command, RIGID, selects the method.

2. For the Lagrange method, Nastran will create internally the Lagrange multiplier degrees-of-freedom in addition to the displacement degrees-of-freedom given by connected grid points. The number of Lagrange multiplier degrees-of-freedom is equal to the number of dependent degrees-of-freedom which is obtained by CM multiplied with the number of dependent grid points.

3. For the linear method, the dependent degrees-of-freedom indicated by CM will be made members of the m-set at all grid points. For the Lagrange method, they may or may not be members of the m-set, depending on the method selected on the RIGID Case Control command. However, the rules regarding the m-set described below apply to both types of methods.

4. Dependent degrees-of-freedom assigned by one rigid element may not also be assigned dependent by another rigid element or by a multipoint constraint.

5. Element identification numbers should be unique with respect to all other element identification numbers.

6. RBE2, among other eligible rigid element types, can be selected via MPC and SET3.

7. Forces of multipoint constraint may be recovered in all solution sequences, except SOL 129, with the MPCFORCE Case Control command.

8. Rigid elements are ignored in heat transfer problems. If used in a multi-physics coupled problem using SUBSTEP, they participate in the mechanical substep but are ignored in the heat transfer subsstep through automatic deactivation. For more information on deactivation, see the DEACTEL keyword under the NLMOPTS Bulk Data entry and the associated Remark   for that entry.

9. Fluid Grids (Identified by a -1 in the CD field of the GRID entry) do not support the use of Rigid elements, use MPC entries. See   in the  MSC Nastran Reference Guide  for a discussion of rigid elements.

10. The m-set coordinates specified on this entry may not be specified on other entries that define mutually exclusive sets.  See   for a list   of these entries.

11. For the Lagrange method, the thermal expansion effect will be computed, if user supplies the thermal expansion coefficient ALPHA, and the thermal load is requested by the TEMPERATURE(INITIAL) and TEMPERATURE(LOAD) Case Control commands. The average temperature of the connected grid points is used as the temperature of the rigid body element. In this case, for the Lagrange method, PARAM, BAILOUT, -1 is activated within the solver.

12. It can be any combination in 1, 2, 3, but must have all "456" if any rotation DOF is used when there is large rotation.

