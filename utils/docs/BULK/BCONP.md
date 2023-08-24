## [BCONP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCONP.xhtml) - Contact Parameters

Defines the parameters for a contact region and its properties for slideline contact in SOL 106 or SOL 129. SOL 400 is the preferred method for contact analysis, see BCBODY1, BCONECT, BCONPRG, BCONPRP, BCPARA and BCTABL1.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCONP   ID      SECNDRY PRIMARY         SFAC    FRICID  PTYPE   CID             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCONP   95      10      15              1.0     33      1                       
```

```text
┌───────────┬───────────────────────────────────────────────────┬─────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                             │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ ID        │ Contact region identification number.  See Remark │                                             │
│           │ 1. (Integer > 0)                                  │                                             │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ SECNDRY   │ Secondary region identification number.  See      │                                             │
│           │ Remark 2. (Integer > 0)                           │                                             │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ PRIMARY   │ Primary region identification number.  See Remark │                                             │
│           │ 3. (Integer > 0)                                  │                                             │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ SFAC      │ Stiffness scaling factor.  SFAC is used to scale  │                                             │
│           │ the penalty values automatically calculated by    │                                             │
│           │ the program.  See Remark 4. (Real > 0.0;          │                                             │
│           │ Default = 1.0)                                    │                                             │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ FRICID    │ Contact friction identification number.  See      │                                             │
│           │ Remark 5. (Integer > 0 or blank)                  │                                             │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ PTYPE     │ Penetration type.  See Remark 6. (Integer 1 or 2; │                                             │
│           │ Default = 1)                                      │                                             │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│           │ 1                                                 │ Unsymmetrical (secondary penetration only-- │
│           │                                                   │ Default)                                    │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│           │ 2                                                 │ Symmetrical                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ CID       │ Coordinate system identification number to define │                                             │
│           │ the slideline plane vector and the slideline      │                                             │
│           │ plane of contact.  See Remark 7. (Integer > 0;    │                                             │
│           │ Default = 0, which means the basic coordinate     │                                             │
│           │ system)                                           │                                             │
└───────────┴───────────────────────────────────────────────────┴─────────────────────────────────────────────┘
```

#### Remarks:

1. ID field must be unique with respect to all other BCONP identification numbers.
2. The referenced SECNDRY is the identification number in the BLSEG Bulk Data entry.  This is the secondary line.  The width of each secondary segment must also be defined to get proper contact stresses.  See the Bulk Data entry,   for the details of specifying widths.
3. The referenced PRIMARY is the identification number in the BLSEG Bulk Data entry.  This is the primary line.  For symmetrical penetration, the width of each primary segment must also be defined.  See the Bulk Data entry,   for the details of specifying widths.
4. SFAC may be used to scale the penalty values automatically calculated by the program.  The program calculates the penalty value as a function of the diagonal stiffness matrix coefficients that are in the contact region.  In addition to SFAC, penalty values calculated by the program may be further scaled by the ADPCON parameter (see description of ADPCON parameter for more details).  The penalty value is then equal to k*SFAC*|ADPCON|, where k is a function of the local stiffness.  It should be noted that the value in SFAC applies to only one contact region, whereas the ADPCON parameter applies to all the contact regions in the model.
5. The referenced FRICID is the identification number of the BFRIC Bulk Data entry.  The BFRLC defines the frictional properties for the contact region.
6. In an unsymmetrical contact algorithm only secondary nodes are checked for penetration into primary segments.  This may result in primary nodes penetrating the secondary line.  However, the error depends only on the mesh discretization.  In symmetric penetration both secondary and primary nodes are checked for penetration.  Thus, no distinction is made between secondary and primary.  Symmetric penetration may be up to thirty percent more expensive than the unsymmetric penetration.
7. In  , the unit vector in the Z-axis of the coordinate system defines the slideline plane vector.  The slideline plane vector is normal to the slideline plane.  Relative motions outside the slideline plane are ignored, and therefore must be small compared to a typical primary segment.  For a primary segment the direction from primary node 1 to primary node 2 gives the tangential direction (t).  The normal direction for a primary segment is obtained by the cross product of the slideline plane vector with the unit tangent vector (i.e., n=z x t).  The definition of the coordinate system should be such that the normal direction must point toward the secondary region.  For symmetric, penetration, the normals of primary segments and secondary segments must face each other.  This is generally accomplished by traversing from primary line to secondary line in a counterclockwise or clockwise fashion depending on whether the slideline plane vector forms a right-hand or left-hand coordinate system with the slideline plane.

![bulkab02154.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02154.jpg?_LANG=enus)

Figure 9-2      A Typical Finite Element Slideline Contact Region
