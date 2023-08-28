## [MODESELECT (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.MODESELECT.Case.xhtml) - Computed Mode Selection

Selects a subset of the computed modes for inclusion or exclusion in modal dynamic analysis.

#### Format:

Mode selection based on arbitrary mode numbers:

![casecontrol4a01164.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01164.jpg?_LANG=enus)  

#### Alternate Format 1:

Mode selection based on number of lowest modes:

![casecontrol4a01166.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01166.jpg?_LANG=enus)  

#### Alternate Format 2:

Mode selection based on range of mode numbers:

![casecontrol4a01168.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01168.jpg?_LANG=enus)  

#### Alternate Format 3:

Mode selection based on frequency range:

![casecontrol4a01170.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01170.jpg?_LANG=enus)  

#### Alternate Format 4:

Mode selection based on modal effective mass fraction (MEFFMFRA) criteria:

![casecontrol4a01172.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01172.jpg?_LANG=enus)  

See Remark  14.  for examples illustrating the use of the preceding formats.

```text
┌─────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STRUCTURE   │ References computed modes of the structure (Default).                                              │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FLUID       │ References computed modes of the fluid.                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n > 0       │ Set identification of a previously appearing SET command.  ONLY those modes whose mode numbers are │
│             │ in SET n will be included in the analysis.  If SET n is not defined, then ONLY mode n will be      │
│             │ included in the analysis (Integer).                                                                │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n < 0       │ |n| refers to the set identification of a previously appearing SET command.  The modes whose mode  │
│             │ numbers are in SET |n| will be EXCLUDED from the analysis.  If SET |n| is not defined, then mode   │
│             │ |n| will be EXCLUDED from the analysis (Integer).                                                  │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ lm          │ Number of lowest modes that are to included.  (Integer > 0).                                       │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ lom         │ Lower limit of the mode number range for selecting the modes. See Remark 5. (Integer > 0).         │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ him         │ Upper limit of the mode number range for selecting the modes. See Remark 5. (Integer > lom > 0).   │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ lof         │ Lower limit of the frequency range for selecting the modes. See Remark 6. (Real > 0.0).            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ hif         │ Upper limit of the frequency range for selecting the modes. See Remark 6. (Real > lof > 0.0).      │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNCONSET    │ Specifies a single mode or a set of modes for unconditional inclusion or exclusion, regardless of  │
│             │ the selection criterion, and regardless of the inclusion or exclusion of other modes.              │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ m > 0       │ Set identification of a previously appearing SET command. Modes whose mode numbers are in SET      │
│             │ m will be included in the analysis, regardless of the selection criterion, and regardless of the   │
│             │ inclusion or exclusion of other modes.  If SET m is not defined, then mode m will be included in   │
│             │ the analysis, regardless of the selection criterion, and regardless of the inclusion or exclusion  │
│             │ of other modes (Integer).                                                                          │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ m < 0       │ |m| refers to the set identification of a previously appearing SET command.  Modes whose mode      │
│             │ numbers are in SET |m| will be excluded from the analysis, regardless of the selection criterion   │
│             │ and regardless of the inclusion or exclusion of other modes.  If SET |m| is not defined, then mode │
│             │ |m| will be excluded from the analysis, regardless of the selection criterion and regardless of    │
│             │ the inclusion or exclusion of other modes (Integer).                                               │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TiFR / RiFR │ Flags explicitly listing components whose modal effective mass fraction (MEFFMFRA) values are to   │
│             │ be considered for mode selection.                                                                  │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ tifr / rifr │ Threshold values for the listed TiFR / RiFR components. See Remark 8. (0.0 < Real < 1.0).          │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALLFR       │ Flag indicating that the MEFFMFRA values of components not explicitly listed by the TiFR / RiFR    │
│             │ flags are also to be considered for mode selection.                                                │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ allfr       │ Threshold value for components not explicitly listed by the TiFR / RiFR flags. See Remark 8. (0.0  │
│             │ < Real < 1.0).                                                                                     │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SUM         │ For each specified component, the modes are selected as follows: The modes are first sorted in     │
│             │ descending order of the corresponding MEFFMFRA values.  Then, starting from the first mode in this │
│             │ sorted list, the modes are selected until the sum of corresponding MEFFMFRA values equals or just  │
│             │ exceeds the threshold value for that component (Default).                                          │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ANYMIN      │ Any mode whose MEFFMFRA value for any specified component equals or exceeds the threshold value    │
│             │ for that component will be selected.                                                               │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALLMIN      │ Any mode whose MEFFMFRA values for all of the specified components equal or exceed the             │
│             │ corresponding threshold values for those components will be selected.                              │
└─────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This command is meaningful only in modal dynamic analysis (SOLs 110, 111, 112, 145, 146, and 200).  It is ignored in all other analyses.
2. Only one MODESELECT command is allowed for the structure and only one MODESELECT command is allowed for the fluid and these should be specified above the subcase level.
3. The various formats of this command may not be combined.
4. The computed modes used for mode selection include the augmented modes (if any) resulting from residual vector calculations.
5. If LMODENM is specified without HMODENM, a default value of 10000000 (ten million) is assumed for HMODENM. If HMODENM is specified without LMODENM, a default value of 1 is assumed for LMODENM.
6. If LFREQ is specified without HFREQ, a default value of 1.0E+30 is assumed for HFREQ.  If HFREQ is specified without LFREQ, a default value of 0.0 is assumed for LFREQ.
7. If the format involving the MEFFMFRA criteria is employed, it is not necessary to specify a MEFFMASS Case Control command or, even if such a command is specified, to explicitly request the calculation of the modal effective mass fractions.  In the absence of such a command or request, the program will automatically perform the necessary calculations internally to ensure that the required modal effective mass fractions are computed.
8. If the T1FR / R1FR / ALLFR keywords are specified without the corresponding  tifr  /  r1fr  /  allfr  threshold values, then a default value of 0.95 (that is, 95%) is assumed for these threshold values. If the selection criterion is SUM, and a default value of 0.05 (that is, 5%) is assumed if the selection criterion is ANYMIN or ALLMIN.
9. The modal effective mass for a given mode is a measure of how much mass is associated with that mode, and indicates the sensitivity of that mode to base excitation.  Modal effective mass is meaningful only for fixed base modes.  If a structure is not restrained, all the modal effective mass will be associated with its rigid body modes.
10. When the MODESELECT Case Control command is used in conjunction with the parameters LMODES/LMODESFL, LFREQ/LFREQFL, and HFREQ/HFREQFL, the hierarchy of their usage is as follows:
    - If there is a MODESELECT Case Control command, it takes precedence over the parameters LMODES/LMODESFL, LFREQ/LFREQFL, and HFREQ/HFREQFL.  (It does not matter whether these parameters are defined directly via PARAM entries, or indirectly using the FLSFSEL Case Control command.)
    - If there is no MODESELECT Case Control command, then parameter LMODES/LMODESFL takes precedence over parameters LFREQ/LFREQFL and HFREQ/HFREQFL.  In this case, the number of lowest modes specified by LMODES/LMODESFL will be included in the modal dynamic analysis.
    - If there is no MODESELECT Case Control command and no LMODES/LMODESFL parameter, then parameters LFREQ/LFREQFL and HFREQ/HFREQFL are honored.  In this case, all of the computed modes whose frequencies are in the range specified by LFREQ/LFREQFL and HFREQ/HFREQFL will be included in the modal dynamic analysis.
    - If there is no MODESELECT Case Control command and no LMODES/LMODESFL, LFREQ/LFREQFL, or HFREQ/HFREQFL parameter, then all of the computed modes will be included in the modal dynamic analysis.
11. If a subset of the computed modes is selected for subsequent use in the modal dynamic analysis, the user is informed of this by a User Information Message. Also, a new eigenvalue table indicating the actual modes selected for the analysis is output.  If the user has employed a MODESELECT command involving the MEFFMFRA criteria, the modal effective mass fractions for the selected modes are also output.
12. If the mode selection criterion results in no modes being selected for subsequent use in the modal dynamic analysis, the program terminates the job with a fatal message indicating that no modal formulation is possible.
13. If the use of the MODESELECT command results in the selection of all of the computed modes for subsequent use, the user is informed of this by a User Information Message.
14. The following examples illustrate the use of the various formats of the MODESELECT command described above.```

