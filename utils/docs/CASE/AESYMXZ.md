## [AESYMXZ (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.AESYMXZ.Case.xhtml) - Aerodynamic Flow Symmetry About The XZ Plane

Aerodynamic XZ plane of symmetry flag. This is used to support symmetric models about the centerline.

#### Format:

AESYMXZ =  ![casecontrol4a00808.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00808.jpg?_LANG=enus)

#### Example:

```nastran
AESYMXZ = SYMMETRIC
```

```text
┌──────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SYMMETRIC    │ Indicates that a half span aerodynamic model is moving in a symmetric manner with respect to the  │
│              │ XZ plane.                                                                                         │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ANTISYMMETRI │ Indicates that a half span aerodynamic model is moving in an antisymmetric manner with respect to │
│ C            │ the XZ plane.                                                                                     │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ASYMMETRIC   │ Indicates that a full aerodynamic model is provided (Default).                                    │
└──────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remark:

1. If AESYMXZ is not present in case control, aerodynamic XZ symmetry will be determined from the SYMXZ field of the AEROS Bulk Data entry for static aeroelastic analysis, and from the SYMXZ field of the AERO Bulk Data entry for flutter and dynamic aeroelastic analysis.
2. If AESYMXZ is present above the subcase level, it is applied to all subcases until overridden.
3. Multiple aerodynamic symmetries are supported.
