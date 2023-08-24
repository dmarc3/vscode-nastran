## [FBATOLR](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.FBATOLR.xhtml)

Default = 1.0E-05

This is the tolerance that is applied to grid point coordinates in order to determine connections between potential connection grid points of various FRF components in the FBA process.

The default tolerance should be satisfactory for most situations.  A looser tolerance may be needed in certain situations.  An example is the case where the potential connection points of an FRF component are associated with the shell elements of RSSCON solid-to-shell element connectors.  In this case, a looser tolerance may need to be specified in order to achieve proper connections between FRF components in the FBA process.

