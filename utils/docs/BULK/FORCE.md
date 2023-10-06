## [FORCE](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FORCE.xhtml) - Static Force

Defines a static concentrated force at a grid point by specifying a vector.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FORCE   SID     G       CID     F       N1      N2      N3                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FORCE   2       5       6       2.9     0.0     1.0     0.0                     
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Load set identification number.  (Integer > 0)                                                   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G         │ Grid point identification number.  (Integer > 0)                                                 │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID       │ Coordinate system identification number.  (Integer > 0; Default = 0)                             │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ F         │ Scale factor.  (Real)                                                                            │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ni        │ Components of a vector measured in coordinate system defined by CID.  (Real; at least one Ni0.0. │
│           │ unless F is zero)                                                                                │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The static force applied to grid   point G is given by

     ![bulkfgil03706.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03706.jpg?_LANG=enus)  

     where  ![bulkfgil03708.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03708.jpg?_LANG=enus)  is the vector defined in fields 6, 7 and 8.  The magnitude of  ![bulkfgil03710.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03710.jpg?_LANG=enus)  is equal to F times the magnitude of  ![bulkfgil03712.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03712.jpg?_LANG=enus) .

2. In the static solution sequences, SID must be selected by the LOAD Case Control command.

     In the dynamic solution sequences, if there is a LOADSET Case Control command, then SID must be referenced in the LID field of a selected LSEQ entry.  If there is no LOADSET Case Control command, then SID must be referenced in the EXCITEID field of an RLOADi or TLOADi entry.

3. A CID of zero or blank (the default) references the basic coordinate system.
4. For scalar points see SLOAD.
5. For TYPE=12 or TYPE=13 on the TLOAD1, G is the ID of a rigid body: the MID of a rigid material MATRIG or the EID of a RBE2. The MID of a rigid material and the EID of RBE2 must be different when both of a RBE2 and a rigid material are used with these TYPEs. SOL 700 only.
6. For axisymmetric elements, the point loads to be entered on the card should be obtained by integrating over 1 radian of the circumference.
