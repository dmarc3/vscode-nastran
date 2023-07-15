## [YLDRPL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.YLDRPL.xhtml) - Rate Power Law Yield Model

Defines a rate power law yield model where the yield stress is a function of effective plastic strain and strain rate. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
YLDRPL  YID     A       B       n       m       C                               
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
YLDRPL  7       180.E6                                                          
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────┤
│ YID       │ Unique yield model number referenced from MATDEUL. (Integer > 0; Required) │
├───────────┼────────────────────────────────────────────────────────────────────────────┤
│ A         │ Initial yield parameters. (Real > 0; Required)                             │
├───────────┼────────────────────────────────────────────────────────────────────────────┤
│ B         │ Hardening parameter. (Real; Default = 0.0)                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────┤
│ N         │ Hardening exponent. (Real; Default = 1.0)                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────┤
│ M         │ Strain rate exponent. (Real; Default = 1.0)                                │
├───────────┼────────────────────────────────────────────────────────────────────────────┤
│ C         │ Minimum yield stress. (Real; Default = 1.E20)                              │
└───────────┴────────────────────────────────────────────────────────────────────────────┘
```
