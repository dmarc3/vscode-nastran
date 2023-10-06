## [HOUTPUT (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.HOUTPUT.Case.xhtml) - Harmonic Output Request in Cyclic Symmetry Problems

Requests harmonic output in cyclic symmetry problems.

#### Format:

![casecontrol4a01074.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01074.jpg?_LANG=enus)  

#### Examples:

```nastran
HOUTPUT=ALL
HOUTPUT(C,S)=5
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────┤
│ C, S, C*, S* │ Harmonic coefficients. See Remark 4.                               │
├──────────────┼────────────────────────────────────────────────────────────────────┤
│ ALL          │ All harmonics will be output.                                      │
├──────────────┼────────────────────────────────────────────────────────────────────┤
│ k            │ Set identification number of harmonics for output (Integer  >  0). │
└──────────────┴────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Set k must be defined on a SET command, and output will be computed for all available harmonics in SET k.
2. HOUTPUT=ALL requests output for all   harmonics specified on the HARMONICS command.
3. Either the HOUTPUT or NOUTPUT command is required to obtain data recovery in cyclic symmetry analysis.
4. C and   S correspond to the cosine and sine coefficients when the STYPE field is ROT   or AXI on the CYSYM Bulk Data entry.

   C, S, C*, and S* correspond to the cosine symmetric, sine symmetric, cosine antisymmetric, and sine antisymmetric coefficients, respectively, when the STYPE field is DIH on the CYSYM Bulk Data entry.
