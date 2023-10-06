## [PRAC3D](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PRAC3D.xhtml) - CRAC3D Element Property

Defines the properties of the CRAC3D structural element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PRAC3D  PID     MID     GAMMA   PHI                                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PRAC3D  108     2       .50     180.                                            
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number. (Integer > 0)                                                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material identification number. (Integer > 0)                                                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GAMMA     │ Exponent used in the displacement field. See Remark 3. (Real; Default = 0.5)                     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHI       │ Angle (in degrees) relative to the element x axis along which stress intensity factors are to be │
│           │ calculated. See Remark 3. (Real; Default = 180.0)                                                │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. PRAC3D is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PRAC3D property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PRAC3D entries.
2. Either isotropic (MAT1) or anisotropic (MAT9) material entries may be referenced.
3. Nondefault values for GAMMA and PHI have not been tested. Therefore, the default value should be used.
