## [ASET1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ASET1.xhtml) - Degrees-of-Freedom For the a-set, Alternate Form of ASET Entry

Defines degrees-of-freedom in the analysis set (a-set).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ASET1   C       ID1     ID2     ID3     ID4     ID5     ID6     ID7     +       
+       ID8     ID9     ID10    -etc.-                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ASET1   345     2       1       3       10      9       6       5       +       
+       7       8                                                               
```

#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ASET1   C       ID1     “THRU”  ID2                                             
ASET1   123456  7       THRU    109                                             
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Component number. (Integer zero or blank for scalar points, or any unique combinations of the │
│           │ Integers 1 through 6 for grid points with no embedded blanks.)                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Grid or scalar point identification numbers. (Integer > 0; for THRU option, ID1 < ID2)        │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Degrees-of-freedom specified on this entry form members of the a-set that is exclusive from other sets defined by Bulk Data entries. See   for a list of these entries.
2. When ASET, ASET1, QSET, and/or QSET1 entries are present, all   degrees-of-freedom not otherwise constrained (e.g., SPCi or MPC entries) will be placed in the omitted set (o-set).
3. If the alternate format is used, all points in the sequence ID1 through ID2 are not required to exist, but there must be at least one degree-of-freedom in the a-set for the model, or a fatal error will result.  Any points implied in the THRU that do not exist will collectively produce a warning message but will otherwise be ignored.
4. In nonlinear analysis, all degrees-of-freedom attached to nonlinear elements must be placed in the a-set. In other words, if the ASET or ASET1 entry is specified then all nonlinear degrees-of-freedom must be specified on the ASET or ASET1 entry.
5. SOL 400 does not support OMITAX as well as ASETi, OMITi, BSETi, CSETi, SUPORTi, and QSETi except in some situations (See Remark   under  ).
