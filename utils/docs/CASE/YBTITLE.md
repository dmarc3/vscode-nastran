## [YBTITLE](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.YBTITLE.xhtml) - Y-Axis Title

Defines a character string that will appear along the y-axis for lower half frame curves only.

#### Format:

```nastran
YBTITLE   ytit
```

#### Example:

```nastran
YBTIT   RIGHT WING LOADS - CASE 3
```

```text
┌───────────┬─────────────────────────────────────────────────────┐
│ Describer │ Meaning                                             │
├───────────┼─────────────────────────────────────────────────────┤
│ ytit      │ Any character string (Character; Default =  Blank). │
└───────────┴─────────────────────────────────────────────────────┘
```
#### Remarks:

1. YBTITLE may not be continued to the next command line.

2. YBTITLE applies to lower half frame curves only.

