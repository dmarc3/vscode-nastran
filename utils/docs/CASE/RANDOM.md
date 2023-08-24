## [RANDOM (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.RANDOM.Case.xhtml) - Random Analysis Set Selection

Selects the RANDPS and RANDT1 Bulk Data entries to be used in random analysis.

#### Format:

![casecontrol4a01266.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01266.jpg?_LANG=enus)  

#### Examples:

```nastran
RANDOM=177
SET 10=100 110 120 
RANDOM=10
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a previously appearing SET command, which in turn references multiple │
│           │ RANDPS/RANDT1 Bulk Data entries with different set identification numbers.                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ i         │ Set identification number of RANDPS and RANDT1 Bulk Data entries to be used in random analysis     │
│           │ (Integer  >  0).                                                                                   │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. RANDOM must select RANDPS Bulk Data entries to perform random analysis.
2. RANDOM must appear in the first subcase of the current loop. RANDPS Bulk Data entries may not reference subcases in a different loop. Loops are defined by a change in the FREQUENCY command, or changes in the K2PP, M2PP, or B2PP commands.
3. If RANDPS entries are used in a superelement analysis, the RANDOM command may be specified above the subcase level if a condensed subcase structure (SUPER=ALL) is used. If a condensed subcase structure is not used, then a unique RANDOM selection of a unique RANDPS entry must be specified within each of the desired superelement subcases.
4. If a SET is referenced by n, then the SET identification number must be unique with respect to all RANDPS/RANDT1 set identification numbers.
