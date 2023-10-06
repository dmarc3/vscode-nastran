## [MODES (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.MODES.Case.xhtml) - Subcase Repeater

Repeats a subcase.

#### Format:

```nastran
MODES=n
```

#### Example:

```nastran
MODES=3
```

```text
┌───────────┬────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                        │
├───────────┼────────────────────────────────────────────────────────────────┤
│ n         │ Number of times the subcase is to be repeated (Integer  >  0). │
└───────────┴────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This Case Control command can be illustrated by an example. Suppose stress output is desired for the first five modes only, and displacements for the next two modes, and forces for the remaining modes. The following example would accomplish this:

```nastran
SUBCASE 1 $ FOR MODES 1 THRU 5
MODES = 5
STRESS = ALL
SUBCASE 6 $ FOR MODES 6 AND 7
DISPLACEMENTS = ALL
MODES = 2
SUBCASE 8 $ FOR MODE 8 AND REMAINING MODES
FORCE = ALL
```

2. This command causes the results for each mode to be considered as a separate, successively numbered subcase, beginning with the subcase number containing the MODES command. In the preceding example, this means that subcases 1, 2, 3, etc. are assigned to modes 1, 2, 3, etc., respectively.
3. If this command is not used, eigenvalue results are considered to be a part of a single subcase. Therefore, any output requests for the single subcase will   apply for all eigenvalues.
4. All eigenvectors with mode numbers greater than the number of subcases defined in the Case Control Section are printed with the descriptors of the last subcase. For example, to suppress all printout for modes beyond the first three, the following Case Control commands could be used:

```nastran
SUBCASE 1
MODES = 3
DISPLACEMENTS = ALL
SUBCASE 4
DISPLACEMENTS = NONE
BEGIN BULK
```

5. This command may be of no use in non-eigenvalue analysis and may cause data recovery processing to be repeated.
