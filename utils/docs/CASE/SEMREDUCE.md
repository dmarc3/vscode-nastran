## [SEMREDUCE (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SEMREDUCE.Case.xhtml) - Superelement Mass and Damping Assembly and Reduction

Specifies the superelement identification numbers for which the mass and damping matrices will be assembled and reduced. In buckling analysis, the differential stiffness matrices will be assembled and reduced.

#### Format:

![casecontrol4a01318.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01318.jpg?_LANG=enus)  

#### Examples:

```nastran
SEMREDUCE=ALL
SEMREDUCE=9
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Assembles and reduces matrices for all superelements.                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a previously appearing SET command. Matrices will only be assembled   │
│           │ for superelements with identification numbers that appear on this SET command (Integer  >  0).     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ i         │ Identification number of a single superelement for which the load matrices or the mass and damping │
│           │ matrices will be assembled and reduced (Integer >  0).                                             │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This command, if present, must be located before the first SUBCASE command.
2. Zero (0) is the identification number for the residual structure, and can only appear as a member of a set.
3. This command is used on restart to selectively assemble and reduce mass and damping matrices. For a further discussion of this command, see   in the  MSC Nastran Reference Guide .
4. If i is used, the superelement identification number must be unique with respect to any SET identification numbers used.
5. In dynamic analysis, SELASSEMBLE combines the functions of SELREDUCE and SEMREDUCE.
6. This command has no function in static analysis.
7. SEALL=ALL is the default but can be overridden by specifying any of the following Phase 1 commands: SEALL, SEMG, SELG, SEKR, SELR, or SEMR.
