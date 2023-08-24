## [MEFFMASS (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.MEFFMASS.Case.xhtml) - Modal Effective Mass Output Request

Requests the output of the modal effective mass, participation factors, and modal effective mass fractions in normal modes analysis.

#### Format:

![casecontrol4a01122.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01122.jpg?_LANG=enus)  

#### Examples:

```nastran
MEFFMASS
MEFFMASS(GRID=12, SUMMARY, PARTFAC)
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT     │ Write output to the print file (Default).                                                       │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOPRINT   │ Do not write output to the print file.                                                          │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH     │ Write output to the punch file.                                                                 │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOPUNCH   │ Do not write output to the punch file (Default).                                                │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ gid       │ Reference a grid point for the calculation of the rigid body mass matrix. The default is the    │
│           │ origin of the basic coordinate system.                                                          │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SUMMARY   │ Requests calculation of the total effective mass fraction, modal effective mass matrix, and the │
│           │ rigid body mass matrix (Default).                                                               │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PARTFAC   │ Requests calculation of modal participation factors.                                            │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MEFFM     │ Requests calculation of the modal effective mass in units of mass.                              │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MEFFW     │ Requests calculation of the modal effective mass in units of weight.                            │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FRACSUM   │ Requests calculation of the modal effective mass fraction.                                      │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
