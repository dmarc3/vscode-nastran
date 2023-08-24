## [CK3](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.CK3.xhtml)

Default    =    (1.0, 0.0)

CK3 specifies a factor for the stiffness derived from GENEL Bulk Data entries.  The total stiffness matrix is

![parameters01617.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01617.jpg?_LANG=enus)  

where  ![parameters01619.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01619.jpg?_LANG=enus)  comes from the GENEL Bulk Data entries and  ![parameters01621.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01621.jpg?_LANG=enus)  is derived using PARAMs CK1 and CK2.  CK3 is effective only if GENEL entries are defined.  Related parameters include CK1 and CK2.

