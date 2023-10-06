## [CTRIA6](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CTRIA6.xhtml) - Curved Triangular Shell Element Connection

Defines a curved triangular shell element or plane strain with six grid points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CTRIA6  EID     PID     G1      G2      G3      G4      G5      G6      +       
+       THETA...ZOFFS   T1      T2      T3      TFLAG                           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CTRIA6  302     3       31      33      71      32      51      52      +       
+       45      .03     .020    .025    .025                                    
```

```text
┌────────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer  │ Meaning                                           │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ EID        │ Element Identification number. (0 <               │                                                   │
│            │ Integer < 100,000,000)                            │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PID        │ Property identification number of PSHELL, PCOMP,  │                                                   │
│            │ PCOMPG or PLPLANE entry. (Integer > 0)            │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ G1, G2, G3 │ Identification numbers of connected corner grid   │                                                   │
│            │ points. (Unique Integers > 0)                     │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ G4, G5, G6 │ Identification number of connected edge grid      │                                                   │
│            │ points. Optional data for any or all three points │                                                   │
│            │ for Nastran conventional element only. (Integer > │                                                   │
│            │ 0 or blank) Note that for advanced nonlinear      │                                                   │
│            │ elements, partial specification of mid-points is  │                                                   │
│            │ not allowed. i.e. either none of the mid-points   │                                                   │
│            │ should be specified or all of the mid points      │                                                   │
│            │ should be specified.                              │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ THETA      │ Material property orientation angle in degrees.   │                                                   │
│            │ THETA is ignored for hyperelastic elements.       │                                                   │
│            │ (Real; Default = 0.0)                             │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MCID       │ Material coordinate system identification number. │                                                   │
│            │ The x-axis of the material coordinate system is   │                                                   │
│            │ determined by projecting the T1-axis of the MCID  │                                                   │
│            │ coordinate system onto the surface of the shell   │                                                   │
│            │ element as follows:                               │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ CORD1R, CORD2R                                    │ x -axis of MCID the coordinate is projected onto  │
│            │                                                   │ shell surface and the material angle is measured  │
│            │                                                   │ from the G1-G2 line to the to the projected       │
│            │                                                   │ x-axis                                            │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ CORD1C, CORD2C CORD1S, CORD2S                     │ r-axis of MCID the coordinate is projected onto   │
│            │                                                   │ shell surface through the element center and the  │
│            │                                                   │ material angle is measured from the G1-G2 line to │
│            │                                                   │ the to the projected r-axis                       │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ MCID is ignored for hyperelastic elements.        │                                                   │
│            │ (Integer > 0; if blank, then THETA = 0.0 is       │                                                   │
│            │ assumed)                                          │                                                   │
└────────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

![bulkc203038.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203038.jpg?_LANG=enus)

Figure 0-36   MCID Coordinate System Definition

```text
┌───────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ ZOFFS │ Offset from the surface of grid points to the element reference plane; see Remark 6. ZOFFS is     │
│       │ ignored for hyperelastic elements.  (Real)                                                        │
├───────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ti    │ Membrane thickness of element at grid points G1 through G4. If “TFLAG” zero or blank, then Ti are │
│       │ actual user specified thickness. (Real > 0.0 or blank, not all zero. See Remark 4. for default.)  │
│       │ If “TFLAG” one, then the Ti are fraction relative to the T value of the PSHELL. (Real > 0.0 or    │
│       │ blank, not all zero. Default = 1.0) Ti are ignored for hyperelastic elements.                     │
├───────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TFLAG │ An integer flag, signifying the meaning of the Ti values. (Integer 0, 1, or blank)                │
└───────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Element identification numbers should be unique with respect to all other element IDs.
2. Grid points G1 through G6 must be numbered as shown in  .
3. The orientation of the material property coordinate system is defined locally at each interior integration point by THETA, which is the angle between x  and the line of constant  η .
4. T1, T2, and T3 are optional.  If they are not supplied and no TFLAG, then T1 through T3 will be set equal to the value of T on the PSHELL entry.
5. It is recommended that the midside grid points be located within the middle third of the edge.
6. Elements may be offset from the connection points by means of the ZOFFS field.  Other data, such as material matrices and stress fiber locations, are given relative to the reference plane.  A positive value of ZOFFS implies that the element reference plane is offset a distance of ZOFFS along the positive z-axis of the element coordinate system.  If the ZOFFS field is used, then both the MID1 and MID2 fields must be specified on the PSHELL entry referenced by PID.

     Two methods are available for the computation of offsets: original and enhanced. The default method is the original method. The enhanced method is requested by the Bulk Data entry MDLPRM,OFFDEF,LROFF. For options of offsets, please refer to the Bulk Data entry MDLPRM,OFFDEF,option.

     For solution sequences that require differential stiffness such as SOL103 (with preloading), SOL105, and SOL400,  it is highly recommended  to use MDLPRM, OFFDEF, LROFF. In SOL103, if the case control ADAMSMNF FLEXBODY=YES or AVLEXB EXBBODY=YES is present, then MDLPRM, OFFDEF, LROFF must be replaced by  MDLPRM, OFFDEF, NOMASS .

7. If all midside grid points are deleted, then the element will be excessively stiff and the transverse shear forces will be incorrect.  A User Warning Message is printed.  A CTRIA3 element entry is recommended instead.  If the element is hyperelastic, then the element is processed identically to the hyperelastic CTRIA3 element.
8. For a description of the element coordinate system, see  Shell Elements (CTRIA3, CTRIA6, CTRIAR, CQUAD4, CQUAD8, CQUADR)   in the  MSC Nastran Reference Guide . Stresses and strains are output in the local coordinate system identified by  ![bulkc203040.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203040.jpg?_LANG=enus)  and  ![bulkc203042.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203042.jpg?_LANG=enus)  in  . For hyperelastic elements, stresses and strains are output in the coordinate system defined by the CID field on the PLPLANE entry.

![bulkc203044.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203044.jpg?_LANG=enus)

Figure 0-37 CTRIA6 Element Geometry and Coordinate Systems

9. For hyperelastic elements, the plot codes are specified under the CTRIAFD element name in  .
