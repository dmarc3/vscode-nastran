## [SUBSEQ (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SUBSEQ.Case.xhtml) - Subcase Sequence Coefficients

Gives the coefficients for forming a linear combination of the previous subcases.

#### Format:

```nastran
SUBSEQ=R1 [, R2, R3, ..., Rn]
```

#### Example:

```nastran
SUBSEQ=1.0, -1 .0, 0.0, 2.0
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ Ri        │ Coefficients of the previously occurring subcases. See Remark 4. (Real). │
└───────────┴──────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The SUBSEQ command can only appear after a SUBCOM command.
2. SUBSEQ may be only used in SOL 101 (statics) or SOL 144 (static aeroelasticity) and in SOL 200 with ANALYSIS=STATICS or ANALYSIS=SAERO.  
3. This command list is limited to a maximum of 200 numbers.
4. R1 to Rn refer to the immediately preceding subcases. In other words, Rn is applied to the most recently appearing subcase, R(n - 1) is applied to the second most recently appearing subcase, and so on. The embedded comments ($) describe the following example:

```nastran
DISPL = ALL
SUBCASE 1
SUBCASE 2
SUBCOM 3
SUBSEQ = 1.0, -1.0 $ SUBCASE 1 - SUBCASE 2
SUBCASE 11
SUBCASE 12
SUBCOM 13
SUBSEQ = 0.0, 0.0, 1.0, -1 .0 $ SUBCASE 11 - SUBCASE 12
```

or

```nastran
SUBSEQ = 1.0, - 1.0 $ EQUIVALENT TO PRECEDING COMMAND.  USE ONLY ONE.
```
