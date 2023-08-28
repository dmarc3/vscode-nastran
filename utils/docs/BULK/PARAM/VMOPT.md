## [VMOPT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.VMOPT.xhtml)

Default    = 0

By default (VMOPT=0), virtual mass is included after the component modes are computed. Virtual mass is not taken into consideration when using GRAV, RFORCE, or ACCEL loading.

If VMOPT=1, then the virtual mass will be included in the mass matrix at the same time as all other mass elements. In other words, the component modes will reflect the virtual mass. Virtual mass is taken into consideration when using GRAV, RFORCE, or ACCEL loading.

If VMOPT=2, the modes of the structure or component without the fluid are computed first (“dry” modes). The fluid effects are added to the modal basis during the residual flexibility computation to produce the “wet” modes for the component. Both eigenvalue tables are printed, allowing comparison of the dry and wet modes. The wet modes are used in modal dynamic analysis. Cost savings result from the dense Virtual Mass (VM) matrix being kept out when computing dry modes in the physical basis. Its presence can increase memory and computation times by an order of magnitude. The VM is added only to the smaller generalized basis used in Residual Flexibility Computations. The approximations introduced by this approach are generally small due to the homogeneous nature of the fluid. It is the preferred method when the number of wetted elements exceeds several hundred, for reasons of efficiency. It is to be noted that MAX normalization for eigenvectors with PARAM,VMOPT,2 may produce incorrect results. Therefore, MAX normalization is not recommended when using PARAM,VMOPT,2.

If VMOPT is not equal to 0, 1 or 2, then no virtual mass is computed.

