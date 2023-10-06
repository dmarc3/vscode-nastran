## [AEUXREF (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.AEUXREF.Case.xhtml) - Defines the Reference Aerodynamic Extra Point (Controller) Vector

Reference UXVEC selector for the aeroelastic trim analysis. This is used to indicate an aerodynamic extra point vector about which the stability derivatives are to be computed and printed. The stability derivatives are the change in force due to a unit perturbation of each parameter in the aerodynamic extra point set. Due to the nonlinear nature of the aeroelastic loads, the stability derivatives can be (but are not required to be) a function of the point about which the slope is computed. This input defines which point is to be used in computing the stability derivatives for printing (local slopes will be computed as needed in the trim solver). This selection is typically done within each subcase, but a case control default can be defined by placing an entry above the subcase level.

#### Format:

AEUXREF =  ![casecontrol4a00810.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00810.jpg?_LANG=enus)

#### Examples:
```nastran
AEUXREF=100
AEUXREF=TRIM
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ The identification number of a UXVEC Bulk Data entry that defines the point about which stability │
│           │ derivatives will be computed in TRIM cases.                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TRIM      │ Indicates that the stability derivatives should be computed about the trimmed state.              │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. If, for a particular subcase, AEUXREF is not defined, the “free stream” state will be used (that is, the stability derivatives will be computed about zero values for all parameters). This results in upward compatibility with the linear database paradigm.
2. Only one of a TRIM or a UXVEC ID may be specified on any given subcase. To see stability derivatives about additional points, you must define additional trim subcases.
