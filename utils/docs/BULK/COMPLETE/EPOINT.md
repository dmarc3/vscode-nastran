## [EPOINT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.EPOINT.xhtml) - Extra Point List

Defines extra points for use in dynamics problems.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EPOINT  ID1     ID2     ID3     ID4     ID5     ID6     ID7     ID8             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EPOINT  3       18      1       4       16      2                               
```

#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EPOINT  ID1     “THRU”  ID2                                                     
EPOINT  17      THRU    43                                                      
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Extra point identification number.  (100,000,000 > Integer > 0; for “THRU” option, ID1 < ID2). │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. All extra point identification numbers must be unique with respect to all other structural, scalar, and fluid points for direct methods of solution.  For modal methods, they must be larger than the number of eigenvectors retained for analysis.
2. EPOINT is used to define coordinates used in transfer function definitions (see the TF and DMIG entries).
3. If the alternate format is used, extra points ID1 through ID2 are also defined to be extra points.
4. See the   for a discussion of extra points.
