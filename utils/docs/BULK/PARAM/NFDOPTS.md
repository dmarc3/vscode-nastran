## [NFDOPTS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.NFDOPTS.xhtml)

Default = 2

PARAM, NFDOPTS, 2 computes frequency dependent matrices at master frequencies.  In general, master frequencies via MFREQ in case control section of input deck is less than the number of forcing frequencies. Hence, PARAM, NFDOPTS, 2 can improve performance as well as reduce disk space requirement for large frequency response jobs. With PARAM, NFDOPTS, 1, frequency dependent matrices are computed at forcing frequencies.

