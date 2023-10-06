## [CFLUIDi](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CFLUIDi.xhtml) - Fluid Element Connections

Defines three types of fluid elements for an axisymmetric fluid model.

#### Formats:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CFLUID2 EID     IDF1    IDF2                    RHO     B
CFLUID3 EID     IDF1    IDF2    IDF3            RHO     B
CFLUID4 EID     IDF1    IDF2    IDF3    IDF4    RHO     B
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CFLUID2 100     11      14                      .025    0.0
CFLUID3 110     15      13      12              1.2        
CFLUID4 120     11      15      12      14                 
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Unique element identification number. (0 < Integer < 100,000,000)                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDFi      │ Identification number of a RINGFL entry.  (Integer > 0; ; all IDFi < 500000)                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RHO       │ Mass density.  (Real > 0.0; Default is the value of DRHO on the AXIF entry)                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ B         │ Bulk modulus, pressure per volume ratio.  (Real; Default is the value of DB on the AXIF entry) │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. CFLUIDi is allowed only if an AXIF entry is also present.
2. Element identification number must be unique with respect to all other fluid, scalar, and structural elements.
3. The volume defined by IDFi is a body of revolution about the polar axis of the fluid coordinate system defined by AXIF.  CFLUID2 defines a thick disk with IDF1 and IDF2 defining the outer corners as shown in  :

![bulkc102540.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102540.jpg?_LANG=enus)

Figure 9-24 CFLUIDi Examples

4. All   interior angles must be less than 180 ° .
5. The order of connected RINGFL points is arbitrary.
6. If B = 0.0, the fluid is incompressible.
