## [DPEPS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.DPEPS.xhtml)

Default    = 1.0E-4

In SOL 200, if any difference between the property value on the property entries and the value calculated from the design variable values on the DESVAR entry (through DVCRELi, DVMRELi, DVPRELi relations) is greater than DPEPS, the design model values override the analysis values.  If all the differences are less than DPEPS, analysis results from a previous run are accepted in a subsequent sensitivity/optimization task, thereby avoiding a reanalysis.  The PTOL parameter on the DOPTPRM entry is a related parameter that checks the maximum difference.

