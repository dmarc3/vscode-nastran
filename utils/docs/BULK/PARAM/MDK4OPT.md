## [MDK4OPT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.MDK4OPT.xhtml)

Default = 1

Performance parameter used in MDACMS for the calculation of K4. If MDK4OPT>0 the most common value of GE for structure elements will be internally applied to PARAM,G to speed up the calculation of K4. Set MDK4OPT to 0 to disable this feature. The traditional K4 calculation will be used instead.

