## [LABEL (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.LABEL.Case.xhtml) - Output Label

Defines a character string that will appear on the third heading line of each page of printer output.

#### Format:

```nastran
LABEL=label
```

#### Example:

```nastran
LABEL=DEMONSTRATION PROBLEM
```

```text
┌───────────┬───────────────────────┐
│ Describer │ Meaning               │
├───────────┼───────────────────────┤
│ label     │ Any character string. │
└───────────┴───────────────────────┘
```

#### Remarks:

1. LABEL appearing at the subcase level will label output for that subcase only.
2. LABEL appearing before all subcases will label any outputs that are not subcase-dependent.
3. If no LABEL command is supplied, the label line will be blank.
4. LABEL information is also placed on plotter output, as applicable. Only the first 65 characters will appear.
