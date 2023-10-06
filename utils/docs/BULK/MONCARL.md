## [MONCARL](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MONCARL.xhtml) - Parameters for Monte-Carlo simulation

Parameters for conducting Monte-Carlo simulation using the non-parametric variability method (NPVM).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MONCARL SID     VARTYP                                                  +        
+       STRVAR  MSVAR   KSVAR   BSVAR                                   +        
+       FLUVAR  MFVAR   KFVAR   BFVAR                                           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MONCARL 100     DELTAVAR                                                +       
+       STRVAR  0.001   0.05    0.002                                   +       
+       FLUVAR  0.0     0.001   0.0                                             
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Set identification number referenced by MONCARL case control. (Integer > 0; Required)              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VARTYP    │ Select the type of variabilities that follow (Character; Default = ALPHAVAR) ALPHAVAR              │
│           │   Variabilities in this entry are Alpha variabilities. DELTAVAR    Variabilities in this entry are │
│           │ Delta variabilities.                                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “STRVAR”  │ Indicates Structural variability parameters follow. (String)                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MSVAR     │ Structural mass variability. (Real >= 0.0; Default = 0.0)                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ KSVAR     │ Structural stiffness variability. (Real >= 0.0; Default = 0.0)                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BSVAR     │ Structural damping variability. (Real >= 0.0; Default = 0.0)                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “FLUVAR”  │ Indicates Fluid variability parameters follow (String)                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MFVAR     │ Fluid mass variability. (Real >= 0.0; Default = 0.0)                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ KFVAR     │ Fluid stiffness variability. (Real >= 0.0; Default = 0.0)                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BFVAR     │ Fluid damping variability. (Real >= 0.0; Default = 0.0)                                            │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks

1. Please use below as the guideline for selecting above mentioned structural and fluid alpha variabilities (which should be > 0.0):
    - Low variability level    = 0.001
    - Medium variability level = 0.01
    - High variability level   = 0.05
2. Alpha variabilities are related to delta variabilities through the order of the matrix to be randomized,  n  (or equivalently the number of modes),

    ![bulkno06030.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06030.jpg?_LANG=enus)

3. There is a limitation in the admissible values for the variability level. The maximum value for delta variability equals,

    ![bulkno06032.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06032.jpg?_LANG=enus)

    On a model with a large amount of modes ( n >>1), the maximum value of delta tends to 1 ( δ max ≈1). The maximum value of alpha variability using the above equations equals, ![bulkno06034.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06034.jpg?_LANG=enus)

4. An unphysical (larger than permissible or negative value) selection of a variability would results in a FATAL.
