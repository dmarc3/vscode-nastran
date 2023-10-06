## [FIRSTKI](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.FIRSTKI.xhtml)

PARAM, FIRSTKI, Integer

This parameter is specified when external superelements are used in assembly models of aircraft. This lists the location of the first k-set point of the first CAEROi point related to each superelement, SEID.

For example, if superelement 10 (SEID10) contains CAERO1 point 1001, and the first DOF related to this CAERO1 point is at internal location 51 in the k-set, then this information can be obtained using "PARAM, USETPRT, 0". This information is then added in the input  .dat  file using "PARAM, FIRSTKI, 51" after "BEGIN SUPER=10" line.

