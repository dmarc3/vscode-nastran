## [PSEAM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PSEAM.xhtml) - CSEAM Property

Defines the PSEAM property values.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PSEAM   PID     MID     TYPE    W       T       IN                              
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PSEAM   7       1               16.                                             
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number. (Integer > 0)                                                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material identification number. (Integer > 0)                                                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ “KEYWORD” type of Seam Weld generated. (Character; Default = LINE)                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ W         │ Width of the SEAM. See Remark 1. (Real > 0.)                                                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T         │ Thickness of the SEAM. See Remark 2. (Real > 0. or blank)                                         │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IN        │ Integration scheme. See Remark 6. of PSOLID entry. (Integer 0 or 2; Default = 2) If IN = 0, 2x2x2 │
│           │ reduced shear integration with bubble functions. If IN = 2, 2x2x2 reduced shear integration.      │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The length of the SEAM is the distance between GS and GE. The width W of the SEAM is measured perpendicular to the length and lies in the plane of the patches A and B (see  ). The width is also used to find the projection of the SEAM on the two patches A and B.

![bulkp07210.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07210.jpg?_LANG=enus)

Figure 0-94 Dimensions of a CSEAM Element

2. If left blank, the thickness will be computed as  ![bulkp07212.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07212.jpg?_LANG=enus)  where  ![bulkp07214.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07214.jpg?_LANG=enus)  is the thickness of patch A and  ![bulkp07216.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07216.jpg?_LANG=enus)  is the thickness of patch B.

3. PSEAM is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PSEAM property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PSEAM entries.

