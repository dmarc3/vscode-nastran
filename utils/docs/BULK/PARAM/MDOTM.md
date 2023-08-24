## [MDOTM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.MDOTM.xhtml)

Default = AUTO

The default selects the most efficient method for data recovery in DOMAINSOLVER ACMS (PARTOPT=DOF).   There are two methods:  (1) Output transformation matrix (OTM) method is selected if the number of modes multiplied by PARAM,MDOTMFAC (Default = 20) exceeds the number of degrees-of-freedom at which displacements are required in order to complete data recovery (DISP, STRESS, etc.)  This method also requires PARAM,SPARSEPH,YES which is the default.  This method may be forced with PARAM,MDOTM,YES.   (2) If the number of modes multiplied by PARAM,MDOTMFAC (Default = 20) does not exceed the number of degrees-of-freedom at which displacements are required in order to complete data recovery condition is not satisfied then the non-OTM method is selected.  This method may be forced with PARAM,MDOTM,NO.

