## [NOUTPUT (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.NOUTPUT.Case.xhtml) - Normal Output Request in Cyclic Symmetry Problems

Requests physical output in cyclic symmetry problems.

#### Format:

![casecontrol4a01218.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01218.jpg?_LANG=enus)  

#### Examples:

```nastran
NOUTPUT (R)=ALL
NOUTPUT (2)=5
NOUTPUT (4,L)=10
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Output for all segments is desired.                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ m         │ Output for segments specified in SET m is desired (Integer  >  0).                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k         │ Used in eigenvalue analysis to request eigenvector and internal force output for harmonics         │
│           │ specified in SET k (Integer  >  0).                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ R, L      │ Output for only the right- or left-half of segments specified as ALL or in SET m. R and L are used │
│           │ in dihedral symmetry only.                                                                         │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Sets k and m are defined on SET commands.
2. In cyclic symmetry analysis, this command, or the HOUTPUT command, is required to obtain data recovery.
