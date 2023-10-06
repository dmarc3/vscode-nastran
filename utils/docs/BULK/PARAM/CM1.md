## [CM1, CM2](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.CM1.CM2.xhtml)

Default    = (1.0, 0.0)

CM1 and CM2 specify factors for the total mass matrix.  The total mass matrix is

![parameters01623.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01623.jpg?_LANG=enus)  

where  ![parameters01625.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01625.jpg?_LANG=enus)  is selected via the Case Control command M2GG and  ![parameters01627.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01627.jpg?_LANG=enus)  is derived from the mass element entries in the Bulk Data Section.  These are effective only if M2GG is selected in the Case Control Section.

