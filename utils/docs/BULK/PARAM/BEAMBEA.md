## [BEAMBEA](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.BEAMBEA.xhtml)

Real, Default = 1000.0

```text
┌───────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Value │ Equivalent radius to be used for beam-beam contact problems.  For tubes or round bars, use the     │
│       │ outer radius.  If the radii are different enter the largest outer radius.  For beams, enter an     │
│       │ equivalent radius calculated as follows: I=0.5*(Ix+Iy) R=sqrt(A/pi2+2*I/A) where A, Ix, Iy are the │
│       │ cross-section properties and .                                                                     │
└───────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
