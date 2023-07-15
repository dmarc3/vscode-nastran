## [SET1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SET1.xhtml) - Set Definition

Defines a list of structural grid points or element identification numbers.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SET1    SID     ID1     ID2     ID3     ID4     ID5     ID6     ID7             
        ID8     -etc.-                                                          
```
#### Example 1:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SET1    3       31      62      93      124     16      17      18              
        19                                                                      
```
#### Example 2:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SET1    6       29      32      THRU    50      61      THRU    70              
        17      57                                                              
```
#### Example 3:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SET1    7       SKIN                                                            
```
```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Unique identification number.  (Integer > 0)                                                     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ List of structural grid point or element identification numbers. (Integer > 0 or “THRU”; for the │
│           │ “THRU” option, ID1 < ID2 or “SKIN”; in field 3)                                                  │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
