## [USET](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.USET.xhtml) - Degree-of-Freedom Set Definition

Defines a degree-of-freedom set.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
USET    SNAME   ID1     C1      ID2     C2      ID3     C3                      
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
USET    U4      333     26      17      0                                       
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SNAME     │ Set name.  (One to four characters, or the string “ZERO” followed by the set name.)            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Grid or scalar point identification number.  (Integer > 0)                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component number.  (Integer zero or blank for scalar points, or any unique combinations of the │
│           │ Integers 1 through 6 for grid points with no embedded blanks.)                                 │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```
