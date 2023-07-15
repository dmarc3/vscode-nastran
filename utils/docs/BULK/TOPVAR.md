## [TOPVAR](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TOPVAR.xhtml) - Topological Design Variable

Define a topology design region for topology optimization.

#### Format:<span></span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TOPVAR  ID      LABEL   PTYPE   XINIT   XLB     DELXV   POWER   PID             
        “SYM”   CID     MS1     MS2     MS3     CS      NCS                     
        “CAST”  CID     DD      DIE     ALIGN                                   
        “EXT”   CID     ED      ALIGN                                           
        “PRINT” CID     PD                                                      
        “TDMIN” TVMIN   TVMAX                                                   
        “STRESS”STLIM                                                           
```
#### <span></span>

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TOPVAR  1       PS1     PSHELL  5       T       10.0    4       1               
        STRESS  5.0                                                             
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Unique topology design region identification number. (Integer > 0)                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABEL     │ User-supplied name for printing purpose. (Character)                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PTYPE     │ Property entry name. Used with PID to identify the elements to be designed. (Character: “PBAR”,    │
│           │ “PSHELL”, ‘PSOLID”, etc.)                                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XINIT     │ Initial value. (Blank or Real, XLB < XINIT < 1.0; Default = Blank). Typically, XINIT is defined to │
│           │ match the mass constraint on DRESP1=FRMASS, so the initial design does not have violated           │
│           │ constraints. In this case, the default is set to the constraint value. If the mass (DRESP1=FRMASS  │
│           │ or WEIGHT) is the objective, the default is 0.9. The default of XINIT is 0.6 for the other cases.  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XLB       │ Lower bound to prevent the singularity of the stiffness matrix. (Real; Default = 0.001)            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DELXV     │ Fractional change allowed for the design variable during approximate optimization. See Remark      │
│           │ 3. (Real > 0.0; Default = 0.2)                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ POWER     │ A penalty factor used in the relation between topology design variables and element Young’s        │
│           │ modulus. (Real > 1.0; Default = 3.0, or 4.0 if symmetry constraints used). 2.0 < POWER < 5.0 is    │
│           │ recommended.                                                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property entry identifier. This PID must be unique for PIDs referenced by other TOPVAR, DVPREL1    │
│           │ and DVPREL2 entries. Topology and sizing variables cannot share the same properties. (Integer > 0) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “SYM”     │ Indicates that this line defines symmetry constraints.                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID       │ Rectangular coordinate system ID used for specifying manufacturing constraints. See Remark         │
│           │ 4. (Blank or Integer > 0; Default = blank)                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MSi       │ Mirror symmetry plane. See Remark 5. & 7. (Character, ‘XY’, ‘YZ’, or ‘ZX’)                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CS        │ Cyclic symmetry axis. (character X, Y, Z). See Remark 12.                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NCS       │ Number of cyclic symmetric segments in 360 degrees (Integer > 0). See Remark 9.                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “CAST”    │ Indicates that this line defines casting constraints (i.e., die draw direction constraints). See   │
│           │ Remarks 6., 7., 8., and 10.                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DD        │ Draw Direction. DDi=X, Y, Z or X-, Y-, Z- for a single die option (DIE=1) where X-, Y-, Z-         │
│           │ indicates the opposite direction of X, Y, and Z respectively.  DDi=X, Y, and Z for two die option  │
│           │ (DIE =2) (Character)                                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DIE       │ Die Options. (Blank or integer 1 or 2; Default = 1)                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ =  1 (or blank).  A single die will be used and the die slides in the given draw direction (i.e.,  │
│           │ material grows from the bottom in the draw direction)                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ = 2. Two dies will be used and the dies split apart along the draw direction (i.e., material grows │
│           │ from the splitting plane in opposite direction along the axis specified by the draw direction DDi. │
│           │ The splitting plane is determined by optimization)                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALIGN     │ Indicates whether the designed property finite element mesh is precisely aligned with the draw     │
│           │ direction or extrusion direction. (Character: “YES” or “NO” or Blank; Default = blank = “NO”) See  │
│           │ Remark 10.                                                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “EXT”     │ Indicates that this line defines extrusion constraints (i.e., enforce constant cross-section) See  │
│           │ Remark 6. and 7.                                                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ED        │ Extrusion direction. (Character, X, Y, or Z)                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “PRINT”   │ Indicates that this line defines overhang constraints (maximum overhang angle is 45 degree). See   │
│           │ Remark 12.                                                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID       │ Rectangular coordinate system ID used for specifying overhang constraints.                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PD        │ PRINT Direction. PD =X, Y, Z or X-, Y-, and Z- where X-, Y-, Z- indicates the opposite direction   │
│           │ of X, Y, and Z respectively (Character).                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “TDMIN”   │ Indicates that this line defines a minimum and/or maximum member size.,          See remarks       │
│           │ 11. and 12.                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TVMIN     │ Minimum member size. See Remarks 11. and 12. (Real>=0.0 or blank)                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TVMAX     │ Maximum member size. See Remarks 11. and 12. (Real > TVMIN or blank)                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “STRESS”  │ Indicates that this line defines a stress limit.                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STLIM     │ Von Mises stress upper bound. See Remark 13.. (Real >0.0)                                          │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### <span>   </span>Remarks:

1. The topologically designable element properties include PROD, PBAR, PBARL, PBEND, PBEAM, PBEAML, PSHELL, PSHEAR, PSOLID, and PWELD. Multiple TOPVAR’s are allowed in a single file. Combined topology, topography (BEADVAR), topometry (TOMVAR) sizing, and shape optimization is supported in a single file. However, TOPVAR cannot be used with DVMREL1 and DVMREL2 entries.

2. All designed element properties must refer to a MAT1 entry or MAT9 entry (PSOLID only); therefore, a PCOMP/PCOMPG cannot be used as designed property in topology optimization. PCOMP/PCOMPG’s can be used as non-designed properties in a topology optimization job.

3. If DELXV is blank, the default is taken from the specification of DELX parameter on the DOPTPRM entry.

4. Only CORD1R and CORD2R can be used as a referenced coordinate system to specify topology manufacturing constraints. Only one reference coordinate system CID is allowed for each TOPVAR entry.

5. One, two or three different mirror symmetry planes can present (such as MS1=XY, MS2=YZ, and MS3=ZX).

6. Casting (“CAST”) and Extrusion (“EXT”) manufacturability constraints can be applied to PTYPE=”PSOLID” only.  Casting constraints cannot be combined with extrusion constraints for the same TOPVAR entry.

7. Some symmetry constraint types can be combined with casting or extrusion constraints. The referenced coordinate system CID must be the same for the combined constraints. Some possible combinations are:

     • For “EXT” constraints, possible combinations are (ED=X, MSi=XY, and/or ZX or CS=X), (ED=Y, MSi=YZ, and/or XY or CS=Y), (ED=Z, MSi=ZX, and/or YZ or CS=Z).

     • For “CAST” constraints, possible combinations are (DD=X or X-, MSi=XY and/or ZX or CS=X), (DD=Y or Y-, MSi=YZ and/or XY or CS=Y), (DD=Z or Z-, MSi=ZX and/or YZ or CS=Z).

8. For two dies option (DIE=2), the splitting plane is optimized. For a single die DIE=1, the parting plane is the bottom surface of the designed part in the draw direction.

9. The first symmetry segment starts at the X-axis when CS = Z (at Z-axis when CS = Y, and at the Y-axis when CS = X). One cycle symmetry can be combined with one mirror symmetry constraint as long as the axis of cyclic symmetry is normal to the plane of mirror symmetry. For example, MSi = YZ and CS = X, MSi = XZ and CS = Y, and MSi = XY and CS = Z. This feature can also be used for < 360 degrees but NCS must be given in 360 degrees.

10. It is recommended to use aligned mesh for casting property due to smaller tolerance used.

11. Without a TDMIN continuation line, the minimum member size constraint is taken from the specification of TDMIN parameter on the DOPTPRM entry. This option is applied on 2 and 3 D elements only. Minimum member size constraints can be used with “SYM”, “CAST”, and “EXT” constraints.

12. TVMIN and TVMAX are dimensional quantities. A guideline is that TVMIN be at least three times a representative element dimension. TVMAX must be greater than TVMIN and it is recommended that it be twice as big. If TVMAX is blank, no maximum member size is imposed. It is recommended that TVMIN always be used when TVMAX is specified.

13. “STRESS” limits can only be used for PTYPE=PSOLID and PSHELL referencing MAT1 only. The Von Mises stress (at element center) apply to all solid and/or shell elements in both designed and non-designed regions. All TOPVAR entries must have the same STLIM.

14. The TOPVAR entry cannot be used with thermal loads.

15. For normal mode topology optimization, lower and higher mode may switch during optimization. This often occurs while maximizing or contraining the first eigenfrequency. This leads to a diverging solution. A workaround is using the mean value of a few of the lowest eigenfrequency (3~6) by DRESP2.

16. The CASI solver is strongly recommended for solid elements topology problems for efficiency.

17. “PRINT” (overhang constraints) can be used for PTYPE=PSOLID only and limited to one TOPVAR entry. The result is mesh dependent. If used with minimum member size, the location of reference coordinate system may have some influence on the optimal design.

