## [CBEAM3](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CBEAM3.xhtml) - Three-Node Beam Element Connection

Defines a three-node beam element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBEAM3  EID     PID     GA      GB      GC      X1      X2      X3      +       
+       W1A     W2A     W3A     W1B     W2B     W3B     W1C     W2C     +       
+       W3C     TWA     TWB     TWC     SA      SB      SC                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBEAM3  101     2       201     332     1000    1.0     3.5     -2.0    +       
+               3.0             3.0     2.2     -1.0                    +       
+       2.5     10.     15.     20.0    206     301     312                     
```

#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBEAM3  EID     PID     GA      GB      GC      G0                      +       
+       W1A     W2A     W3A     W1B     W2B     W3B     W1C     W2C     +       
+       W3C     TWA     TWB     TWC     SA      SB      SC                      
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBEAM3  101     2       201     332     1000    105                     +       
+               3.0                     2.2     1.0                     +       
+       2.5     10.     15.     20.0    206     301     312                     
```

```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID        │ Unique element identification number.  (0 < Integer < 100,000,000)                                 │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID        │ Property identification number of PBEAM3 or PBMSECT entries. See Remark 7. (Integer > 0; Required) │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GA, GB, GC │ Grid point identification numbers of connection points. GA and GB are grid point identification    │
│            │ numbers at the two ends of the beam element while GC is the one at the grid point in between.      │
│            │ (Integer > 0 or blank; GA, GB and GC must be distinct from each other. See Remark 6.)              │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X1, X2, X3 │ Components of orientation vector , from GA, in the displacement coordinate system at GA. (Real)    │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G0         │ Alternate method to supply the orientation vector  using grid point G0.  The direction of  is from │
│            │ GA to G0.  is then transferred to End A.  (Integer > 0;  or GB or GC)                              │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WiA, WiB,  │ Components of offsets vectors, measured in the displacement coordinate systems at grid points A,   │
│ WiC        │ B, and C, from the grid points to the points on the axis of shear center. See Remark 8. (Real;     │
│            │ Default = 0.0)                                                                                     │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TWA, TWB,  │ Pretwist angles in degrees at A, B, and C, respectively. (Real; Default = 0.0)                     │
│ TWC        │                                                                                                    │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SA, SB, SC │ Scalar or grid point identification numbers for A, B, and C, respectively. The degrees of freedom  │
│            │ at these points are warping variables. (Integer > 0 or blank)                                      │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Element identification numbers should be unique with respect to all other element identification numbers.
2. If field 7 is an integer, then G0 is used. If field 7 is blank or real, then X1, X2, X3 are used.
3. G0 cannot be located at GA or GB or GC.
4. If warping effect is included in the analysis (SA, SB and SC > 0), then SA, SB, and SC must be defined with either SPOINT or GRID entries. If GRID entries are used, the warping degree of freedom is attached to the first (T1) component. In addition, SPOINT ID is recommended for SA, SB and SC if GROUNDCHECK is requested in case control.
5. BEAMOR cannot be used to set up default options for field 3 and fields 6 through 8 for CBEAM3 entries.
6. If GC is left blank, then the element degenerates to a formulation similar to the two-node straight beam element. The two-node straight beam formulation is not the CBEAM formulation and will result in overly stiff results with warping and shear center offset. This is because the CBEAM3 is a Variational Asymptotic Beam Section that generalizes Timoshenko beam theory and requires the mid node for accuracy.
7. For CBEAM3 referencing PBMSECT, the CORE/LAYER keywords are required or a Fatal message is issued. For this composite case, it is recommended that CBEAM3 has 3 nodes and 3 warping DOFs.

![bulkc102438.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102438.jpg?_LANG=enus)

Figure 9-16 CBEAM3 Element Geometry System

![bulkc102440.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102440.jpg?_LANG=enus)

Figure 9-17 Local Coordinate System on Beam Cross-Section

8. Offset vectors are treated internally like rigid elements. Two methods are available for the computation of offsets: original and enhanced. The default method is the original method. The enhanced method is requested by the Bulk Data entry MDLPRM,OFFDEF,LROFF. For options of offsets, please refer to the Bulk Data entry MDLPRM,OFFDEF,option.

     For solution sequences that require differential stiffness such as SOL103 (with preloading), SOL105, and SOL400, the user is required to use MDLPRM, OFFDEF, LROFF. In SOL103, if the case control ADAMSMNF FLEXBODY=YES or AVLEXB EXBBODY=YES is present, then MDLPRM, OFFDEF, LROFF must be replaced by  MDLPRM, OFFDEF, NOMASS .
