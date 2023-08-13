## [AEROF (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.AEROF.Case.xhtml) - Aerodynamic Force Output Request

Requests the aerodynamic loads on aerodynamic control points.

#### Format:

```nastran
AEROF=n
```

#### Examples:

```nastran
AEROF=ALL 
AEROF=5
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                   │
├───────────┼───────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification of a previously appearing SET command (Integer  >  0). │
├───────────┼───────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Forces at all points will be output.                                      │
└───────────┴───────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. This command is supported in SOLs 144, 146 (frequency response only) and 200 for ANALYSIS=SAERO.
2. The SET command references box or body element identification numbers.
3. Output is in the units of force or moment.
4. Only aerodynamic forces on points specified on the SET command will be output.
