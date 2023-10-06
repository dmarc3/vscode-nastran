## [ACSYM](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ACSYM.xhtml)

Default    = YES

By default, the dynamic equations for coupled fluid-structure analysis in frequency response are symmetrized for efficiency. PARAM,ACSYM,NO requests the pre-Version 69 formulation which involves no symmetrization and will require more CPU time. See  Formulation of Dynamic Equations in SubDMAP GMA  in the  MSC Nastran Reference Guide . See also the Case Control command  FLSTCNT   (Case) .

If the iterative solver is selected (see the Case Control command,  SMETHOD   (Case) ) then the external work diagnostic will be different between ACSYM=YES and ACSYM=NO.

