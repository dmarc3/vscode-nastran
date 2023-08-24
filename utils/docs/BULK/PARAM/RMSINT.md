## [RMSINT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.RMSINT.xhtml)

Default = LINEAR for the trapezoidal approximation.

RMSINT specifies the interpolation method for numerical integration when computing both RMS (Root Mean Square) and N0 (Number of Zero Crossings or Mean Frequency) from PSDF (Power Spectral Density Function). RMSINT = LINEAR requests the trapezoidal approximation, which is the existing Nastran approach. RMSINT = LOGLOG requests the Log-Log interpolation.

