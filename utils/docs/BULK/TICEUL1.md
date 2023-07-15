## [TICEUL1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TICEUL1.xhtml) - Transient Initial Conditions of Eulerian Regions

Defines the initial values sets for Eulerian regions. The Eulerian regions are defined by geometric shapes. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TICEUL1 SID     TSID                                                            
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TICEUL1 300     200                                                             
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Unique TICEUL1 number referenced from a PEULER1 entry. (Integer > 0; Required) │
├───────────┼────────────────────────────────────────────────────────────────────────────────┤
│ TSID      │ Group of geometric region TICREG ID. (Integer > 0; Required)                   │
└───────────┴────────────────────────────────────────────────────────────────────────────────┘
```
