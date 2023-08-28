## [MAT10F](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/TOC.MAT10F.xhtml) - Fluid Frequency Dependence

Specifies frequency-dependent material properties on MAT10 entry fields via TABLEDi entries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT10F  MID     BULK    RHO     C       GE      ALPHA                           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT10   103     666
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material property identification number that matches the identification number on MAT10 entry.     │
│           │ (Integer > 0)                                                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BULK      │ Identification number of a TABLEDi entry for the Bulk modulus. (Integer > 0 or blank)              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RHO       │ Identification number of a TABLEDi entry for the mass density. Used only in SOL108. (Integer > 0   │
│           │ or blank)                                                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Identification number of a TABLEDi entry for the speed of sound. Used only in SOL108. (Integer > 0 │
│           │ or blank)                                                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GE        │ Identification number of a TABLEDi entry for the element structural damping coefficient. (Integer  │
│           │ > 0 or blank)                                                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALPHA     │ Identification number of a TABLEDi entry for the normalized admittance coefficient for porous      │
│           │ material.  See Remark 4.                                                                           │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Fields 3, 4, etc., of this entry correspond, field-by-field, to fields 3, 4, etc., of the MAT10 entry referenced in field 2. The value in a particular field of the MAT10 entry is replaced by the table referenced in the corresponding field of this entry. Blank or zero entries mean that there is no frequency dependence of the fields on the MAT10 entry. The nominal value of GE defined on MAT10 needs to be non-zero to get frequency dependent damping defined in the GE table on MAT10F.
2. Table references must be present for each item that is frequency dependent.
3. When ALPHA on MAT10 is specified it is multiplied by the excitation frequency in radians/unit time. If F(ALPHA) is specified then the value supplied by F(ALPHA) will take precedence and ALPHA WILL NOT BE MULTIPLIED by the excitation frequency.
