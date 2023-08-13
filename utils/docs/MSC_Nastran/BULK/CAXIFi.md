## [CAXIFi](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CAXIFi.xhtml) - Fluid Element Connections

Defines an axisymmetric fluid element that connects i = 2, 3, or 4 fluid points.

#### Formats:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CAXIF2  EID     IDF1    IDF2                    RHO     B
CAXIF3  EID     IDF1    IDF2    IDF3            RHO     B
CAXIF4  EID     IDF1    IDF2    IDF3    IDF4    RHO     B
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CAXIF2   11      23      25                     0.00025      
CAXIF3  105      31      32     33              0.00647      
CAXIF4  524     421     425     424     422     0.0005  2.5+3
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                          │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)       │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ IDFi      │ Identification numbers of connected GRIDF points.  (Integer > 0) │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ RHO       │ Fluid density in mass units.  (Real > 0.0 or blank)              │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ B         │ Fluid bulk modulus.  (Real > 0.0 or blank)                       │
└───────────┴──────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. CAXIFi is allowed only if an AXSLOT entry is also present.
2. The element identification number (EID) must be unique with respect to all other fluid or structural elements.
3. If RHO or B is blank, then the corresponding RHOD and BD fields must be specified on the AXSLOT entry.
4. Plot elements are generated for these elements.  Because each plot element connects two points, one is generated for the CAXIF2 element, three are generated for the CAXIF3 element, and four plot elements are generated for the CAXIF4 element.  In the last case the elements connect the pairs of points (1-2), (2-3), (3-4), and (4-1).
5. If B = 0.0, the fluid is incompressible.
