## [SECSET](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SECSET.xhtml) - Free Boundary Degree-of-Freedom

Defines boundary degrees-of-freedom to be free (c-set) during generalized dynamic reduction or component mode synthesis calculations.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SECSET  SEID    ID1     C1      ID2     C2      ID3     C3                      
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SECSET  3       124     1       5       23      6       15                      
```
```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEID      │ Superelement identification number.  (Integer > 0)                                              │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component numbers.  (Any unique combination of the Integers 1 through 6 with no embedded blanks │
│           │ for grid points; Integer 0 or blank for scalar points.)                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Grid or scalar point identification number.  (Integer > 0)                                      │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
