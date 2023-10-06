## [FDRLDS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.FDRLDS.xhtml)

Default = YES

PARAM, FDRLDS, YES turns on the logic to generate additional residual vectors for SOL 111 based on the differences of structural and structural damping matrices. For free-free models, a SUPORT entry may improve the free-free modes and yield additional augmented eigenvalues (PARAM, BAILOUT, -1 may occasionally be needed even for a good static SUPORT set). PARAM, FDRLDS, NO can be used to turn off the generation of frequency dependent residual vectors.

