## [PAPER SIZE](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/TOC.PAPER.SIZE.xhtml) - Paper Dimensions

Defines the size and type of the paper.

#### Format:

```nastran
PAPER SIZE  h  X or BY  v  [ TYPE  ptype ]
```

#### Example:

```nastran
PAPER SIZE 10. BY 10.
```

```text
┌────────────┬──────────────────────────────────────────────────────────────┐
│ Describers │ Meaning                                                      │
├────────────┼──────────────────────────────────────────────────────────────┤
│ h          │ Horizontal size of paper in inches (Real, Default  =  20.0). │
├────────────┼──────────────────────────────────────────────────────────────┤
│ v          │ Vertical size of paper in inches (Real, Default =  20.0).    │
├────────────┼──────────────────────────────────────────────────────────────┤
│ ptype      │ Paper type (Character, Default  =  “VELLUM”).                │
└────────────┴──────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The default paper size for the PLOTTER NAST is 20 by 20 inches which is converted to a 7 by 7 inch plot frame by the NASPLOT postprocessor.

2. PAPER SIZE can be specified along with the NASPLOT postprocessor to create rectangular plots. For example, the command will result in a 14 by 7 inch plot frame if the default value of 1.0 is used for the SCALE FACTOR on the NASPLOT command. The SCALE FACTOR on the NASPLOT data command can be used to make larger plots having the shape defined with PAPER SIZE.

3. PAPER SIZE also affects the raster count for the NASTRAN plotter. The default raster count is 1000 for a paper size of 20 by 20. Doubling the paper size to 40 by 40 will double the raster count to 2000.
