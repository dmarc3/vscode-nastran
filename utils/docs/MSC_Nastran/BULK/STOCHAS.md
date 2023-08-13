## [STOCHAS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.STOCHAS.xhtml) - Randomization of Model Parameters

Specifies statistics used in randomization selected model parameters.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
STOCHAS SID     PENTRY  CDF     CoV     m                               +       
+               MENTRY  CDF     CoV     m                               +       
+               CENTRY  CDF     CoV     m                               +       
+               LOADS   CDF     CoV     m                               +       
+               SPCD    CDF     CoV     m                                       
```

#### Example 1: (Randomize all element and material properties with the default settings.)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
STOCHAS 100     PENTRY                                                  +       
+               MENTRY                                                          
```

#### Example 2: (Randomize material properties with CoV = 0.1 and loadings with CoV = 0.3 and default multipliers of standard deviations.)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
STOCHAS 200     LOADS   GAUSS   0.3                                     +       
+               MENTRY  GAUSS   0.1                                             
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Unique identification number that is selected by the STOCHASTICS Case Control command. (Integer > │
│           │ 0)                                                                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “PENTRY”  │ Flag for randomizing real values on all the element property entries. (Character)                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “MENTRY”  │ Flag for randomizing real values on all the independent material property entries. (Character)    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “CENTRY”  │ Flag for randomizing real values on all the connectivity entries. (Character)                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “LOADs”   │ Flag for randomizing real values on all the load entries. (Character)                             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “SPCD”    │ Flag for randomizing real values on all the SPCD entries. (Character)                             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CDF       │ Name of a cumulative distribution function. See Remark 2. (Character; Default = GAUSSIANS or      │
│           │ blank).                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CoV       │ Coefficient of variance. (Real > 0; Default = 0.05)                                               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ m         │ Number of standard deviations. See Remark 3. (Real > 0; Default = 3.0)                            │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
