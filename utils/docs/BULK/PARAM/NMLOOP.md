## [NMLOOP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.NMLOOP.xhtml)

Default =    0

In SOL 106 nonlinear static analysis, normal modes will be computed with the updated nonlinear stiffness if PARAM,NMLOOP is requested in the subcase section, it must be for all subcases. The nonlinear normal modes will be computed at the last iteration loop of each subcase in which a METHOD command appears.

