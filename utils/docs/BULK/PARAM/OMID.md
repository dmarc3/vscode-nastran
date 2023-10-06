## [OMID](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.OMID.xhtml)

Default = NO

To print or punch the results in the material coordinate system, set the parameter OMID to yes. Applicable to forces, strains, and stresses for TRIA3, QUAD4, TRIAR6, and QUAD8. This is available for linear analysis only. Other elements and outputs are not supported. This capability is not supported by post-processors (xdb and op2 output are not changed), by grid point stress output that assumes output is in element coordinate system, random response analysis, heat transfer analysis, stress sorting, MAXMIN Case Control, composite elements, MONPNT3 Bulk Data and external superelement data recovery in the assembly run.

