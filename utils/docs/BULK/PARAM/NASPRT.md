## [NASPRT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.NASPRT.xhtml)

Default    = 0

NASPRT specifies how often data recovery is performed and printed in SOL 200. By default, SOL 200, in addition to performing an analysis and optimization, will perform full data recovery operations at the first design cycle and upon completion of the last design cycle.

If NASPRT > 0, then data recovery operations are performed at the first design cycle; at every design cycle that is a multiple of NASPRT; and the last design cycle. For example, if PARAM,NASPRT,2 and the maximum number of design iterations requested is 5, then data recovery is obtained at design iterations 1, 2, 4, and 5.

If NASPRT < 0, then no data recovery operations are performed.

