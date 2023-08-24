## [MP1SET](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.MP1SET.xhtml)

Character “F” or “G” (default, see below)

Controls the integration set used in the calculation of MONPNT1 results. For the value of “F”, the integrated values will reflect any redistribution of loads caused by rigid elements and MPCs. This is particularly useful in the static aeroelastic solution sequences (SOL 144) when RBE3s are used to distribute mass, applied loads and splining. For the value of “G”, no redistribution occurs. The default is a function of the solution sequence.

SOL 144 - Default = “F”, option “G” is not available.

All other sequences - Default = “G”, option “F” can be specified by the user.

