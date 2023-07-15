## [BCPFLG](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCPFLG.xhtml) - Defines a beam section segment flag

Defines a beam section branch and segment for segment to segment beam contact used in SOL 101 and 400 for general contact or in SOLs 101, 103, 105, 107 - 112, 200 and 400 for the permanently glued Contact.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCPFLG  PID     IBRNCH1 IOUTIN1 IBRNCH2 IOUTIN2 IBRNCHi IOUTINi                 
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCPFLG  2       1       2       3       13                                      
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Beam property/section identification number of PBEAML/PBARL.  (Integer > 0; Required)             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IBRNCHi   │ Branch selection flag for segment generation. Only required for thin wall sections. See Remark 1, │
│           │ 2, 3 and 4. (Integer; default=0). 0 select all branches for thin wall sections                    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IOUTINi   │ Beam segment location. See Remark 4, 5, 6 and 7. (Integer; default=0; up to three unique integers │
│           │ may be placed in the field with no embedded blanks.) 0 - all segments 1 - location 1 of thin wall │
│           │ section or only outer of solid or tube sections 2 - location 2 of thin wall section or only inner │
│           │ of tube section 3 - location 3 of thin wall section (thickness direction of branch) 4 - segment   │
│           │ not including thickness                                                                           │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If the card is not defined but the beam property is included in segment to segment contact, all segments will be generated and used. This card is only useful when a user needs to define the specific beam segments for segment to segment contact. It will help the performance of calculation because only selected segments will be considered in the contact calculation.
2. IBRNCHi fields are only required for thin wall beam sections. Solid beam sections such as rectangular, rod, etc or tube sections require only IOUTIN1.
3. Each branch of thin wall beam section has four segments.
4. Segment locations of thin wall beam sections are listed below. TYPE is defined by PBEAML/PBARL. The number circled is the branch number of each shape and the number without circle is the segment number which is used in IOUTINi. Segment 1 and 2 of each branch are the segments in the branch direction and segment 3's are the segment in the thickness direction of the branch.

![bulkab02182.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02182.jpg?_LANG=enus)

![bulkab02184.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02184.jpg?_LANG=enus)

5. If there is not thickness, one segment will be generated in the branch.
6. "3" cannot be used alone and "4" must be used only with "1" or "2". IOUTINi must be one of "0", "1", "2", "12", "13", "14", "23", "24" and "123".
7. "14" and "24" generate the identical segment since the thickness is ignored but segment normal direction will be different.
