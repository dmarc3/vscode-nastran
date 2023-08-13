## [CAERO5](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CAERO5.xhtml) - Aerodynamic Panel Element Configuration

Defines an aerodynamic macro element for Piston theory.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CAERO5  EID     PID     CP      NSPAN   LSPAN   NTHRY   NTHICK          +       
+       X1      Y1      Z1      X12     X4      Y4      Z4      X43             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CAERO5  6000    6001    100             315     0       0               +       
+       0.0     0.0     0.0     1.0     0.2     1.0     0.      0.8             
```

```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ EID       │ Element identification number.                    │                                                   │
│           │ (0 < Integer < 100,000,000)                       │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PID       │ Property identification number of a PAERO5 entry. │                                                   │
│           │  (Integer > 0)                                    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ CP        │ Coordinate system for locating points 1 and 4.    │                                                   │
│           │  (Integer > 0; Default = 0)                       │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NSPAN     │ Number of strips.  (Integer.  If a positive value │                                                   │
│           │ is given, equal strips are assumed.  If zero or   │                                                   │
│           │ blank, then LSPAN must be specified.)             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ LSPAN     │ ID of an AEFACT entry containing a list of        │                                                   │
│           │ division points for strips.  Used only if NSPAN   │                                                   │
│           │ is zero or blank.  (Integer > 0)                  │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NTHRY     │ Parameter to select Piston or van Dyke’s theory.  │                                                   │
│           │  (Integer = 0, 1, or 2; Default = 0)              │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Blank or 0                                        │ Piston theory is used to compute  and             │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 1                                                 │ van Dyke’s theory is used to compute  and  with   │
│           │                                                   │ no sweep correction (secΛ = 1 . 0 ).              │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 2                                                 │ van Dyke’s theory is used to compute  and  with a │
│           │                                                   │ sweep correction based on the actual Λ.           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NTHICK    │ Parameter to select thickness integrals input.    │                                                   │
│           │  (Integer > 0; Default = 0)                       │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Blank or 0                                        │ Thickness integrals are computed internally.      │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ > 0                                               │ Thickness integrals are input directly and are    │
│           │                                                   │ the ID number of an AEFACT entry that lists the   │
│           │                                                   │ I and/or J integrals.                             │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Location of points 1 and 4 in coordinate system   │                                                   │
│           │ CP.  (Real)                                       │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ X12, X43  │ Edge chord lengths in aerodynamic coordinate      │                                                   │
│           │ system.  (Real > 0; X12 and X43 cannot both be    │                                                   │
│           │ zero.)                                            │                                                   │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

![bulkc102332.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102332.jpg?_LANG=enus)

Figure 9-8   CAERO5 Element Configuration

#### Remarks:

1. The strips are numbered sequentially, beginning with EID.  The user must ensure that all strip numbers are unique and different from structural grid IDs.
2. The number of division points is one greater than the number of boxes.  Thus, if NSPAN=3, the division points are 0.0, 0.333, 0.667, 1.000.  If   the user supplies division points, the first and last points need not be 0.0 and 1.0 (in which case the corners of the panel would not be at the reference points).
3. A triangular element is formed if X12 or X43 = 0.0.
