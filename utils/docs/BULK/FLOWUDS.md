## [FLOWUDS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FLOWUDS.xhtml) - User Defined Flow Boundary.

Defines a flow boundary on an Eulerian mesh specified by a user subroutine. Use in SOL700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FLOWUDS LID     GROUP   UNAME   BCID    MESH    DIR                     +       
+       XMIN    XMAX    YMIN    YMAX    ZMIN    ZMAX                            
```

#### Example:

In FMS Section of the MSC Nastran input stream:

CONNECT SERVICE myflow  ![bulkfgil03668.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03668.jpg?_LANG=enus) SCA.MDSolver.Obj.Uds.Dytran.Flow ![bulkfgil03670.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03670.jpg?_LANG=enus)

In Bulk Data:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FLOWUDS 12      MYFLOW  EXFLOW  300                                             
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LID       │ Unique output number. (Integer > 0; Required)                                                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GROUP     │ The group name used for the FMS section CONNECT SERVICE statement. (Character; no Default)        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNAME     │ User subroutine name associated with the entry. (Character; default=EXFLOW)                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BCID      │ Number of a set of segments, specified by BCSEG entries, where the flow boundary is located. See  │
│           │ Remark 6. (Integer > 0)                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MESH      │ Denotes the ID of the Euler mesh to which the boundary condition has to be applied. See Remark 7. │
│           │ (Integer > 0)                                                                                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DIR       │ Allowed values are: NEGX, POSX, NEGY, POSY, NEGZ and POSZ. See Remark 8. (Character)              │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XMIN-ZMAX │ Defines a square by specifying the ranges of the x,y,z coordinates. For a square in for example   │
│           │ the x-plane it is required that either XMIN = XMAX or that XMAX is left blank. See Remark 9.      │
│           │ (Real)                                                                                            │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Only can be used for SOL 700.
2. UNAME can be:
3. For multi material models EXFLOW allows for the definition of any material to flow into the Eulerian mesh. The outflow can only be of materials present in the mesh.
4. TLOAD1 entries referencing FLOWUDS entries must have the TID field blank or zero.
5. BCID is optional. If used, all other inputs are ignored. If not used, the flow boundary can be defined by either using DIR or by using XMIN, XMAX, YMIN, etc.
6. The MESH-ID is only used when multiple Euler domains have been defined and when BCID is blank. If multiple Euler domains have been defined but if the MESH-ID is blank all Euler domains will be considered in assigning the boundary condition.
7. DIR is optional. It will only be used when BCID is blank. When DIR is used XMIN, XMAX, YMIN etc. are ignored.
8. XMIN, XMAX, YMIN, etc. are only used when both BCID and DIR are blank. If neither the MIN nor MAX value has been set the default value is respectively -1E+20 and 1E+20 for the MIN and MAX value. If the MIN value has been set the default value of the MAX value is the MIN value.
