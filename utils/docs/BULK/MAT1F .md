## [MAT1F ](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/TOC.MAT1F.xhtml) - Isotropic Material Frequency Dependence

Specifies frequency-dependent material properties on MAT1 entry fields via TABLEDi entries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT1F   MID     E       G       NU      RHO                     GE 
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT1F   33      15      22      16
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material property identification number that matches the identification number on MAT1 entry.     │
│           │ (Integer > 0)                                                                                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ E         │ Identification number of a TABLEDi entry for the Young’s modulus. (Integer > 0 or blank)          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G         │ Identification number of a TABLEDi entry for the shear modulus. (Integer > 0 or blank)            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NU        │ Identification number of a TABLEDi entry for the Poisson’s ratio. (Integer > 0 or blank)          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GE        │ Identification number of a TABLEDi entry for the structural damping coefficient. (Integer > 0 or  │
│           │ blank)                                                                                            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RHO       │ Identification number of a TABLEDi entry for the mass density. (Integer > 0 or blank). This table │
│           │ is only used for isotropic poroelastic material with BEGIN BULK TRMC and is applicable to that    │
│           │ trim component only.                                                                              │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Fields 3, 4, etc., of this entry correspond, field-by-field, to fields 3, 4, etc., of the MAT1 entry referenced in field 2. The value in a particular field of the MAT1 entry is replaced by the table referenced in the corresponding field of this entry. Blank or zero entries mean that there is no frequency dependence of the fields on the MAT1 entry.
2. The user is reminded that on the MAT1 entry, if any one of the entries E, G, or, NU is left blank, they are connected by the relationship G=E/(2(1+NU)). Therefore, this entry requires that if any E, G, or NU is to be frequency dependent then Table references must be present for all three of the E, G, NU even if this requires a table of constant values.
3. Table references must be present for each item that is frequency dependent.
4. IF GE=0.0 on corresponding MAT1 then GE table must be blank or 0.
