## [SUBCOM (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SUBCOM.Case.xhtml) - Combination Subcase Delimiter

Delimits and identifies a combination subcase.

#### Format:

```nastran
SUBCOM = n
```

#### Example:

```nastran
SUBCOM = 125
```

```text
┌───────────┬────────────────────────────────────────────────┐
│ Describer │ Meaning                                        │
├───────────┼────────────────────────────────────────────────┤
│ n         │ Subcase identification number (Integer  >  2). │
└───────────┴────────────────────────────────────────────────┘
```

#### Remarks:

1. The subcase identification number, n, must be greater than all previous subcase identification numbers.
2. A SUBSEQ command must follow this command.
3. SUBCOM may only be used in SOL 101 (statics) or SOL 144 (static aeroelasticity) and in SOL 200 with ANALYSIS=STATICS or ANALYSIS=SAERO.  
4. Output requests above the subcase level will be used.
5. If the referenced subcases contain thermal loads or element deformations, the user must define the temperature field in the SUBCOM with a TEMP(LOAD) command, or the element deformations with a DEFORM command.
6. SUBCOMs may be specified in superelement analysis with the following recommendations:
a. For each superelement, specify its SUBCASE(s) consecutively, directly followed by its SUBCOM(s).
b. Specify a SUPER command with a new load sequence number under each SUBCOM command.
     The following example demonstrates a model with one superelement and one load combination:

```nastran
SUBCASE 101
SUPER=1,1
LOAD=100
SUBCASE 102
SUPER=1,2
LOAD=200
SUBCOM 110
LABEL=COMBINE SUBCASES 101 AND 102
SUPER=1,3
SUBSEQ=1.,1.
SUBCASE 1001
SUBCASE 1002
SUBCOM 1010
LABEL=COMBINE SUBCASES 1001 AND 1002
SUBSEQ=1.,1.
```

7. For static aeroelasticity, only the displacement/element responses are combined. Trim, stability derivative and monitor point results are not combined.
8. SUBCOMs are not allowed in external superelement creation runs and are ignored in external superelement data recovery in assembly runs.
9. For SOL 200, a compliance response is not combined. SUBCASE/DRSPAN must be used for combining compliance response.
