## [FKSYMFAC](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.FKSYMFAC.xhtml)

Default = 0.024

Follower force stiffness is typically unsymmetric, but in some cases making it symmetric may improve convergence in nonlinear problems, whereas in other cases it may hinder it.

FKSYMFAC controls the symmetrization of the follower force stiffness in SOL 106 and SOL 400. If FKSYMFAC = 1.0 is specified, the follower force stiffness  ![parameters01699.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01699.jpg?_LANG=enus)  is symmetrized as:

![parameters01701.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01701.jpg?_LANG=enus)  

and the symmetric part  ![parameters01703.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01703.jpg?_LANG=enus)  is used for efficiency. If FKSYMFAC= 0. is specified, the original follower force stiffness  ![parameters01705.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01705.jpg?_LANG=enus)  is used. If a value of 0. <  FKSYMFAC < 1. is specified, the non-symmetric part of the follower force stiffness is calculated as:

![parameters01707.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01707.jpg?_LANG=enus)  

and the ratio of unsymmetry:

![parameters01709.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01709.jpg?_LANG=enus)  

is compared with the user specified value of FKSYMFAC. The norm  ![parameters01711.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01711.jpg?_LANG=enus)  is the absolute maximum number of the matrix.

If  r  < FKSYMFAC, the symmetric stiffness  ![parameters01713.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01713.jpg?_LANG=enus)  is used.

If  r  > FKSYMFAC, the original unsymmetric stiffness  ![parameters01715.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01715.jpg?_LANG=enus)   is used.

The default value for FKSYMFAC was determined by a parametric study and for most cases this will make the follower force stiffness symmetric, which will give sufficiently accurate answers. The asymmetry ratio(r) increases as geometric nonlinearity intensifies so when it becomes greater than FKSYMFAC, the unsymmetric follower force stiffness is used.

It is considered important to retain the full unsymmetric follower force stiffness, set FKSYMFAC to zero.

The parameter FKSYMFAC is applicable to SOL 106 and SOL 400 only, all other solution sequences symmetrize the follower force stiffness.  See parameter FOLLOWK for a list of solution sequences which calculate the follower force stiffness.

