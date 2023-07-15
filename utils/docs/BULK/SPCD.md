## [SPCD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SPCD.xhtml) - Enforced Motion Value

Defines an enforced displacement value for static analysis and an enforced motion value (displacement, velocity or acceleration) in dynamic analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPCD    SID     G1      C1      D1      G2      C2      D2                      
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPCD    100     32      3       -2.6    5               2.9                     
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Set identification number of the SPCD entry.  (Integer > 0)                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid or scalar point identification number.  (Integer > 0)                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component numbers. See Remark 10. (0 < Integer < 6; any unique combination of Integers 1 through 6 │
│           │ with no embedded blanks for grid points; Integer 0, 1 or blank for scalar points)                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Di        │ Value of enforced motion for components Ci at grid Gi. (Real)                                      │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
