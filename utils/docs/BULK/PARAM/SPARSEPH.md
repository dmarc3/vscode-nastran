## [SPARSEPH](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.SPARSEPH.xhtml)

Default = YES

The default selects the very efficient sparse data recovery method during eigenvector data recovery in DOMAINSOLVER ACMS (PARTOPT=DOF).  This method uses the same process for eigenvector data recovery as is requested by PARAM,SPARSEDR,YES in other dynamic solution sequences like SOLs 107 through 112.   

SPARSEPH will be automatically changed to NO if ACPOWER or INTENSITY calculations are requested. These calculations require all eigenvector DOF to be computed.

PARAM,SPARSEPH,NO forces full data recovery on all degrees-of-freedom and can be significantly less efficient if data recovery is required at only a few degrees-of-freedom.   See related user parameters  MDOTM  and  SPARSEDR .

