## [PRESAX](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PRESAX.xhtml) - Conical Shell Pressure Load

Defines the static pressure loading on a conical shell element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PRESAX  SID     P       RID1    RID2    PHI1    PHI2                            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PRESAX  3       7.92    4       3       20.6    31.4                            
```

```text
┌────────────┬──────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                      │
├────────────┼──────────────────────────────────────────────────────────────┤
│ SID        │ Load set identification number. (Integer > 0)                │
├────────────┼──────────────────────────────────────────────────────────────┤
│ P          │ Pressure value. (Real)                                       │
├────────────┼──────────────────────────────────────────────────────────────┤
│ RID1, RID2 │ Ring identification numbers. See RINGAX entry. (Integer > 0) │
├────────────┼──────────────────────────────────────────────────────────────┤
│ PHI1, PHI2 │ Azimuthal angles in degrees. (Real; PHI2 > PHI1)             │
└────────────┴──────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. PRESAX is allowed only if an AXIC entry is also present.
2. Load sets must be selected with the Case Control command LOAD = SID.
3. For a discussion of the conical shell problem, see    in the  MSC Nastran Reference Guide .
4. For axisymmetric loading over 360 degrees, use PHI1 = 0.0 and PHI2 = 360.0.
