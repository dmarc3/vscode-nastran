## [SURFACE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.SURFACE.xhtml) - Surface Definition

Defines a surface for the calculation of grid point stresses, strains, or mesh stress discontinuities.

#### Format:

![casecontrol4c01505.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/../../../assets/casecontrol4c01505.jpg?_LANG=enus)  

![casecontrol4c01507.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/../../../assets/casecontrol4c01507.jpg?_LANG=enus)  

![casecontrol4c01509.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/../../../assets/casecontrol4c01509.jpg?_LANG=enus)  

#### Example:

```nastran
SURFACE 10 SET 9 NORMAL X3
```

```text
┌─────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                           │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ id          │ Surface identification number (Required).                                                         │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SET         │ References a SET command that defines the elements in the surface (required). Either form of the  │
│             │ SET command may be used.                                                                          │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ sid         │ Set identification number.                                                                        │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FIBRE       │ Specifies the fiber location at which stresses will be calculated.                                │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL         │ Requests output at all fiber locations; i.e., z=Z1, Z2, and MID.                                  │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Z1          │ Requests output z = Z1 only.                                                                      │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Z2          │ Requests output z = Z2 only.                                                                      │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID         │ Requests output z = (Z1+Z2)/2 only.                                                               │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SYSTEM      │ Specifies the coordinate system to be used as the output coordinate system.                       │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ELEMENT     │ Specifies the element coordinate system for output.                                               │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CORD cid    │ Specifies the coordinate system defined on a CORDij Bulk Data entry for output.                   │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BASIC       │ Specifies the basic coordinate system for output.                                                 │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AXIS        │ Specifies the axis of the coordinate system to be used as the x output axis and the local x-axis  │
│             │ when geometric interpolation is used.                                                             │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X1, X2, X3  │ Specifies the direction of the axis or the normal. X, Y, and Z may be substituted for X1, X2, and │
│             │ X3, respectively.                                                                                 │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NORMAL      │ Specifies the reference direction for positive fiber and shear stress output, but has no effect   │
│             │ when ELEMENT is specified.                                                                        │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ M           │ Specifies the reverse of the direction given by R, X1, X2, or X3 and must be entered as MR, MX1,  │
│             │ MX2, or MX3 with no space between the M and the following letter.                                 │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ R           │ Specifies the radius vector from the origin of reference coordinate system to the grid point.     │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TOPOLOGICAL │ Specifies the method to calculate the average grid point stress or strain. The default is         │
│ GEOMETRIC   │ TOPOLOGICAL.                                                                                      │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ theta       │ Specifies the interelement slope difference tolerance (in degrees) to detect stress discontinuity │
│             │ between elements (not used with TOPOLOGICAL) (Real; Default  =  0.0).                             │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BRANCH      │ Selects whether multiple element intersections (BREAK/NOBREAK) are to be treated as               │
│             │ discontinuities, and if warning messages (MESSAGE/NOMESSAGE) are to be issued.                    │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BREAK       │ Multiple element intersections are (or are not) to be treated as stress discontinuities.          │
│ NOBREAK     │                                                                                                   │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MESSAGE     │ A warning message will (or will not) be issued when multiple element intersections are            │
│ NOMESSAGE   │ encountered.                                                                                      │
└─────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. SURFACE commands must be specified after OUTPUT(POST).

2. The surface identification number must be referenced on a SET command appearing after OUTPUT(POST). The SET identification number may then be referenced on GPSTRESS, GPSTRAIN, STRFIELD, ELSDCON, and GPSDCON commands. The sid on the surface entry must reference a SET defined after OUTPUT(POST).

3. The surface normal is also used in the definition of the local reference surface for geometric interpolation. Two options are available. In the first option, the radius vector (R) from the origin of the reference coordinate system to the grid point is used. In the second option, one axis (X1, X2, or X3) of the coordinate system is used. The direction can be reversed using the modification parameter M. The positive side of an element is defined as a side from which the NORMAL direction emerges, rather than the side determined by the connection specified on the element connection entries.

4. When the parameter ELEMENT is present, the element stresses or strains are used unmodified (defaults to output stresses in output system). The CORD keyword references a CORDij Bulk Data entry with coordinate system identification number cid.

5. When theta = 0, no testing is made. When theta is negative, grid point stresses will be calculated for each element connected to an exception point; otherwise, the best estimation of the grid point stress will be output.

6. BREAK is the default if theta is nonzero.

7. For all elements defined in SET 9 of the preceding example,

     • All fiber locations are output;

     • The basic output system is used;

     • The x-axis is x-axis of the basic system;

     • The surface normal direction point is z-axis of the basic system;

     • The topological interpolation method is used;

     • No tolerance test is made; and

     • No branch test is made.

     The example illustrates a good choice for regular two-dimensional problems in the x-y plane.

