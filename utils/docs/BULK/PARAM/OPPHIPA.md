## [OPPHIPA](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.OPPHIPA.xhtml)

Default    = -1

In the flutter (SOLs 145 and 200) and the dynamic aeroelastic (SOL 146) solution sequences, 
 
 
OPPHIPA > -1 and a DISPLACEMENT command in the Case Control Section will output the real structural vibration modes at all degrees-of-freedom, including the aerodynamic degrees-of-freedom in the global coordinate system. Use PARAM,OPPHIPB to output in the basic system.

