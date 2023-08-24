## [CQUAD8](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CQUAD8.xhtml) - Curved Quadrilateral Shell Element Connection

Defines a curved quadrilateral shell or plane strain element with eight grid points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CQUAD8  EID     PID     G1      G2      G3      G4      G5      G6      +       
+       G7      G8      T1      T2      T3      T4      THETA...ZOFFS   +       
+       TFLAG                                                                   
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CQUAD8  207     3       31      33      73      71      32      51      +       
+       53      72      0.125   0.025   0.030   .025    30.     .03            
```

```text
┌─────────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer   │ Meaning                                           │                                                   │
├─────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ EID         │ Element identification number. (0 <               │                                                   │
│             │ Integer < 100,000,000)                            │                                                   │
├─────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PID         │ Property identification number of a PSHELL,       │                                                   │
│             │ PCOMP, PCOMPG or PLPLANE or PLCOMP entry.         │                                                   │
│             │ (Integer > 0)                                     │                                                   │
├─────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ G1, G2, G3, │ Identification numbers of connected corner grid   │                                                   │
│ G4          │ points. Required data for all four grid points.   │                                                   │
│             │ (Unique Integers > 0)                             │                                                   │
├─────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ G5, G6, G7, │ Identification numbers of connected edge grid     │                                                   │
│ G8          │ points. Optional data for any or all four grid    │                                                   │
│             │ points for Nastran conventional element only.     │                                                   │
│             │ (Integer > 0 or blank). Note that for advanced    │                                                   │
│             │ nonlinear elements, partial specification of mid- │                                                   │
│             │ points is not allowed. i.e. either none of the    │                                                   │
│             │ mid-points should be specified or all of the mid  │                                                   │
│             │ points should be specified.                       │                                                   │
├─────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Ti          │ Membrane thickness of element at grid points G1   │                                                   │
│             │ through G4. If “TFLAG” zero or blank, then Ti are │                                                   │
│             │ actual user specified thickness. See Remark       │                                                   │
│             │ 4. for default. (Real > 0.0 or blank, not all     │                                                   │
│             │ zero.) If “TFLAG” one, then the Ti are fraction   │                                                   │
│             │ relative to the T value of the PSHELL. (Real >    │                                                   │
│             │ 0.0 or blank, not all zero. Default = 1.0) Ti are │                                                   │
│             │ ignored for hyperelastic elements.                │                                                   │
├─────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ THETA       │ Material property orientation angle in degrees.   │                                                   │
│             │ See Figure 0-15. THETA is ignored for             │                                                   │
│             │ hyperelastic elements. See Remark 10. (Real;      │                                                   │
│             │ Default = 0.0)                                    │                                                   │
├─────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MCID        │ Material coordinate system identification number. │                                                   │
│             │ The x-axis of the material coordinate system is   │                                                   │
│             │ determined by projecting the T1-axis of the MCID  │                                                   │
│             │ coordinate system onto the surface of the shell   │                                                   │
│             │ element as follows:                               │                                                   │
├─────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│             │ CORD1R, CORD2R                                    │ x -axis of MCID the coordinate is projected onto  │
│             │                                                   │ shell surface and the material angle is measured  │
│             │                                                   │ from the G1-G2 line to the to the projected       │
│             │                                                   │ x-axis                                            │
├─────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│             │ CORD1C, CORD2C CORD1S, CORD2S                     │ r-axis of MCID the coordinate is projected onto   │
│             │                                                   │ shell surface through the element center and the  │
│             │                                                   │ material angle is measured from the G1-G2 line to │
│             │                                                   │ the to the projected r-axis                       │
├─────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│             │ (see Remark 3.) MCID is ignored for hyperelastic  │                                                   │
│             │ elements. See Remark 10. (Integer > 0; if blank,  │                                                   │
│             │ then THETA = 0.0 is assumed.)                     │                                                   │
├─────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ ZOFFS       │ Offset from the surface of grid points to the     │                                                   │
│             │ element reference plane.  See Remark 6. ZOFFS is  │                                                   │
│             │ ignored for hyperelastic elements.  (Real)        │                                                   │
├─────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TFLAG       │ An integer flag, signifying the meaning of the Ti │                                                   │
│             │ values. (Integer 0, 1, or blank)                  │                                                   │
└─────────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. Element identification numbers should be unique with respect to all other element IDs of any kind.
2. Grid points G1 to G8 must be numbered as shown in  .
3. The orientation of the material property coordinate system is defined locally at each interior integration point by THETA, which is the angle between x  and the line of constant   η .

     The definition of the material coordinate system by projection is used to calculate an angle THETA. Please note that since xi changes directions throughout the element based on element shape, the material coordinate system varies similarly. Because of this an orthotropic or anisotropic material will cause the CQUAD8’s stiffness to be biased by both it’s shape and grid ordering. Use the QUAD4 element if a constant material coordinate system direction is desired with orthotropic and anisotropic materials.

4. T1, T2, T3 and T4 are optional.  If they are not supplied and no TFLAG, then T1 through T4 will be set to the value of T   on the PSHELL entry.
5. It is recommended that the midside grid points be located within the middle third of the edge.  If the edge point is located at the quarter point, the program may fail with a divide-by-zero error or the calculated stresses will be meaningless.
6. Elements may be offset from the connection points by means of the ZOFFS field.  Other data, such as material matrices and stress fiber locations, are given relative to the reference plane.  A positive value of ZOFFS implies that the element reference plane is offset a distance of ZOFFS along the positive z-axis of the element coordinate system.  If the ZOFFS field is used, then both the MID1 and MID2 fields must be specified on the PSHELL entry referenced by PID.

     Two methods are available for the computation of offsets: original and enhanced. The default method is the original method. The enhanced method is requested by the Bulk Data entry MDLPRM,OFFDEF,LROFF. For options of offsets, please refer to the Bulk Data entry MDLPRM,OFFDEF,option.

     For solution sequences that require differential stiffness such as SOL103 (with preloading), SOL105, and SOL400,  it is highly recommended  to use MDLPRM, OFFDEF, LROFF. In SOL103, if the case control ADAMSMNF FLEXBODY=YES or AVLEXB EXBBODY=YES is present, then MDLPRM, OFFDEF, LROFF must be replaced by  MDLPRM, OFFDEF, NOMASS .

7. If all midside grid points are deleted, then the element will be excessively stiff and the transverse shear forces incorrect.  A User Warning Message is printed, and a CQUAD4 element is recommended instead.  If the element is hyperelastic, then it is processed identically to the hyperelastic CQUAD4 element.
8. For a description of the element coordinate system, see  Shell Elements (CTRIA3, CTRIA6, CTRIAR, CQUAD4, CQUAD8, CQUADR)  in the  MSC Nastran Reference Guide . Stresses and strains are output in the local coordinate system identified by  ![bulkc202800.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202800.jpg?_LANG=enus)  and  ![bulkc202802.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202802.jpg?_LANG=enus)  in  .  However, for hyperelastic elements the stress and strain are output in the coordinate system identified by the CID field on the PLPLANE entry.  
9. For hyperelastic elements the plot codes are specified under the CQUADFD element name in  Item Codes .

![bulkc202804.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202804.jpg?_LANG=enus)

![bulkc202806.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202806.jpg?_LANG=enus)

where

     See link for definitions.

Figure 0-15 CQUAD8 Element Geometry and Coordinate Systems

10. If element has an associated PSHLN2 or PLCOMP entry with BEHi=COMPS code, the THETA/MCID value on the element connection entry will be ignored.

