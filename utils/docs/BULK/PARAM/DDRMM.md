## [DDRMM](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.DDRMM.xhtml)

Default    = 0

DDRMM is only recognized if PARAM,SPARSEDR,NO is specified.

By default, the matrix method of data recovery is used in the modal transient and frequency response solutions. DDRMM=-1 will force calculation of complete g-set solution vectors by the mode displacement method and is required for FATIGUE analysis using SOL 108 or SOL 111 if PARAM,SPARSEDR,no is also specified.

