## [MATTUSR](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATTUSR.xhtml) - Specifies Table Variation of User Defined Generic Materials

Specifies table variation of user defined generic materials in SOL 400 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATTUSR MID                     T(RHO)  T(A1)   T(A2)   T(A3)                   
        T(GE)   T(ST)   T(SC)   T(SS)                                           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATTUSR 20                      51      52                                      
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Identification number  of  MATUSR. (Integer > 0; no Default)                                     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(RHO)    │ Table ID of a TABLEM1 or TABL3Di for the mass density for structural analysis. (Integer, no      │
│           │ Default)                                                                                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Ai)     │ Table ID of a TABLEM1 or TABL3Di for the coefficient of thermal expansion. (Integer) If T(A1) is │
│           │ not zero and T(A2) and T(A3) are zero, then T(A1)=T(A2)=T(A3).                                   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(GE)     │ Identification number of a TABLEMk entry for the damping coefficient.  (Integer > 0 or blank)    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(ST)     │ Identification number of a TABLEMk entry for the tension stress limit.  (Integer > 0 or blank)   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(SC)     │ Identification number of a TABLEMk entry for the compression limit.  (Integer > 0 or blank)      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(SS)     │ Identification number of a TABLEMk entry for the tension shear limit.  (Integer > 0 or blank)    │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
