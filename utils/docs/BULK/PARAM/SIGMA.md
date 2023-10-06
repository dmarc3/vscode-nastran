## [SIGMA](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.SIGMA.xhtml)

Default    = 0.0

The radiant heat flux is proportional to

![parameters01795.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01795.jpg?_LANG=enus)  

where SIGMA is the Stefan-Boltzmann constant, T grid  is the temperature at a grid point, and T ABS  is the scale factor for absolute temperature and may be specified by PARAM,TABS. These parameters must be given in units consistent with the rest of the data in the model. The value for SIGMA in SI units is 
 
 
5.67×10 -8  watt/m 2 K 4 .   The default value causes radiant heat effects to be discarded.

