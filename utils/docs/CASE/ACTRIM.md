## [ACTRIM (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.ACTRIM.Case.xhtml) - ACTRAN Trimmed Material Matrices for SOL 108/111

Select ACTRAN trimmed material matrices.

#### Format:

```nastran
ACTRIM = name1, name2, … namen
```

#### Example:

```nastran
ACTRIM = FLOOR_F, FLOOR_R, DASH 
SET 10 = FR_LH, RR_LH 
ACTRIM = 10
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ namei     │ Name of the ACTRAN trimmed material matrices that is input on the ACTRIM bulk data entry, or name │
│           │ list.                                                                                             │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. This entry must be above subcase level or in the first subcase.
2. If the ACTRIM Case Control command selects ACTRIM bulk data entries, Nastran will add the selected ACTRAN matrices to fluid-structure coupling problem in all subcases.
3. ACTRIM is supported in frequency response analysis for fluid-structure coupling problem and the frequency dependent algorithm will be adopted automatically.
4. PARAM, ACSYM, YES should be set for ACTRIM (default).
5. The effect of ACTRIM will be considered in standard frequency response analysis and participation factor analysis by PFMODE, PFPANEL and PFGRID.
