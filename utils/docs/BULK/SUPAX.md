## [SUPAX](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SUPAX.xhtml) - Conical Shell Fictitious Support

Defines determinate reaction degrees-of-freedom in free bodies for conical shell analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SUPAX   RID1    HID1    C1      RID2    HID2    C2                              
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SUPAX   4       3       2                                                       
```
```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RIDi      │ Ring identification number.  (Integer > 0)                                                      │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HIDi      │ Harmonic identification number.  (Integer > 0)                                                  │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Conical shell degree-of-freedom numbers.  (Any unique combination of the Integers 1 through 6.) │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
