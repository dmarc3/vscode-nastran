## [SUBSEQ1 (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SUBSEQ1.Case.xhtml) - Subcase Factors for Combination

Gives the factors for linear combination of a specific group of SUBCASEs.

#### Format:

```nastran
SUBSEQ1= s0, s1, sub1, s2, sub2, [sn, subn]
```

#### Example:

```nastran
SUBSEQ1= 1.0, 1.0, 101, -1.0, 102
```

```text
┌───────────┬───────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                   │
├───────────┼───────────────────────────────────────────────────────────┤
│ S0        │ Factor for all SUBCASEs involved. (No default; Real<>0.). │
├───────────┼───────────────────────────────────────────────────────────┤
│ Sn        │ Factor applicable to SUBn only (Real; No default).        │
├───────────┼───────────────────────────────────────────────────────────┤
│ SUBn      │ SUBCASE ID (No default; Integer>0).                       │
└───────────┴───────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The SUBSEQ1 command can only appear after a SUBCOM command.
2. SUBSEQ1 may only be used in SOL 101 (Statics) or SOL 144 (Static Aeroelasticity) and in SOL 200 with ANALYSIS=STATIC or ANALYSIS=SAERO.
3. SUBSEQ1 and SUBSEQ are mutually exclusive and can't both appear under a SUBCOM.
4. S0, S1 and SUB1are required input for SUBSEQ1.  S2,SUB2 to Sn,SUBn pair are optional.
