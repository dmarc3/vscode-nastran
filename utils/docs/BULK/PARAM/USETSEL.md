## [USETSEL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.USETSEL.xhtml)

Default    = 0

USETSEL specifies the sets which will be printed in the row sort (USETPRT = 0 or 10).  In order to select specific sets to be printed, you must sum their corresponding decimal equivalent numbers.  For example, sets A, L, and R are selected with USETSEL   =   128   +   256   +   8   =   392. To print the aerodynamic degree-of-freedom sets: J, JS, K, KS, and SA, please see  OPGEOM .

```text
┌───────────┬──────────────────────────────────────────────────┐
│ USETSEL   │ Sets Printed                                     │
├───────────┼──────────────────────────────────────────────────┤
│ 0         │ Sets SB, SG, L, A, F, N, G, R, O, S, M, and E    │
├───────────┼──────────────────────────────────────────────────┤
│ -1        │ All sets as defined in Degree-of-Freedom Sets.   │
├───────────┼──────────────────────────────────────────────────┤
│ -2        │ Mutually exclusive sets only; i.e., sets MP, MR, │
│           │ SB, SG, SZ, O, Q, R, C, B, LM, and E.            │
└───────────┴──────────────────────────────────────────────────┘
```
