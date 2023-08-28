## [NLHTWK](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.NLHTWK.xhtml)

Default = 1.0E-5

In nonlinear harmonic response analysis, if convergence is not obtained, a line search procedure is initiated to calculate a scaling factor for the displacement vector from which updated nonlinear loads are subsequently calculated. If the solution fails to converge more than 5 times in succession a new trial displacement vector is calculated using a push off factor the size of which is defined by NLHTWK. See also parameter  MXICODE0 .

