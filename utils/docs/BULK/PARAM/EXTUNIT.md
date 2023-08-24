## [EXTUNIT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.EXTUNIT.xhtml)

Default = 30.

EXTUNIT specifies the Fortran unit number for an external superelement stored on an op2 or op4 file and is required if the default value of 30 is not desirable and a CSUPER Bulk Data entry is used to define the external superelement in an assembly run. EXTUNIT is also required if it references an op4 file in which case the value for the unit number must be negative.

