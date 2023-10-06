## [IC (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.IC.Case.xhtml) - Transient Analysis Initial Condition Set Selection

Selects the initial conditions for transient analysis (SOLs 109, 112, 129, 159 and 400).

#### Format:

![casecontrol4a01078.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01078.jpg?_LANG=enus)  

#### Examples:

```nastran
IC = 10
IC(PHYSICAL)  = 100
IC(MODAL)  = 200
IC(STATSUB)  = 1000
IC(STATSUB,DIFFK)  = 2000
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHYSICAL  │ The TIC Bulk Data entries selected by set n define initial conditions for coordinates involving   │
│           │ grid, scalar, and extra points (Default).                                                         │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODAL     │ The TIC Bulk Data entries selected by set n define initial conditions for modal coordinates and   │
│           │ extra points. See Remark 3.                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STATSUB   │ Use the solution of the static analysis subcase n as the initial condition. See Remark 4.         │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DIFFK     │ Include the effects of differential stiffness in the solution. See Remarks 4. and 5.              │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ For the PHYSICAL (Default) and MODAL options, n is the set identification number of TIC Bulk Data │
│           │ entries for structural analysis (SOLs 109, 112 and 129) or TEMP and TEMPD entries for heat        │
│           │ transfer analysis (SOLs 159 and 400). For the STATSUB option, n is the ID of a static analysis    │
│           │ subcase (Integer > 0).                                                                            │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. For structural analysis, TIC entries will not be used (therefore, no initial conditions) unless selected in the Case Control Section.
2. Only the PHYSICAL option (Default) may be specified in heat transfer analysis (SOL 159 and SOL 400 ). The initial temperature of a point should be equal to its boundary temperature at time = 0. For SOL 400 transient thermal analysis, the boundary temperature at time = 0 takes precedence over the initial temperature if both temperatures are not identical.
3. IC(MODAL) may be specified only in modal transient analysis (SOL 112).
4. IC(STATSUB) and IC(STATSUB,DIFFK) cannot be specified together in the same run. This will cause FATAL and stop the execution.
5. The DIFFK keyword is meaningful only when used in conjunction with the STATSUB keyword.
6. The following examples illustrate the usage of the various options of the IC Case Control command.

     
Example (a)

```nastran
$ SPECIFY INITIAL CONDITIONS FOR PHYSICAL COORDINATES
$ IN SOL 109 OR SOL 112
IC(PHYSICAL)  = 100
or
IC = 100
```

Example (b)

```nastran
$ SPECIFY INITIAL CONDITIONS FOR MODAL COORDINATES
$ IN SOL 112
IC(MODAL)  = 200
```

Example (c)

```nastran
$ SPECIFY STATIC SOLUTION AS INITIAL CONDITION
$ IN SOL 109 OR SOL 112
$ (DIFFERENTIAL STIFFNESS EFFECT NOT INCLUDED)
SUBCASE 10 $ STATIC ANALYSIS
LOAD = 100
SUBCASE 20 $ TRANSIENT ANALYSIS
IC(STATSUB)  = 10 $ POINTS TO STATIC ANALYSIS SUBCASE ID
```

Example (d)

```nastran
$ SPECIFY STATIC SOLUTION AS INITIAL CONDITION
$ IN SOL 109 OR SOL 112
$ (DIFFERENTIAL STIFFNESS EFFECT INCLUDED
SUBCASE 100 $ STATIC ANALYSIS
LOAD = 1000
SUBCASE 200 $ TRANSIENT ANALYSIS
IC(STATSUB,DIFFK)  = 100 $ POINTS TO STATIC ANALYSIS SUBCASE ID
```

7. In thermal chaining analysis, this command will be ignored if the transient thermal analysis is not specified as the first step of a model.
