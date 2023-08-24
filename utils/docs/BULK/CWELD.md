## [CWELD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CWELD1.xhtml) - Weld or Fastener Element Connection

Defines a weld or fastener connecting two surface patches or points. Large displacement and large rotational effects are supported when using SOL 400 only.

#### Format PARTPAT:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CWELD   EWID    PWID    GS      “PART...GA      GB              MCID    +       
+       PIDA    PIDB                                                    +       
+       XS      YS      ZS                                                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CWELD   101     8       203     PARTPAT                                 +       
+       21      33                                                              
```

#### Alternate formats and examples:

#### Format ELPAT:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CWELD   EWID    PWID    GS      “ELPAT” GA      GB              MCID    +       
+       SHIDA   SHIDB                                                   +       
+       XS      YS      ZS                                                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CWELD   103     5       403     ELPAT                                   +       
+       309     511                                                             
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CWELD   EWID    PWID    GS      “ELEMID”GA      GB              MCID    +       
+       SHIDA   SHIDB                                                           
```

#### Format ELEMID:

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CWELD   103     5       403     ELEMID                                  +       
+       309     511                                                             
```

#### Format GRIDID:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CWELD   EWID    PWID    GS      “GRIDID”GA      GB      SPTYP   MCID    +       
+       GA1     GA2     GA3     GA4     GA5     GA6     GA7     GA8     +       
+       GB1     GB2     GB3     GB4     GB5     GB6     GB7     GB8             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CWELD   7       29      233     GRIDID                  QT              +       
+       15      28      31      35      46      51      55      60      +       
+       3       5       8                                                       
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CWELD   EWID    PWID            “ALIGN” GA      GB              MCID            
```

