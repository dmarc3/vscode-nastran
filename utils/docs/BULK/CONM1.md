## [CONM1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CONM1.xhtml) - Concentrated Mass Element Connection, General Form

Defines a 6 x 6 symmetric mass matrix at a geometric grid point.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CONM1   EID     G       CID     M11     M21     M22     M31     M32     +       
+       M33     M41     M42     M43     M44     M51     M52     M53     +       
+       M54     M55     M61     M62     M63     M64     M65     M66             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CONM1   2       22      2       2.9     6.3                             +       
+       4.8     28.6                                                    +       
+               28.6                                            28.6            
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Unique element identification number.  (0 < Integer < 100,000,000). See Remark 2. │
├───────────┼───────────────────────────────────────────────────────────────────────────────────┤
│ G         │ Grid point identification number.  (Integer > 0). See Remark 3.                   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────┤
│ CID       │ Coordinate system identification number for the mass matrix. (Integer > 0)        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────┤
│ Mij       │ Mass matrix values. (Real)                                                        │
└───────────┴───────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. For a less general means of defining concentrated mass at grid points, see the CONM2 entry description.
2. Element identification numbers should be unique with respect to all other element identification numbers.
3. Unlike the CONM2 entry, the CONM1 entry does not allow for the specification of concentrated mass at harmonic structural grid points. Therefore, grid point G must necessarily be a non-harmonic structural grid point.
