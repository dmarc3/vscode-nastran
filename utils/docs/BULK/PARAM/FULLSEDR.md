## [FULLSEDR](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.FULLSEDR.xhtml)

Default = NO

In a run with superelements, PARAM,FULLSEDR,YES will merge results (DISPL, STRESS, etc.) from all of superelements into a single result as if the run contained no superelements. This is not supported for BEGIN BULK superelements (parts) unless the element and grid identification numbers are unique across all part superelements and the residual structure. Additionally, if there are part SE present, then FULLSEDR has to be specified in all Bulk Data sections (BEGIN BULK and BEGIN SUPER) or in the Case Control.

