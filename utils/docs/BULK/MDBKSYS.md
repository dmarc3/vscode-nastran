## [MDBKSYS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDBKSYS.xhtml) - Defines Brake System for Modules

Defines data for brake system for brake squeal calculations involving one wheel or multiple wheels with one axis or multi-axes in different modules.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDBKSYS ID      OMETH   IVEC    BSONLY  ISLIDER3                        +       
+       Disk1   MODID11 BODY1ID1MODID21 BODYID21MOTN1ID1MOTN2ID1BRKPID1 +       
+       Disk2   MODID12 BODY1ID2MODID22 BODYID22MOTN1ID2MOTN2ID2BRKPID2 +       
+       DiskI   MODID1i BODY1IDiMODID2i BODYID2iMOTN1IDiMOTN2IDiBRKPIDi         
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDBKSYS 900     0.5     0       YES                                     +       
+       INNER1  1       2       2       3       1       2       4       +       
+       OUTPER  2       1       3       4       2       4       2               
```

```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ ID        │ Identification ID of number of a corresponding    │                                                   │
│           │ BSQUEAL Case Control command                      │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ OMETH     │ Specifies the corresponding load factor (or time  │                                                   │
│           │ step) where the brake squeal analysis is to be    │                                                   │
│           │ performed. (Real; Default = 0.0)                  │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ BSONLY    │ Brake-Squeal-Only flag to control if or not to    │                                                   │
│           │ continue nonlinear iterations after brake squeal  │                                                   │
│           │ analysis is performed.                            │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ YES                                               │ Means to perform brake squeal analysis only and   │
│           │                                                   │ exit nonlinear iteration immediately.             │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ NO                                                │ Means to continue nonlinear analysis. (Character; │
│           │                                                   │ Default = YES).                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ IVEC      │ Flag specifying whether friction vector at center │                                                   │
│           │ of primary contact body is in the same direction  │                                                   │
│           │ as that of the nodes of the secondary body; see   │                                                   │
│           │ Figure 9-3. (Integer; Default = 0).               │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 0:                                                │ In same direction                                 │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 1:                                                │ In tangential direction                           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ ISLIDEBS  │ Flag indicating whether contact status is treated │                                                   │
│           │ as sliding or general static contact for brake    │                                                   │
│           │ disk/pad pairs.                                   │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 0:                                                │ (default) sliding contact for brake disk/pad      │
│           │                                                   │ pairs.                                            │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 1:                                                │ general static contact as usual.                  │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ DISKi     │ Name of the ith brake system.                     │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MODID1i   │ Module id of the BCBODY1 of the first body which  │                                                   │
│           │ is defined in this brake system.                  │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ BODY1D1i  │ ID of BCBODY1 of the first body which is defined  │                                                   │
│           │ in this brake system.                             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MODID2i   │ Module id of the BCBODY1 of the second body which │                                                   │
│           │ is defined in this brake system.                  │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ BODY1D2i  │ ID of BCBODY1 of the second body which is defined │                                                   │
│           │ in this brake system.                             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MOTN1IDi  │ ID of MOTION which is defined for the first body. │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MOTN2IDi  │ ID of MOTION which is defined for the second      │                                                   │
│           │ body.                                             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ BRKPID1i  │ ID of BRKSYS which is defined for the first body  │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ BRKPID2i  │ ID of BRKSYS which is defined for the second body │                                                   │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry must be in module 0 and modules must be present.
2. The ID must be unique.
3. BRKSYS entries with the same ID in different modules can be selected also by corresponding BSQUEAL case control command.
4. When multiple BRKSYS entries and/or MDBKSYS are selected, the first lines of those entries can be not identical, it is treated as: Use the line defined in the MDBKSYS when it exists and selected, otherwise use default value of the line. When the first lines of all the entries are identical, use the line as is.
