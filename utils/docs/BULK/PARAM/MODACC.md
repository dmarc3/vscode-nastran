## [MODACC](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.MODACC.xhtml)

Default =    -1

* 0 = Selects the mode acceleration method for data recovery in dynamic analysis.  See Formulation of Dynamic Equations in SubDMAP GMA in the MSC Nastran Reference Guide for further discussion. If PARAM,SPARSEDR,NO is specified, then PARAM,DDRMM,-1 must also be specified.
* 1 = Is the same as MODACC = 0 except if SUPORTi entries are present then the displacements are corrected for rigid body motion and the local flexibility at the SUPORTi degrees-of-freedom.
* \>= 0 = Is not recommended for use in hydroelastic problems.
