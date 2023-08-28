## [RJOINT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RJOINT.xhtml) - Rigid Joint

Defines a rigid joint element connecting two coinciding grid points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RJOINT  EID     GA      GB      CB                                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RJOINT  5       1       2       12345                                           
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (Integer > 0)                                                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GA, GB    │ Grid point identification numbers. (Integer > 0)                                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CB        │ Component numbers in the global coordinate system at GB. These degrees-of-freedom are constrained │
│           │ to move with the same degrees-of-freedom at GA. See Remarks 4. and 5. (Integers 1 through 6 with  │
│           │ no embedded or blank.)                                                                            │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Two methods are available to process rigid elements: equation elimination or Lagrange multipliers. The Case Control command, RIGID, selects the method. If RIGID=LINEAR, the RJOINT element is converted to a RBAR rigid constraint MPC type of relationship and the length remarks of (2) is not checked.
2. For the Lagrange method, Nastran will create internally the Lagrange multiplier degrees-of-freedom in addition to the 12 displacement degrees-of-freedom given by grid points GA and GB. The number of Lagrange multiplier degrees-of-freedom is equal to the number of dependent degrees-of-freedom given by CB.
3. The length between grid points GA and GB must be zero.
4. When CB = “123456” or blank, the grid point GB is constrained to move with GA and the two grid points moves as a single point. For default CB = “123456”.
5. If any degree-of-freedom is released on CB, RJOINT becomes a mechanical joint element. For example, CB = “12345”, then RJOINT becomes a hinge. CB = “1234”, then RJOINT becomes a universal joint. And CB = “123”, RJOINT becomes a spherical joint.
6. For the Lagrange method, the theory for the RJOINT is formulated such that a consistent mechanical joint is created even if the user requests different global coordinate systems at grid points GA and GB.
7. Thermal expansion effect is not applicable for the RJOINT element, since the distance between grid points GA and GB is zero.
8. Element identification numbers should be unique with respect to all other element identification numbers.
