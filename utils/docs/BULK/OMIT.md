## [OMIT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.OMIT.xhtml) - Omitted Degrees-of-Freedom

Defines degrees-of-freedom to be excluded (o-set) from the analysis set (a-set).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
OMIT    ID1     C1      ID2     C2      ID3     C3      ID4     C4              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
OMIT    16      2       23      3516                    1       4               
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Grid or scalar point identification number. (Integer > 0)                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component numbers. (Any unique combination of the Integers 1 through 6 with no embedded blanks for │
│           │ grid points; zero or blank for scalar points.)                                                     │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The degrees-of-freedom specified on this entry form members of the mutually exclusive o-set. They may not be specified on other entries that define mutually exclusive sets. See “ Degree-of-Freedom Sets ” for a list of these entries.
2. Up to 24 degrees-of-freedom may be specified on a single entry.
3. In many cases it may be more convenient to use OMIT1, ASET, or ASET1 entries.
4. In nonlinear analysis, degrees-of-freedom attached to nonlinear elements must be placed in the a-set.  In other words, nonlinear degrees-of-freedom must not be specified on OMIT or OMIT1 entries.
5. SOL 400 does not support OMITAX as well as ASETi, OMITi, BSETi, CSETi, SUPORTi, and QSETi except in some situations (See Remark   under  ).
