## [CURVELINESYMBOL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.CURVELINESYMBOL.xhtml) - Curve, Line and Symbol Selection

Selects lines and/or symbols to be drawn through the x-y points.

#### Format:

```nastran
CURVELINESYMBOL  symtype
```

#### Example:

```nastran
CURV 4
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ symtype   │ Specifies the symbol drawn at the x-y points. If symtype is 0 then only lines will be drawn      │
│           │ through the points with no symbol. If symtype is less than zero then only the symbol and not the │
│           │ lines will be drawn. If symtype is greater than zero then both the symbol and the lines will be  │
│           │ drawn (-9 <  Integer  <  9; Default =  0).                                                       │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

```text
┌─────────┬────────┐
│ symtype │ Symbol │
├─────────┼────────┤
│ 0       │ none   │
├─────────┼────────┤
│ 1       │ X      │
├─────────┼────────┤
│ 2       │ *      │
├─────────┼────────┤
│ 3       │ +      │
├─────────┼────────┤
│ 4       │ -      │
├─────────┼────────┤
│ 5       │ .      │
├─────────┼────────┤
│ 6       │ ×      │
├─────────┼────────┤
│ 7       │ [ ]    │
├─────────┼────────┤
│ 8       │ < >    │
├─────────┼────────┤
│ 9       │ / \    │
└─────────┴────────┘
```

#### Remark:

1. If more than one curve is plotted per frame, then the symbol number is incremented by 1 for each curve.
