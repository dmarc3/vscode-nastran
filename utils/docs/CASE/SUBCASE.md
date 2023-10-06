## [SUBCASE (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SUBCASE.Case.xhtml) - Subcase Delimiter

Delimits and identifies a subcase.

#### Format:

```nastran
SUBCASE=n
```

#### Example:

```nastran
SUBCASE=101
```

```text
┌───────────┬──────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                  │
├───────────┼──────────────────────────────────────────────────────────┤
│ n         │ Subcase identification number (9999999 > Integer  >  0). │
└───────────┴──────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The subcase identification number, n, must be greater than all previous subcase identification numbers.
2. Plot requests and RANDPS requests refer to n.
3. See the MODES Case Control command for use of this command in normal modes analysis.
4. If a comment follows n, then the first few characters of the comment will appear in the subcase label in the upper right-hand corner of the output.
5. Note that in nonlinear statics (SOL106/129), SUBCASE's are not stand-alone solutions like in other solution sequences. They act as a load-progression, and the ending conditions of one SUBCASE become the initial conditions of the next SUBCASE.
