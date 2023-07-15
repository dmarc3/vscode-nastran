## [RROD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RROD.xhtml) - Rigid Pin-Ended Element Connection

Defines a pin-ended element that is rigid in translation.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RROD    EID     GA      GB      CMA     CMB     ALPHA   TREF                    
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RROD    14      1       2       2               6.5-6                           
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)                                        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GA, GB    │ Grid point identification numbers of connection points.  (Integer > 0)                            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CMA, CMB  │ Component number of one and only one dependent translational degree-of-freedom in the global      │
│           │ coordinate system assigned by the user to either GA or GB.  (Integer 1, 2, or 3.  Either CMA or   │
│           │ CMB must contain the integer, and the other must be blank for the linear RROD. For Lagrange RROD, │
│           │ both CMA and CMB can be blank.) See Remark 3.                                                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALPHA     │ Thermal expansion coefficient. See Remark 11. (Real or blank)                                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TREF      │ Reference temperature for the calculation of thermal loads. (Real; Default=0.0).                  │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Two methods are available to process rigid elements: equation elimination or Lagrange multipliers. The Case Control command, RIGID, selects the method.

2. For the Lagrange method, Nastran will create internally one Lagrange multiplier degree-of-freedom in addition to the displacement degrees-of-freedom given by connected grid points.

3. For the Lagrange method, if both CMA and CMB are blanks, Nastran will compute the best degree-of-freedom for the dependent degree-of-freedom.

4. The m-set coordinates specified on this entry may not be specified on other entries that define mutually exclusive sets.  See   for a list of these entries.

5. Element identification numbers should be unique with respect to all other element identification numbers.

6. RROD, among other eligible rigid element types, can be selected via MPC and SET3.

7. Forces of multipoint constraint may be recovered in all solution sequences, except SOL 129, with the MPCFORCE Case Control command.

8. Rigid elements are ignored in heat transfer problems. If used in a multi-physics coupled problem using SUBSTEP, they participate in the mechanical substep but are ignored in the heat transfer subsstep through automatic deactivation. For more information on deactivation, see the DEACTEL keyword under the NLMOPTS Bulk Data entry and the associated Remark   for that entry.

9. The degree-of-freedom selected to be dependent must have a nonzero component along the axis of the element. This implies that the element must have finite length.

10. Fluid Grids (Identified by a -1 in the CD field of the GRID entry) do not support the use of Rigid elements, use MPC entries. See   in the  MSC Nastran Reference Guide  for a discussion of rigid elements.

11. For the Lagrange method, the thermal expansion effect will be computed, if user supplies the thermal expansion coefficient, ALPHA, and the thermal load is requested by the TEMPERATURE(INITIAL) and TEMPERATURE(LOAD) Case Control commands. The temperature of the element is taken as the average temperature of the two connected grid points GA and GB.

