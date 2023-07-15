## [RBAR1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RBAR1.xhtml) - Rigid Bar

Alternative format for RBAR.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RBAR1   EID     GA      GB      CB      ALPHA   TREF                            
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RBAR1   5       1       2       123     6.5-6                                   
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)                                    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ GA, GB    │ Grid point identification numbers.  (Integer > 0)                                             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ CB        │ Component numbers in the global coordinate system at GB, which are constrained to move as the │
│           │ rigid bar. See Remark 4. (Integers 1 through 6 with no embedded blanks or blank.)             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALPHA     │ Thermal expansion coefficient. See Remark 8. (Real or blank)                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ TREF      │ Reference temperature for the calculation of thermal loads. (Real; Default=0.0).              │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Two methods are available to process rigid elements: equation elimination or Lagrange multipliers. The Case Control command, RIGID, selects the method.

2. For the Lagrange method, Nastran will create internally the Lagrange multiplier degrees-of-freedom in addition to the 12 displacement degrees-of-freedom given by grid points GA and GB. The number of Lagrange multiplier degrees-of-freedom is equal to the number of dependent degrees-of-freedom given by CB.

3. RBAR1 is a preferred input format to define the Lagrange method for a rigid bar.

4. When CB = “123456” or blank, the grid point GB is constrained to move with GA as a rigid bar. For default CB = “123456”. Any number of degrees-of-freedom at grid point GB can be released not to move with the rigid body.

5. For the Lagrange method, the theory is formulated such that a consistent rigid body motion for grid points GA and GB will be computed even if these two points have different global coordinate systems.

6. For the Lagrange method, the thermal expansion effect will be computed for the rigid bar element if user supplies the thermal expansion coefficient ALPHA, and the thermal load is requested by the TEMPERATURE(INITIAL) and TEMPERATURE(LOAD) Case Control commands. The temperature of the element is taken as the average temperature of the two connected grid points GA and GB.

7. Element identification numbers should be unique with respect to all other element identification numbers.

8. Rigid elements are ignored in heat transfer problems.If used in a multi-physics coupled problem using SUBSTEP, they participate in the mechanical substep but are ignored in the heat transfer subsstep through automatic deactivation. For more information on deactivation, see the DEACTEL keyword under the NLMOPTS Bulk Data entry and the associated Remark   for that entry.

9. Forces of multipoint constraint may be recovered in all solution sequences, except SOL 129, with the MPCFORCE Case Control command.

10. Fluid Grids (Identified by a -1 in the CD field of the GRID entry) do not support the use of Rigid elements, use MPC entries.

