## [PLOAD1](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PLOAD1.xhtml) - Applied Load on CBAR, CBEAM or CBEND Elements

Defines concentrated, uniformly distributed, or linearly distributed applied loads to the CBAR or CBEAM elements at user-chosen points along the axis. For the CBEND element, only distributed loads over an entire length may be defined.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PLOAD1  SID     EID     TYPE    SCALE   X1      P1      X2      P2              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PLOAD1  25      1065    MY      FRPR    0.2     2.5E3   0.8     3.5E3           
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Load set identification number. (Integer > 0)                                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ CBAR, CBEAM, or CBEND element identification number. (Integer > 0)                            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Load type. (Character: “FX”, “FY”, “FZ”, “FXE”, “FYE”, “FZE”, “MX”, “MY”, “MZ”, “MXE”, “MYE”, │
│           │ “MZE”)                                                                                        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ SCALE     │ Determines scale factor for X1, X2. (Character: “LE”, “FR”, “LEPR”, “FRPR”)                   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ X1, X2    │ Distances along the CBAR, CBEAM, or CBEND element axis from end A. (Real; X2 may be blank;    │
│           │ 0 < X1 < X2)                                                                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ P1, P2    │ Load factors at positions X1, X2. (Real or blank)                                             │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. In the static solution sequences, SID must be selected by the LOAD Case Control command.

     In the dynamic solution sequences, if there is a LOADSET Case Control command, then SID must be referenced in the LID field of a selected LSEQ entry.  If there is no LOADSET Case Control command, then SID must be referenced in the EXCITEID field of an RLOADi or TLOADi entry.

2. If  ![bulkp07144.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07144.jpg?_LANG=enus) , a linearly varying distributed load will be applied to the element between positions X1 and X2, having an intensity per unit length of bar equal to P1 at X1 and equal to P2 at X2, except as noted in Remarks   and 
3. If X2 is blank or equal to X1, a concentrated load of value P1 will be applied at position X1.
4. If P1 = P2 and X2  ![bulkp07146.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07146.jpg?_LANG=enus)  X1, a uniform distributed load of intensity per unit length equal to P1 will be applied between positions X1 and X2 except as noted in Remarks   and 
5. Load TYPE is used as follows to define loads:

     “FX”, “FY” or “FZ”: Force in the x, y, or z direction of the basic coordinate system.

     “MX”, “MY” or “MZ”: Moment in the x, y, or z direction of the basic coordinate system.

     “FXE”, “FYE” or “FZE”: Force in the x, y, or z direction of the element’s coordinate system.

     “MXE”, “MYE” or “MZE”: Moment in the x, y, or z direction of the element’s coordinate system.

6. If SCALE = “LE” (length), the xi values are actual distances along the element axis, and, if  ![bulkp07148.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07148.jpg?_LANG=enus) , then Pi are load intensities per unit length of the element.
7. If SCALE = “FR” (fractional), the xi values are ratios of the distance along the axis to the total length, and (if  ![bulkp07150.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07150.jpg?_LANG=enus) ) Pi are load intensities per unit length of the element.
8. If SCALE = “LEPR” (length projected), the xi values are actual distances along the element axis, and (if  ![bulkp07152.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07152.jpg?_LANG=enus) ) the distributed load is input in terms of the projected length of the element.

     ![bulkp07154.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07154.jpg?_LANG=enus)
     
     Figure 0-90 PLOAD1 Convention on Beam or Bar Elements

     If SCALE = “LE”, the total load applied to the bar is P1 ( ![bulkp07156.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07156.jpg?_LANG=enus) ) in the y-basic direction.

     If SCALE = “LEPR”, the total load applied to the bar is P1 ( ![bulkp07158.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07158.jpg?_LANG=enus) )cos α  in the y-basic direction.

9. If SCALE = “FRPR” (fractional projected), the Xi values are ratios of the actual distance to the length of the bar (CBAR entry), and if  ![bulkp07160.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07160.jpg?_LANG=enus) , then the distributed load is specified in terms of the projected length of the bar.
10. Element identification numbers for CBAR, CBEAM, and CBEND entries must be unique.
11. For the CBEND element, the following coordinate equivalences must be made for the element coordinates

     ![bulkp07162.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07162.jpg?_LANG=enus)  

12. Only distributed loads applied over the entire length of the CBEND element may be applied.
13. Projected loads are not applicable to the CBEND element.
14. Loads on CBEAM elements defined with PLOAD1 entries are applied along the line of the shear centers.
15. If a CBARAO or PLOAD1 entry is specified and stress and/or force output is requested, then the stresses and/or forces will be calculated at each location Xi and output as a separate line. The force and stress locations Xi=0 and Xi =  ![bulkp07164.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07164.jpg?_LANG=enus)  will always be output. This output format will be used for all beam and bar elements.
16. If on the TYPE field of the PLOAD1 entry, the element coordinate system direction (e.g. TYPE = FYE) option is selected, then the projection (i.e. SCALE = FRPR or LEPR) option is ignored and the result is the same as the SCALE = FR (or LE) option.
