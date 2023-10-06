## [YTINTERCEPT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.YTINTERCEPT.xhtml) - Location of Y Axis on X Axis

Specifies the location of the y-axis on the x-axis for upper half frame curves only.

#### Format:

```nastran
YTINTERCEPT  yti
```

#### Example:

```nastran
YTINT  50
```

```text
┌───────────┬──────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                  │
├───────────┼──────────────────────────────────────────────────────────┤
│ yti       │ Location of y-axis on the x-axis (Real; Default =  0.0). │
└───────────┴──────────────────────────────────────────────────────────┘
```
#### Remark:

1. YTINTERCEPT applies to upper half frame curves only.

