## [FLSYM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FLSYM.xhtml) - Axisymmetric Symmetry Control

Defines the relationship between the axisymmetric fluid and a structural boundary having symmetric constraints. The purpose is to allow fluid boundary matrices to conform to structural symmetry definitions.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FLSYM   M       S1      S2                                                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FLSYM   12      S       A                                                       
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ M         │ Number of symmetric sections of structural boundary around the circumference of the fluid being │
│           │ modeled by the set of structural elements.  (Even Integers > 2)                                 │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ S1, S2    │ Description of boundary constraints used on the structure at the first and second planes of     │
│           │ symmetry.  (Character:  “S” means symmetric, “A” means antisymmetric.)                          │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry is allowed only if an AXIF entry is also present.
2. Only one FLSYM entry is allowed.
3. This entry is not required if there are no planes of symmetry.
4. First plane of symmetry is assumed to be at  ![bulkfgil03672.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03672.jpg?_LANG=enus) .  Second plane of symmetry is assumed to be at   .
5. Symmetric and antisymmetric constraints for the structure must, in addition, be provided by the user.
6. The solution is performed for those harmonic indices listed on the AXIF entry that are compatible with the symmetry conditions.
7. For example, if FLSYM is used to model a quarter section of structure at the boundary, M = 4.  If the boundary constraints are “SS”, the compatible cosine harmonics are 0, 2, 4, ..., etc.  If “SA” is used, the compatible cosine harmonics are 1, 3, 5, ..., etc.
