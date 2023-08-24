## [MATTORT ](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATTORT.xhtml) - Thermoelastic Orthotropic Material

Specifies temperature-dependent properties of elastic orthotropic materials for linear and nonlinear analyses used in SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATTORT MID     T(E1)   T(E2)   T(E3)   T(NU12) T(NU23) T(NU31)         
        T(G12)  T(G23)  T(G31)  T(A1)   T(A2)   T(A3)   T(SY)   T(WHS)  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATTORT 100     5       6       7
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Identification number of a MATORT entry. See Remark 1. (Integer > 0; no Default)                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Ei)     │ Identification number of a TABLEMi entry for the Young’s modulus as a function of temperature in   │
│           │ each respective direction. Remark 2. (Integer > 0 or blank)                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Nuij)   │ Identification number of a TABLEMi entry for the Poisson’s ratio as a function of temperature in   │
│           │ each respective direction. (Integer > 0 or blank)                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Gij)    │ Identification number of a TABLEMi entry for the shear modulus as a function of temperature in     │
│           │ each respective direction. (Integer > 0 or blank)                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Ai)     │ Identification number of a TABLEMi entry for the coefficient of thermal expansion as a function of │
│           │ temperature. (Integer > 0 or blank)                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(SY)     │ Identification number of a TABLEMi entry for the yield stress as a function of temperature.        │
│           │ (Integer > 0 or blank)                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(WHS)    │ Identification number of a TABLEMi entry for the work hardening slope as a function of             │
│           │ temperature. (Integer > 0 or blank)                                                                │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The MATTORT entry must have the same ID as the corresponding MATORT entry. Each table ID on the MATTORT entry corresponds to a parameter on the MATORT entry.
2. The table represents material constants as a function of temperature. Therefore, the curve should comprise the original value specified in the MATORT entry (most likely at room temperature).
