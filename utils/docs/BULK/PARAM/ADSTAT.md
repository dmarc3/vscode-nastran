## [ADSTAT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ADSTAT.xhtml)

Character; Default    = YES

In transient analysis (SOLs 109 and 112) or static analysis SOL101, if there is a preload (see Case Control command  STATSUB   (Case) ) and ADSTAT=YES, the static displacements, SPC forces, and MPC forces will be included in the transient output. There is a limitation that OLOAD is not included. Another limitation is that element stress and force recover will neglect thermal strains and, hence will be wrong if there is a TEMP(LOAD) request. For any other value of ADSTAT the preload effects will not be included in the output, hence the output will be the perturbation displacements, SPC forces and MPC forces.

