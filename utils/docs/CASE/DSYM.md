## [DSYM (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.DSYM.Case.xhtml) - Dihedral Symmetry Option in Cyclic Symmetry
Provides for either one or two planes of overall symmetry in DIH-type cyclic symmetry problems.

#### Format:

![casecontrol4a00854.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00854.jpg?_LANG=enus)

#### Example:

```nastran
DSYM=AS
```

```text
┌─────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ S, A        │ The problem is assumed to be symmetrical (S) or antisymmetrical (A) with respect to the plane      │
│             │ containing side 1 of segment 1.                                                                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SS, SA, AS, │ The problem is assumed to be symmetrical (or antisymmetrical) with respect to the plane containing │
│ AA          │ side 1 of segment 1 (denoted by the first symbol), and also with respect to a plane perpendicular  │
│             │ to side 1 (denoted by the second symbol).                                                          │
└─────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
