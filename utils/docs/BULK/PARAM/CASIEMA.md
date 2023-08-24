## [CASIEMA](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.CASIEMA.xhtml)

Default = NO, SOL 400 CASI Solver only

When the CASI element-based iterative solver is specified (see the Case Control command  SMETHOD   (Case) ) SOL 400 skips various processes associated with the global structure stiffness matrix. The absence of a complete assembled stiffness matrix and its sub-sets can lead to a termination of the solution process in the NLSOLV module if the CASI solver detects a singularity. If the parameter is set to YES, SOL 400 performs all assembly and displacement set reduction operations involving the complete stiffness matrix allowing the NLSOLV module to select either the matrix-based iterative solver or the sparse direct solver to continue in the event CASI detects a singularity.

Use a value of YES with caution as it adversely affects run-time performance. Substantial additional disk space could be required as well as longer run times. Keep in mind that invocation of the sparse direct solver for large solid element models may degrade performance even further.

This parameter only applies to SOL 400 usage of the CASI solver.

