## [SESUP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SESUP.xhtml) - Fictitious Support

Defines determinate reaction superelement degrees-of-freedom in a free-body analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SESUP   SEID    ID1     C1      ID2     C2      ID3     C3                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SESUP   5       16      215                                                     
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEID      │ Superelement identification number.  Must a primary superelement.  (Integer > 0)            │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Grid or scalar point identification number.  Must be exterior points.  (Integer > 0)        │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component numbers.  (Integer zero or blank for scalar points; Any unique combination of the │
│           │ Integers 1 through 6 for grid points.)                                                      │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────┘
```
