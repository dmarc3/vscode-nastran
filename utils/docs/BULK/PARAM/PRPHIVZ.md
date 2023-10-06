## [PRPHIVZ](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.PRPHIVZ.xhtml)

Default    = 1.0E37

PRPHIVZ controls the printout of the PHlVZ matrix that contains the component mode eigenvectors of the model.  It includes all degrees-of-freedom with motion except the m-set, eliminated for multipoint constraints.  The FAPPROX matrix contains the square root of the diagonal terms of the generalized stiffness matrix divided by 2 π .  For fixed-boundary solutions, it is a good approximation for the natural frequencies of the component.  For free- or mixed-boundary solutions, it is of a lower value than the natural frequencies.  All terms larger than PRPHlVZ in both matrices will be printed (i.e., PARAM,PRPHIVZ,0.0 causes all terms to be printed).

