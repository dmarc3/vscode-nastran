## [LANGLE](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.LANGLE.xhtml)

Default = 1

LANGLE specifies the method for processing large rotations in nonlinear analysis.  By default, large rotations are computed with the gimbal angle method in nonlinear analyses SOLs 106, 129, 153, and 159 with geometric nonlinearity (PARAM,LGDlSP,1).  If PARAM,LANGLE,2 is specified, then they are computed with the Rotation Vector method.  The value of LANGLE cannot be changed in a subsequent restart. For SOL 400, users should not use LANGLE. SOL 400 will use the appropriate method depending on type of element or type of analysis.

