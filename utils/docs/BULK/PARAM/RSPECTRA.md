## [RSPECTRA](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.RSPECTRA.xhtml)

Default    = -1

RSPECTRA = 0 requests that response spectra be calculated for transient analysis. See  Response Spectrum Analysis  (Ch. 9)  in  Dynamic Analysis User’s Guide  for a discussion of this capability. Response spectra will be calculated for any superelements or the residual structure for which other output requests are present in the same run. The requirements for the other output requests are also in  Response Spectrum Analysis  (Ch. 9)  in  Dynamic Analysis User’s Guide . Any punch data produced is sent to the standard Nastran PUNCH file. Related parameters are TABID and RSPRINT.

