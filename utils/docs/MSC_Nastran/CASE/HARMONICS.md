## [HARMONICS (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.HARMONICS.Case.xhtml) - Harmonic Analysis or Printout Control

Controls the number of harmonics output in axisymmetric shell or axisymmetric fluid problems; controls the number of harmonics to be used for analysis in cyclic symmetry problems.

#### Format for Axisymmetric Problems:

![casecontrol4a01066.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01066.jpg?_LANG=enus)  

#### Format for Cyclic Symmetric Problems:

![casecontrol4a01068.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01068.jpg?_LANG=enus)  

#### Examples:

```nastran
HARMONICS=ALL
HARMONICS=32
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ All harmonics will be output in the case of axisymmetric shell or axisymmetric fluid problems. All │
│           │ harmonics will be used for analysis in cyclic symmetry problems.                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE      │ No harmonics will be output. This option is not available for use in cyclic symmetry problems.     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ h         │ Available harmonics up to and including harmonic h will be output in the case of axisymmetric      │
│           │ shell or axisymmetric fluid problems (Integer  >  0).                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Harmonics specified in SET n will be used for analysis in cyclic symmetry problems (Integer  >     │
│           │  0).                                                                                               │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If no HARMONICS command is present in the Case Control Section for axisymmetric shell or fluid problems, printed output is prepared only for the zero harmonic.
2. This command must   be present in cyclic symmetry problems with HARMONICS=ALL or n; otherwise, the program will abort without performing any analysis.
3. In cyclic symmetry analysis, n must be defined as a set of integers on a SET command.
