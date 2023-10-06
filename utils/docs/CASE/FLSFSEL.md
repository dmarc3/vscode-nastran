## [FLSFSEL (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.FLSFSEL.Case.xhtml) - Control for Fluid-Structure Frequency Selection

Control for fluid-structure frequency selection.

#### Format:

![casecontrol4a00984.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00984.jpg?_LANG=enus)  

#### Example:

```nastran
FLSFSEL     HFREQ = 4.     HFREQFL = 9
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LFREQFL   │ Requests in Hertz, lower bound frequency for modal fluid calculations.                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ fl1       │ Lower frequency range for fluid, real number.                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HFREQFL   │ Requests in Hertz, upper bound frequency for modal fluid calculations.                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ fl2       │ Upper frequency range for fluid, real number.                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LFREQ     │ Requests in Hertz, lower bound frequency for modal structure calculations.                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ fs1       │ Lower frequency range for structure, real number.                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HFREQ     │ Requests in Hertz, upper bound frequency for modal structure calculations.                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ fs2       │ Upper frequency range for structure, real number                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LMODESFL  │ Lowest modes for fluid portion of model, 0 implies LFREQFL-HFREQFL will determine number of modes. │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ mf        │ Number of lowest modes to use for fluid portion of model.                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LMODES    │ Lowest modes for structure portion of model, 0 implies LFREQ-HFREQ will determine number of modes. │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ms        │ Number of lowest modes to use for structure portion of model.                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FLUIDSE   │ Defines a specified superelement to be used for fluids only.                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ seidf     │ Defines a fluid only superelement.                                                                 │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry represents a collection of PARAM,name,value entries. See   for detailed description of the parameters collected on this entry. The value of any of these parameters may be given as either the character value given in this description, or the numeric value given in   of this guide.
2. If LMODES (or LMODESFL)=0, the retained modes are determined by the parameters LFREQ and HFREQ (or LFREQFL and HFREQFL).