#### Format ALIGN:

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CWELD   7       29              ALIGN   103     259                             
```

```text
┌────────────┬──────────────────────────────────┬───────────────────────────┬───────────────────────────────┐
│ Describer  │ Meaning                          │ Type                      │ Default                       │
├────────────┼──────────────────────────────────┼───────────────────────────┼───────────────────────────────┤
│ EWID       │ CWELD element identification     │ 0 < Integer < 100,000,000 │ Required                      │
│            │ number. See Remark 1.            │                           │                               │
├────────────┼──────────────────────────────────┼───────────────────────────┼───────────────────────────────┤
│ PWID       │ Property identification number   │ Integer > 0               │ Required                      │
│            │ of a PWELD entry.                │                           │                               │
├────────────┼──────────────────────────────────┼───────────────────────────┼───────────────────────────────┤
│ GS         │ Identification number of a grid  │ Integer > 0 or blank      │                               │
│            │ point which defines the location │                           │                               │
│            │ of the connector. See Remarks    │                           │                               │
│            │ 2. and 3.                        │                           │                               │
├────────────┼──────────────────────────────────┼───────────────────────────┼───────────────────────────────┤
│ “PARTPAT”  │ Character string indicating the  │ Character                 │ Required                      │
│            │ type of connection. The format   │                           │                               │
│            │ of the subsequent entries        │                           │                               │
│            │ depends on the type. “PARTPAT”,  │                           │                               │
│            │ for example, indicates that the  │                           │                               │
│            │ connectivity of surface patch A  │                           │                               │
│            │ to surface patch B is defined    │                           │                               │
│            │ with two property identification │                           │                               │
│            │ numbers of PSHELL entries, PIDA  │                           │                               │
│            │ and PIDB, respectively. The      │                           │                               │
│            │ “PARTPAT” format connects,       │                           │                               │
│            │ depending on the diameter, many  │                           │                               │
│            │ elements per patch. See Remark   │                           │                               │
│            │ 4.                               │                           │                               │
├────────────┼──────────────────────────────────┼───────────────────────────┼───────────────────────────────┤
│ GA, GB     │ Grid point identification        │ Integer > 0 or blank      │ blank                         │
│            │ numbers of piercing points on    │                           │                               │
│            │ surface A and surface B,         │                           │                               │
│            │ respectively. See Remark 5.      │                           │                               │
├────────────┼──────────────────────────────────┼───────────────────────────┼───────────────────────────────┤
│ MCID       │ Specifies the element stiffness  │ Integer > -1 or blank     │ Default = -1                  │
│            │ coordinate system. See Remark    │                           │                               │
│            │ 16.                              │                           │                               │
├────────────┼──────────────────────────────────┼───────────────────────────┼───────────────────────────────┤
│ PIDA, PIDB │ Property identification numbers  │ Integer > 0               │ Required for “PARTPAT”        │
│            │ of PSHELL entries defining       │                           │                               │
│            │ surface A and B respectively.    │                           │                               │
├────────────┼──────────────────────────────────┼───────────────────────────┼───────────────────────────────┤
│ XS, YS, ZS │ Coordinates of spot weld         │ Real                      │ Required if GS and GA are not │
│            │ location in basic. See Remark 2. │                           │ defined.                      │
└────────────┴──────────────────────────────────┴───────────────────────────┴───────────────────────────────┘
```

For the alternate formats, the describer meaning are described below:

```text
┌──────────────┬──────────────────────────────────┬─────────────┬───────────────────────┐
│ Describer    │ Meaning                          │ Type        │ Default               │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ “ELPAT”      │ Character string indicating that │ Character   │ Required              │
│              │ the connectivity of surface      │             │                       │
│              │ patch A to surface patch B is    │             │                       │
│              │ defined with two shell element   │             │                       │
│              │ identification numbers, SHIDA    │             │                       │
│              │ and SHIDB, respectively. The     │             │                       │
│              │ “ELPAT” format connects,         │             │                       │
│              │ depending on the diameter, many  │             │                       │
│              │ elements per patch. See Remark   │             │                       │
│              │ 6.                               │             │                       │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ SHIDA, SHIDB │ Shell element identification     │ Integer > 0 │ Required for “ELPAT”  │
│              │ numbers of elements on patch A   │             │                       │
│              │ and B, respectively.             │             │                       │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ “ELEMID”     │ Character string indicating that │ Character   │ Required              │
│              │ the connectivity of surface      │             │                       │
│              │ patch A to surface patch B is    │             │                       │
│              │ defined with two shell element   │             │                       │
│              │ identification numbers, SHIDA    │             │                       │
│              │ and SHIDB, respectively. The     │             │                       │
│              │ “ELEMID” format connects one     │             │                       │
│              │ shell element per patch. See     │             │                       │
│              │ Remark 7.                        │             │                       │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ SHIDA, SHIDB │ Shell element identification     │ Integer > 0 │ Required for “ELEMID” │
│              │ numbers of elements on patch A   │             │                       │
│              │ and B, respectively.             │             │                       │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ “GRIDID”     │ Character string indicating that │ Character   │ Required              │
│              │ the connectivity of surface      │             │                       │
│              │ patch A to surface patch B is    │             │                       │
│              │ defined with two sequences of    │             │                       │
│              │ grid point identification        │             │                       │
│              │ numbers, GAi and GBi,            │             │                       │
│              │ respectively. The “GRIDID”       │             │                       │
│              │ format connects the surface of   │             │                       │
│              │ any element. See Remark 8.       │             │                       │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ SPTYP        │ Character string indicating      │ Character   │ Required for “GRIDID” │
│              │ types of surface patches A and   │             │                       │
│              │ B. SPTYP = “QQ”, “TT”, “QT”,     │             │                       │
│              │ “TQ”, “Q” or “T”. See Remark 9.  │             │                       │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ GAi          │ Grid identification numbers of   │ Integer > 0 │ Required for “GRIDID” │
│              │ surface patch A. GA1 to GA3 are  │             │                       │
│              │ required. See Remark 10.         │             │                       │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ GBi          │ Grid identification numbers of   │ Integer > 0 │                       │
│              │ surface patch B. See Remark 10.  │             │                       │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ “ALIGN”      │ Character string indicating that │ Character   │ Required              │
│              │ the connectivity of surface A to │             │                       │
│              │ surface B is defined with two    │             │                       │
│              │ shell vertex grid points GA and  │             │                       │
│              │ GB, respectively. See Remark 11. │             │                       │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ GA, GB       │ Vertex grid identification       │ Integer > 0 │ Required for “ALIGN”  │
│              │ number of shell A and B,         │             │                       │
│              │ respectively.                    │             │                       │
└──────────────┴──────────────────────────────────┴─────────────┴───────────────────────┘
```

#### Remarks:

1. CWELD defines a flexible connection between two surface patches, between a point and a surface patch, or between two shell vertex grid points. See   through  .
2. Grid point GS defines the approximate location of the connector in space. GS is projected on surface patch A and on surface patch B. The resulting piercing points GA and GB define the axis of the connector. GS must have a normal projection on surface patch A and B. GS does not have to lie on the surface patches. GS is ignored for format “ALIGN”. GA is used instead of GS if GS is not specified. For the formats “ELPAT” and “PARTPAT,” if GS and GA are not specified, then XS, YS, and ZS will be assumed.
3. The connectivity between grid points on surface patch A and grid points on surface patch B is generated depending on the location of GS and the cross sectional area of the connector. Diagnostic print outs, checkout runs and non default settings of search and projection parameters are requested on the SWLDPRM Bulk Data entry. It is recommended to start with the default settings.
4. The format “PARTPAT” defines a connection of two shell element patches A and B with PSHELL property identification numbers PIDA and PIDB, respectively. The two property identification numbers must be different, see  . The number of connected elements depends on the location of the piercing points GA, GB and the size of the diameter D. The diameter D is defined on the PWELD property entry. For this option, shell element patches A and B are allowed to share a common grid.

![bulkc203072.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203072.jpg?_LANG=enus)

Figure 0-45 Patch to Patch Connection Defined with the Formats PARTPAT or ELPAT

5. The definition of the piercing grid points GA and GB is optional for all formats with the exception of the format “ALIGN”. If GA and GB are given, GS is ignored. If GA and GB are not specified, they are generated from the normal projection of GS on surface patches A and B and internal identification numbers are generated for GA and GB starting with 101e+6 by default. The offset number can be changed with PARAM,OSWPPT. If GA and GB are specified, they must lie on or at least have a projection on surface patches A and B, respectively. By default, the locations of user specified GA and GB will not be changed. If the user specifies "SWLDPRM, MOVGAB, 1," then the locations will be corrected so that they lie on surface patches A and B within machine precision accuracy. The length of the connector is the distance of grid point GA to GB, subject to being adjusted to the effective length defined in PWELD entry.
6. The format “ELPAT” defines a connection of two shell element patches A and B with shell element identification numbers SHIDA and SHIDB, see  . The connectivity is similar to the format “PARTPAT”. The number of connected elements depends on the location of the piercing points GA, GB and the size of the diameter D. For this option, shell element patches A and B are allowed to share a common grid.
7. The format “ELEMID” defines a connection of two shell element patches A and B with shell element identification numbers SHIDA and SHIDB, see  . The connectivity is restricted to a single element per patch regardless of the location of GA, GB and regardless of the size of the diameter of the connector. In addition, the format “ELEMID” can define a point to patch connection if SHIDB is left blank, see  . Then grid GS is connected to shell SHIDA.

![bulkc203074.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203074.jpg?_LANG=enus)

Figure 0-46 Patch to Patch Connection Defined with Format ELEMID or GRIDID

![bulkc203076.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203076.jpg?_LANG=enus)

Figure 0-47 Point to Patch Connection Defined with Format ELEMID or GRID.

8. The format “GRIDID” defines a connection of two surface patches A and B with a sequence of grid points GAi and GBi, see  . In addition, the format “GRIDID” can define a point to patch connection if all GBi fields are left blank, see  . Then grid GS is connected to grids GAi. The grids GAi and GBi do not have to belong to shell elements.
9. SPTYP defines the type of surface patches to be connected. SPTYP is required for the format “GRIDID” to identify quadrilateral or triangular patches. The combinations are:

```text
┌───────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ SPTYP │ Description                                                                                        │
├───────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ QQ    │ Connects a quadrilateral surface patch A (Q4 to Q8) with a quadrilateral surface patch B (Q4 to    │
│       │ Q8).                                                                                               │
├───────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ QT    │ Connects a quadrilateral surface patch A (Q4 to Q8) with a triangular surface patch B (T3 to T6).  │
├───────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TT    │ Connects a triangular surface patch A (T3 to T6) with a triangular surface patch B (T3 to T6).     │
├───────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TQ    │ Connects a triangular surface patch A (T3 to T6) with a quadrilateral surface patch B (Q4 to Q8).  │
├───────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Q     │ Connects the shell vertex grid GS with a quadrilateral surface patch A (Q4 to Q8) if surface patch │
│       │ B is not specified.                                                                                │
├───────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T     │ Connects the shell vertex grid GS with a triangular surface patch A (T3 to T6) if surface patch B  │
│       │ is not specified.                                                                                  │
└───────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

