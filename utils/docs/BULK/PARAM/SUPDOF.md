## [SUPDOF](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.SUPDOF.xhtml)

Default = 0

Digits 1 through 6 indicate which of the six rigid body degrees of freedom are supported for a Solution 144 run. For example, SUPDOF=35 indicates that the plunge (3) and pitch (5) degrees of freedom are supported. This parameter is optional. If omitted, Nastran will compute these data using a numerical method.

