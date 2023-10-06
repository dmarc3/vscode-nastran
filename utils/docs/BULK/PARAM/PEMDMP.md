## [PEMDMP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.PEMDMP.xhtml)

Default = 'NO'

Setting the value of character parameter PEMDMP to 'YES' (PARAM,PEMDMP,YES in bulk data) will invoke the distributed Nastran-PEM solution logic. PEMDMP is intended for large Nastran models with multiple PEM trim components.

The PEMDMP solution strategy is to distribute Trim Master Frequencies evenly among distributed Nastran DMP processes. The PEMDMP solution is possible when all the following are true:

     • Nastran SOL 111 solution specification

     • DOMAINSOLVER ACMS is used

     • Command line option "dmp=N" where N>1

     • Multiple hosts; or use of RUNOPT=MULTIPAR on the DOMAINSOLVER entry (Multiple-Parent DMP processing)

     • Number of forcing frequencies greater than NDMP (number of DMP processes)

     • Number of trim master frequencies greater than NDMP+1

     • PARAM,PEMDMP,YES in bulk data

If one of the above items is not true, or if RUNOPT=PARCHILD is specified on the DOMAINSOLVER entry, the PEMDMP solution is not deployed. If the PEMDMP solution is active, User Information Messages 10544 and 10545 are printed in the F06 file. Otherwise, no messages are printed.

