## [SELREDUCE (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SELREDUCE.Case.xhtml) - Superelement Load Assembly and Reduction

Specifies the superelement identification numbers for which the static load matrices will be assembled and reduced.

#### Format:

![casecontrol4a01314.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01314.jpg?_LANG=enus)  

#### Examples:

```nastran
SELREDUCE=ALL
SELREDUCE=9
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Assembles and reduces matrices for all superelements.                                            │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a previously appearing SET command. Matrices will be assembled only │
│           │ for superelements with identification numbers that appear on this SET command (Integer  >  0).   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ i         │ Identification number of a single superelement for which the load matrices will be assembled and │
│           │ reduced (Integer  >  0).                                                                         │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This command, if present, must be located before the first SUBCASE command.
2. Zero (0) is the identification number for the residual structure, and can only be appear as a member of a SET.
3. For a further discussion of this command, see   in the  MSC Nastran Reference Guide .
4. This command is used on restarts to selectively assemble and reduce load matrices.
5. If i is used, the superelement identification number must be unique with respect to any SET identification numbers used.
6. In superelement static analysis, SELREDUCE is equivalent to SELASSEMBLE.
7. In dynamic analysis, SELASSEMBLE combines the functions of SELREDUCE and SEMREDUCE.
8. SEALL=ALL is the default, but can be overridden by specifying and of the following Phase 1 commands: SEALL, SEMG, SELG, SEKR, SELR, or SEMR.
