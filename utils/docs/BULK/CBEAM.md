## [CBEAM](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CBEAM.xhtml) - Beam Element Connection

Defines a beam element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBEAM   EID     PID     GA      GB      X1      X2      X3      OFFT    +       
+       PA      PB      W1A     W2A     W3A     W1B     W2B     W3B     +       
+       SA      SB                                                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBEAM   2       39      7       13      8.2     6.1     -5.6    GOG     +       
+               513             3.0                                     +       
+       8       5                                                               
```

#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBEAM   EID     PID     GA      GB      G0                      OFFT    +       
+       PA      PB      W1A     W2A     W3A     W1B     W2B     W3B     +       
+       SA      SB                                                              
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBEAM   2       39      7       13      105                     GOG     +       
+               513                                                             
```

```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID        │ Unique element identification number. (0 < Integer < 100,000,000)                                  │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID        │ Property identification number of PBEAM, PBCOMP, PBEAML or PBMSECT entry.  (Integer > 0;           │
│            │ Default = EID)*                                                                                    │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GA, GB     │ Grid point identification numbers of connection points.  (Integer > 0; )                           │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X1, X2, X3 │ Components of orientation vector , from GA, in the displacement coordinate system at GA (Default), │
│            │ or in the basic coordinate system. See Remark 8. (Real)                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G0         │ Alternate method to supply the orientation vector  using grid point G0.  Direction of  is from GA  │
│            │ to G0.  is then transferred to End A.  (Integer > 0;  or GB)                                       │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OFFT       │ Offset vector interpretation flag. See Remark 8. (Character or blank)                              │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PA, PB     │ Pin flags for beam ends A and B, respectively; used to remove connections between the grid point   │
│            │ and selected degrees-of-freedom of the beam.  The degrees-of-freedom are defined in the element’s  │
│            │ coordinate system and the pin flags are applied at the offset ends of the beam (see Figure 9-14).  │
│            │  The beam must have stiffness associated with the PA and PB degrees-of-freedom to be released by   │
│            │ the pin flags.  For example, if PA = 4, the PBEAM entry must have a nonzero value for J, the       │
│            │ torsional stiffness.  (Up to five of the unique Integers 1 through 6 with no embedded blanks.) Pin │
│            │ flags are not presently allowed in SOL 700. Also, Pin flags should not be used in nonlinear        │
│            │ analysis when there is large displacement.                                                         │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│            │ Components of offset vectors from the grid points to the end points of the axis of the shear       │
│            │ center.  See Remarks 7., 8. and 8. (Real; Default = 0.0)                                           │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SA, SB     │ Scalar or grid point identification numbers for the ends A and B, respectively.  The degrees-of-   │
│            │ freedom at these points are the warping variables . (Integers ³ 0 or blank)                        │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

```text
┌───────────────────────────────────────────────────────────────────────────────┐
│ *See the BEAMOR entry for default options for field 3 and fields 6 through 9. │
└───────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Element identification numbers should be unique with respect to all other element identification numbers.
2. For an additional explanation of the beam element, see the    in the  MSC Nastran Reference Guide .   defines beam element geometry:

![bulkc102422.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102422.jpg?_LANG=enus)

Figure 9-14 CBEAM Element Geometry System

![bulkc102424.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102424.jpg?_LANG=enus)

Figure 9-15   CBEAM Internal Element Forces and Moments

3. If field 6 is an integer, then G0 is used.  If field 6 is blank or real, then X1, X2, X3 is used.
4. G0 cannot be located at GA or GB.
5. The rules for the continuations entries are:
     -  Both continuations may be omitted if there are no pin flags, offsets, or warping variables.
     - If the second continuation is used, then the first continuation must be included, even if all fields are blank.
     - If the second continuation is omitted, torsional stiffness due to warping of the cross section will not be considered.
6. If warping is allowed (SA and SB > 0), then SA and SB must be defined with SPOINT or GRID entries. If GRID entries are used, the warping degree-of-freedom is attached to the first (T1) component. In addition, SPOINT ID is recommended for SA and SB if GROUNDCHECK is requested in case control.
7. Offset vectors are treated internally like rigid elements. Two methods are available for the computation of offsets: original and enhanced. The default method is the original method. The enhanced method is requested by the Bulk Data entry MDLPRM,OFFDEF,LROFF. For options of offsets, please refer to the Bulk Data entry MDLPRM,OFFDEF,option.

     For solution sequences that require differential stiffness such as SOL103 (with preloading), SOL105, and SOL400, the user is required to use MDLPRM, OFFDEF, LROFF. In SOL103, if the case control ADAMSMNF FLEXBODY=YES or AVLEXB EXBBODY=YES is present, then MDLPRM, OFFDEF, LROFF must be replaced by  MDLPRM, OFFDEF, NOMASS .

     For SOLs 106, 129, 153, and 159 the differential stiffness for offset vectors will give incorrect results with PARAM, LGDISP, 1.

8. OFFT in field 9 is a character string code that describes how the offset and orientation vector components are to be interpreted. By default (string input is GGG or blank), the offset vectors are measured in the displacement coordinate systems at grid points A and B and the orientation vector is measured in the displacement coordinate system of grid point A. At user option, the offset vectors can be measured in an offset system relative to grid points A and B, and the orientation vector can be measured in the basic system as indicated in the following table:

        See link for table.
