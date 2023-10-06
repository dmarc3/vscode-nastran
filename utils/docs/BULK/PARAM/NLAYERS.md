## [NLAYERS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.NLAYERS.xhtml)

Default = 5 for CQUAD4 and CTRIAR, 7 for CQUADR and CTRIAR, 3 for CAXISYM (minimum=1, maximum=12) (SOLs 106, 129, 153, 159, and 400)

NLAYERS is used in material nonlinear analysis only and is the number of layers used to integrate through the thickness of CQUAD4, CTRlA3 CQUADR, CTRIAR and CAXISYM elements with isotropic material properties. Set NLAYERS=1 for efficiency if no bending is selected (MID2=0 or -1 on all PSHELL entries).  Do not specify NLAYERS=1 if MID2 is greater than zero. A larger value of NLAYERS will give greater accuracy at the cost of computing time and storage requirements. For CQUADR and CTRIAR, the maximum is 11.

