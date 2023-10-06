## [NODCMP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.NODCMP.xhtml)

Default = 0

For some type of nonlinear transient problems, including heat transfer, the decomposition of the solution matrix is not required. In order to increase efficiency, NODCMP is created to determine whether the solution matrix will be decomposed. If NODCMP=0, the solution matrix will be decomposed. If NODCMP=1, the solution matrix will NOT be decomposed. In this case, MAXBIS and DJUST on the Bulk Data entry, NLPARM, must be set zero on the Bulk Data entry. NODCMP is available for SOL 129 and 159 only.

