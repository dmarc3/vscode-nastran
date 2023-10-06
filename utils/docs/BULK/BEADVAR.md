## [BEADVAR](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BEADVAR.xhtml) - Topography Design Variable

Defines design region for topography (bead or stamp) optimization.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BEADVAR ID      PTYPE   PID     MW      MH      ANG     BF      SKIP    +        
+       “DESVAR”NORM/XD YD      ZD      CID     XLB     XUB     DELXV   +        
+       “GRID”  NGSET   DGSET                                                   
```

#### Example using NORM:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BEADVAR 10      PSHELL  101     10.0    20.0    70.0                            
```

#### Example using “DESVAR” and “GRID”:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BEADVAR 10      PSHELL  101     10.0    20.0    70.0            NONE    +       
+       DESVAR  2.0     3.0     4.0             -1.0    1.0             +       
+       GRID    100                                                             
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID           │ Unique topography design region identification number. (Integer > 0)                               │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PTYPE        │ Property entry type. Used with PID to identify the element nodes to be designed. (Character:       │
│              │ “PSHELL”, “PSHEAR”, “PCOMP”, or “PCOMPG”.)                                                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID          │ Property entry identifier. See Remark 1. (Integer > 0)                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MW           │ Minimum bead width.  This parameter controls the width of the beads. The recommended value is      │
│              │ between 1.5 and 2.5 times the average element width. See Remark 2. (Real > 0.0)                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MH           │ Maximum bead height (Real > 0.0). This parameter sets the maximum height of the beads when XUB=1.0 │
│              │ (as Default). See Remark 2.                                                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ANG          │ Draw angle in degrees (0.0 < Real < 90.0). This parameter controls the angle of the sides of the   │
│              │ beads. The recommended value is between 60 and 75 degrees.                                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BF           │ Buffer zone ('yes' or 'no'; Default='yes'). This parameter creates a buffer zone between elements  │
│              │ in the topography design region and elements outside the design region when BF='yes'. See Remark   │
│              │ 3.                                                                                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SKIP         │ Boundary skip (“bc”, “load”, “both”, or “none”; Default = “both”). This parameter indicates which  │
│              │ element nodes are excluded from the design region. “bc” indicates all nodes referenced by “SPC”    │
│              │ and “SPC1” are omitted from the design region. “load” indicates all nodes referenced by “FORCE”,   │
│              │ “FORCE1”, “FORCE2”, “MOMENT”, “MOMENT1”, “MOMENT2”, and “SPCD” are omitted from the design region. │
│              │ “both” indicates nodes with either “bc” or “load” are omitted from the design region. “none”       │
│              │ indicates all nodes associated with elements referencing PID specified in field 4 are in the       │
│              │ design region.                                                                                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DESVAR”     │ Indicates that this line defines bead design variables that are automatically generated.           │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NORM/XD, YD, │ Bead vector (draw direction). Norm indicates the shape variables are created in the normal         │
│ ZD           │ directions to the elements. If XD, YD, and ZD are provided, the shape variables are created in the │
│              │ direction specified by the xyz vector defied by XD/YD/ZD that is given in the basic coordinate     │
│              │ system or CID. See Remark 4. (Character or Real; Default = blank = norm).                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID          │ Coordinate system ID used for specifying draw direction (Blank or Integer > 0; Default = blank =   │
│              │ basic coordinate system)                                                                           │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XLB          │ Lower bound. (Real < XUB or blank; Default = blank=0.0). This ensures the lower bound on grid      │
│              │ movement equal to XLB*MH. See Remark 5.                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XUB          │ Upper bound. (Real > XLB or blank; Default = 1.0). This sets the upper bound of the beads equal to │
│              │ XUB*MH. See Remark 5.                                                                              │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DELXV        │ Fractional change allowed for the design variable during approximate optimization. See Remark      │
│              │ 3. (Real > 0.0; Default = 0.2)                                                                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “GRID”       │ Indicates this line defines what element nodes can be added and/or removed from topography design  │
│              │ regions.                                                                                           │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NGSET        │ All grids listed on a Bulk Data entry SET1 = NGSET are removed from topography design regions.     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DGSET        │ All grids listed on a Bulk Data entry SET1 = DGSET are added to topography design regions.         │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Multiple BEADVAR’s are allowed in a single file. Combined topometry, topology, topography, sizing, and shape optimization is supported in a single file.

2. The user can provide allowable bead dimensions.

![bulkab02254.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02254.jpg?_LANG=enus)

3. It is recommended to set buffer zone = yes to maintain a good quality of mesh during topography optimization.

![bulkab02256.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02256.jpg?_LANG=enus)

4. The grids moves in the normal direction. All element grids referenced by one BEADVAR entry must follow the right hand rule.

![bulkab02258.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02258.jpg?_LANG=enus)

![bulkab02260.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02260.jpg?_LANG=enus)

5. To force the grids to move only in the positive bead vector direction (one side of the surface), use XLB = 0.0. To force the grids to move only in the negative bead vector direction (another side of the surface), use XUB = 0.0.  To allow grids to move in both positive and negative bead vector directions, use XLB < 0.0 and XUB > 0.0. For example,

![bulkab02262.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02262.jpg?_LANG=enus)

6. The jobname.h5 file (created by specifying MDLPRM,HDF5,0 in the bulk data input) has topography optimization results (shape changes) that can be viewed in Patran. The text file jobname.pch also has updated grid coordinates that can be copied to the original file, replace the original grids, and imported to Patran and other post-processors to view topography optimization results.

7. The BEADVAR entry cannot be used with thermal loads.

