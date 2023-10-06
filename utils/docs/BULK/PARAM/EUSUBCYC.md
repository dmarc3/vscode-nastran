## [EUSUBCYC ](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.EUSUBCYC.xhtml)

Default = 1, SOL 700 only

Controls the maximum growth of the subcycling interval in Euler computations.

#### Example:

```nastran
PARAM,EUSUBCYC,2
```

#### Remarks:

1. The subcycling algorithm automatically estimates the number of subcycles to be used. This is updated throughout the calculation. This parameter controls how much the number of subcycles can grow. For example, EUSUBCYC is set to 1, and the current number of time steps between updates of the Euler variables. If the solver estimates that the subcycling interval should be 7, the subcycling interval is increased by 1 until a value of 7 is reached.

2. There is no control on the amount by which the subcycling interval can decrease.

