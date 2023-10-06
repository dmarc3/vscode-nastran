## [ERROR](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ERROR.xhtml)

Default    =    -1

For SOLs 111-112, when the constraint modes have non-zero generalized force the parameter ERROR set to 0 causes the fatal error exit to be branched over and the dynamic response is computed and output.  This option is intended for model checkout work, where bad results are better for diagnostic work than no results at all.  This parameter is a traditional feature also used in other, similar circumstances.

