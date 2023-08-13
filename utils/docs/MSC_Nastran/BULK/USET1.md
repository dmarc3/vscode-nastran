## [USET1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.USET1.xhtml) - Degree-of-Freedom Set Definition, Alternate Form

Defines a degrees-of-freedom set.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
USET1   SNAME   C       ID1     ID2     ID3     ID4     ID5     ID6     +       
+       ID7     ID8     -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
USET1   SB      345     2       1       36      5       9       7               
        40                                                                      
```

#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
USET1   SNAME   C       ID1     “THRU”  ID2                                     
USET1   SB      123     170     THRU    180                                     
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SNAME     │ Set name.  (One to four characters or the word “ZERO” followed by the set name.)               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Component numbers.  (Integer zero or blank for scalar points or any unique combinations of the │
│           │ Integers 1 through 6 for grid points with no embedded blanks.)                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Grid or scalar point identification number.  (Integer > 0; for “THRU” option, ID1 < ID2.)      │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```
