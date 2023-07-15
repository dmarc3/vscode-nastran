## [MODALSE (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.MODALSE.Case.xhtml) - Modal Strain Energy Request

Requests modal strain energy calculation and specifies the output form.

#### Format:

![casecontrol4a01158.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01158.jpg?_LANG=enus)  

#### Examples:

```nastran
MODALSE= ALL
SET 100= 1, 3, 4, 5, 7
MODALSE(ESORT=ASCEND,THRESH=.0001)= 100
```

```text
┌──────────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                       │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT1        │ Output will be presented as a tabular listing of modes for each frequency or time step.       │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT2        │ Output will be presented as a tabular listing of frequencies or time steps for each mode.     │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT        │ Write the results to the .f06 file (Default).                                                 │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOPRINT      │ Do not write the results to the .f06 file.                                                    │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH        │ Write the results to the punch (.f07) file.                                                   │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ ESORT        │ Present the modal energies sorted by mode number, ascending energy value or descending energy │
│              │ value (Default is MODE).                                                                      │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ THRESH       │ Write out only those energies greater than e (Default = 0.001).                               │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ TIME or FREQ │ Compute energies at all time steps or frequencies or the set of frequencies defined by SET r  │
│              │ (Default = ALL).                                                                              │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ AVERAGE      │ Requests average energy in frequency response analysis only (Default).                        │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ AMPLITUDE    │ Requests amplitude of energy in frequency response analysis only.                             │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ PEAK         │ Requests peak energy for frequency response analysis only. PEAK is the sum of AVERAGE and     │
│              │ AMPLITUDE.                                                                                    │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL, n, NONE │ Compute modal energies for all modes, the modes defined on SET n, or (3) no modes.            │
└──────────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```
