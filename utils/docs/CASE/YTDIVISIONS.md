## [YTDIVISIONS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.YTDIVISIONS.xhtml) - The Spacing on Y Axis

Specifies spacing of tic marks on the y-axis for upper half frame curves only.

#### Format:

```nastran
YTDIVISIONS  ytd
```

#### Example:

```nastran
YTDI 10
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────┤
│ ytd       │ Number of spaces between tic marks on y-axis (Integer  >  0; Default  =  5). │
└───────────┴──────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. YTDIVISIONS applies to upper half frame curves only.

2. YTDIVISIONS is ignored for a logarithmic y-axis.

