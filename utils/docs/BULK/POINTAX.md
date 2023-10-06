## [POINTAX](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.POINTAX.xhtml) - Conical Shell Point

Defines the location of a point on an axisymmetric shell ring at which loads may be applied via the FORCE or MOMENT entries and at which displacements may be requested. These points are not subject to constraints via MPCAX, SPCAX, or OMITAX entries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
POINTAX ID      RID     PHI                                                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
POINTAX 2       3       30.0                                                    
```

```text
┌───────────┬────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                │
├───────────┼────────────────────────────────────────────────────────┤
│ ID        │ Point identification number. (Unique Integer > 0)      │
├───────────┼────────────────────────────────────────────────────────┤
│ RID       │ Identification number of a RINGAX entry. (Integer > 0) │
├───────────┼────────────────────────────────────────────────────────┤
│ PHI       │ Azimuthal angle in degrees. (Real)                     │
└───────────┴────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry is allowed only if an AXIC entry is also present.
2. POINTAX identification numbers must be unique with respect to all other POINTAX, RINGAX, and SECTAX identification numbers.
3. For a discussion of the conical shell problem, see   in the  MSC Nastran Reference Guide .
