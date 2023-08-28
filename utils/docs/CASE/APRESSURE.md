## [APRESSURE (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.APRESSURE.Case.xhtml) - Aerodynamic Pressure Output Request

Requests the aerodynamic pressures in static aeroelastic response.

#### Format:

![casecontrol4a00812.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00812.jpg?_LANG=enus)  

#### Examples:
```nastran
APRES=ALL
APRES=6
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a previously appearing SET command. Only aerodynamic pressures on the │
│           │ referenced aerodynamic boxes will be output (Integer  >  0).                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Pressures at all points will be output.                                                            │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
