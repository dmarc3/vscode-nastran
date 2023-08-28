## [TRMBIM   ](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.TRMBIM.xhtml)

Default = PHYSICAL

TRMBIM is used to define the formulation used for reduced impedance matrix, RIM, for all trim components requested under TRIMGRP case control commands. Its default is 'PHYSICAL' which will generate RIM in physical coordinates. The other valid options for TRMBIM are.

1. 'MODAL' which will produce RIM in modal coordinates

2. 'DATACHK' which perform dry run without producing Reduce Impedance Matrix or results. Job will be terminated afterwards.

