## [SEUSET1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SEUSET1.xhtml) - Superelement Degree-of-Freedom Set Definition, Alternate Form

Defines a degree-of-freedom set for a superelement.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEUSET1 SEID    SNAME   C       G1      G2      G3      G4      G5              
        G6      G7      -etc.-                                                  
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEUSET1 15      U4      1       12      15      17      22      25              
        52      53                                                              
```
#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEUSET1 SEID    SNAME   C       G1      “THRU”  G2                              
SEUSET1 15      U4      1       12      THRU    27                              
```
```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEID      │ Superelement identification number.  (Integer > 0)                                              │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SNAME     │ Set name.  (One to four characters or string “ZERO”, followed by the set name.)                 │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Component numbers.  (Any unique combination of the Integers 1 through 6 with no embedded blanks │
│           │ for grid points; Integer 0 or blank for scalar points.)                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid or scalar point identification number.  (Integer > 0)                                      │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
