## [SPLINE3](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SPLINE3.xhtml) - Aeroelastic Constraint Equation

Defines a constraint equation for aeroelastic problems.  Useful for control surface constraints.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPLINE3 EID     CAERO   BOXID   COMP    G1      C1      A1      USAGE   +       
+       G2      C2      A2              -etc.                                   
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPLINE3 7000    107     109     6       5       3       1.0                     
        43      5       -1.0                                                    
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Unique spline identification number.  (Integer > 0)                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CAERO     │ Identification number of the macro-element on which the element to be interpolated lies.  (Integer │
│           │ > 0)                                                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BOXID     │ Identification number of the aerodynamic element; i.e., the box number.  (Integer > 0)             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COMP      │ The component of motion to be interpolated.  See Remark 4. (One of the Integers 1, 2, 3, 4, 5, or  │
│           │ 6.)                                                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid point identification number of the  independent grid point.  (Integer > 0)                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component numbers in the displacement coordinate system.  (One of the Integers 1 through 6 for     │
│           │ grid points, or 0 for scalar points.)                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ai        │ Coefficient of the constraint relationship.  (Real)                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ USAGE     │ Spline uage flag to determine whether this spline applies to the force transformation,             │
│           │ displacement transformation or both.  FORCE, DISP or BOTH. See Remark 6. (Character; Default =     │
│           │ BOTH).                                                                                             │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
