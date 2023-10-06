## [TINY](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.TINY.xhtml)

Default    = 1.E-3

Any elements with strain energy that is less than a TINY percentage of the total strain energy for any superelement will not be printed or made available for postprocessing by MSC Patran or other programs.  TINY may also be used to suppress the printing of small numbers in the constraint check matrix [E mh ] described in  Geometry Processing in SubDMAP PHASE0   in the MSC Nastran Reference Guide .

