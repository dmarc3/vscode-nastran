## [K4RITZ](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.K4RITZ.xhtml)

Default    = 0

Setting PARAM,K4RITZ to a positive value activates logic to generate additional residual vectors for SOL 111 when using ACMS to compute the modal space. Structural damping degrees of freedom (K4) are used to augment the existing set of residual vectors in order to capture damping effects when GE inputs might contribute significantly to overall frequency response. The value of K4RITZ specifically controls the number of iterations performed to compute the basis vectors. Due to extra computation required, this parameter should be used with caution and should rarely be set greater than 1.

