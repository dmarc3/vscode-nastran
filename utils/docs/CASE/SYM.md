## [SYM (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SYM.Case.xhtml) - Symmetry Subcase Delimiter

Delimits and identifies a symmetry subcase.

#### Format:

```nastran
SYM=n
```

#### Example:

```nastran
SYM=123
```

```text
┌───────────┬────────────────────────────────────────────────┐
│ Describer │ Meaning                                        │
├───────────┼────────────────────────────────────────────────┤
│ n         │ Subcase identification number (Integer  >  0). │
└───────────┴────────────────────────────────────────────────┘
```

#### Remarks:

1. The subcase identification number n must be greater than all previous subcase identification numbers.
2. Plot commands should refer to n.
3. Overall output commands will not propagate into a SYM subcase (i.e., any output desired must be requested within the subcase).
4. SYM may only be used in statics or inertia relief problems.
