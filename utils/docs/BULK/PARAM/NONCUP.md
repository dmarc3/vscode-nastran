## [NONCUP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.NONCUP.xhtml)

Default = -1

In SOLs 111 and 112, NONCUP selects either a coupled or uncoupled solution algorithm in the modal dynamic response analysis.  This parameter has the following meanings in both solution sequences:

* -1 = Use the uncoupled solution algorithm if there are no off-diagonal terms in any of the modal matrices (MHH, BHH and KHH); otherwise use the coupled solution algorithm.  However, in order to ensure correct results, the coupled solution algorithm is used when large mass enforced displacement, large mass enforced velocity or SPC/SPCD enforced motion is employed in SOL 112, regardless of the existence of off-diagonal terms in the modal matrices. If enforced motion is requested in modal transient analysis, NONCUP = 0 is the default.
* \> -1 = Use the coupled solution algorithm unconditionally
* -2 = Use the uncoupled solution algorithm unconditionally

User Information Message 5222 indicates which solution algorithm is used in the analysis.

