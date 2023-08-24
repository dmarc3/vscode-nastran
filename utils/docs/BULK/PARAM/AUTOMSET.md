## [AUTOMSET](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.AUTOMSET.xhtml)

Character, Default = NO (Except in SOL 400 with ANALYSIS=STATICS)

The relationship between dependent and independent degrees-of-freedom for rigid elements and MPCs may be altered from the user’s input specification via PARAM,AUTOMSET,YES or PARAM, AUTOMSET,LUSOL. For PARAM, AUTOMSET,YES, or PARAM,AUTOMSET, LUSOL, dependent degrees-of-freedom of the model, the M-set are automatically determined by employing a rectangular decomposition of the RMG matrix. 

YES

The rectangular decomposition is performed via UMFPACK, which is used by permission. Copyright (c) 2002 by Timothy A. Davis. All rights reserved. Availability: http://faculty.cse.tamu.edu/davis/suitesparse.html

LUSOL

The rectangular decomposition is performed via LUSOL, which is capable of Rook or full pivoting during rectangular decomposition. LUSOL option is especially suitable for ill conditioned RMG matrix or problems with redundant multi-point constraints. Availability: http://web.stanford.edu/group/SOL/software/lusol/

--------------------

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
Notes:  ◾PARAM,AUTOMSET,YES is not supported for SOL 200.
        ◾RSSCON is not supported with AUTOMSET.
```
