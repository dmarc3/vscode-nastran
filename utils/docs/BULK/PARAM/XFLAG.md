## [XFLAG](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.XFLAG.xhtml)

Default    = 0

By default (XFLAG = 0), when temperature loads and element deformations are present, the element strain energy for the linear elements is calculated using the following equation:

![parameters01863.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01863.jpg?_LANG=enus)  

where  ![parameters01865.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01865.jpg?_LANG=enus)  is the deformation,  ![parameters01867.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01867.jpg?_LANG=enus)  is the element stiffness and  ![parameters01869.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01869.jpg?_LANG=enus)  is the element load vector for temperature differences and element deformations. If XFLAG is set to 2, the element strain energy for linear elements is calculated using the following equation:

![parameters01871.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01871.jpg?_LANG=enus)  

The latter formula is the same strain energy calculation used for nonlinear elements.

When requesting Case Control commands ESE or EDE and executing SOL 108 or SOL 111, if Nastran detects frequency dependent elements (CBUSH if referred to by PBUSH/PBUSHT; CELAS1, CELAS3 if referred to by PELAS/PELAST; CDAMP1, CDAMP3 if referred to by PDAMP/PDAMPT), Nastran will automatically remove the entire class of CBUSH, or CELAS1, or CELAS3, or CDAMP1, or CDAMP3 elements, whether or not all of a class are frequency dependent, from the residual (SE0) energy calculations because frequency dependent elements are not fully implemented in the ESE/EDE calculations and may result in wrong answers. USER INFORMATION MESSAGE 5245 will be issued for each class removed. If the user wishes to override this removal, set XFLAG to 32. If the user wants XFLAG=2 and XFLAG=33, then set XFLAG=34.

