## [SEEXCLD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SEEXCLD.xhtml) - Partitioned Superelement Exclusion

Defines grids that will be excluded during the attachment of a partitioned superelement.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEEXCLD SEIDA   SEIDB   GIDA1   GIDA2   GIDA3   GIDA4   GIDA5   GIDA6   +       
+       GIDA7   GIDA8   -etc.-                                                  
```

#### Example1:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEEXCLD 110     10      45      678     396                                     
```

#### Example 2:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEEXCLD 400     ALL     10      20      30      THRU    40                      
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                 │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────┤
│ SEIDA     │ Partitioned superelement identification number.  (Integer > 0)                          │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────┤
│ SEIDB     │ Superelement identification.  (Integer > 0 or Character = “ALL”; Default = “ALL”)       │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────┤
│ GIDAi     │ Identification number of a grid in superelement SEIDA to be excluded from connection to │
│           │ superelement SEIDB.  (Integer > 0 or “THRU”; for “THRU” option GIDA1 < GIDA2.)          │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────┘
```
