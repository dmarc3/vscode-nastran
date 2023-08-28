## [ICOPT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ICOPT.xhtml)

Default = 1, SOL 400 Only

Parameter ICOPT works together with the NLIC Case Control Command. The user input loads may or may not be in equilibrium with the initial condition. If ICOPT=0, MSC Nastran will compute the initial acceleration based on user’s inputs. Otherwise, it will be assumed that the initial acceleration is null. In other words, when ICOPT=1 (the default), it is assumed the whole structure is in equilibrium automatically. Theoretically, ICOPT=0 gives better solution. However, due to that the matrix is highly singular, a large amount CPU time may be required and the accuracy of the result may be in doubt for the solution with ICOPT=0.

