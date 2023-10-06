## [CB1, CB2](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.CB1.CB2.xhtml)

Default    = (   1.0, 0.0)

CB1 and CB2 specify factors for the total damping matrix.  The total damping matrix is:

![parameters01603.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01603.jpg?_LANG=enus)  

where  ![parameters01605.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01605.jpg?_LANG=enus)  is selected via the Case Control command B2GG and  ![parameters01607.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01607.jpg?_LANG=enus)  comes from CDAMPi or CVlSC element Bulk Data entries.  These parameters are effective only if B2GG is selected in the Case Control Section.

