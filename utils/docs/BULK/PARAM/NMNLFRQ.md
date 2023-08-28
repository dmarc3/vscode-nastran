## [NMNLFRQ](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.NMNLFRQ.xhtml)

Default = 0.0

PARAM, NMNLFRQ, Real_Value allows users to select material or property values for frequency dependent materials or properties at a desired frequency other than the “nominal” values specified on the MATi or PBUSH, PCOMP, PCOMPG, PDAMP, or PELAS entries.

If there is only CBUSH frequency dependency and NO other type of material dependency, then Nastran will not use/update the CBUSH properties at the specified NMNLFRQ.

