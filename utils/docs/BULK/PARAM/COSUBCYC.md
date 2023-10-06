## [COSUBCYC](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.COSUBCYC.xhtml)

Default = 1, SOL 700 only

Controls the growth of the subcycling interval in the coupling surface.

#### Example:

```nastran
PARAM,COSUBCYC,2
```

#### Remarks:

1. The subcycling algorithm automatically estimates the number of subcycles to be used. This is updated throughout the calculation. This parameter controls how much the number of subcycles can grow. For example, COSUBCYC is set to 1, and the current number of time steps between updates of the coupling geometry is 4. If the solver estimates that the subcycling interval should be 7, the subcycling interval is increased by 1 until a value of 7 is reached.

2. There is no control on the amount by which the subcycling interval can decrease.

