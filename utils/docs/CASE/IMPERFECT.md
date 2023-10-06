## [IMPERFECT (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.IMPERFECT.Case.xhtml) - Select Geometric Imperfection

Select geometric imperfection cases in SOL 400.

#### Format:

```nastran
IMPERFECT = n
```

#### Example:

```nastran
IMPERFECT = 5
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                         │
├───────────┼─────────────────────────────────────────────────────────────────┤
│ n         │ Identification number of an IMPGEOM or IMPCASE bulk data entry. │
└───────────┴─────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This command must be above all subcases.
