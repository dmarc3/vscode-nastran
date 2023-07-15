## [SEQSET](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SEQSET.xhtml) - Superelement Generalized Degree-of-Freedom

Defines the generalized degrees-of-freedom of the superelement to be used in generalized dynamic reduction or component mode synthesis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEQSET  SEID    ID1     C1      ID2     C2      ID3     C3                      
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEQSET  15      1       123456  7       5       22      3                       
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEID      │ Superelement identification number.  Must be a primary superelement.  (Integer > 0)                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component number.  (Any unique combination of the Integers 1 through 6 with no embedded blanks for │
│           │ grid points; Integer zero or blank for scalar points.)                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Grid or scalar point identification numbers.  Must be an exterior point.  (Integer > 0)            │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