10. GAi are required for the format “GRIDID”. At least 3 and at most 8 grid IDs may be specified for GAi and GBi, respectively. The rules of the triangular and quadrilateral elements apply for the order of GAi and GBi, see  . Missing midside nodes are allowed.

![bulkc203078.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203078.jpg?_LANG=enus)

Figure 0-48 Quadrilateral and Triangular Surface Patches defined with 
 
Format GRIDID

11. The format “ALIGN” defines a point to point connection, see  . GA and GB are required, they must be existing vertex nodes of shell elements. For the other formats, GA and GB are not required. Two shell normals in the direction GA-GB are generated at GA and GB, respectively.

![bulkc203080.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203080.jpg?_LANG=enus)

Figure 0-49 Point to Point Connection Defined with Format ALIGN

12. Forces and moments are output in the element coordinate system, see  . The element coordinate system is constructed using the following rules:

The element x-axis points from GA to GB.

![bulkc203082.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203082.jpg?_LANG=enus)      element x-axis

In case of zero length, the normal of shell A is taken. All vector components are in basic if not noted otherwise.

Find the smallest component  ![bulkc203084.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203084.jpg?_LANG=enus)  of  ![bulkc203086.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203086.jpg?_LANG=enus)

![bulkc203088.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203088.jpg?_LANG=enus)  

