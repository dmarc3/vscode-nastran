## [INITGAS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.INITGAS.xhtml) - Gasbag or Coupling Surface Inital Gas Fraction Definition

Specifies the initial gas composition inside a gasbag or Euler coupling surface. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
INITGAS INTID           GASNAM1 FRAC1   GASNAM2 FRAC2   -etc.                   
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
INITGAS 4               14      0.4     32      0.11                            
```
```text
┌───────────┬────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                    │
├───────────┼────────────────────────────────────────────────────────────┤
│ INTID     │ Unique number of an INITGAS entry. (Integer > 0; Required) │
├───────────┼────────────────────────────────────────────────────────────┤
│ GASNAMi   │ ID of an INFLGAS entry. See Remark 3. (Integer > 0)        │
├───────────┼────────────────────────────────────────────────────────────┤
│ FRACi     │ Mass fraction of gas i. See Remark 4. (Real > 0.0)         │
└───────────┴────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The INITGAS entry can be used to specify the initial gas composition for a gasbag or for an Eulerian coupling surface. The INTID must be referenced either from a GBAG cad or a COUPLE entry.

2. Use as many continuation lines as necessary to completely define the gas fractions.

3. At least one INFLGAS reference must be given.

4. Fractions should add up to 1.0. If this is not the case, they will be scaled so that they do.

