## [CGAP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CGAP.xhtml) - Gap Element Connection

Defines a gap or friction element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CGAP    EID     PID     GA      GB      X1      X2      X3      CID             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CGAP    17      2       110     112     5.2     0.3     -6.1                    
```

#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CGAP    EID     PID     GA      GB      GO                      CID             
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CGAP    17      2       110     112     13                                      
```

```text
┌────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                           │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID        │ Element identification number. (0 < Integer < 100,000,000)                                        │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID        │ Property identification number of a PGAP entry.  (Integer > 0; Default = EID)                     │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GA, GB     │ Connected grid points at ends A and B.  (Integers > 0; )                                          │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X1, X2, X3 │ Components of the orientation vector , from GA, in the displacement coordinate system at GA.      │
│            │  (Real)                                                                                           │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GO         │ Alternate method to supply the orientation vector  using grid point GO.  Direction of  is from GA │
│            │ to GO.  (Integer > 0)                                                                             │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID        │ Element coordinate system identification number.  CID must be specified if GA and GB are          │
│            │ coincident (distance from GA to ). See Remark 6. (Integer > 0 or blank)                           │
└────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The CGAP element is intended for the nonlinear solution sequences 106, 129, 153, 159, and 400.  However, it will produce a linear stiffness matrix for the other solutions, but remains linear with the initial stiffness.  The stiffness used depends on the value for the initial gap opening (U0 field in the PGAP entry).
2. The gap element coordinate system is defined by one of two following methods:
     - If the coordinate system (CID field) is specified, the element coordinate system is established using that coordinate system, in which the element x-axis is in the T1 direction and the y-axis in the T2 direction.  The orientation vector  ![bulkc102552.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102552.jpg?_LANG=enus)  will be ignored in this case.
     - If the CID field is blank and the grid points GA and GB are not coincident (distance from A to  ![bulkc102554.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102554.jpg?_LANG=enus) ), then the line AB is the element x-axis and the orientation vector  ![bulkc102556.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102556.jpg?_LANG=enus)  lies in the x-y plane (like the CBEAM element).
3. The element coordinate system does not rotate as a result of deflections.
4. Initial gap openings are specified on the PGAP entry and not derived from the separation distance between GA and GB.
5. Forces are requested with the FORCE or NLSTRESS Case Control command.  The NLSTRESS command is only for nonlinear solutions, and the output also includes the gap STATUS.  Forces are output in the element coordinate system. The force  ![bulkc102558.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102558.jpg?_LANG=enus)  is positive for compression.
6. If CID is being used to define the element coordinate system and the CID refers to either a cylindrical or spherical coordinate system then grid GA will be used to locate the system.  If grid GA lies on the z-axis of the cylindrical or spherical coordinate system it is recommended that a different coordinate system be used for this element.
7. See PARAM,CDITER for an alternative approach.

![bulkc102560.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102560.jpg?_LANG=enus)

Figure 9-25 CGAP Element Coordinate System

8. Since a large stiffness is used for KA (the closed GAP stiffness), param,g damping should be avoided. Instead damping should be specified on the MATi entries and PARAM,W4 set.
