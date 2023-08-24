## [SPLINE6](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SPLINE6.xhtml) - 3D Finite Surface Spline

Defines a 6DOF or 3DOF finite surface spline for interpolating motion and/or forces between two meshes.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPLINE6 EID     CAERO   AELIST          SETG    DZ      METHOD  USAGE   +       
+       VSTYPE  VSLIST  I2VNUM  D2VNUM  METHVS  DZR     METHCON NGRID   +       
+       ELTOL   NCYCLE  AUGWEI                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPLINE6 5       8       12              60              FPS6    DISP    +       
+       AERO    2       4       4       VS6                                     
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Unique spline identification number. (Integer > 0)                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CAERO     │ Aero panel (CAEROi entry ID) that is to be interpolated. See Remarks 2. and 4. (Integer > 0 or     │
│           │ blank)                                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AELIST    │ Identification of an AELIST entry listing the boxes or aerodynamic grid points to be interpolated  │
│           │ using this spline. See Remark 2. (Integer > 0)                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SETG      │ Refers to an SETi entry that lists the structural grid points to which the spline is attached.     │
│           │ (Integer > 0)                                                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DZ        │ Linear attachment flexibility. (Real > 0.0; Default = 0.0)                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ METHOD    │ Method for the spline fit. Either FPS3 or FPS6. See Remark 5. (Character; Default = FPS6)          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ USAGE     │ Spline usage flag to determine whether this spline applies to the force transformation,            │
│           │ displacement transformation or both. FORCE, DISP or BOTH. See Remark 3. (Character; Default =      │
│           │ BOTH)                                                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VSTYPE    │ Virtual surface connectivity type. Either AERO or STRUC. (Character; Default = AERO)               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VSLIST    │ Identification number of an AELIST entry listing quadrilateral and/or triangular shell elements of │
│           │ the VSTYPE mesh which define the connectivity of the virtual surface mesh. See Remark 2. (Integer  │
│           │ > 0 or can be blank if CAERO is not blank and VSTYPE=AERO)                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ I2VNUM    │ The minimum number of structural mesh points to connect to each virtual mesh point. See Remarks    │
│           │ 7., 8. and 9. (0 < Integer; Default = 3)                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ D2VNUM    │ The minimum number of aero mesh points to connect to each virtual mesh point. See Remarks 7.,      │
│           │ 8. and 9. (0 < Integer; Default = 3)                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ METHVS    │ Similar to METHOD, this field chooses whether or not to include the rotational degrees-of-freedom  │
│           │ of virtual surface. Either VS6 or VS3. See Remark 5. (Character, Default VS6)                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DZR       │ Rotational attachment flexibility. (Real > 0.0; Default = 0.0)                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ METHCON   │ Method used to determine RBE3 connecting points between the meshes. Either NODEPROX or CIRCBIAS.   │
│           │ See Remarks 7., 8. and 9. (Character; Default = NODEPROX)                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NGRID     │ Number of closest grids that are used to determine the element list that is used to define the     │
│           │ RBE3 elements. Only valid for METHCON=CIRCBIAS. See Remarks 7. and 9. (Integer > 0; Default = 1)   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ELTOL     │ Tolerance used to determine whether or not a node projects onto an element of the mesh. Specified  │
│           │ as % of element size. Only valid for METHCON=CIRCBIAS. See Remarks 7. and 9. (Real; Default =      │
│           │ 100.0)                                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NCYCLE    │ Maximum number of cycles used to find elements onto which the nodes project. Only valid for        │
│           │ METHCON=CIRCBIAS. See Remark 7. and 9. (Integer > 0; Default = 3)                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AUGWEI    │ RBE3 weighting factor augmentation parameter. Only valid for METHCON=CIRCBIAS. See Remarks 7. and  │
│           │ 9. (Real > 0.0; Default = 0.0)                                                                     │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
