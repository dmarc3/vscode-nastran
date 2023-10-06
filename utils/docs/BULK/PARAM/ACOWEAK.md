## [ACOWEAK](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ACOWEAK.xhtml)

Default = NO

ACOWEAK controls the execution of weakly coupled acoustic formulation logic. PARAM,ACOWEAK,YES will activate weakly coupled acoustic formulation which will solve exterior acoustic model along with CACINFx separately using load generated from structural response and coupling matrix. ACOWEAK,YES is available only in SOL 111 and SOL 200 with ANALYSIS=MFREQ.

In the cases where loading is on exterior acoustic only, PARAM,ACOWEAK,YESR will solve for exterior acoustic model first and generates loading at coupling nodes for structural and interior acoustic model. In addition, PARAM, ACOWEAK, YESR can be used to force NASTRAN to solve exterior acoustic model first if loading is on both structural and exterior acoustic models.

Note that the detailed knowledge on the loading is not required to use ACOWEAK, and with PARAM, ACOWEAK, yes, the Automated logic will determine which part of FSI to solve first.

The ACOWEAK solution technique supports trim components via TRIMGRP or ACTRIM between structure and interior cavity only. If there are trim components situated between the structure and exterior cavity, fully coupled solution techniques should be utilized.

With ACOWEAK solution scheme, the exterior acoustic portion of the model is solved in physical coordinates. Therefore, acoustic structural modal participation factor will not be possible since acoustic field eigenvalues and/or eigenvectors are missing or incomplete.

