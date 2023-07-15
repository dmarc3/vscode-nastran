## [SET4](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SET4.xhtml) - Property Set Definition

Defines a list of property IDs

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SET4    ID      CLASS   TYPE    ID1     ID2     ID3     ID4     ID5             
        ID6     ID7     ID8     -etc-                                           
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SET4    22      PROP    PSOLID  1       THRU    20                              
```
```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Unique identification number. (Integer>0).                                       │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ CLASS     │ Set to "PROP". (Character = PROP; no default)                                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Property type. Valid options are PSOLID, PSHELL, PSHEAR, PBAR, PBEAM, and PWELD. │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Property IDs of the specified TYPE flag.                                         │
└───────────┴──────────────────────────────────────────────────────────────────────────────────┘
```
