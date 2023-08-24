## [DPHFLG](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.DPHFLG.xhtml)

Integer  >  0; Default = 0

Select the method for performing eigenvector sensitivity analysis. Unless repeated eigenvalues are anticipated, the default value is recommended.

```text
┌─────────┬───┬────────────────────────────────────────────────────┐
│ DPHFLG  │ 0 │ Nelson’s method (Default)                          │
├─────────┼───┼────────────────────────────────────────────────────┤
│         │ 1 │ Subspace iteration method. Recommended when        │
│         │   │ there are repeated roots.                          │
├─────────┼───┼────────────────────────────────────────────────────┤
│         │ 2 │ High’s method, # of modes for iteration =          │
│         │   │ min(2n, n+8, m)                                    │
├─────────┼───┼────────────────────────────────────────────────────┤
│         │   │ n:   the highest constrained mode                  │
│         │   │ m:  the number of modes request by EIGR            │
├─────────┼───┼────────────────────────────────────────────────────┤
│         │ 3 │ High’s method will all modes requested by EIGR     │
│         │   │ used in the iterator.                              │
├─────────┼───┴────────────────────────────────────────────────────┤
│         │ DPHFLG = 2 and 3 have further control parameters       │
├─────────┼─────┬──────────────────────────────────────────────────┤
│ ITERATE │ yes │ Unique identification number for meta data group │
├─────────┼─────┼──────────────────────────────────────────────────┤
│         │ no  │ No iteration, equivalent to Fox’s method and     │
│         │     │ provides the most efficient method, but not the  │
│         │     │ most accurate.                                   │
├─────────┼─────┴──────────────────────────────────────────────────┤
│ ITMAX   │ Maximum number of iteration. (Default = 10)            │
├─────────┼────────────────────────────────────────────────────────┤
│ TOL     │ Tolerance for convergence in iteration.                │
│         │ (Default = 1.0e-4)                                     │
├─────────┼────────────────────────────────────────────────────────┤
│ LAMBDAS │ Shift factor. (Default = 0.0)                          │
├─────────┼────────────────────────────────────────────────────────┤
│ KORTHO  │ no  │ Use mass for Gram Schmidt orthogonalization.     │
│         │     │ (Default)                                        │
├─────────┼─────┼──────────────────────────────────────────────────┤
│         │ yes │ Use stiffness K for Gram Schmidt                 │
│         │     │ orthogonalization.                               │
├─────────┼─────┴──────────────────────────────────────────────────┤
│ ITRPRNT │ no  │ Do not print sensitivity for each iteration.     │
│         │     │ (Default)                                        │
├─────────┼─────┼──────────────────────────────────────────────────┤
│         │ yes │ Print sensitivity for each iteration.            │
├─────────┼─────┴──────────────────────────────────────────────────┤
│ ITFPRNT │ no  │ Do not print final sensitivity, leave print to   │
│         │     │ SOL 200.                                         │
├─────────┼─────┼──────────────────────────────────────────────────┤
│         │ yes │ Print final sensitivity inside High’s method     │
│         │     │ computation                                      │
├─────────┼─────┴──────────────────────────────────────────────────┤
│ MDOF    │ no  │ Do not reduce DPHI to USET ‘U6’ DOF. (Default)   │
├─────────┼─────┼──────────────────────────────────────────────────┤
│         │ yes │ Reduce DPHI to USET ‘U6’ DOF.                    │
└─────────┴─────┴──────────────────────────────────────────────────┘
```
