## [MATTG](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATTG.xhtml) - Temperature Variation of Interlaminar Materials

Specifies gasket material property temperature variation to be used in SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATTG   MID     IDYM    IDVM    IDDM    IDLD    IDU1    IDU2    IDU3    +
+       IDU4    IDU5    IDU6    IDU7    IDU8    IDU9    IDU10   IDYPR   +
+       IDEPL   IDGPL   IDGAP
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATTG   100     10      20      1001    1002    1003         
                                                        1010 
        1020    1030                                         
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material ID number that matches the material ID of a corresponding MATG material. (Integer > 0;   │
│           │ Required)                                                                                         │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDYM      │ ID of TABLEMi entry that gives the temperature variation of Young’s modulus for the membrane      │
│           │ behavior of the material. (Integer > 0 or blank)                                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDVM      │ ID of TABLEMi entry that gives the temperature variation of Poisson’s ratio for the membrane      │
│           │ behavior of the material. (Integer > 0 or blank)                                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDDM      │ ID of TABLEMi entry that gives the temperature variation of the mass density for the membrane     │
│           │ behavior of the material. (Integer > 0 or blank)                                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDLD      │ ID of TABLEMi entry that gives the temperature variation of the loading curve of the material.    │
│           │ (Integer > 0 or blank)                                                                            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDUi      │ ID of TABLEMi entry that gives the temperature variation of the unloading curve of the material.  │
│           │ There can be up to 10 unloading curves and each can have a different temperature variation. If    │
│           │ there is no unloading, there does not need to be any unloading curves. (Integer > 0 or blank)     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDYPR     │ ID of TABLEMi entry that gives the temperature variation of the yield pressure for the out-of     │
│           │ -plane behavior of the material. (Integer > 0 or blank)                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDEPL     │ ID of TABLEMi entry that gives the temperature variation of the tensile modulus for the out-of    │
│           │ -plane behavior of the material. (Integer > 0 or blank)                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDGPL     │ ID of TABLEMi entry that gives the temperature variation of the transverse shear modulus for the  │
│           │ out-of -plane behavior of the material. (Integer > 0 or blank)                                    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDGAP     │ ID of TABLEMi entry that gives the temperature variation of the initial gap for the out-of -plane │
│           │ behavior of the material. (Integer > 0 or blank)                                                  │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
