## [AUTOSPC](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.AUTOSPC.xhtml)

Default = YES

This parameter is obsolete and replaced by the Case Control command  AUTOSPC   (Case) . It is ignored for the residual structure in all nonlinear analysis solution sequences. SOL 400 only support the AUTOSPC Case Control command. For the residual structure in SOLs 106 and 129 see the description of parameter AUTOSPCR. AUTOSPC and the related parameters EPPRT, EPZERO, PRGPST, and SPCGEN are analogous to and described under the AUTOSPC Case Control command under the EPSING, EPS, PRINT, and PUNCH keywords, respectively. The specification of the AUTOSPC Case Control command overrides the specification of PARAM,AUTOSPC and its related parameters EPPRT, EPZERO, PRGPST, and SPCGEN.

