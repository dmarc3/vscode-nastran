## [FLUIDNE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.FLUIDNE.xhtml)

Default = 500

The Householder method of eigenvalue extraction is more reliable and is automatically selected for the fluid’s system modes if the acoustic cavity is defined in a superelement and there exists fluid boundary points. The switch to Householder occurs if the number of estimated fluid modes is less than or equal to the value specified by PARAMeter FLUIDNE.

