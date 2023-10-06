## [POSTADF](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.POSTADF.xhtml)

Default = NO

This parameter is used to export the results of frequency analysis responses and participation factors by PFMODE, PFPANEL, and PFGRID in ADF format file. This exportation is requested by setting this parameter to YES. The unit information of the exported functions should be defined by DTI, UNITS statement for this function (see ADAMSMNF statement). If not defined, SI unit will be assumed with the warning message. The ADF file is defined as input data name with the extension “afu” automatically. Alternatively the name can be defined with ASSIGN ADFFILE= statement in FMS section. For the participation factor output, FILTER=0. option should be applied in PFMODE and PFPANEL.

