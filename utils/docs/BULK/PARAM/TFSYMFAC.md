## [TFSYMFAC](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.TFSYMFAC.xhtml)

Default = 1.D-08

TFSYMFAC specifies the tolerance at which matrices generated via the TFL Case Control command are treated as anti-symmetric in the solution process.  The default will not symmetrize the matrix even if the tolerance is not exceeded. Whereas, if TFSYMFAC is negative then the absolute values is used as the tolerance and the matrix will be symmetrized if the tolerance is exceeded.  If TFSYMFAC is 0.D0 then the symmetry is not checked.

