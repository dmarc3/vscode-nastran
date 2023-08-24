## [COSUBMAX](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.COSUBMAX.xhtml)

Default = 0, SOL 700 only

Defines the maximum number of subcycles that can occur in Euler/Lagrange coupling. During a subcycle, the geometry of the coupling surface is not updated.

#### Example:

```nastran
PARAM,COSUBMAX,10
```

#### Remarks:

1. Updating the coupling geometry takes a lot of CPU time. Subcycling gives substantial savings in CPU time for coupled calculations.

2. The smaller the value of this parameter, the greater the accuracy of the analysis and the greater the cost. Conversely, larger values offer significant CPU savings, but very large values give incorrect results.

3. If the geometry of the coupling surface is changing rapidly, smaller values of PARAM,COSUBMAX should be used.

