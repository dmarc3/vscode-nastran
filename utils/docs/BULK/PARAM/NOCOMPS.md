## [NOCOMPS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.NOCOMPS.xhtml)

Default    = +1

NOCOMPS controls the computation and printout of composite element ply stresses, strains and failure indices. If NOCOMPS = 1, composite element ply stresses, strains and failure indices are printed. If NOCOMPS = 0, the same quantities plus element stresses and strains for the equivalent homogeneous element are printed. If NOCOMPS=-1, only element stresses and strains are printed. MAT1, MAT2, or MAT8 entries with MIDs>99999999 run the risk of conflicting with internally generated MAT2 entries when composites are present and should be avoided. Even if no composites are present, MIDs>99999999 signal to shell element stress computations that no STRESS is to be computed. In the case of MIDs>99999999 if the user desires stress calculations for shell elements, even if no composites are present, then PARAM, NOCOMPS, -1 is required.

Homogenous stresses are based upon a smeared representation of the laminate’s properties and in general will be incorrect. Element strains are correct however.

NOCOMPS only supports conventional elements, not advanced elements. For advanced nonlinear element, only ply stress/strain will be output.

