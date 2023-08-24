## [BARRIER](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BARRIER.xhtml) - Barrier for Eulerian Transport

Defines a barrier for transport in a Eulerian mesh. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BARRIER BID     BCID    MESH    DIR     SKFRIC                          +       
+       XMIN    XMAX    YMIN    YMAX    ZMIN    ZMAX                            
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BARRIER 100     20                                                              
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BID       │ Unique barrier number. (Integer > 0; Required)                                                  │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BCID      │ Number of a set of BCSEG entries that define the element faces that are barriers to Eulerian    │
│           │ transport. See Remark 4. (Integer > 0)                                                          │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MESH      │ Denotes the ID of the Euler mesh to which the boundary condition has to be applied. See Remark  │
│           │ 5. (Integer > 0)                                                                                │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DIR       │ Allowed values are NEGX, POSX, NEGY, POSY, NEGZ and POSZ. See Remark 6. (Character)             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SKFRIC    │ Skin friction value. See Remark 8. (Real ³ 0.0, 0.0)                                            │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XMIN-ZMAX │ Defines a square by specifying the ranges of the x,y,z coordinates. For a square in for example │
│           │ the x-plane it is required that either XMIN = XMAX or that XMAX is left blank. See Remark 7.    │
│           │ (Real)                                                                                          │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Material cannot pass through any of the faces referenced.
2. Barriers can be modeled on the edge as well as the inside of an Eulerian mesh.
3. BARRIER overrules FLOW and FLOWT definition.
4. BCID is optional. If used, all other inputs are ignored. If not used, the barrier can be defined by either using DIR or by using XMIN, XMAX, YMIN, etc.
5. The MESH-ID is only used when multiple Euler domains have been defined and when BCID is blank. If multiple Euler domains have been defined but if the MESH-ID is blank all Euler domains will be considered in assigning the boundary condition.
6. DIR is optional. It will only be used when BCID is blank. When DIR is used XMIN, XMAX, YMIN etc. are ignored.
7. XMIN, XMAX, YMIN, etc are only used when both BCID and DIR are blank. The XMIN,YMIN option defines an area on the MESH BOX boundary as shown in  . If neither the MIN nor MAX value has been set the default value is respectively -1E+20 and 1e+20 for the MIN and MAX value. If the MIN value has been set the default value of the MAX value is the MIN value.
8. The skin friction is defined as:

![bulkab02093.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02093.jpg?_LANG=enus)  

Here  ![bulkab02095.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02095.jpg?_LANG=enus)  denotes the shear friction in an Euler element adjacent to a couple surface segment where  ![bulkab02097.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02097.jpg?_LANG=enus)  is the density and  ![bulkab02099.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02099.jpg?_LANG=enus) is the tangential relative velocity in the Euler element that is adjacent to a couple surface segment. SKFRIC will only be used when VISC has been set on either an EOSGAM or an EOSPOL entry. If VISC has been set and if SKFRIC has not been set  then a no slip condition will be prescribed at the interface between fluid and structure.

9. Internal barriers can only be defined on existing Euler element faces using the BCID option. They cannot be defined by using the XMIN,YMIN option.

![mesh_box_boundary.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/mesh_box_boundary.png?_LANG=enus)

Figure 9-1   MESH BOX boundary

