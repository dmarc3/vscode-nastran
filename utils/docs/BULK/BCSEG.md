## [BCSEG](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCSEG.xhtml) - Contact Segment Defined Using Grids

Grids which are part of an element to be used in contact analyses in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCSEG   ID      IBODY   G1      G2      G3      G4                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCSEG   100     1005    11      12      13      14                              
```

```text
┌─────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID          │ Unique identification number for this BCSEG entry. (Integer > 0; Required)                         │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IBODY       │ Identification number of a surface that is called out on the 5th field of a BCBODY entry. (Integer │
│             │ > 0; Required)                                                                                     │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G1,G2,G3,G4 │ GRID point identification numbers of an element on this surface. For quad plates and quad surfaces │
│             │ of solids, enter four grid id’s.  For triangular plates or triangular faces of solids, leave G4    │
│             │ blank. (Integer > 0; Required)                                                                     │
└─────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry is used as shown in the example below:

```nastran
BCBODY, 201,,,1005
BCSEG,1,1005,11,12,13,14
BCSEG,2,1005,21,22,23,24
BCSEG,3,1005,31,32,33,34
```

(In the above 11-14, 21-24 and 31-34 are GRID ID’s)
