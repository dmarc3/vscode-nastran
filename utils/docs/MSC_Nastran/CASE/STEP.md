## [STEP (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.STEP.Case.xhtml) - Step Delimiter

Delimits and identifies a nonlinear analysis step for SOL 400.

#### Format:

```nastran
STEP=n
```

#### Examples:

```nastran
STEP=10
```

```text
┌───────────┬───────────────────────────────────────────┐
│ Describer │ Meaning                                   │
├───────────┼───────────────────────────────────────────┤
│ n         │ Step identification number (Integer > 0). │
└───────────┴───────────────────────────────────────────┘
```

#### Remarks:

1. The STEP command can only be used in nonlinear solution sequence SOL 400 (NONLIN).
2. The STEP command is to be used below the SUBCASE Case Control command. If no SUBCASE is specified, MSC Nastran creates a default SUBCASE 1.
3. The STEP identification number n in a SUBCASE must be in increasing order, and less than 9999999.
4. The following example illustrates a typical application of SUBCASE and STEP:

```nastran
SUBCASE 1
    STEP 1
        LOAD = 1
    STEP 2
        LOAD = 2
SUBCASE 2
    STEP 10
        LOAD = 10
    STEP 20
        LOAD = 20
```

5. The solutions of all SUBCASEs are independent of each other. However, the solution of any STEP is a continuation of the solution of the previous STEP.
