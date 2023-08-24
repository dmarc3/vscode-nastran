## [AESYMXY (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.AESYMXY.Case.xhtml) - Aerodynamic Flow Symmetry About The XY Plane

Aerodynamic XY plane of symmetry flag. This is used to indicate whether the aerodynamic model has symmetry with respect to the ground.

#### Format:

AESYMXY =  ![casecontrol4a00806.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00806.jpg?_LANG=enus)

#### Example:

```nastran
AESYMXY = ASYMMETRIC
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SYMMETRIC    │ Indicates that the aerodynamic model is moving in a symmetric manner with respect to the XY plane. │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ANTISYMMETRI │ Indicates that the aerodynamic model is moving in an antisymmetric manner with respect to the XY   │
│ C            │ plane.                                                                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ASYMMTRIC    │ Indicates that the aerodynamic model has no reflection about the XY plane.                         │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. If AESYMXY is not present in case control, aerodynamic XY symmetry will be determined from the SYMXY field of the AEROS Bulk Data entry for static aeroelastic analysis, and from the SYMXY field of the AERO Bulk Data entry for flutter and dynamic aeroelastic analysis.
2. If AESYMXY is present above the subcase level, it is applied to all subcases until overridden.
3. SYMMETRIC implies ground effect, and ASYMMETRIC implies free air analysis.
4. Multiple aerodynamic symmetries are supported.
