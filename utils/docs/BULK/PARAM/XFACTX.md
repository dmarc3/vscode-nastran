## [XFACTX](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.XFACTX.xhtml)

Default=1.0 for both STRUCT and FLUID.

Multiplier applied to user’s maximum frequency to determine maximum frequency for reorthogonalization for ACMS VERSION=NEW (module ACMS1). Values should range between 0.1 and 1.0. Note that PARAM,XFACTX only affects XFACT for STRUCT. For the FLUID model, see DOMAINSOLVER.

