## [PH2OUT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.PH2OUT.xhtml)

Default = 0, SOL 400 only

For nonlinear solution sequence, SOL 400, in addition to the regular phase III output, the user can also request the phase II output. This is useful when the run is terminated abnormally before the phase III outputs are formatted and printed.  The phase II output consists of all outputs requested by the Case Control commands in the input file and prints in sort1 format. If there’s no PH2OUT, MSC Nastran outputs phase III outputs only. This is the regular output.  If PH2OUT=1, MSC Nastran outputs phase II outputs only.  In this case, there will be no output for the upstream superelements.  If PH2OUT=3, MSC Nastran outputs both phase II and phase III outputs. In this case, some of the outputs for the residual structure may be redundant.

Case Control command, NLOPRM OUTCTRL, takes precedence over PH2OUT. In other words, when NLOPRM OUTCTRL is present, PH2OUT is no longer functional. NLOPRM OUTCTRL=SOLUTION is equivalent to PH2OUT=1 and NLOPRM OUTCTRL=(STD,SOLUTION) to PH2OUT=3.

