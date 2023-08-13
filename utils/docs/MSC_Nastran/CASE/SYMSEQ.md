## [SYMSEQ (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SYMSEQ.Case.xhtml) - Symmetry Sequence Coefficients

Specifies the coefficients for combining symmetry subcases into the total structure.

#### Format:

```nastran
SYMSEQ=R1 [,R2,R3,..., Rn]
```

#### Example:

```nastran
SYMSEQ=1.0, -2.0, 3.0, 4.0
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                         │
├───────────┼─────────────────────────────────────────────────────────────────┤
│ Ri        │ Coefficients of the previously occurring n SYM subcases. (Real) │
└───────────┴─────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. SYMSEQ may only appear after a SYMCOM command.
2. The default value for the coefficients is 1.0 if no SYMSEQ command appears.
3. SYMSEQ may only be used in static analysis or inertia relief.
4. Ri is limited to a maximum of 200 numbers.
