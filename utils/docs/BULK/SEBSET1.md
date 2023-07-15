## [SEBSET1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SEBSET1.xhtml) - Fixed Boundary Degree-of-Freedom, Alternate Form of SEBSET

Defines boundary degrees-of-freedom to be fixed (b-set) during generalized dynamic reduction or component mode calculations.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEBSET1 SEID    C       G1      G2      G3      G4      G5      G6              
        G7      G8      G9      -etc.-                                          
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEBSET1 5       2       135     14      6       23      24      25              
        122     127                                                             
```
#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEBSET1 SEID    C       G1      “THRU”  G2                                      
SEBSET1 5       3       6       THRU    32                                      
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEID      │ Superelement identification number.  (Integer > 0)                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Component number.  (Any unique combination of the Integers 1 through 6 with no embedded blanks for │
│           │ grid points, 0 or blank for scalar points.)                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid or scalar point identification numbers.  (Integer > 0 or “THRU”; for THRU option G1 < G2.)    │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
