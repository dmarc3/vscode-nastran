## [ADPCON](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ADPCON.xhtml)

Default    = 1.0

Initial penalty values used in contact analysis are calculated automatically by the program and are given by  ![parameters01565.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01565.jpg?_LANG=enus)  where k is a number selected for each secondary node based on the diagonal stiffness matrix coefficients that are in the contact region, and SFAC is the value specified by the user in the SFAC field of the BCONP Bulk Data entry. The ADPCON value applies to all the contact regions in the model. During the analysis, if convergence problems are encountered, penalty values are automatically reduced. Still there may be some problems where convergence can not be achieved with default values. In such cases, analysis may be restarted with a lower value of ADPCON.

In some cases the default penalty values may be low. In such situations analysis may be restarted with a higher value of ADPCON.

Generally, penalty values are recalculated every time there is a change in stiffness. However, if ADPCON is negative, penalty values are calculated only at the beginning of each subcase, and penalty values are not adjusted during analysis. This is useful if the contact between two elastic bodies is being analyzed.

