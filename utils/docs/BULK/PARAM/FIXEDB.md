## [FIXEDB](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.FIXEDB.xhtml)

Default    = 0

FIXEDB is used to reduce the cost of superelement checkout. 

* -2:
    (SOL 101 only) is used on the initial runs when the user suspects that the superelement may contain errors and that only operations necessary for fixed-boundary solutions need be performed.  In particular, the generation of the  matrix is branched over in the SEKR operation and  is not generated in the SELR operation. These operations typically result in 50% of the reduction cost and are not needed in the fixed-boundary data recovery operations described in the next paragraph. After this operation has been completed, the keyword SELANG will appear in the database dictionary, indicating that the  stored there is incomplete, and should not be summed into the downstream superelement, because System Fatal Message 4252 will be issued.

* \< -1:
    (SOLs 101 and 103 only) allows uncoupled solutions for any superelement with conventional output requests. This output may be obtained as soon as the superelement is successfully generated and reduced and does not require that the entire model be assembled.  In superelement statics, the solution is the component due to the  vector, i.e., a fixed-boundary solution. In superelement modes, the solution is the uncoupled eigenvectors of the component. If PARAM,FIXEDB,-1 is specified in the Bulk Data or in the residual structure subcase, the modes of the residual structure will not be computed. For a printout or plotting of the component mode eigenvectors it is recommended that PARAM,FIXEDB,-1 be specified in the Bulk Data Section or above the subcase level in Case Control. If the modes of the residual structure are desired, then PARAM,FlXEDB,0 should be specified in the residual structure subcase.  Exterior degrees-of-freedom listed on SECSETi and SESUP entries are free, and those on SEBSETi degrees-of-freedom are fixed. Data recovery for the residual structure should not be requested for this option.

* +1:
    (SOL 101 only) is used after the superelement has been proven valid. In the SEKR and SELR operations, it provides a branch over all operations already completed in the SEKR and SELR phases and completes the generation of the  matrix and the boundary stiffness and load matrices. It is also a method to recover the factor of the  matrix if the run aborted while computing .