#### Examples Illustrating Mode Selection Based on Arbitrary Mode Numbers:

```nastran
$ INCLUDE ONLY STRUCTURE MODES 7, 9 AND 12 IN THE ANALYSIS
SET 100 = 7,9,12
MODESELECT = 100
$ EXCLUDE FLUID MODES 5 AND 6 FROM THE ANALYSIS
SET 200 = 5,6
MODESELECT (FLUID)= -200
$ EXCLUDE STRUCTURE MODE 5 FROM THE ANALYSIS
MODESELECT = -5  $  (SET 5 NOT DEFINED)
```

#### Examples Illustrating Mode Selection Based on Number of Lowest Modes:

```nastran
$ INCLUDE THE LOWEST 10 STRUCTURE MODES IN THE ANALYSIS
MODESELECT (LMODES = 10)
$ INCLUDE THE LOWEST 5 FLUID MODES IN THE ANALYSIS
MODESELECT (FLUID LMODES = 5)
```

#### Examples Illustrating Mode Selection Based on Range of Mode Numbers:

```nastran
$ INCLUDE ONLY STRUCTURE MODES 10 THRU 20 IN THE ANALYSIS
MODESELECT (LMODENM = 10  HMODENM = 20)
$ INCLUDE ALL STRUCTURE MODES HIGHER THAN THE 6th MODE
$ IN THE ANALYSIS
MODESELECT (LMODENM = 7)
$ INCLUDE THE LOWEST 10 FLUID MODES IN THE ANALYSIS
MODESELECT (FLUID  HMODENM = 10)
```

