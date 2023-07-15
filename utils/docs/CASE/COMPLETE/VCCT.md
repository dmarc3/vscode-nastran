## [VCCT (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.VCCT.Case.xhtml) - Virtual Crack Closure Technique for SOL 400 Analysis

Selects grid sets to be used for virtual crack closure analysis in SOL 400.

#### Format:

```nastran
VCCT=N
```

#### Example:

```nastran
VCCT=0
VCCT=1
```

```text
┌───────────┬─────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                     │
├───────────┼─────────────────────────────────────────────────────────────┤
│ N         │ ID of a matching Bulk Data VCCT entry specifying the crack. │
└───────────┴─────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry can only be used in SOL 400.
2. Different sets of cracks can be selected for different subcases using this option.
