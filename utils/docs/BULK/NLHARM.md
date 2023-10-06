## [NLHARM](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.NLHARM.xhtml) - Parameters for Nonlinear Harmonic Response Control

Defines parameters for nonlinear harmonic response analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLHARM  ID      SUBFAC  NHARM   NLFREQ                                          
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLHARM  41              3       15                                              
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Identification number referenced by the NLHARM Case Control command. (Integer > 0)          │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ SUBFAC    │ Factor for capturing sub-harmonic response. See Remark 3. (Integer > 1; Default = 1)        │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ NHARM     │ The number of harmonics to include in the solution. See Remark 2. (Integer > 0)             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ NLFREQ    │ Identification number of the NLFREQ or NLFREQ1 entry specifying the forcing frequency list. │
│           │ (Integer > 0)                                                                               │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The NLHARM ID must be unique among all NLHARM entries.
2. The greater the degree of nonlinearity, the larger the number of harmonics required to find a solution (if one exists).  The number of harmonics (NHARM) used may influence the ability of the algorithm to find solutions to the nonlinear problem posed.  However, the larger the number of harmonics, the more computational effort is required to find a solution.
3. The response frequencies in linear harmonic analysis are the same as the forcing frequency.  Permanent oscillations whose frequencies are a fraction of the forcing frequency (½, ¼, ...) may occur in a nonlinear system; these oscillations are known as sub-harmonic response.
