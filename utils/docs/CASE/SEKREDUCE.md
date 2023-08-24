## [SEKREDUCE (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SEKREDUCE.Case.xhtml) - Superelement Stiffness Matrix Assembly and Reduction

Specifies the superelement identification numbers for which stiffness matrices are assembled and reduced.

#### Format:

![casecontrol4a01310.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01310.jpg?_LANG=enus)  

#### Examples:

```nastran
SEKREDUCE=ALL
SEKREDUCE=9
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Assembles and reduces matrices for all superelements.                                            │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a previously appearing SET command. Matrices will only be assembled │
│           │ for superelements with identification numbers that appear on this SET command (Integer  >  0).   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ i         │ Identification number of a single superelement for which the stiffness matrix will be assembled  │
│           │ and reduced (Integer  >  0).                                                                     │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This command, if present, must be located before the first SUBCASE command.
2. Zero (0)   is the identification number for the residual structure, and can only appear as a member of a SET.
3. For a further discussion of this command, see   in the  MSC Nastran Reference Guide .
4. SEKREDUCE is an alternate form, and is entirely equivalent to the obsolete command SEMASSEMBLE.
5. SEALL=ALL is the default, but can be overridden by specifying any of the following Phase 1 commands: SEALL, SEMG, SELG, SEKR, SELR, or SEMR.
