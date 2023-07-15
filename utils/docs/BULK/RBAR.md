## [RBAR](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RBAR.xhtml) - Rigid Bar

Defines a rigid bar with six degrees-of-freedom at each end.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RBAR    EID     GA      GB      CNA     CNB     CMA     CMB     ALPHA           
        TREF                                                                    
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RBAR    5       1       2       123456                          6.5-6           
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GA, GB    │ Grid point identification number of connection points.  (Integer > 0)                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CNA, CNB  │ Component numbers of independent degrees-of-freedom in the global coordinate system for the        │
│           │ element at grid points GA and GB.  See Remark 3. (Integers 1 through 6 with no embedded blanks, or │
│           │ zero or blank.)                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CMA, CMB  │ Component numbers of dependent degrees-of-freedom in the global coordinate system assigned by the  │
│           │ element at grid points GA and GB.  See Remarks 4. and 5. (Integers 1 through 6 with no embedded    │
│           │ blanks, or zero or blank.)                                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALPHA     │ Thermal expansion coefficient. See Remark 11. (Real or blank)                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TREF      │ Reference temperature for the calculation of thermal loads. (Real; Default=0.0).                   │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Two methods are available to process rigid elements: equation elimination or Lagrange multipliers. The Case Control command, RIGID, selects the method.

2. For the Lagrange method, Nastran will create the Lagrange multiplier degrees-of-freedom internally in addition to the 12 displacement degrees-of-freedom given by grid points GA and GB. The number of Lagrange multiplier degrees-of-freedom is equal to the number of dependent degrees-of-freedom.

3. For the linear method, the total number of components in CNA and CNB must equal six; for example, CNA = 1236, CNB = 34. Furthermore, they must jointly be capable of representing any general rigid body motion of the element. For the Lagrange method, the total number of components must also be six. However, only CNA = 123456 or CNB = 123456 is allowed. If both CNA and CNB are blank, then CNA = 123456. For this method, RBAR1 gives the simpler input format.

4. If both CMA and CMB are zero or blank, all of the degrees-of-freedom not in CNA and CNB will be made dependent. For the linear method, the dependent degrees-of-freedom will be made members of the m-set. For the Lagrange method, they may or may not be member of the m-set, depending on the method selected in the RIGID Case Control command. However, the rules regarding the m-set described below apply to both methods.

5. The m-set coordinates specified on this entry may not be specified on other entries that define mutually exclusive sets.  See   for a list of these entries.

6. Element identification numbers should be unique with respect to all other element identification numbers.

7. RBAR, among other eligible rigid element types, can be selected via MPC and SET3.

8. Forces of multipoint constraint may be recovered in all solution sequences, except SOL 129, with the MPCFORCE Case Control command.

9. Rigid elements are ignored in heat transfer problems. If used in a multi-physics coupled problem using SUBSTEP, they participate in the mechanical substep but are ignored in the heat transfer subsstep through automatic deactivation. For more information on deactivation, see the DEACTEL keyword under the NLMOPTS Bulk Data entry and the associated Remark   for that entry.

10. See   in the  MSC Nastran Reference Guide  for a discussion of rigid elements.

11. For the Lagrange method, the thermal expansion effect will be computed for the rigid bar element if user supplies the thermal expansion coefficient ALPHA, and the thermal load is requested by the TEMPERATURE(INITIAL) and TEMPERATURE(LOAD) Case Control commands. The temperature of the element is taken as the average temperature of the two connected grid points GA and GB.

12. When there is large rotation, CMA and CMB must have all “456” if any rotational degrees of freedom is used.

13. Fluid Grids (Identified by a -1 in the CD field of the GRID entry) do not support the use of Rigid elements, use MPC entries.

