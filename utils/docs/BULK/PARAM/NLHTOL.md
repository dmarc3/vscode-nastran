## [NLHTOL](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.NLHTOL.xhtml)

Default = 1.0E-5

During the iteration procedure of nonlinear harmonic response, the norm of the residual load vector for the current step is divided by the norm of the residual load vector for the previously converged step; this value is then compared with NLHTOL. If the value is smaller than NLHTOL, the system is assumed to have converged.

