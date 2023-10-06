## [OTIME (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.OTIME.Case.xhtml) - Output Time Set

Selects a set of times for output requests.

#### Format:

![casecontrol4a01236.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01236.jpg?_LANG=enus)  

#### Examples:

```nastran
OTIME =ALL
OTIME =15
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Output for all times will be computed.                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a previously appearing SET command. Output for times closest to those │
│           │ given on this SET command will be computed (Integer > 0).                                          │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If the OTIME command is not supplied in the Case Control Section, then output for all times will be computed.
2. This command is particularly useful for requesting a subset of the output (e.g., stresses only at peak times, etc.).
3. This command can be used in conjunction with the MODACC module to limit the times for which modal acceleration computations are performed.
4. If this command is specified in more than one subcase in   the modal solution sequences, then it is recommended that the first subcase contain OTIME=ALL, and that subsequent subcases contain OTIME=n. Also, data recovery requests should be specified only in the subsequent subcases. For example:

```nastran
SUBCASE 1
  OTIME ALL
SUBCASE 2
  OTIME = 10
  SET 10 = . . .
  DISP = ALL
SUBCASE 3
  OTIME = 20
  SET 20 = . . .
  STRESS = ALL
```

5. The OTIME command is not effective in nonlinear transient analysis (SOL 129) or in SOL 400, ANALYSIS=NLTRAN. However, the OTIME command can be used in the nonlinear transient thermal analysis (SOL 159) and in SOL400, ANALYS IS=HTRAN to limit the output to specified output times.
6. In superelement analysis, the set definition, using an OTIME command for an upstream superelement, will not be recognized unless a similar request appears for its downstream neighbor. The downstream request should either be comprised of the union of all upstream requests, or left blank, as the OTIME default is ALL. Note that the program does not check to see if this condition is satisfied.
