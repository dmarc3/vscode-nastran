## [DPHASE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DPHASE.xhtml) - Dynamic Load Phase Lead

Defines the phase lead term  θ   in the equation of the dynamic loading function.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DPHASE  SID     P1      C1      TH1     P2      C2      TH2                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DPHASE  4       21      6       2.1     8       6       7.2                     
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Identification number of DPHASE entry. (Integer > 0)                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Pi        │ Grid, extra, or scalar point identification number. (Integer > 0)                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component number. (Integers 1 through 6 for grid points; zero or blank for extra or scalar points) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ THi       │ Phase lead θ in degrees. (Real)                                                                    │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. One or two dynamic load phase lead terms may be defined on a single entry.
2. SID must be referenced on a RLOADi entry. Refer to the RLOAD1 or RLOAD2 entry for the formulas that define how the phase lead  θ   is used.
3. A DAREA, LSEQ or static load entry should be used to define a load at Pi and Ci.
4. In superelement analysis, DPHASE entries may only be applied to loads on points in the residual structure.
