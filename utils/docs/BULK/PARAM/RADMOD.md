## [RADMOD](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.RADMOD.xhtml)

Default = YES

This parameter only applies to heat transfer solution sequences for SOLs 153, 159 and 400. The parameter, RADMOD, only affects radiation heat transfer problems. The radiation matrix is modified to avoid the temperature overshoot with a coarse mesh. If the user wants the program to skip this operation (modify the radiation matrix) then insert PARAM,RADMOD,NO.

