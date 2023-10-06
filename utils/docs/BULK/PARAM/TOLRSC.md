## [TOLRSC](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.TOLRSC.xhtml)

Default    = 0.05

When the RSSCON shell-to-solid element connector is used, the connecting grid points of the shell element are moved on to the solid face if the grid points are close enough.  The tolerable distance of the shell grid point to the solid edge or face is  ![parameters01803.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01803.jpg?_LANG=enus)  where  h  is the height of the solid edge; see the sample figure below.  The relative tolerance is user modifiable using the parameter.

PARAM,TOLRSC, ![parameters01805.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01805.jpg?_LANG=enus)

The default for the relative tolerance is  ![parameters01807.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01807.jpg?_LANG=enus) .  Rigid body invariance is satisfied with double-precision accuracy if the shell grid points are adjusted.

