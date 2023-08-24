## [DFREQ](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.DFREQ.xhtml)

Default    = 10 -5

DFREQ specifies the threshold for the elimination of duplicate frequencies on all FREQi Bulk Data entries.  Two frequencies,  ![parameters01655.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01655.jpg?_LANG=enus)  and  ![parameters01657.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01657.jpg?_LANG=enus) , are considered duplicated if

![parameters01659.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01659.jpg?_LANG=enus)  

where  ![parameters01661.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01661.jpg?_LANG=enus)  and  ![parameters01663.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01663.jpg?_LANG=enus)  are the maximum and minimum excitation frequencies of the combined FREQi entries.

