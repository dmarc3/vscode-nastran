## [TABRND1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TABRND1.xhtml) - Power Spectral Density Table

Defines power spectral density as a tabular function of frequency for use in random analysis.  Referenced by the RANDPS entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABRND1 TID     XAXIS   YAXIS                                           +       
+       f1      g1      f2      g2      f3      g3      -etc.-                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABRND1 3                                                               +       
+       2.5     .01057  2.6     .01362  ENDT                                    
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TID       │ Table identification number.  (Integer > 0)                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XAXIS     │ Specifies a linear or logarithmic interpolation for the x-axis.  (Character:  “LINEAR” or “LOG”; │
│           │ Default = “LINEAR”)                                                                              │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ YAXIS     │ Specifies a linear or logarithmic interpolation for the y-axis.  (Character:  “LINEAR” or “LOG”; │
│           │ Default = “LINEAR”)                                                                              │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ fi        │ Frequency value in cycles per unit time.  (Real > 0.0)                                           │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ gi        │ Power spectral density.  (Real)                                                                  │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
