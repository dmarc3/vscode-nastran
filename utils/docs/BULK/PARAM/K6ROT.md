## [K6ROT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.K6ROT.xhtml)

Default    = 100.

K6ROT specifies the scaling factor of the penalty stiffness to be added to the normal rotation for CQUAD4 and CTRIA3 elements. The contribution of the penalty term to the strain energy functional is

![parameters01723.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01723.jpg?_LANG=enus)  with  ![parameters01725.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01725.jpg?_LANG=enus)

where  ![parameters01727.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01727.jpg?_LANG=enus)  is the area of the shell element,  ![parameters01729.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01729.jpg?_LANG=enus)  is the shell thickness,  ![parameters01731.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01731.jpg?_LANG=enus)  is the in plane shear modulus, see the MID1 material identification number on the  PSHELL  Bulk Data entry. The in plane displacements  ![parameters01733.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01733.jpg?_LANG=enus)   and the normal rotation   ![parameters01735.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01735.jpg?_LANG=enus)  are shown in  Figure 6-1 . The normal rotation has no physical meaning and should be ignored. The penalty stiffness removes the singularity in the normal rotation. A higher value than K6ROT=100. is not recommended because unwanted stiffening effects may occur. If you use only the MID1field, Nastran automatically sets K6ROT=0.0

![parameters01737.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01737.jpg?_LANG=enus)

Figure 6-1   In plane displacements  ![parameters01739.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01739.jpg?_LANG=enus)  and normal rotation  ![parameters01741.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01741.jpg?_LANG=enus)

