## [SPCOFF1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SPCOFF1.xhtml) - Excludes DOF’s from AUTOSPC Processing, Alternate Form

Defines a set of degrees-of-freedom to be excluded from the AUTOSPC operation.  See  Constraint and Mechanism Problem Identification in SubDMAP SEKR  in the  MSC Nastran Reference Guide  for a description of the AUTOSPC operation.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPCOFF1 C       G1      G2      G3      G4      G5      G6      G7              
        G8      G9      -etc.-                                                  
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPCOFF1 2       1       3       10      9       6       5       4               
        8                                                                       
```
#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPCOFF1 C       G1      “THRU”  G2                                              
SPCOFF1 12456   6       THRU    32                                              
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Component numbers. (Any unique combination of the Integers 1 through 6 with no embedded blanks for │
│           │ grid points; Integer 0, 1 or blank for scalar points.)                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid or scalar point identification numbers.  (Integer > 0 or “THRU”; for “THRU” option, G1 < G2.) │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
