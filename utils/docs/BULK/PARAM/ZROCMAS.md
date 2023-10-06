## [ZROCMAS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ZROCMAS.xhtml)

Default = NO

When performing component modal synthesis with free or mixed boundary conditions, the c-set mass is normally included during the calculation of the component modes. If the component has large masses on the c-set degrees-of-freedom, or if the user requests too many modes for the component, the c-set residual flexibility will become singular. This causes a failure of the component reduction. The singularity may be avoided by setting ZROCMAS to YES, which will exclude the c-set mass when calculating the component modes.

