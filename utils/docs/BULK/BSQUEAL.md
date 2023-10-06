## [BSQUEAL](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BSQUEAL.xhtml) - Specifies Data for Brake Squeal Analysis Using SOL 400

Defines data for brake squeal calculations involving one wheel as well as other rotating objects used in SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BSQUEAL ID      OMETH   AVSTIF                  BSONLY                  +       
+       RX      RY      RZ      X       Y       Z                               
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BSQUEAL 100     0.2     5.34E6                  NO                      +       
+       0.0     0.0     1.0     2.0     3.0     4.0                             
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Identification number of a corresponding BSQUEAL Case Control command (Integer > 0).               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OMETH     │ Specifies the corresponding load factor (or time step) where the brake squeal analysis is to be    │
│           │ performed. (Real; Default = 0.0 in SOL 400, see Remark 5.                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AVSTIF    │ Approximate average stiffness per unit area between the two surfaces. AVSTIF is used a penalty     │
│           │ contact stiffness, it needs to be a large value but not so large that numerical instabilities      │
│           │ result. If AVSTIF is large enough, increasing it by a few orders of magnitude will not appreciably │
│           │ affect the squeal modes. (Real; no Default; Required field)                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BSONLY    │ Brake-Squeal-Only flag to control whether or not to continue nonlinear iterations after brake      │
│           │ squeal analysis is performed. BSONLY=YES means to perform brake squeal analysis only and exit      │
│           │ nonlinear iteration immediately; BSONLY=NO means to continue nonlinear analysis. (Character;       │
│           │ Default = YES)                                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RX        │ X direction cosine (basic coordinate system) of axis of rotation (Real; or blank).                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RY        │ Y direction cosine (basic coordinate system) of axis of rotation (Real; or blank).                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RZ        │ Z direction cosine (basic coordinate system) of axis of rotation (Real; or blank).                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X         │ X coordinate in basic coordinate system of a point on the axis of rotation (Real; or blank).       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Y         │ Y coordinate in basic coordinate system of a point on the axis of rotation (Real; or blank).       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Z         │ Z coordinate in basic coordinate system of a point on the axis of rotation (Real; or blank).       │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry is used to perform brake squeal analysis or other contact with friction sets of bodies using unsymmetric stiffness friction matrices.
2. The disks should not be glued with pads. When bodies are intended to be glued, turn on BCTABLE / IGLUE or BCONPRG/IGLUE for those contact bodies.
3. Brake squeal is not available with segment-to-segment contact.
4. For nonlinear static analysis, 0.0 < OMETH < 1.0, OMETH is overridden by the load factor from Case Control command, NLIC or its default, when a brake squeal analysis is performed in a separate SUBCASE-STEP other than ANALYSIS = NLSTATIC.
5. User subroutine UBSQUEAL is available using the BCONUDS entry.
