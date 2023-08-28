## [MAXAPL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.MAXAPL.xhtml)

Default = 1000

MAXAPL specifies the maximum number of applied loads to be used as a basis for residual vector calculations. If the number of applied loads exceeds MAXAPL, User Warning Message 9166 is issued, and residual vector augmentation is disabled. Note that the computing requirements for a large number of residual vectors can be prohibitive. See also, the RESVEC Case Control command.

