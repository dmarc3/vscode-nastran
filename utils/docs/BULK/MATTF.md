## [MATTF](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATTF.xhtml) - Material Failure Model Temperature Variation

Describes the temperature, strain rate, or other type of variation of material failure properties used in conjunction with MATF in SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATTF   MID             T(SB)                                           +   
+       KIND    CriteriaT(Xt)   T(Xc)   T(Yt)   T(Yc)   T(Zt)   T(Zc)   1st 
+       T(Sxy)  T(Syz)  T(Szx)  T(Find) T(Fxy)  T(Fyz)  T(Fzx)  T(Ext)  +   
+       T(Exc)  T(Eyt)  T(Eyc)  T(Ezt)  T(Ezc)  T(Gxy)  T(Gyz)  T(Gzx)  +   
+       KIND    CriteriaT(Xt)   T(Xc)   T(Yt)   T(Yc)   T(Zt)   T(Zc)   2nd 
+       T(Sxy)  T(Syz)  T(Szx)  F(Find) F(Fxy)  T(Fyz)  T(Fzx)  T(Ext)  +   
+       T(Exc)  T(Eyt)  T(Eyc)  T(Ezt)  T(Ezc)  T(Gxy)  T(Gyz)  T(Gzx)  +   
+       KIND    CriteriaT(Xt)   T(Xc)   T(Yt)   T(Yc)   T(Zt)   T(Zc)   3rd 
+       T(Sxy)  T(Syz)  T(Szx)  T(Find) T(Fxy)  T(Fyz)  T(Fzx)  T(Ext)  +   
+       T(Exc)  T(Eyt)  T(Eyc)  T(Ezt)  T(Ezc)  T(Gxy)  T(Gyz)  T(Gzx)     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATTF   100                                                             +   
+        12     1       51      52      53      54      55      56      +   
+        61     62      63                                              +   
+        12     2                                                       2nd 
+        71     72      73      74      75      76      77      78      +   
+        12     4       81      82      83      84      85      86      3rd 
+        91     92      93      94                                          
```

(Note: The 4th and 6th lines cannot be entirely blank and the last line of the 3rd criterion has been omitted.)

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Identification number of a matching MATF entry. (Integer > 0; no Default; Required)                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(SB)     │ Identification of a TABLEMi entry providing the variation of the allowable shear stress of the     │
│           │ bonding material between layers (composites only) (Integer; Default = 0 meaning no variation).     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ KIND      │ Enter the type of variation of the failure properties using the values listed below. (Integer; no  │
│           │ Default) 12    Temperature                                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Criteria  │ Enter same value as used by MATF (reference only). (Integer) If more than one KIND is required,    │
│           │ enter the three lines for each KIND and Criteria as many times are required. (Integer; must be     │
│           │ same as used by companion MATF, reference only)                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(SB)     │ Identification of a TABLEMi entry providing the variation of the allowable shear stress of the     │
│           │ bonding material between layers (composites only) (Integer; Default = 0 meaning no variation)      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Xt)     │ Identification of a TABLEMi entry providing the variation of the maximum tensile stress in         │
│           │ x-direction (Integer; Default = 0 meaning no variation)                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Xc)     │ Identification of a TABLEMi entry providing the variation of the maximum compressive stress        │
│           │ (absolute value) in x-direction (Integer; Default = 0 meaning no variation)                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Yt)     │ Identification of a TABLEMi entry providing the variation of the maximum tensile stress in         │
│           │ y-direction (Integer; Default = 0 meaning no variation)                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Yc)     │ Identification of a TABLEMi entry providing the variation of the maximum compressive stress        │
│           │ (absolute value) in y-direction (Integer or blank)                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Zt)     │ Identification of a TABLEMi entry providing the variation of the maximum tensile stress in         │
│           │ z-direction (Integer; Default = 0 meaning no variation)                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Zc)     │ Identification of a TABLEMi entry providing the variation of the maximum compressive stress        │
│           │ (absolute value) in z-direction (Integer; Default = 0 meaning no variation)                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Sxy)    │ Identification of a TABLEMi entry providing the variation of the maximum shear stress in xy-plane  │
│           │ (Integer; Default = 0 meaning no variation)                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Syz)    │ Identification of a TABLEMi entry providing the variation of the maximum shear stress in yz-plane  │
│           │ (Integer; Default = 0 meaning no variation)                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Szx)    │ Identification of a TABLEMi entry providing the variation of the maximum shear stress in zx-plane  │
│           │ (Integer; Default = 0 meaning no variation)                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Find)   │ Identification of a TABLEMi entry providing the variation of the Failure index (Real > 0.,         │
│           │ (Integer; Default = 0 meaning no variation)                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Fxy)    │ Identification of a TABLEMi entry providing the variation of the interactive strength constant for │
│           │ xy-plane (Integer; Default = 0 meaning no variation)                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Fyz)    │ Identification of a TABLEMi entry providing the variation of the interactive strength constant for │
│           │ yz-plane (Integer; Default = 0 meaning no variation)                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Fzx)    │ Identification of a TABLEMi entry providing the variation of the interactive strength constant for │
│           │ zx-plane (Integer; Default = 0 meaning no variation)                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Ext)    │ Identification of a TABLEMi entry providing the variation of the maximum tensile strain in         │
│           │ x-direction (Integer; Default = 0 meaning no variation)                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Exc)    │ Identification of a TABLEMi entry providing the variation of the maximum compressive strain        │
│           │ (absolute value) in x-direction  (Integer; Default = 0 meaning no variation)                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Yet)    │ Identification of a TABLEMi entry providing the variation of the maximum tensile strain in         │
│           │ y-direction  (Integer; Default = 0 meaning no variation)                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Eyc)    │ Identification of a TABLEMi entry providing the variation of the maximum compressive strain        │
│           │ (absolute value) in y-direction  (Integer; Default = 0 meaning no variation)                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Ezt)    │ Identification of a TABLEMi entry providing the variation of the maximum tensile strain in         │
│           │ z-direction  (Integer; Default = 0 meaning no variation)                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Ezc)    │ Identification of a TABLEMi entry providing the variation of the maximum compressive strain        │
│           │ (absolute value) in z-direction  (Integer; Default = 0 meaning no variation)                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Gxy)    │ Identification of a TABLEMi entry providing the variation of the maximum shear strain in xy-plane  │
│           │ (Integer; Default = 0 meaning no variation)                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Gyz)    │ Identification of a TABLEMi entry providing the variation of the maximum shear strain in yz-plane  │
│           │ (Integer; Default = 0 meaning no variation)                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Gzx)    │ Identification of a TABLEMi entry providing the variation of the maximum shear strain in zx-plane  │
│           │ (Integer; Default = 0 meaning no variation)                                                        │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. See the MATF entry for a complete description of the meaning of each of the variables for the various failure criterion.
2. If there is no variation of a particular entry, leave the field blank or enter zero.
3. Continuation entries except the last line are required. The last line is optional.
