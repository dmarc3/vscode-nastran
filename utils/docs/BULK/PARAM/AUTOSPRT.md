## [AUTOSPRT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.AUTOSPRT.xhtml)

Default = YES

By default, free-free models will be automatically constrained for calculation of residual vectors (RESVEC Case Control command) as long as F1  <  0.0 on the EIGR (or EIGRL) Bulk Data entry. The auto-SUPORT method may be deactivated by specifying a SUPORTi entry, PARAM,AUTOSPRT,NO, or F1 > 0.0.

FZERO is the maximum frequency assumed for a rigid body mode. FZERO is used by the auto-SUPORT method to extract the rigid body frequencies. The default is 1.0.

