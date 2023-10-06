## [TESTNEG](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.TESTNEG.xhtml)

![parameters01801.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01801.jpg?_LANG=enus)  

In nonlinear static analysis (SOLs 106 and 153), and differential stiffness generation with preload (SOLs 101-112, 115, 118, 187, and 200 with STATSUB) this parameter specifies the action to take when negative terms are encountered on the factor diagonal of matrix decomposition. Negative terms indicate that the differential stiffness has introduced a structural instability. The instability may be real (structural buckling) or mathematical (the current iteration appears unstable, but a stable solution exists).

```text
┌───────────┬──────────────────────────────────────────────────┐
│ TESTNEG   │ Results                                          │
├───────────┼──────────────────────────────────────────────────┤
│ -1        │ Stop if negative terms occur.                    │
├───────────┼──────────────────────────────────────────────────┤
│ 1 or 0    │ Continue if negative terms occur.                │
├───────────┼──────────────────────────────────────────────────┤
│ -2        │ If negative terms exist, do not use differential │
│           │ stiffness.                                       │
├───────────┼──────────────────────────────────────────────────┤
│ 2         │ Do not use differential stiffness.               │
├───────────┼──────────────────────────────────────────────────┤
│ 3         │ Use differential stiffness with preload even if  │
│           │ negative terms exist (SOLs 101-112, 115, 118,    │
│           │ 187, and 200 with STATSUB only)                  │
└───────────┴──────────────────────────────────────────────────┘
```
