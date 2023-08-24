## [CDIF](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.CDIF.xhtml)

Default    = YES for shape optimization with or without property optimization. 
 
 
Default    = NO for property optimization only.

CDIF may be used to override the default finite difference scheme used in the calculation of pseudo loads in SOL 200.  PARAM,CDIF,YES forces the selection of the central difference scheme used in the semianalytic approach regardless of the type of optimization requested.  PARAM,CDIF,NO forces the selection of the forward difference scheme.

