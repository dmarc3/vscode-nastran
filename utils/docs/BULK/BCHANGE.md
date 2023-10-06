## [BCHANGE](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCHANGE.xhtml) - Changes Definitions of Contact Bodies

Changes definitions of contact bodies used in SOL 101 and SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCHANGE ID      TYPE                    IDBOD1  N1      N2      INC     +       
+       IDBOD2  N1      N2      INC     IDBOD3  etc.                            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCHANGE 201     NODE                    1       1001    1010    1               
        2       2001    2021    2                                               
```

```text
┌───────────┬───────────────────────────────────────────────────┬──────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ ID        │ Identification number referenced by a BCONTACT or │                                                  │
│           │ BCHANGE Case Control command within a SUBCASE or  │                                                  │
│           │ STEP. See Remark 1. (Integer > 0; Required)       │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ Type      │ Type of modification (Character; Required)        │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ NODE                                              │ Defines nodes of a contact body which may come   │
│           │                                                   │ into contact.                                    │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ EXCLUDE                                           │ Excludes 2 node segments in 2D or 4 node patches │
│           │                                                   │ in 3D.                                           │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ IDBODi    │ Identification number of a contact body, BCBODY   │                                                  │
│           │ or BCBODY1 entry. (Integer > 0)                   │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ N1        │ Starting grid ID. More than one N1-N2-INC range   │                                                  │
│           │ may be entered for each body, see Remark          │                                                  │
│           │ 7. (Integer > 0; Default = 1)                     │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ N2        │ Ending grid ID.                                   │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ INC       │ Grid ID increment.                                │                                                  │
└───────────┴───────────────────────────────────────────────────┴──────────────────────────────────────────────────┘
```

#### Remarks:

1. To place an entry in the loadcase 0, set ID=0, which does not need any corresponding Case Control command BCONTACT=0 or BCHANGE=0, and it is always executed automatically. To place an entry in any physical loadcase (SUBCASE or STEP), the ID must be selected by the Case Control command BCONTACT=ID or BCHANGE=ID. Note that if BCHANGE Case Control command exists, it always dominates the selection of BCHANGE Bulk Data entries.
2. The BCHANGE entry does not apply to rigid bodies. Multiple BCHANGE entries are allowed. A body may be entered more than once with different grid IDs.
3. BCHANGE is useful only for saving computer time and is not recommended for general usage.
4. Warning -- For the NODE option, if some nodes in a body are inadvertently omitted, they may penetrate other bodies.
5. BCHANGE with the NODE option is not supported in Segment-to-segment contact.
6. NODE and EXCLUDE may not be used simultaneously in the same BCHANGE entry.
7. If TYPE=NODE, the form of N1-N2-INC range has the following rules:
    - The format of INC is either blank or integer ( >  0).
    - N1-N2-0 or N1-N2-blank represents 2 nodes (N1,N2) where 0<N1 and 0<N2,
    - N1-N2-INC, INC>0, represent a range input but 0<N1<N2.
8. If TYPE=EXCLUDE, the form of N1-N2-INC range has the following rules:
    - For node segment, N1-N2-INC is used. If 0<N1<N2 and INC>0, the range is applied. If INC-blank or 0, it is 2 nodes (N1,N2) input that can be in any order.
    - For 4 nodes patch, (N1,N2,N3,N4), 2 sets of range, which have to input in sequence, are required.
      (IDBOD1,-N1,N2,INC1) and (IDBOD2,N3,N4,INC2) where IDBOD1=IDBOD2, Ni>0, INC1 and INC2 are ignored.

The following example is for a 4-node patch (100,110,300,200)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCHANGE 1       EXCLUDE                 1       -100    110                     
        1       300     200                                                     
```

- For 3 nodes patch, (N1,N2,N3), 2 sets of range, which have to input in sequence, are required (IDBOD1,-N1,N2,INC1) and (IDBOD2,N3,N3,INC2)
where IDBOD1=IDBOD2,Ni>0, INC1 and INC2 are ignored.

The following example is for a 3-noded patch (132,97,95)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCHANGE 1       EXCLUDE                 1       -132    97                      
        1       95      95                                                      
```