#### Examples Illustrating Mode Selection Based on Frequency Range:

```nastran
$ INCLUDE ALL STRUCTURE MODES WITH CYCLIC FREQUENCIES
$ IN THE RANGE OF 0.1 HZ. TO 100.0 HZ. IN THE ANALYSIS
MODESELECT (LFREQ = 0.1  HFREQ = 100.0)
$ INCLUDE ALL STRUCTURE MODES WITH CYCLIC FREQUENCIES
$ EQUAL TO OR BELOW 50.0 HZ., BUT INCLUDE THE 10th AND 11th
$ MODES REGARDLESS OF THEIR CYCLIC FREQUENCIES
SET 1000 = 10, 11
MODESELECT (HFREQ = 50.0  UNCONSET = 1000)
$ INCLUDE ALL STRUCTURE MODES WITH CYCLIC FREQUENCIES
$ EQUAL TO OR ABOVE 5.0 HZ., BUT EXCLUDE THE 6 MODE
$ REGARDLESS OF ITS CYCLIC FREQUENCY
MODESELECT (LFREQ = 5.0  UNCONSET = -6)  $  SET 6 NOT DEFINED
```

#### Examples Illustrating Mode Selection Based on Modal Effective Mass Fraction (MEFFMFRA) Criteria:

```nastran
MODESELECT (T3FR)
```

The default selection criterion of SUM is assumed, and a default value of 0.95 (95%) is therefore assumed for the threshold value for component T3.
As many modes with the highest MEFFMFRA(T3) values as possible, such that the sum of the values is equal to or just exceeds 0.95, will be selected.

```nastran
MODESELECT (T1FR = 0.90  T2FR  R3FR = 0.85)
```

The default selection criterion of SUM is assumed, and a default value of 0.95 (95%) is therefore assumed for the threshold value for component T2.
As many modes with the highest MEFFMFRA(T1) values as possible, such that the sum of the values is equal to or just exceeds 0.90, will be selected.
Similarly, as many modes with the highest MEFFMFRA(T2) values as possible, such that the sum of those values is equal to or just exceeds 0.95, will be selected.
As many modes with the highest MEFFMFRA(R3) values as possible, such that the sum of those values is equal to or just exceeds 0.85, will be selected.

```nastran
MODESELECT (T1FR  T3FR = 0.10  UNCONSET = -6  ANYMIN)
$ SET 6 NOT DEFINED
```

Since the selection criterion is specified as ANYMIN, a default value of 0.05 (5%) is assumed for the threshold value for component T1.
All modes, excluding mode 6, whose:
MEFFMFRA(T1) values are equal to or greater than 0.05  OR
MEFFMFRA(T3) values are equal to or greater than 0.10
will be selected.

```nastran
SET 1000 = 20, 30
MODESELECT (T2FR = 0.1  R3FR = 0.15  ALLFR  UNCONSET = 1000  ALLMIN)
```

The ALLFR flag indicates that the T1, T3, R1, and R2 components which are not explicitly specified above must also be considered in mode selection.  Since the selection criterion is specified as ALLMIN, a default value of 0.05 (5%) is assumed for the threshold value for these components.
All modes whose:
MEFFMFRA(T1) values equal or exceed 0.05  AND
MEFFMFRA(T2) values equal or exceed 0.10  AND
MEFFMFRA(T3) values equal or exceed 0.05  AND
MEFFMFRA(R1) values equal or exceed 0.05  AND
MEFFMFRA(R2) values equal or exceed 0.05  AND
MEFFMFRA(R3) values equal or exceed 0.15
will be selected.
Modes 20 and 30 will be selected regardless of their MEFFMFRA values.
