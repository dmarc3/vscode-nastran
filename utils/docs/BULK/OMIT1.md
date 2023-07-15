## [OMIT1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.OMIT1.xhtml) - Omitted Degrees-of-Freedom, Alternate Form 1

Defines degrees-of-freedom to be excluded (o-set) from the analysis set (a-set).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
OMIT1   C       G1      G2      G3      G4      G5      G6      G7              
        G8      G9      G10     -etc.-                                          
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
OMIT1   3       2       1       3       10      9       6       5               
        7       8                                                               
```
#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
OMIT1   C       G1      “THRU”  G2                                              
OMIT1   0       17      THRU    109                                             
```
```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Component numbers.  (Any unique combination of the Integers 1 through 6 with no embedded blanks │
│           │ for grid points; zero or blank for scalar points.)                                              │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid or scalar point identification number.  (Integer > 0; for “THRU” option, G1 < G2.)         │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The degrees-of-freedom specified on this entry form members of the mutually exclusive o-set.  They may not be specified on other entries that define mutually exclusive sets.  See “ Degree-of-Freedom Sets ” for a list of these entries.

2. If the alternate format is used, not all points in the range G1 through G2 have to be defined. Undefined points will collectively produce a warning message but will otherwise be ignored.

3. In nonlinear analysis, degrees-of-freedom attached to nonlinear elements must be placed in the a-set.  In other words, nonlinear degrees-of-freedom must not be specified on OMIT or OMIT1 entries.

4. SOL 400 does not support OMITAX as well as ASETi, OMITi, BSETi, CSETi, SUPORTi, and QSETi except in some situations (See Remark   under  )

