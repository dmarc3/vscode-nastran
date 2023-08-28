## [SPCOFF](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SPCOFF.xhtml) - Excludes Degrees-of-Freedom from the AUTOSPC Operation

Defines a set of degrees-of-freedom to be excluded from the AUTOSPC operation.  See  Constraint and Mechanism Problem Identification in SubDMAP SEKR  in the  MSC Nastran Reference Guide  for a description of the AUTOSPC operation.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPCOFF  G1      C1      G2      C2      G3      C3      G4      C4              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPCOFF  32      436     5       1                                               
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid or scalar point identification number.  (Integer > 0)                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component numbers.  (Integer 0, 1 or blank for scalar points; Integers 1 through 6 with no │
│           │ embedded blanks for grid points.)                                                          │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────┘
```
