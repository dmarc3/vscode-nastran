## [RADMT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RADMT.xhtml) - Radiation Boundary Material Property Temperature Dependence

Specifies table references for temperature dependent RADM entry radiation boundary properties.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RADMT   RADMID  T(A)    T(1)    T(2)    T(3)    T(4)    T(5)    T(6)            
        T(7)    -etc.-                                                          
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RADMT   11              1       2       3       4       5       6               
```
```text
┌───────────┬──────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                              │
├───────────┼──────────────────────────────────────────────────────────────────────┤
│ RADMID    │ Material identification number.  (Integer > 0)                       │
├───────────┼──────────────────────────────────────────────────────────────────────┤
│ T(A)      │ TABLEMj identifier for surface absorptivity.  (Integer > 0 or blank) │
├───────────┼──────────────────────────────────────────────────────────────────────┤
│ T         │ TABLEMj identifiers for surface emissivity.  (Integer > 0 or blank)  │
└───────────┴──────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The basic quantities on the RADM entry of the same RADMID are always multiplied by the corresponding tabular function.

2. Tables T(A) and T ![bulkqrs07392.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07392.jpg?_LANG=enus)  have an upper bound that is less than or equal to one and a lower bound that is greater than or equal to zero.

3. The TABLEMj enforces the element temperature as the independent variable.  Blank or zero fields means there is no temperature dependence of the referenced property on the RADM entry.

