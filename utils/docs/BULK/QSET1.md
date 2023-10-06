## [QSET1](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.QSET1.xhtml) - Generalized Degree-of-Freedom (Alternate Form of QSET Entry)

Defines generalized degrees-of-freedom (q-set) to be used for generalized dynamic reduction or component mode synthesis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
QSET1   C       ID1     ID2     ID3     ID4     ID5     ID6     ID7     +       
+       ID8     ID9     -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
QSET1   123456  1       7       9       22      105     6       22              
        52      53                                                              
```

#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
QSET1   C       ID1     “THRU”  ID2                                             
QSET1   0       101     THRU    110                                             
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Component number.  (Integer zero or blank for scalar points or any unique combination of the │
│           │ Integers 1 through 6 for grid points with no embedded blanks.)                               │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Grid or scalar point identification number.  (Integer > 0; For THRU option, ID1 < ID2.)      │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Degrees-of-freedom specified on this entry form members of the mutually exclusive q-set. They may not be specified on other entries that define mutually exclusive sets. See   for a list of these entries.
2. Degrees-of-freedom specified on QSET and QSET1 entries are automatically placed in the a-set.
3. When ASET, ASET1, QSET, and/or QSET1 entries are present, all   degrees-of-freedom not otherwise constrained (e.g., SPCi or MPC entries) will be placed in the omitted set (o-set).
4. If Modules are present then this entry may only be specified in the main Bulk Data section.
5. SOL 400 does not support OMITAX as well as ASETi, OMITi, BSETi, CSETi, SUPORTi, and QSETi except in some situations (See Remark 4 under ASET).
