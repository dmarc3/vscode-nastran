## [SYMCOM (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SYMCOM.Case.xhtml) - Symmetry Combination Subcase Delimiter

Delimits and identifies a symmetry combination subcase.

#### Format:

```nastran
SYMCOM=n
```

#### Example:

```nastran
SYMCOM=123
```

```text
┌───────────┬────────────────────────────────────────────────┐
│ Describer │ Meaning                                        │
├───────────┼────────────────────────────────────────────────┤
│ n         │ Subcase identification number (Integer  >  2). │
└───────────┴────────────────────────────────────────────────┘
```

#### Remarks:

1. The subcase identification number n must be greater than all previous subcase identification numbers.
2. SYMCOM may only be used in statics problems.
3. If the referenced subcases contain thermal loads or element deformations, the user must define the temperature field in the SYMCOM by use of a TEMP(LOAD) command, or the element deformations by a DEFORM command.
4. An alternate command is the SUBCOM command.
5. SYMCOMs may be specified in superelement analysis with the following recommendations:
     - For each superelement, specify its SUBCASEs consecutively, directly followed by its SYMCOM(s).
     - Specify a SUPER command with a new load sequence number under each SYMCOM command.
     The following example represents a model with one superelement and one load combination:

```nastran
SUBCASE 101
SUPER=1,1
LOAD=100
SUBCASE 102
SUPER=1,2
LOAD=200
SYMCOM 110
LABEL=COMBINE SUBCASES 101 AND 102
SUPER=1,3
SYMSEQ=1.,1.
SUBCASE 1001
SUBCASE 1002
SYMCOM 1010
LABEL=COMBINE SUBCASES 1001 AND 1002
SYMSEQ=1.,1.
```
