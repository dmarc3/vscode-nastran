## [FREQUENCY (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.FREQUENCY.Case.xhtml) - Frequency Set Selection

Selects the set of forcing frequencies to be solved in frequency response problems.

#### Format:

```nastran
FREQUENCY=n
```

#### Example:

```nastran
FREQUENCY=17
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of FREQ, FREQ1, FREQ2, FREQ3, FREQ4, and FREQ5 Bulk Data entries. │
│           │ (Integer  > 0)                                                                              │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. A frequency set selection is required for a frequency response problem.
2. A frequency set selection is required for transient response by Fourier methods (SOL 146).
3. All FREQi entries with the same set identification numbers will be used.  Duplicate frequencies will be ignored.  ![casecontrol4a01010.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01010.jpg?_LANG=enus)  and  ![casecontrol4a01012.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01012.jpg?_LANG=enus)  are considered duplicated if
     ![casecontrol4a01014.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01014.jpg?_LANG=enus)  
     where DFREQ is a user parameter with a default of  ![casecontrol4a01016.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01016.jpg?_LANG=enus) .   ![casecontrol4a01018.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01018.jpg?_LANG=enus)  and  ![casecontrol4a01020.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01020.jpg?_LANG=enus)  are the maximum and minimum excitation frequencies of the combined FREQi entries, respectively.
4. If there are multiple frequency response subcases, improved performance can be obtained by making the all the subcases that share the same FREQUENCY ID contiguous.  For SOL 200, it is an error if there are noncontiguous subcases that have the same boundary condition and FREQUENCY ID.
5. When a FATIGUE case control is also present to perform random vibration fatigue analysis using  SOLs   108  and  111 , only one FREQUENCY case control set is allowed for all transfer function SUBCASEs and should be above the SUBCASE level or only present in 1st SUBCASE. The FREQUENCY set cannot change from SUBCASE to SUBCASE or a fatal error is issued.
