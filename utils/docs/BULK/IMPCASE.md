## [IMPCASE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.IMPCASE.xhtml) - Defines a collection of imperfection cases

Defines a collection of imperfection cases by listing of identification numbers of IMPGEOM entries. Used in SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
IMPCASE ID      IMPFID1 IMPFID2 ...     IMPFIDi                                 
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
IMPCASE 5       1       2                                                       
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                           │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ ID        │ Identification number (integer > 0, required)                     │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ IPMFIDi   │ Identification number of imperfection case (integer >0, required) │
└───────────┴───────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. When the ID is referenced by case control IMPERFECT command, the list of IMPGEOM entries are used to apply geometric imperfections.
2. “THRU” can be used to specify IMPFIDi.
