## [EXTRN](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.EXTRN.xhtml) - Partitioned External Superelement Connection

Defines a boundary connection for an external superelement.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EXTRN   GID1    C1      GID2    C2      GID3    C3      GID4    C4      +       
+       -etc.-          GID6    “THRU”  GID7    C6      -etc.-                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EXTRN   1001    123     1120    123456  1201    123                             
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ GIDi      │ Grid identification number to which the exterior superelement matrices will be connected.   │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component numbers.  (Integer 0, blank, or 1 for scalar points; Integers 1 through 6 with no │
│           │ embedded blanks for grids.)                                                                 │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. EXTRN can only be specified in partitioned Bulk Data Sections and is ignored in the main Bulk Data Section.
2. Connection grids must be specified in the partitioned Bulk Data Section following BEGIN SUPER = SEID.
3. “THRU” may be specified only in fields 3, 5, or 7.
4. Pairs of blank fields may be entered to allow easier modification of the EXTRN entry.
5. The order of the GIDi and Ci pairs must be in the internal order of the grids set in the creation run. But since Nastran no longer re-sequences grids then the pairs are specified in ascending GRID ID order. However, if PARAM,OLDSEQ or the SEQGP entry is specified then the proper order may not be ascending. To determine the internal grid order, add PARAM,USETPRT,0 and PARAM,USETSTR1,A.
