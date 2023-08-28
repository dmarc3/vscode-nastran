## [PRAC2D](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PRAC2D.xhtml) - CRAC2D Element Property

Defines the properties and stress evaluation techniques to be used with the CRAC2D structural element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PRAC2D  PID     MID     T       IPLANE  NSM     GAMMA   PHI                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PRAC2D  108     2       0.10    0       .17     .50     180.                    
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number. (Integer > 0)                                                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material identification number. (Integer > 0)                                                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T         │ Element thickness. (Real > 0.0)                                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IPLANE    │ Plane strain or plane stress option. Use 0 for plane strain; 1 for plane stress. (Integer = 0    │
│           │ or 1, Default = 0)                                                                               │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSM       │ Non-structural mass per unit area. (Real > 0.0; Default = 0)                                     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GAMMA     │ Exponent used in the displacement field. See Remark 4. (Real; Default = 0.5)                     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHI       │ Angle (in degrees) relative to the element x-axis along which stress intensity factors are to be │
│           │ calculated. See Remark 4. (Real; Default = 180.0)                                                │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. PRAC2D is a primary property entry. Primary property entries are grouping entities for many applications in Nastran. Therefore it is highly recommended that the PRAC2D property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PRAC2D entries.
2. PRAC2D entry may refer to MAT1, MAT2, or MAT8 material property entries.
3. For plane strain analysis, only MAT1 type data should be used.
4. Nondefault values for GAMMA and PHI have not been tested. Therefore, the default value should be used.
