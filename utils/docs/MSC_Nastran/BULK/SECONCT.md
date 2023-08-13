## [SECONCT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SECONCT.xhtml) - Partitioned Superelement Boundary-Point Connection

Explicitly defines grid and scalar point connection procedures for a partitioned superelement.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SECONCT SEIDA   SEIDB   TOL     LOC                                     +       
+       GIDA1   GIDB1   GIDA2   GIDB2   GIDA3   GIDB3   -etc.-                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SECONCT 10      20      1.0E-4  YES                                             
        1001    4001                    2222    4444                            
```

#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SECONCT SEIDA   SEIDB   TOL     LOC                                     +       
+       GIDA1   ‘THRU’  GIDA2   GIDB1   ‘THRU’  GIDB2                           
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SECONCT 10      20                                                              
        101     ‘THRU’  110     201     ‘THRU’  210                             
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEIDA     │ Identification number of superelement for connection to SEIDB.  (Integer > 0)                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEIDB     │ Identification number of superelement for connection to SEIDA.  (Integer > 0)                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TOL       │ Location tolerance to be used when searching for or checking boundary grid points.  (Real;        │
│           │ Default = 10E-5)                                                                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LOC       │ Coincident location check option for manual connection.  (Character;  “YES” or “NO”;              │
│           │ Default = “YES”)                                                                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GIDAi     │ Identification number of a grid or scalar point in superelement SEIDA, which will be connected to │
│           │ GIDBi.                                                                                            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GIDBi     │ Identification number of a grid or scalar point in superelement SEIDB, which will be connected to │
│           │ GIDAi.                                                                                            │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
