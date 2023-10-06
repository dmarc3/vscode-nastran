## [SUBID](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.SUBID.xhtml)

Default    = 1

In SOL 106 by default, the restart proceeds from the last LOOPID in the last subcase.  SUBID may be used to specify an earlier subcase by specifying the sequential number (for SElD = 0) of the subcase.  In SOLs 106 and 153, PARAM,LOOPID may also be specified for an earlier LOOPID.  SUBCASID is an alternative to SUBID and is recommended over SUBID. See  Restarts for Nonlinear Static Analysis  in Appendix C: Nonlinear Analysis in  MSC Nastran Reference Guide  for further discussion.

