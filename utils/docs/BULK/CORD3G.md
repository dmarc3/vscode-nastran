## [CORD3G](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CORD3G.xhtml) - General Coordinate System

Defines a general coordinate system using three rotational angles as functions of coordinate values in the reference coordinate system.  The CORD3G entry is used with the MAT9 entry to orient material principal axes for 3-D composite analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CORD3G  CID     METHOD  FORM    THETAID1THETAID2THETAID3CIDREF                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CORD3G  100     E313    EQN     110     111     112     0                       
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID       │ Coordinate system identification number.  See Remark 1. (Integer > 0)                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ METHOD    │ E313 or S321 for Euler angle rotation in 313 sequence or space-fixed rotation in 321 sequence. │
│           │  See Remark 2. (Character; Default = “E313”)                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FORM      │ Specifies the Bulk Data entry which defines angles.  FORM = “EQN” for DEQATN entry or          │
│           │ FORM = “TABLE” for TABLE3D entry.  (Character; Default = “EQN”)                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ THETAID   │ Identification number for DEQATN or TABLE3D Bulk Data entry which defines the three angles (in │
│           │ radians) measured from reference coordinates to the general material coordinate system.  See   │
│           │ Remark 3. (Integer > 0)                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CIDREF    │ Identification number for the coordinate system from which the orientation of the general      │
│           │ coordinate system is defined. (Integer > 0; Default = 0)                                       │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. CID must be unique with respect to all other coordinate systems.  CID cannot be referenced on GRID entries.
2. Three Euler angles specify the rotation of the CORD3G coordinate axes (xyz) with respect to the local Cartesian coordinate axes (XYZ) in CIDREF as follows:  first rotate about Z-axis by  ![bulkc202744.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202744.jpg?_LANG=enus) , next rotate about rotated x-axis by  ![bulkc202746.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202746.jpg?_LANG=enus) , and then rotate about rotated z-axis by  ![bulkc202748.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202748.jpg?_LANG=enus) .  On the other hand, the space-fixed rotations in 321 sequence specify all the rotations about the fixed coordinate axes:  first rotate about Z by  ![bulkc202750.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202750.jpg?_LANG=enus) , next about Y by  ![bulkc202752.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202752.jpg?_LANG=enus) , then about X by  ![bulkc202754.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202754.jpg?_LANG=enus) .
3. The three rotations define a coordinate transformation which transforms position vectors in the reference coordinate system into the general coordinate system.
4. The DEQATN option must have three arguments representing the three axes of CIDREF, although not all arguments are necessarily needed in the equation.
5. If FORM = EQN is used with CIDREF pointing to any CORD1k or CORD2k, k = C,S, and a spatial relationship is required, then the equations are written using R, ![bulkc202756.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202756.jpg?_LANG=enus) , ![bulkc202758.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202758.jpg?_LANG=enus)  as input variables. Non spatial fixed values such as THETA1 (A,B,C)=PI(1.) may of course be entered for any type of coordinate defined by the CIDREF.

     If FORM = TABLE3D is used with CIDREF pointing to any CORD1k or CORD2k, k = C,S, and a spatial relationship is required then the equations are written using the variables X,Y, Z defined at the origin of the CIDREF as input values and not the variables R, ![bulkc202760.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202760.jpg?_LANG=enus) ,Z or R, ![bulkc202762.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202762.jpg?_LANG=enus) , ![bulkc202764.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202764.jpg?_LANG=enus)  input values. For example, if a CORD1S is used then the table input value is X internally computed as  ![bulkc202766.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202766.jpg?_LANG=enus) .

     Whether the EQN or TABLE3D FORM is used, the equation must return an angle measure in radians to have any meaning.
