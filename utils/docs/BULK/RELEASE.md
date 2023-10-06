## [RELEASE](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RELEASE.xhtml) - Superelement Boundary Grid Point Release

Defines degrees-of-freedom for superelement exterior grid points that are not connected to the superelement.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RELEASE SEID    C       G1      G2      G3      G4      G5      G6      +       
+       G7      G8      -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RELEASE 15      456     3       7       11      2       156     9               
        152     162                                                             
```

#### Alternate Formats and Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RELEASE SEID    C       G1      “THRU”  G2                                      
RELEASE 6       2       15      THRU    127                                     
```

(ALL must be in FIELD 4 and no continuation is allowed)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RELEASE SEID    C       “ALL”                                                   
RELEASE 127     156     ALL                                                     
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEID      │ Superelement identification number.  (Integer > 0)                                               │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Component number.  (Any unique combination of the Integers 1 through 6 with no embedded blanks.) │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid point identification numbers.  (Integer > 0; “THRU”, or “ALL”; For THRU option, G1 < G2.)   │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. A grid point referenced on this entry must be an exterior grid point of the superelement referenced on the entry.
2. In the first alternate format, all grid points in the sequence G1 through G2 are not required to be exterior grid points.  Such grid points will collectively produce a warning message but will otherwise be ignored.
3. If the “ALL” option is used, all exterior grid points are released for the referenced degrees-of-freedom.
4. The RELEASE entry is applicable to only the superelement solution sequences (SOLs 101 through 200).  It may not reference the residual structure (SEID = 0).
5. This entry is not supported for partitioned superelements.
