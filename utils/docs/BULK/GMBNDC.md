## [GMBNDC](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.GMBNDC.xhtml) - Geometric Boundary - Curve

Defines a geometric boundary consisting of element edges along a curve interface.  The boundary may consist of edges of shell, beam, or solid elements.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GMBNDC  BID     GRIDI   GRIDF                                           +       
+       ENTITY  ID1     ID2     ID3     ID4     ID5     ID6     ID7     +       
+       ID8     -etc.-                                                          
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GMBNDC  1       101     106                                             +       
+       GRID    102     103     104     105                                     
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ BID       │ Boundary identification number to be referenced by a CINTC entry. (Integer > 0)             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ GRIDI     │ Initial grid identification number for boundary. (Integer > 0)                              │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ GRIDF     │ Final grid identification number for boundary. (Integer > 0)                                │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ ENTITY    │ Entity type for defining boundary. GRID (Character)                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Entity identification numbers for boundary of subdomain. Values in the list must be unique. │
│           │ (Integer > 0)                                                                               │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. All boundary identification numbers must be unique.
2. GRIDI and GRIDF define the end points of the boundary.
3. For each boundary, GRID is required.
4. For the GRID entity type, the entities should be listed in order from the GRIDI to the GRIDF.  The GRIDI and GRIDF need not be repeated in the IDi list.
5. Multiple continuation entries may be specified for additional entity identification numbers, IDi.
6. Interface elements may generate high or negative matrix/factor diagonal ratios. If there are no other modelling errors, these messages may be ignored and PARAM,BAILOUT,-1 may be used to continue the run.
