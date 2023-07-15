## [TABLFTG](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TABLFTG.xhtml) - Fatigue Loading Tabular Data

Defines tabular data for specifying fatigue cyclic loading variation.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLFTG TID                                                                     
        y1      y2      y3      y4      y5      y6      y7      "ENDT"          
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLFTG 1                                                                       
        0.000   -1.0    1.0     0.0     ENDT                                    
```
```text
┌───────────┬──────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                  │
├───────────┼──────────────────────────────────────────────────────────┤
│ TID       │ Table identification number. (Integer > 0)               │
├───────────┼──────────────────────────────────────────────────────────┤
│ yi        │ Y value of each point in the time history curve. (Real). │
├───────────┼──────────────────────────────────────────────────────────┤
│ "ENDT"    │ Flag indicating the end of the table.                    │
└───────────┴──────────────────────────────────────────────────────────┘
```
