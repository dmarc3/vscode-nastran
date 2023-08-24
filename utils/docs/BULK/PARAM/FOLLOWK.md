## [FOLLOWK](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.FOLLOWK.xhtml)

Default    = YES

In SOLs 101,103, 105, 106, 107, 108, 109, 110, 111, 112, 115, 116, and SOL 400, FOLLOWK=YES (Default) requests the inclusion of follower force stiffness in the differential stiffness. FOLLOWK=NO requests that the follower force stiffness not be included.  For FOLLOWK=YES in SOLs 101,103, 105, 107, 108, 109, 110, 111, 112, 115, and 116, a separate static subcase is required and the STATSUB command is also required in the eigenvalue subcase. In nonlinear analysis (SOL 106 and 400), the follower force is included if PARAM,LGDISP,1 is specified. FOLLOWK is ignored in SOL 106 and SOL 400 if LGDISP is not specified.

