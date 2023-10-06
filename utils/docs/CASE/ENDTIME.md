## [ENDTIME (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.ENDTIME.Case.xhtml) - Specifies Final Analysis Time

Specifies final analysis time for SOL 700.

#### Format:

```nastran
ENDTIME = Value
```

#### Example:

```nastran
ENDTIME = 0.01
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ Value     │ Time in the applicable units for the model (usually seconds) (Real; Default = 1e+20). │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────┘
```
