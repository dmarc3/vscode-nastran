## [GYROAVG](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.GYROAVG.xhtml)

Default = 0

Used to specify one of two formulations for frequency response analysis using the rotor dynamic capability.  The default is to determine any frequency-dependent terms for each frequency. This option activates the frequency-dependent looping option. Setting the value < 0 uses an ‘average’ frequency formulation. This option avoids using the frequency-dependent looping and results in a shorter execution time. For this option, parameters WR3, WR4 or WHR must be specified to include rotor damping. See RSPINR Remark  10.

