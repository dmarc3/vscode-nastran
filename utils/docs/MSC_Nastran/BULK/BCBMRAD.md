## [BCBMRAD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCBMRAD.xhtml) - Modify Equivalent Radius for Beam-to-Beam Contact

Allows the equivalent radius in beam-to-beam contact to be different for each beam cross section in SOL 101, SOL 400. The BCBMRAD entry is only used for node-to-segment beam-to-beam contact. For segment-to-segment beam contact, the beam cross section geometry is defined via PBARL or PBEAML

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCBMRAD RADIUS  TYPE    ID1     ID2     THRU    ID3     BY      N       +       
+       ID4     THRU    ID5     ID6     ID7     ID8     ID9                     
```

#### Example 1:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCBMRAD 2.5     EID     100     20      THRU    300     BY      2       +       
+       200     3457    8456    4712    1000    THRU    2000            +       
+       3.0             4112    THRU    4700                            +       
+       2.8     BODY    502     517     3459                                    
```

#### Example 2:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCBMRAD 2.5     ALL                                                     +       
+       2.8     EID     2567    1240    THRU    1760                            
```

```text
┌───────────┬──────────────────────────────────────────────────┬──────────────────────────────────────────────────┐
│ Describer │ Meaning                                          │                                                  │
├───────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ RADIUS    │ Equivalent radius to be used for beam-beam       │                                                  │
│           │ contact problems. See Remark 6. (Real; no        │                                                  │
│           │ Default)                                         │                                                  │
├───────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ TYPE      │ The attribute of all following ID’s. (Character; │                                                  │
│           │ Default = “EID”)                                 │                                                  │
├───────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ EID                                              │ Defines all the following entries are the IDs of │
│           │                                                  │ beam-type elements.                              │
├───────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ BODY                                             │ Defines all the following entries are the IDs of │
│           │                                                  │ BCBODYs.                                         │
├───────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ ALL                                              │ Defines the default RADIUS for all beam-type     │
│           │                                                  │ elements.                                        │
├───────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ IDi       │ ID of a beam-type element, CROD, CBAR, CBEAM and │                                                  │
│           │ CBEAM3, or a BCBODY with the specified radius.   │                                                  │
│           │ (Integer; no Default)                            │                                                  │
└───────────┴──────────────────────────────────────────────────┴──────────────────────────────────────────────────┘
```

#### Remarks:

1. Multiple BCBMRAD Bulk Data entries, which are open-ended are allowed in one file.
2. In each entry of BCBMRAD, there is only one RADIUS input allows, on the field 2.  From the field 4 to the rest fields, including all continuation entries, user can input all ID's in any combination of the following 3 basic formats
     - ID1  ID2  ID3  ID4  ...
     - ID1  THRU  ID2
     - ID1  THRU  ID2  BY  N
     - Note that blank fields are allowed for readability.
3. When all beam contact radii are the same, user can put “ALL” on the filed 3 following a RADIUS value on the BCBMRAD Bulk Data entry.  This value of RADIUS will be applied to all beam-type elements (See the previous Example 2).  User can also use this way to give default radius of all beam-type elements.
4. The RADIUS value of the other BCBMRAD's (TYPE=BODY or EID) can override the default value (TYPE=ALL) in the following order:
     - When any BCBODY is selected on BCBMRAD with TYPE=BODY, the specified RADIUS will be applied to all beam-type elements in this BCBODY.  This value always overrides the default (TYPE=ALL).
     - The RADIUS with TYPE=EID always overrides the value from TYPE=BODY and ALL.
5. When TYPE=ALL, then all IDi must be blank.
6. For tubes or round bars, enter the outer radius. For beam, enter an equivalent radius calculated as follows:

     ![bulkab02121.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02121.jpg?_LANG=enus)  

     ![bulkab02123.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02123.jpg?_LANG=enus)  

7. This is only used for node-to-segment contact.
