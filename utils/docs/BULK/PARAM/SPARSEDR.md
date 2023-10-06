## [SPARSEDR](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.SPARSEDR.xhtml)

Default = YES

SPARSEDR=YES limits the data recovery matrix calculations to recover only those grid points specified on SET commands referenced by grid point output requests (DISP, SPCF, etc.) or those points connected to elements specified on element output requests (STRESS, FORCE, etc.). In SOL 200, the design model and design responses are also taken into consideration for determining which grid points are needed for data recovery.

SPARSEDM=YES is for SOL 200 and takes further advantage of small design models/responses during the adjoint or pseudo-load sensitivity calculations.

These methods take advantage of very small output requests, and/or small design models in SOL 200, for large models resulting in significant CPU and disk space savings.

If, however, the output requests and/or the size of the design model in SOL 200 require the calculation of the solution over a large enough percentage of degrees-of-freedom, then it is more efficient to compute the solution at all grid points. The user PARAMeter SPDRRAT (Default75) and SPDMRAT (Default60) specifies this percentage.

The sparse data recovery method is not supported in Aeroelastic (SOL 146), Flutter (SOLs 145 and 200), Complex Eigenvalue (SOLs 107, 110, 145, and 200), Nonlinear (SOLs 106, 129, 153, 159, and 400) and Cyclic Symmetry Analysis (SOLs 114, 115, and 118).

The sparse data recovery method is deactivated when the following Case Control commands are specified: EKE, ESE, EDE, and CMSENRGY.

PARAM,DDRMM is ignored under PARAM,SPARSEDR,YES. To restore the data recovery solution process to pre-V2004 methods insert PARAM,SPARSEDR,NO.

