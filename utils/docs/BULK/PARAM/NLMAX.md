## [NLMAX](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.NLMAX.xhtml)

Default = 60

The number of suspected massless mechanisms is determined from the number of high ratio messages. If this number exceeds NLMAX, the number of trial massless mechanisms is reduced to NLMAX. This avoids an expensive debug run when there may be thousands of massless mechanisms due to systematic modeling error, such as having CONM2 elements on many grid points for which structural elements have been left out through oversight. The value of this parameter may be increased on initial debug runs where many high ratio DOFs may be present, and the user prefers to see them all at once, rather than on successive runs where only a part are removed at one time. See also  MECHFIX .

