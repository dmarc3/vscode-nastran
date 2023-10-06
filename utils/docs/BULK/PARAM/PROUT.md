## [PROUT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.PROUT.xhtml)

Default    = -1

PARAM,PROUT,-1 suppresses execution and printout from the ELTPRT module. PARAM,PROUT,-1 prints a list of all elements sorted on EID and summary tables giving the range of element identification numbers for each element type.

ELTPRT will provide an information message when it detects any duplicate element ID. For the case of CONV and CHYBDi elements, duplicate element IDs are by design. The information message provided by ELTPRT can be safely ignored for these elements.

