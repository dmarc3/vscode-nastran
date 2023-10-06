## [YTTITLE](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.YTTITLE.xhtml) - Y-Axis Title

Defines a character string that will appear along the y-axis for upper half frame curves only.

#### Format:

```nastran
YTTITLE   ytit
```

#### Example:

```nastran
YTTIT   RIGHT WING LOADS - CASE 3
```

```text
┌───────────┬────────────────────────────────────────────────────┐
│ Describer │ Meaning                                            │
├───────────┼────────────────────────────────────────────────────┤
│ ytit      │ Any character string (Character; Default = Blank). │
└───────────┴────────────────────────────────────────────────────┘
```
#### Remarks:

1. YTTITLE may not be continued to the next command line.

2. YTTITLE applies to upper half frame curves only.

