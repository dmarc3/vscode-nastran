## [CTRIA3](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CTRIA3.xhtml) - Triangular Plate Element Connection

Defines an isoparametric membrane-bending or plane strain triangular plate element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CTRIA3  EID     PID     G1      G2      G3      THETA...ZOFFS                   
                TFLAG   T1      T2      T3                                      
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CTRIA3  111     203     31      74      75      3.0     0.98                    
                        1.77    2.04    2.09                                    
```
```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ EID       │ Element identification number.  (0 <              │                                                   │
│           │ Integer < 100,000,000)                            │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PID       │ Property identification number of a PSHELL,       │                                                   │
│           │ PCOMP, PCOMPG or PLPLANE entry. (Integer > 0;     │                                                   │
│           │ Default = EID)                                    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Gi        │ Grid point identification numbers of connection   │                                                   │
│           │ points. (Integers  >  0, all unique)              │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ THETA     │ Material property orientation angle in degrees.   │                                                   │
│           │ THETA is ignored for hyperelastic elements.       │                                                   │
│           │ (Real; Default =  0.0)                            │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MCID      │ Material coordinate system identification number. │                                                   │
│           │ The x-axis of the material coordinate system is   │                                                   │
│           │ determined by projecting the T1-axis of the MCID  │                                                   │
│           │ coordinate system onto the surface of the shell   │                                                   │
│           │ element as follows:                               │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ CORD1R, CORD2R                                    │ x -axis of MCID the coordinate is projected onto  │
│           │                                                   │ shell surface and the material angle is measured  │
│           │                                                   │ from the G1-G2 line to the to the projected       │
│           │                                                   │ x-axis                                            │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ CORD1C, CORD2C CORD1S, CORD2S                     │ r-axis of MCID the coordinate is projected onto   │
│           │                                                   │ shell surface through the element center and the  │
│           │                                                   │ material angle is measured from the G1-G2 line to │
│           │                                                   │ the to the projected r-axis                       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Use DIAG 38 to print the computed THETA values.   │                                                   │
│           │ MCID is ignored for hyperelastic elements.        │                                                   │
│           │ (Integer > 0; if blank, then THETA = 0.0 is       │                                                   │
│           │ assumed.)                                         │                                                   │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```
![bulkc203034.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203034.jpg?_LANG=enus)

Figure 0-34   MCID Coordinate System Definition

```text
┌───────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ ZOFFS │ Offset from the surface of grid points to the element reference plane. See Remark 3. ZOFFS is     │
│       │ ignored for hyperelastic elements.  (Real)                                                        │
├───────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TFLAG │ An integer flag, signifying the meaning of the Ti values. (Integer 0, 1, or blank)                │
├───────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ti    │ Membrane thickness of element at grid points G1 through G3. If “TFLAG” zero or blank, then Ti are │
│       │ actual user specified thickness. (Real > 0.0 or blank, not all zero. See Remark 4. for default.)  │
│       │ If “TFLAG” one, then the Ti are fraction relative to the T value of the PSHELL. (Real > 0.0 or    │
│       │ blank; not all zero. Default = 1.0) Ti are ignored for hyperelastic elements.                     │
└───────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Element identification numbers should be unique with respect to all other element identification numbers.

2. The continuation is optional. If it is not supplied, then T1 through T3 will be set equal to the value of T   on the PSHELL entry.

3. Elements may be offset from the connection points by means of the ZOFFS field. Other data, such as material matrices and stress fiber locations, are given relative to the reference plane. A positive value of ZOFFS implies that the element reference plane is offset a distance of ZOFFS along the positive Z-axis of the element coordinate system. If the ZOFFS field is used, then both the MID1 and MID2 fields must be specified on the PSHELL entry referenced by PID.

     Two methods are available for the computation of offsets: original and enhanced. The default method is the original method. The enhanced method is requested by the Bulk Data entry MDLPRM,OFFDEF,LROFF. For options of offsets, please refer to the Bulk Data entry MDLPRM,OFFDEF,option.

     For solution sequences that require differential stiffness such as SOL103 (with preloading), SOL105, and SOL400,  it is highly recommended  to use MDLPRM, OFFDEF, LROFF. In SOL103, if the case control ADAMSMNF FLEXBODY=YES or AVLEXB EXBBODY=YES is present, then MDLPRM, OFFDEF, LROFF must be replaced by  MDLPRM, OFFDEF, NOMASS .

     For SOLs 106, 129, 153, and 159 the differential stiffness for offset vectors will give incorrect results with PARAM, LGDISP, 1. In addition in SOLs 106 and 129 offset vectors will produce incorrect results with thermal loading.

![bulkc203036.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203036.jpg?_LANG=enus)

Figure 0-35 CTRIA3 Element Geometry and Coordinate Systems

4. The reference coordinate system for the output of stress, strain and element force depends on the element type.

     • For CTRIA3 elements, which are not hyperelastic, the reference coordinate system for output is the element coordinate system.

     • For hyperelastic elements the stress and strain are output according to CID on the PLPLANE entry.

5. For hyperelastic elements, the plot codes are specified under the CTRIAFD element name in  Item Codes .

6. SYSTEM(218), alias T3SKEW, allows the user to control the minimum vertex angle for TRIA3 elements at which USER WARNING MESSAGE 5491 is issued. The default value is 10. degrees.

7. By default, all of the three edges of the element are considered straight.

