## [OMODES (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.OMODES.Case.xhtml) - Output Modes Set

Selects a set of modes for output requests.

#### Format:

![casecontrol4a01234.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01234.jpg?_LANG=enus)  

#### Examples:

```nastran
OMODES = ALL
OMODES = 20
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Output for all extracted modes will be computed (Default).                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification of a previously appearing SET command. Output for those extracted modes │
│           │ appearing on this SET command will be computed.                                            │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This command is valid only in SOLs 103, 105, 107, 110, 111, 112, 145, 146, 200 and 400. It is ignored in all other analyses.
2. In contrast to the OFREQENCY Case Control command, which provides an alternate way of selecting the modes to be output based on their frequencies, the OMODES command allows mode selection based on integer mode ID. For example:

```nastran
SUBCASE 10
  …
  SET 11 = 1,3,5,7
  OMODES = 11
  DISP = ALL
…
SUBCASE 20
  …
  SET 21 = 25., 28., 31.
  OFREQ = 21
  DISP = ALL
…
```

3. If both the OMODES and the OFREQUENCY requests appear, the OMODES request takes precedence.
4. If neither the OMODES nor the OFREQUENCY request is specified, output will be generated for all modes.
5. Note that the OMODES command has no effect on the number of modes computed. It only selects a subset of the computed modes for which output is to be generated.
6. In superelement analysis, the set definition, using an OMODES command, for an upstream superelement, will not be recognized unless a similar request appears for its downstream neighbor. The downstream request should either be comprised of the union of all upstream requests, or left blank, as the OMODES default is ALL. Note that the program does not check to see if this condition is satisfied.
7. If OMODES is used in conjunction with a FATIGUE case control command, the OMODES request must be for contiguous modes from 1 through n and the FTGLOAD bulk data entries cannot invoke modes greater than n.
8. OMODES is intended to be specified above all subcases or in the first subcase. In SOLs 200 and 400, the first subcase would be the first subcase with ANALYSIS=MODES, MTRAN, MFREQ, MCEIG, SEAERO, and FLUTTER. See the MODES command to allow different output requests for individual modes.
