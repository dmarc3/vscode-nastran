## [YLDVM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.YLDVM.xhtml) - von Mises Yield Model

Defines a bilinear or piecewise-linear yield model with isotropic hardening, using the von Mises yield criterion. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
YLDVM   YID     YIELD   EH                                              +       
+       TABLE   TYPE    TABY    D       P                                       
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
YLDVM   32      250.E6  2000.E6                                                 
                                                                                
```

```text
┌───────────┬───────────────────────────────────────────────────┬──────────────────────────────────┐
│ Describer │ Meaning                                           │                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────┤
│ YID       │ Unique yield-model number referenced from         │                                  │
│           │ MATDEUL. (Integer > 0; Required)                  │                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────┤
│ YIELD     │ Yield stress. (Real; Required)                    │                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────┤
│ EH        │ Hardening modulus. (Real; Default = 0.0)          │                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────┤
│ TABLE     │ Number of a TABLED1 entry giving the variation of │                                  │
│           │ effective stress (y-value) with effective strain  │                                  │
│           │ (x-value). See Remark 4. (Integer > 0)            │                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────┤
│ TYPE      │ The type of stress and strain defined in TABLED1. │                                  │
│           │ (Character; Default = TRUE)                       │                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────┤
│           │ ENG                                               │ Engineering stress and strain.   │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────┤
│           │ TRUE                                              │ True stress and strain.          │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────┤
│           │ PLAST                                             │ True stress and plastic strain.  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────┤
│           │ PMOD                                              │ Plastic modulus and true stress. │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────┤
│ TABY      │ Number of TABLED1 entry giving the variation of   │                                  │
│           │ the scale factor for the yield stress (y-value)   │                                  │
│           │ with the strain rate (x-value). Strain-rate       │                                  │
│           │ effects are also specified using the Cowper-      │                                  │
│           │ Symonds relation (see input parameters D and P).  │                                  │
│           │ See Remark 6. (Integer > 0)                       │                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────┤
│ D         │ Factor D in the Cowper-Symonds rate enhancement   │                                  │
│           │ equation. See Remark 6. (Real > 0)                │                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────┤
│ P         │ Factor P in the Cowper-Symonds rate enhancement   │                                  │
│           │ equation. See Remark 6. (Real > 0)                │                                  │
└───────────┴───────────────────────────────────────────────────┴──────────────────────────────────┘
```
