## [CDITER](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.CDITER.xhtml)

Default    = 0

If CDITER > 0, perform constrained displacement iterations in SOL 101.  The value is the maximum number of iterations.  If CDPRT=YES, print those negative displacements and tension forces which do not satisfy constraints.  If CDPCH=YES, punch DMIG CDSHUT entries for final state; by default all gaps are closed.  These can be used for initial conditions for restart.  Potential contact points must be specified on the SUPORTi entries.  The SUPORTi points must be in the residual structure.  Optional DMIG entries to define the initial shut vector may be specified.  Degrees-of-freedom that are specified on the SUPORT entry and have a value of 1.0 defined on the DMIG,CDSHUT entry will be considered closed initially.

If the DMIG,CDSHUT entry is not supplied, then all degrees-of-freedom specified on the SUPORT entries will be considered shut initially.  A fatal message will be issued if this parameter is used and PARAM,INREL is specified. Constrained displacement iteration (PARAM,CDITER,YES) does not support parallel processing (DMP).

