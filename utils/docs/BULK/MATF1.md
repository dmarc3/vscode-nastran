## [MATF1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATF11.xhtml) - Frequency Dependent Isotropic Material Definition

Defines the frequency dependent properties for an isotropic poroelastic material.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATF1   MID     T(E)    T(G)    T(NU)   T(RHO)  T(A)            T(GE)           
        T(ST)   T(SC)   T(SS)                                                   
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATF1   1       30                      130                                     
```
```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material property identification number that matches the identification number on MAT1 entry.   │
│           │ (Integer>0; Required)                                                                           │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(E)      │ Identification number of a TABLEMi entry for the Young's modulus. (Integer³0 or Blank)          │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(G)      │ Identification number of a TABLEMi entry for the shear modulus. (Integer³0 or Blank)            │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(NU)     │ Identification number of a TABLEMi entry for the Poisson's ratio. (Integer³0 or Blank)          │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(RHO)    │ Identification number of a TABLEMi entry for the mass density. (Integer³0 or Blank)             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(A)      │ Identification number of a TABLEMi entry for the thermal expansion coefficient. (Integer³0 or   │
│           │ Blank)                                                                                          │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(GE)     │ Identification number of a TABLEMi entry for the damping coefficient. (Integer³0 or Blank)      │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(ST)     │ Identification number of a TABLEMi entry for the tension stress limit. (Integer³0 or Blank)     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(SC)     │ Identification number of a TABLEMi entry for the compression stress limit. (Integer³0 or Blank) │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(SS)     │ Identification number of a TABLEMi entry for the shear stress limit. (Integer³0 or Blank)       │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Remarks 1 to 4 under   are applicable with MATF1..

2. MATF1 must reside under Case Control 'BEGIN BULK TRMC' and is applicable to that trim component only. It may only be referenced by MATPE1 entry for a poroelastic element.

