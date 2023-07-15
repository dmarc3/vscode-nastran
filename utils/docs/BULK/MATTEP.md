## [MATTEP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATTEP.xhtml) - Thermo-Elastic-Plastic Material Properties - SOL 400

Specifies temperature-dependent elasto-plastic material properties to be used for static, quasi static or transient dynamic analysis in SOL 400 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATTEP  MID             T(Y0)   T(FID)                          T(H)            
        N/A                     N/A                                             
        “Chab...R0      Rinf    B       C       Gam     Kap     N               
                Qm                                                              
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATTEP  100             20                                                      
```
```text
┌────────────┬──────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer  │ Meaning                                          │                                                   │
├────────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MID        │ Identification number of MATEP entry. See Remark │                                                   │
│            │ 1. (Integer > 0)                                 │                                                   │
├────────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ T(Y0)      │ Identification number of TABLEMi entry for       │                                                   │
│            │ thermo-elasto-plastic material. See Remarks      │                                                   │
│            │ 2. (Integer > 0 or blank)                        │                                                   │
├────────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ T(FID)     │ Identification number of TABLEST entry for       │                                                   │
│            │ temperature-dependent stress-strain curves       │                                                   │
│            │ (Integer > 0 or blank). See Remark 4.            │                                                   │
├────────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ T(H)       │ Identification number of TABLEMi entry for       │                                                   │
│            │ temperature-dependent plasticity moduli in       │                                                   │
│            │ thermo-elasto-plastic material. See Remarks 3.   │                                                   │
│            │ (Integer > 0 or blank)                           │                                                   │
├────────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ “Chaboche” │ A keyword specifying the following data pertains │                                                   │
│            │ to the Chaboche model.                           │                                                   │
├────────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ R0                                               │ Identification number of TABLEMi entry for        │
│            │                                                  │ temperature dependent R0 for isotropic hardening  │
│            │                                                  │ (Integer > 0).                                    │
├────────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ Rinf                                             │ Identification number of TABLEMi entry for        │
│            │                                                  │ temperature dependent Rinfinity for isotropic     │
│            │                                                  │ hardening (Integer > 0).                          │
├────────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ B                                                │ Identification number of TABLEMi entry for        │
│            │                                                  │ temperature dependent coefficient B for isotropic │
│            │                                                  │ hardening (Integer > 0).                          │
├────────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ C                                                │ Identification number of TABLEMi entry for        │
│            │                                                  │ temperature dependent coefficient C for kinematic │
│            │                                                  │ hardening (Integer > 0).                          │
├────────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ Kap                                              │ Identification number of TABLEMi entry for        │
│            │                                                  │ temperature dependent Kappa value for viscosity   │
│            │                                                  │ model (Integer > 0).                              │
├────────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ N                                                │ Identification number of TABLEMi entry for        │
│            │                                                  │ temperature dependent coefficient n for viscosity │
│            │                                                  │ model (Integer).                                  │
├────────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ Qm                                               │ Identification number of TABLEMi entry for        │
│            │                                                  │ temperature dependent coefficient Qm for          │
│            │                                                  │ isotropic hardening (Integer > 0)                 │
├────────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │                                                  │ Identification number of TABLEMi entry for        │
│            │                                                  │ temperature dependent coefficient  for isotropic  │
│            │                                                  │ hardening (Integer > 0).                          │
├────────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │                                                  │ Identification number of TABLEMi entry for        │
│            │                                                  │ temperature dependent coefficient  to introduce   │
│            │                                                  │ progressive memory (Integer > 0).                 │
└────────────┴──────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```
#### Remarks:

1. The MATEP Bulk Data entry with the same MID must exist for MATTEP to be effective. All the fields defined in MATTEP correspond to the same fields of MATEP. The value in a particular field of the MATEP entry is replaced or modified by the table referenced in the corresponding field of this entry.

2. The table represents yield stresses as a function of temperature. Therefore, the curve should comprise the initial stress from Y0 or FID field on MATEP (most likely at room temperature). T(Y0) field accommodates FID field in case FID field defines the initial yield stress instead of Y0 field. In this case, the yield stresses at any plastic strain will be scaled by the same ratio as the initial yield stress at the same temperature.

3. The table represents a normalized plasticity moduli (work hardening slope) as a function of temperature.

4. Temperature dependent stress-strain curves may be entered in a general manner using the T(FID) option. The integer value entered in this field represents the ID of a TABLEST entry which provides IDs of TABLES1 stress-plastic strain curves vs. temperature. All such curves must be entered as stress vs. plastic strain. No curves should be referenced on the MATS1 entry. For this option T(Y0) and T(H) should be left blank and if entered, SOL 400 will re-set them to blank if T(FID) is a positive integer.

5. This entry must be used in conjunction with MAT1, MATEP and MATT1 all with the same MID. The MATT1 entry must have at least one non-blank entry in fields 3-7 of the primary MATT1 entry.

