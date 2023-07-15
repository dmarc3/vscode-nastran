## [TEMPRB](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TEMPRB.xhtml) - One-Dimensional Element Temperature Field

Defines a temperature field for the CBAR, CBEAM, CBEND, CROD, CTUBE, and CONROD elements for determination of thermal loading, temperature-dependent material properties, or stress recovery.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TEMPRB  SID     EID1    TA      TB      TP1A    TP1B    TP2A    TP2B            
        TCA     TDA     TEA     TFA     TCB     TDB     TEB     TFB             
        EID2    EID3    EID4    EID5    EID6    EID7    -etc.-                  
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TEMPRB  200     1       68.0    23.0    0.0     28.0            2.5             
        68.0    91.0    45.0            48.0    80.0    20.0                    
        9       10                                                              
```
#### Alternate Format and Example of Continuation Entry:

```text
┌──────┬────────┬──────┬──────┬────────┬──────┐
│ EID2 │ “THRU” │ EIDi │ EIDj │ “THRU” │ EIDk │
├──────┼────────┼──────┼──────┼────────┼──────┤
│ 2    │ THRU   │ 4    │ 10   │ THRU   │ 14   │
└──────┴────────┴──────┴──────┴────────┴──────┘
```
```text
┌─────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID         │ Temperature set identification number.  (Integer > 0)                                              │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EIDi, EIDj, │ Unique element identification number(s).  (Integer  >  0 or the second continuation entry may have │
│ EIDk        │ “THRU” in fields 3 and/or 6 in which case EID2 < EIDi and EIDj < EIDk.)                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TA, TB      │ Temperature at end A and end B on the neutral axis.  (Real, default 0.0)                           │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TPij        │ Effective linear gradient in direction i on end j; used with CBAR, CBEAM, and CBEND only.  (Real)  │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Tij         │ Temperature at point i (i=C, D, E, or F)as defined on the PBAR, PBEAM, and PBEND entries at end j  │
│             │ (j=A or B).  This data is used for stress recovery only with CBAR, CBEAM, and CBEND exclusively.   │
│             │  See Remark 3. (Real)                                                                              │
└─────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
