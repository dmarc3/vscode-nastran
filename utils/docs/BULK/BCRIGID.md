## [BCRIGID](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCRIGID.xhtml) - Defines a Rigid Contact Body in SOLs 101 and 400

Defines a rigid contact body used in SOLs 101 and 400 only.

#### Format: (SOLs 101 and 400 only)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCRIGID BCRGID  CGID    CONTROL                                         +       
+       NLOAD   ANGVEL  DCOS1   DCOS2   DCOS3   VELRB1  VELRB2  VELRB3  +       
+       “APPROV”A       N1      N2      N3      V1      V2      V3      +       
+       “GROW”  GF1     GF2     GF3     TAB-GF1 TAB-GF2 TAB-GF3                 
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCRIGID 1001    1       1                                               +       
+       0       0.      0.      0.      1.      1.      1.      1.              
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BCRGID    │ Unique identification number referenced by a BCBODY1 entry. (Integer > 0)                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CGID      │ Grid point identification number defining the initial position of the reference point of the rigid │
│           │ body or the point where a concentrated force or moment is applied. (Integer > 0) See Remark 1.     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CONTROL   │ Indicates the type of control for the body. Integer: = -1 for position control. The coordinates of │
│           │ the final position of GRID Point defined in CGID is given in VELRBi in the following line. = 0 for │
│           │ velocity control. (default) = positive number for “load control”. The positive number is the grid  │
│           │ number defined in CGID at which translational forces or SPCD are applied. (Note: The rotation in   │
│           │ this case is defined by NLOAD in the following line.)                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NLOAD     │ Enter a positive number if “load controlled” and rotations are allowed. (Integer) The positive     │
│           │ number is the grid number where the moments or rotations are applied. The rotations are specified  │
│           │ using SPCD at grid ID NLOAD and can be specified using dof’s 1-3 (for translation along x, y, z    │
│           │ respectively), or by dof’s 4-6 (for rotation about x, y, z respectively). Note: This rotation      │
│           │ takes the position of the grid point defined in CGID field as the center of rotation.              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ANGVEL    │ Angular velocity or angular position about local axis through center of rotation. If the value is  │
│           │ an integer it represents the ID of a TABLED1, TABLED2 or TABL3D, i.e., a time-dependent or multi-  │
│           │ dimensional table; however, no log scales, only linear scales. (Real or Integer; Default = 0.0)    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DCOSi     │ Components of direction cosine of local axis if ANGVEL is nonzero. If the value is an integer, it  │
│           │ represents the ID of a TABLED1, TABLED2 or TABL3D, i.e., a time-dependent or multi-dimensional     │
│           │ table; however, no log scales, only linear scales. (Real or Integer; Default=0.0) In 2D contact    │
│           │ only DCOS3 is used and the Default is 1.0.                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VELRBi    │ Tranlational velocity or final position (depending on the value of CONTROL) of rigid body at the   │
│           │ grid point defined in CGID filed. For velocity control only, if the value is an integer, it        │
│           │ represents the ID of TABLED1, TABLED2 or TABL3D, i.e., a time-dependent or multi-dimensional       │
│           │ table; however, no log scales, only linear scales. Only VELRB1 and VELRB2 are used in 2D contact.  │
│           │ (Real or Integer; Default = 0.0)                                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “APPROV”  │ The entries of this continuation line are for approaching velocity to establish initial contact.   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ A         │ Angular velocity about local axis through center of rotation. (Real, Default = 0.0)                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ni        │ Components of direction cosines of local axis of the angular velocity. The N1, N2, N3 define the   │
│           │ axis through the point defined in the CGID field. Only N1 and N2 are used in 2D contact. (Real,    │
│           │ Default = 0.0)                                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Vi        │ V1, V2 and V3 define the three components of the approaching velocity. Only V1 and V2 are used in  │
│           │ 2D contact. (Real; Default = 0.0)                                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “GROW”    │ The entries of this continuation line are for rigid body growth. If tables are used for growth,    │
│           │ they should either be TABLED1, TABLED2 (growth vs time) or TABL3D (growth vs one or more           │
│           │ variables).                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GFi       │ Components of growth factor of rigid body in the coordinate system of the CGID field. (Real,       │
│           │ Default = 1.0)                                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TAB-GFi   │ Table IDs for growth factor of rigid body in the coordinate system of the CGID field. (Integer > 0 │
│           │ or blank, Default is blank)                                                                        │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The grid CGID is the reference grid for the rigid body motion. Loads and enforced motion must be defined in the global coordinate system of CGID. If CGID is not specified, basic coordinate will be used.
2. All continuation lines may be omitted if not required.
