## [EPSILONT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.EPSILONT.xhtml)

Default = SECANT

In nonlinear statics (SOL 106 and SOL 400), thermal loads are computed using the secant method:

![parameters01665.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01665.jpg?_LANG=enus)  

If the parameter is set to INTEGRAL, thermal loads are computed using the integral method:

![parameters01667.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01667.jpg?_LANG=enus)  

This parameter only applies to SOLs 106 and 400 ANALYSIS=NLSTAT, and only applies to CQUAD4, CTRIA3, CQUADR, and CTRIAR elements that are not associated with the enhanced nonlinear materials (PSHLN1).

