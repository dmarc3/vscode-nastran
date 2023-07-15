## [MFLUID](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MFLUID.xhtml) - Fluid Volume Properties

Defines the properties of an incompressible fluid volume for the purpose of generating a virtual mass matrix.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MFLUID  SID     CID     ZFS     RHO     ELIST1  ELIST2  PLANE1  PLANE2          
        RMAX    FMEXACT                                                         
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MFLUID  3       2       15.73   1006.   3       4       S       N               
                100.                                                            
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Set identification number.  (Integer > 0)                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID       │ Identification number of rectangular coordinate system used to specify the orientation of the free │
│           │ surface (normal to ) and of planes of symmetry, if any.  (Integer > 0 or blank)                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ZFS       │ Intercept of the free surface on the X3 axis of the coordinate system referenced by CID.  If X3 of │
│           │ a grid > ZFS then there is no fluid. See Remark 3. (Real; Default means that the free surface is   │
│           │ located at an infinitely large positive value of XFS.)                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RHO       │ Density of the fluid (Real).                                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ELIST1    │ Identification number of an ELIST entry that lists the IDs of two-dimensional elements that can be │
│           │ wetted on one side by the fluid.  Only those elements connected to at least one grid point below   │
│           │ ZFS are wetted by the fluid.  See Remarks 3. and 5. (Integer > 0)                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ELIST2    │ Identification number of an ELIST entry that lists the IDs of two-dimensional elements that can be │
│           │ wetted on both sides by the fluid.  Only those elements connected to at least one grid point below │
│           │ ZFS are wetted by the fluid.  (Integer > 0; ELIST1 + ELIST2 > 0)                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLANE1,   │ Planes of symmetry, antisymmetry, or no symmetry.  “S” means that plane 1, which is the plane      │
│ PLANE2    │ containing the X1 and X3 axes of CID, is a plane of symmetry.  “A” means that plane 1 is a plane   │
│           │ of antisymmetry.  “N” means that it is neither.  See Remark 5. Plane 2 uses “S”, “A”, or “N” for   │
│           │ the  and  plane.  (Character:  “S”, “A”, or “N”)                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RMAX      │ Characteristic length.  Interactions between elements with separation that is greater than RMAX    │
│           │ will be neglected.  (Real > 0.0; Default = 1.0E 10)                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FMEXACT   │ Exact integration is used if the distance between two elements is less than FMEXACT times the      │
│           │ square root of the area of the larger element.  Otherwise, center point integration is used by     │
│           │ default.  (Real; Default = 1.0E 15)                                                                │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The MFLUID entry must be selected with the Case Control command MFLUID = SID.

2. Several MFLUID entries corresponding to different fluid volumes can be used simultaneously.

3. The wetted side of an element in ELIST1 is determined by the presence or absence of a minus sign preceding the element’s ID on the ELIST entry. A minus sign indicates that the fluid is on the side opposite to the   element’s positive normal, as determined by applying the right-hand rule to the sequence of its corner points. The same element can appear on two ELIST entries, indicating that it forms a barrier between the unconnected fluids.

4. The fluid volume may be finite (interior) or infinite (exterior).  The volume may be bounded by a free surface and one or two planes of structural symmetry.  If structural symmetry is used, the structure must have the symmetric or antisymmetric boundary corresponding to the selection in fields 8 and 9.  Interior fluids must have ELIST1 data and a free surface or plane of   antisymmetry.

5. The planes of symmetry and/or antisymmetry defined in fields 8 and 9 must be planes of symmetry for the entire analysis.  The user may apply appropriate structural boundary conditions at all grid points lying in these planes.

6. The current list of elements that may be placed in ELIST1 and ELIST2 include CTRIA3, CQUAD4, CTRIAR, and CQUADR.

7. The continuation entry is optional.

8. If there is ELIST1 data and no free surface nor plane of antisymmetry, the program assumes a special form of external fluid. These special external fluids must have a CID (field 3) such that the origin of the fluid coordinate system is near the center of the enclosed volume, since the singularity for volume change will be placed at the origin. Special external fluids are supported only in SOLs 103 and 107 through 112. If used in conventional solution sequences, System Fatal Message 3001   results for file 205.

9. See PARAM,VMOPT in  . VMOPT controls when the virtual mass is included in the mass matrix.

10. If any MFLUID entry is changed or added on restart then a complete re-analysis may be performed. Therefore, MFLUID entry changes or additions are not recommended on restart.

11. A tolerance is computed for each wetted element, with the value of  ![bulkno06002.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06002.jpg?_LANG=enus) , where A is the area of the element. If any grid point connected to the element lies within TOL below the free surface it is moved to the free surface.

12. Any element that has all grids on or above the free surface, after the grid points are moved by the procedures given in Remark   is removed from the ELIST. It is not included in the VM effects, and will produce no pressure output.

