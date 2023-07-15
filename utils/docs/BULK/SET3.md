## [SET3](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SET3.xhtml) - Defines a List of Grids, Elements, Points or Modules

Defines a list of grids, elements, points or modules.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SET3    SID     DES     ID1     ID2     ...     IDi                             
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SET3    1       POINT   11      12      13      15      18      21              
```
#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SET3    SID     DES     ID1     “THRU”  ID2                                     
SET3    33      POINT   20      THRU    60                                      
```
```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Unique identification number.  (Integer > 0)                                                 │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ DES       │ Set description (Character). Valid options are “GRID”, “ELEM”, “POINT”, “PROP”, “RBEin”, and │
│           │ “RBEex” and “MODULE”.                                                                        │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Identifiers of grids points, elements, points or properties. (Integer ≥ 0)                   │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```
