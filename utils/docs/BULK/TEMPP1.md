## [TEMPP1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TEMPP1.xhtml) - Plate Element Temperature Field, Form 1

Defines a temperature field for plate, membrane, and combination elements (by an average temperature and a thermal gradient through the thickness) for determination of thermal loading, temperature-dependent material properties, or stress recovery.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TEMPP1  SID     EID1    TBAR    TPRIME  T1      T2                              
        EID2    EID3    EID4    EID5    EID6    EID7    -etc.-                  
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TEMPP1  2       24      62.0    10.0    57.0    67.0                            
        26      21      19      30                                              
```
#### Alternate Format and Example of Continuation Entry:

```text
┌──────┬────────┬──────┬──────┬────────┬──────┐
│ EID2 │ “THRU” │ EIDi │ EIDj │ “THRU” │ EIDk │
├──────┼────────┼──────┼──────┼────────┼──────┤
│ 1    │ THRU   │ 10   │ 30   │ THRU   │ 61   │
└──────┴────────┴──────┴──────┴────────┴──────┘
```
```text
┌─────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID         │ Temperature set identification number.  (Integer > 0)                                              │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EIDi, EIDj, │ Unique element identification number(s).  (Integer > 0 or the continuation entries may have “THRU” │
│ EIDk        │ in fields 3 and/or 6, in which case EID2 < EIDi and EIDj < EIDk.)                                  │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TBAR        │ Temperature at the element’s reference plane as defined by ZOFFS on the connection entry.  (Real,  │
│             │ Default 0.0)                                                                                       │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TPRIME      │ Effective linear thermal gradient.  Not used for membranes.  (Real, Default 0.0)                   │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T1, T2      │ Temperatures for stress calculation at points defined on the element property entry.  (Z1 and Z 2  │
│             │ field on PSHELL entry.)  T1 may be specified on the lower surface and T2 on the upper surface for  │
│             │ the CQUAD4, CQUAD8, CTRIA3, CTRIA6, CQUADR, and CTRIAR elements.  These data are not used for      │
│             │ membrane elements.  See Remark 9. If both T1 and T2 are blank, they are computed from the equation │
│             │ , where z is the distance from the center fiber.  The program replaces T1 with a flag, and z is    │
│             │ computed in a later operation.  (Real)                                                             │
└─────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
