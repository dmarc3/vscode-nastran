## [BRKSYS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BRKSYS.xhtml) - Specifies Data for Brake System for Brake Squeal Analysis Using SOL 400

Defines data for brake system for brake squeal calculations involving one wheel or multiple wheels with one axis or multi-axes.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BRKSYS  ID      OMETH   IVEC    BSONLY  ISLIDEBS                        +       
+       Disk1   BD1_ID  BD2_ID  MT1_ID  MT2_ID  BProp_ID                +       
+       Disk2   BD1_ID  BD2_ID  MT1_ID  MT2_ID  BProp_ID                +       
+       Diski   BD1_ID  BD2_ID  MT1_ID  MT2_ID  BProp_ID                        
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BRKSYS  900     0.5     0       YES                                     +       
+       INNER   8       9       18      19      28                      +       
+       OUTER   8       9       18      19      28                              
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Identification ID of number of a corresponding BSQUEAL Case Control command                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OMETH     │ Specifies the corresponding load factor (or time step) where the brake squeal analysis is   to be  │
│           │ performed. (Real; Default = 0.0)                                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BSONLY    │ Brake-Squeal-Only flag to control whether or not to continue nonlinear iterations after brake      │
│           │ squeal analysis is performed. (Character; Default = YES)                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ YES:      │ Means to perform brake squeal analysis only and exit nonlinear iteration immediately               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NO:       │ means to continue nonlinear analysis.                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IVEC      │ Flag specifying whether friction vector at center of primary contact body is in the same direction │
│           │ as that of the nodes of the secondary body; See Figure 9-3. (Integer; Default = 0)                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 0:        │ In same direction                                                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1:        │ In tangential direction                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ISLIDEBS  │ Flag indicating whether contact status is treated as sliding or general static contact for brake   │
│           │ disk/pad pairs. (Integer; Default = 0)                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 0:        │ Sliding contact for brake disk/pad pairs                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1:        │ General static contact                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Disk_i    │ Name of the ith brake system                                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BD1_ID    │ ID of BCBODY1 of the first body which is defined in this brake system                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BD2_ID    │ ID of BCBODY1 of the second body which is defined in this brake system                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MT1_ID    │ ID of MOTION which is defined for the first body with BD1_ID                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MT2_ID    │ ID of MOTION which is defined for the second body with BD2_ID. If blank, MT1_ID will be used       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BProp_ID  │ ID of BRKPROP which defines the property of this brake system                                      │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remark:

1. When modules are present, multiple BRKSYS entries with the same ID can be put in different modules and selected by BSQUEAL Case Control command. In addition with this, MDBKSYS in module 0 with the same ID can also be selected.
MSC Nastran only uses one set of fields in the first line of those entries (fields OMETH, IVEC, BSONLY and ISLIDEBS).
  - If not all the sets are identical:
  - When MDBKSYS is selected, its fields will be used.
  - If MDBKSYS doesn’t exist or isn’t selected and all the sets of those fields of BRKSYS entries are not identical, use the default values.

If all the sets are identical, use the specified values.

![bulkab02290.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02290.jpg?_LANG=enus)

Figure 9-3   Vectors of frictional stiffness at tied and retained node.
