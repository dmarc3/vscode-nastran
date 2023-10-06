## [AUTOSPCR](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.AUTOSPCR.xhtml)

Default    = NO (SOLs 106 and 129 only)

In SOLs 106 and 129 only, AUTOSPCR specifies the action to take when singularities exist in linear stiffness matrix of the residual structure after multipoint constraints are processed.  AUTOSPCR=YES means that singularities will be constrained and AUTOSPCR=NO means they will not be constrained. It is recommended that all degrees-of-freedom attached to nonlinear elements be specified on ASETi entries. Parameters EPPRT, EPZERO, PRGPST, and SPCGEN may be used with AUTOSPCR.

