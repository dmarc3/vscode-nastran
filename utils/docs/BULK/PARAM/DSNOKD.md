## [DSNOKD](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.DSNOKD.xhtml)

Default    =    0.0

DSNOKD specifies a scale factor to the differential stiffness matrix in buckling design sensitivity analysis.  If DSNOKD > 0.0, the effect of the differential stiffness matrix is included in buckling the design sensitivity analysis.

If PARAM,DSNOKD,1.0 is specified in SOL 200, the differential stiffness sensitivity calculation is performed more accurately; i.e., the change in the stiffness matrix due to the changes in the displacements are computed. However, the calculation is more expensive than with PARAM,DSNOKD,0.0.

Non-zero values of PARAM,DSNOKD cannot be used in SOL 200 with multiple buckling design subcases less each subcase contains the same STATSUB command.

