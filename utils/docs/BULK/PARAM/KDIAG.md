## [KDIAG](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.KDIAG.xhtml)

Default =    -1.0 (SOLs 106, 153, and SOL 400 with non-contact analysis), or 0.0 ( SOL 400 with contact analysis)

In SOLs 106 (nonlinear static analysis), 153 (steady state heat transfer), and SOL 400 (nonlinear static and transient analysis), KDIAG may be used to eliminate spurious mechanisms and singularities in the nonlinear stiffness matrix.  The absolute value of KDIAG will be added to some or all of the diagonal terms in the nonlinear stiffness matrix as follows:

* < 0.0 = Then add the absolute value of KDIAG to the null diagonal terms only (SOLs 106 and 153). For SOL 400, the absolute value of KDIAG is added to the diagonal term of null columns only.
* = 0.0 = Then no action is taken.
* \> 0.0 = Then add the value of KDIAG to all diagonal terms.

