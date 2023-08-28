## [OSWPPT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.OSWPPT.xhtml)

Integer, Default = -1

Offset for internally generated grid identification numbers for connector elements (GA and GB for CWELD and CFAST if these are not specified and all auxiliary grids for CWELD, CFAST and CSEAM). By default, OSWPPT=-1, the numbering starts with SYSTEM(178) + 1. The default of system cell 178 is SYSTEM(178)=101,000,000. If the user provides OSWPPT > 0, then the numbering starts with OSWPPT + 1.

Active ONLY for "PARAM,OLDWELD,YES",  for each CWELD or CFAST element, a pair of grid points GA and GB is generated internally if the formats ELEMID, GRIDID, ELPAT or PARTPAT are used and if no identification numbers for GA and GB are specified, see the entry CWELD, 1696 and CFAST, 1505 for a definition of the formats.

Active ONLY for "PARAM,OLDWELD,YES",  in an SOL 400 nonlinear analysis this defines the offset for identification numbers of internally generated grids of connector elements CWELD and CFAST (GA and GB if these are not specified in the bulk data input and all auxiliary grids). The default behavior in SOL 400 is the same as in the linear solution sequences.

