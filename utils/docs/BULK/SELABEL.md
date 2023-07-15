## [SELABEL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SELABEL.xhtml) - Superelement Output Label

Defines a label or name to be printed in the superelement output headings.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SELABEL SEID    LABEL           
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SELABEL 10      LEFT ...        
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                   │
├───────────┼───────────────────────────────────────────────────────────────────────────┤
│ SEID      │ Partitioned superelement identification number.  (Integer > 0)            │
├───────────┼───────────────────────────────────────────────────────────────────────────┤
│ LABEL     │ Label associated with superelement SEID for output headings.  (Character) │
└───────────┴───────────────────────────────────────────────────────────────────────────┘
```