![bulkc203090.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203090.jpg?_LANG=enus) .

Note that  ![bulkc203092.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203092.jpg?_LANG=enus)  will be set to ![bulkc203094.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203094.jpg?_LANG=enus)  if  ![bulkc203096.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203096.jpg?_LANG=enus) .

In case of two equal components we take the one with the smaller  ![bulkc203098.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203098.jpg?_LANG=enus) . The corresponding basic vector

![bulkc203100.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203100.jpg?_LANG=enus)  , e.g., for  j  = 3,  ![bulkc203102.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203102.jpg?_LANG=enus)

provides a good directional choice for  ![bulkc203104.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203104.jpg?_LANG=enus) . In addition, the vector  ![bulkc203106.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203106.jpg?_LANG=enus)  must be orthogonal to  ![bulkc203108.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203108.jpg?_LANG=enus) .

![bulkc203110.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203110.jpg?_LANG=enus)       ![bulkc203112.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203112.jpg?_LANG=enus)   element y-axis

and  ![bulkc203114.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203114.jpg?_LANG=enus)  is just the cross product

![bulkc203116.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203116.jpg?_LANG=enus)      element z-axis

The final transformation matrix is

![bulkc203118.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203118.jpg?_LANG=enus)  

![bulkc203120.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203120.jpg?_LANG=enus)

Figure 0-50 Element Coordinate System and Sign Convention of 
 
Element Forces

13. If "PARAM, OLDWELD, YES", in a SOL 400 analysis the CWELD element using method ELEMID, GRIDID, ELPAT or PARTPAT internally gets decomposed in a CBEAM element and a number of RBE3 elements. For method ALIGN the CWELD element internally gets replaced by a CBEAM element. The CBEAM element obtains a circular cross section with its diameter and material properties taken from the PWELD input and its length is determined by the final locations of the GA and GB grids of the CWELD. The RBE3 elements connect the GA and GB grids to the plate structures. For methods ELEMID and GRIDID one RBE3 element is used on each side to establish the connection. For methods ELPAT and PARTPAT five RBE3 elements are used on each side to establish the connection.

14. The output format of the forces and moments including the sign convention is identical to the CBAR element, see  Element Force Item Codes .

15. This entry is not supported in SOL 700.

16. MCID = -1 or blank (Default), then the coordinate system is as defined in Remark 

If MCID  >  0, then a “beam” like coordinate system is defined. The  ![bulkc203122.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203122.jpg?_LANG=enus)  axis direction of the connector defined as 
 
![bulkc203124.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203124.jpg?_LANG=enus) 
 
The T2 direction defined by MCID will be used to define the orientation vector  ![bulkc203126.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203126.jpg?_LANG=enus)  of the connector. Then the  ![bulkc203128.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203128.jpg?_LANG=enus)  element axis will be defined as

![bulkc203130.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203130.jpg?_LANG=enus) 
 
The element  ![bulkc203132.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203132.jpg?_LANG=enus)  axis is defined as

![bulkc203134.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203134.jpg?_LANG=enus)  

17. If used in a multi-physics coupled problem using SUBSTEP, they participate in the mechanical substep but are ignored in the heat transfer subsstep through automatic deactivation. For more information on deactivation, see the DEACTEL keyword under the NLMOPTS Bulk Data entry and the associated Remark  10.  for that entry.
18. In SOL400, the behavior of this element in regard to large rotation is affected by the Case Control Command Rigid.
19. If partitioned superelements are present, then CWELD is supported in the main Bulk Data section only.
