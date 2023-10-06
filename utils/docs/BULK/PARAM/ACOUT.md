## [ACOUT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ACOUT.xhtml)

Default    = PEAK

ACOUT specifies the type of output to be used with the FORCE Case Control command in coupled fluid-structural analysis. ACOUT=RMS requests root-mean-square output.

To obtain sound pressure level in units of dB and dBA given by the FORCE command, a peak reference pressure must be specified with PARAM, PREFDB. The dB level is defined as:

![parameters01563.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01563.jpg?_LANG=enus)  

Instead of ACCELERATION, suffix INT can be utilized to generate INTENSITY. See also the Case Control command  FLSTCNT   (Case) .

