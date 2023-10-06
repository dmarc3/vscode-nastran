## [PEMFRIM](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.PEMFRIM.xhtml)

PARAM,PEMFRIM,1 is used to request full Reduced Impedance Matrix (RIM) from Actran, instead of lower-triangular RIM. By default (PARAM,PEMFRIM,0), Actran returns lower-triangular RIM. Note that PEMFRIM will increase disk space demand of PEM job. In addition, OOC field of ACPEMCP will cause Actran to generate full RIM when set to an integer greater than 1.

