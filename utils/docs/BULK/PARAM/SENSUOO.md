## [SENSUOO](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.SENSUOO.xhtml)

Default    = NO

By default, in dynamic sensitivity analysis in SOL 200, displacements at the o-set due to pseudo-loads do not include any effect due to inertia and damping.  If PARAM,SENSUOO,YES is specified then these effects will be computed in a quasi-static manner and included in the sensitivity analysis.

