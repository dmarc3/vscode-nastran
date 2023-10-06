## [AUNITS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.AUNITS.xhtml)

Default    = 1.0

AUNITS is used in SOL 144 to convert accelerations specified in units of gravity on the TRIM Bulk Data entry to units of distance per time squared. Accelerations are divided by this parameter. To convert accelerations input in g’s into physical, consistent units, set AUNITS to 1/g.

