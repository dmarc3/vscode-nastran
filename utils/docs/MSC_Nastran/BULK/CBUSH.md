## [CBUSH](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CBUSH.xhtml) - Generalized Spring-and-Damper Connection

Defines a generalized spring-and-damper structural element that may be nonlinear or frequency dependent.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBUSH   EID     PID     GA      GB      GO/X1   X2      X3      CID     +       
+       S       OCID    S1      S2      S3                                      
```

#### Example 1:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBUSH   39      6       1       100     75                                      
```

#### Example 2:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBUSH   39      6       1                                       0               
```

#### Example 3:  (![bulkc102484.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102484.jpg?_LANG=enus)).

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBUSH   39      6       1                                       6               
```

#### Example 4:  Noncoincident grid points with fields 6 through 9 blank and a spring-damper offset.

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBUSH   39      6       1       600                                     +       
+       0.25    10      0.      10.     10.                                     
```

```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID        │ Element identification number. (0 < Integer < 100,000,000)                                         │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID        │ Property identification number of a PBUSH entry.  (Integer > 0; Default = EID)                     │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GA, GB     │ Grid point identification number of connection points.  See Remark 6. (GA > 0, GB ³ 0 or blank)    │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Xi         │ Components of orientation vector , from GA, in the displacement coordinate system at GA. (Real)    │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GO         │ Alternate method to supply vector  using grid point GO.  Direction of  is from GA to GO.  is then  │
│            │ transferred to End A. See Remark 3. (Integer > 0)                                                  │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID        │ Element coordinate system identification. A 0 value means the basic coordinate system will be      │
│            │ used.  If CID is blank, then the element coordinate system is determined from GO or Xi. See        │
│            │ Figure 9-20 and Remark 3. (Integer > 0 or blank)                                                   │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ S          │ Location of spring damper. See Figure 9-20. (Real; Default = 0.5)                                  │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OCID       │ Coordinate system identification of spring-damper offset.  See Remark 9. (Integer > -1;            │
│            │ Default = -1, which means the offset point lies on the line between GA and GB according to         │
│            │ Figure 9-20)                                                                                       │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ S1, S2, S3 │ Components of spring-damper offset in the OCID coordinate system if OCID > 0.  See Figure 9-21 and │
│            │ Remark 9. (Real)                                                                                   │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Element identification numbers should be unique with respect to all other element identification numbers.
2.  shows the bush element geometry. In geometric nonlinear analysis (SOL400), the element axis (line GA to GB) follows the deformation of grids GA and GB.
3. CID  >  0 overrides GO and Xi.  Then the element x-axis is along T1, the element y-axis is along T2, and the element z-axis is along T3 of the CID coordinate system.  If the CID refers to a cylindrical coordinate system or a spherical coordinate system, then grid GA is used to locate the system.  If for cylindrical or spherical coordinate, GA falls on the z-axis used to define them, it is recommended that another CID be selected to define the element x-axis.
4. For   noncoincident grids ( ![bulkc102494.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102494.jpg?_LANG=enus) ),   when GO or (X1, X2, X3) is given   and   no CID is specified, the line AB is the element x-axis and the orientation vector  ![bulkc102496.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102496.jpg?_LANG=enus)  lies in the x-y plane (similar to the CBEAM element).
5. For noncoincident grids ( ![bulkc102498.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102498.jpg?_LANG=enus) ),   if   neither GO or (X1, X2, X3)   is specified and   no CID is specified, then the line AB is the element x-axis.  This option is valid only when K1 (or B1) or K4 (or B4) or both on the PBUSH entry are specified (but K2, K3, K5, K6 or B2, B3, B5, B6 are not specified).  If K2, K3, K5, or K6 (or B2, B3, B5, or B6) are specified, a fatal message will be issued.
6. If the distance between GA and GB is less than .0001, or if GB is blank, then CID must be specified. GB blank implies that B is a grounded terminal, a gounded terminal is a point with a displacement that is constrained to zero.
7. If PID references a PBUSHT entry, then the CBUSH element may only be defined in the residual structure and cannot be attached to any omitted degrees-of-freedom.
8. Element impedance output is computed in the CID coordinate system.  The impedances in this system are uncoupled.
9. If OCID = -1 or blank (default) then S is used and S1, S2, S3 are ignored.  If OCID  >  0, then S is ignored and S1, S2, S3 are used.

![bulkc102500.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102500.jpg?_LANG=enus)

Figure 9-20 CBUSH Element

![bulkc102502.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102502.jpg?_LANG=enus)

Figure 9-21 Definition of Offset S1, S2, S3

10. When CID  >  0, the element x-axis is set as in Remark   This means that the element force is always computed as  ![bulkc102504.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102504.jpg?_LANG=enus) ; if  ![bulkc102506.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102506.jpg?_LANG=enus) , a compressive force will result. This is unlike the GO or Xi options, where relative positive elongation in tension and relative negative elongation is compression.
11. The CBUSH element is designed to satisfy rigid body equilibrium requirements. For noncoincident grids, internal rigid links connect the bush location to the grid locations. This results in coupling between translational and rotational degrees-of-freedom at the grids even when no rotational springs or dampers are specified on the PBUSH.
12. CBUSH elements are not supported in thermal analysis.
