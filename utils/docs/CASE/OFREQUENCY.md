## [OFREQUENCY (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.OFREQUENCY.Case.xhtml) - Output Frequency Set

Selects a set of frequencies for output requests.

#### Format:

![casecontrol4a01224.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01224.jpg?_LANG=enus)  

#### Examples:

```nastran
OFREQUENCY=ALL
OFREQUENCY=15
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Output for all frequencies will be computed.                                                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification of a previously appearing SET command. Output for frequencies closest to those │
│           │ given on this SET command will be output (Integer > 0).                                           │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. In real eigenvalue, buckling, and complex eigenvalue analyses, the OMODES Case Control command allows for an alternate way of selecting the modes to be output based on their mode numbers. In these cases, if both the OMODES and OFREQUENCY requests appear, the OMODES request takes precedence.
2. If this command is not specified in the Case Control Section (or, in the case of real eigenvalue, buckling, and complex eigenvalue analyses, if neither the OMODES nor the OFREQUENCY request is specified), then output will be generated for all frequencies.
3. The number of solutions selected will always be equal to the number of quantities in the selected set. The closest values are used.
4. In flutter analysis (SOL 145), the selected set refers to the imaginary part of the complex eigenvalues. The physical interpretation of this quantity depends on the method of flutter analysis as follows:
     - K- or KE-method: velocity (input units).
     - PK-method: frequency.
5. In aeroelastic response analysis (SOL 146) with RLOAD selection, the selected set refers to the frequency (cycles per unit time).
6. In complex eigenvalue analysis (SOLs 107 and 110), the selected set refers to the imaginary part of the complex eigenvalues.
7. If this command is specified in more than one subcase, then it is recommended that the first subcase contain OFREQ=ALL, and that subsequent subcases contain OFREQ = n. Also, data recovery requests should be specified only in the subsequent subcases. For example:

```nastran
SUBCASE 1
OFREQ = ALL $ 0.0  through 0.5
SUBCASE 2
SET 10 = 0.0 0.1 0.3
OFREQ = 10
DISP = ALL
SUBCASE3
SET 20 = 0.4 0.5
OFREQ = 20
STRESS = ALL
```
