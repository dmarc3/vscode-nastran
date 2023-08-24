## [TSTEP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TSTEP.xhtml) - Transient Time Step

Defines time step intervals at which a solution will be generated and output in transient analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TSTEP   SID     N1      DT1     NO1                                     +       
+               N2      DT2     NO2                                     +       
+               -etc.-                                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TSTEP   2       10      .001    5                                               
                9       0.01    1                                               
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Set identification number. (Integer > 0)                                                        │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ni        │ Number of time steps of value DTi.  (Integer > 1)                                               │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DTi       │ Time increment. (Real > 0.0)                                                                    │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOi       │ Skip factor for output. Every NOi-th step will be saved for output.  (Integer > 0; Default = 1) │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
