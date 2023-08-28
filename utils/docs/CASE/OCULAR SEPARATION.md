## [OCULAR SEPARATION](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/TOC.OCULAR.SEPARATION.xhtml) - Separation of the Vantage Points

Defines the separation of the left and right eye vantage points along the s-axis for stereoscopic projections.

#### Format:

```nastran
OCULAR SEPARATION  os
```

#### Example:

```nastran
OCULAR SEPARATION  2.0
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ os        │ Separation, in inches, of the two vantage points along the s-axis (Real, Default = 2.756 inches). │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remark:

1. The default value is the separation used in the standard stereoscopic cameras and viewers (70 mm). The default value is recommended.
