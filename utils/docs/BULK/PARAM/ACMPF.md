## [ACMPF](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ACMPF.xhtml)

Default = -1

ACMPF specifies a Fortran unit number to import the acoustic load modal participation factors provided by Actran in OP4 file to Nastran SOL 111 to perform stress and strain recovery, random and fatigue analyses. This parameter is compatible with multiple acoustic load cases.

The Fortran unit must be a valid one which should not conflict with Nastran reserved Fortran unit numbers.

