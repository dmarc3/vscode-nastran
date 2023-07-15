## [SECTAX](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SECTAX.xhtml) - Conical Shell Sector

Defines a sector of a conical shell.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SECTAX  ID      RID     R       PHI1    PHI2                                    
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SECTAX  1       2       3.0     30.0    40.0                                    
```
```text
┌────────────┬───────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                       │
├────────────┼───────────────────────────────────────────────────────────────┤
│ ID         │ Sector identification number.  (Unique Integer > 0)           │
├────────────┼───────────────────────────────────────────────────────────────┤
│ RID        │ Ring identification number.  See RINGAX entry.  (Integer > 0) │
├────────────┼───────────────────────────────────────────────────────────────┤
│ R          │ Effective radius.  (Real)                                     │
├────────────┼───────────────────────────────────────────────────────────────┤
│ PHI1, PHI2 │ Azimuthal limits of sector in degrees.  (Real)                │
└────────────┴───────────────────────────────────────────────────────────────┘
```
