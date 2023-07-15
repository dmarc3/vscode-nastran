## [PSHEAR](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PSHEAR.xhtml) - Shear Panel Property

Defines the properties of a shear panel (CSHEAR entry).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PSHEAR  PID     MID     T       NSM     F1      F2                              
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PSHEAR  17      23      42.6    17.92   4.236   0.5                             
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number. (Integer > 0)                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material identification number of a MAT1 entry. (Integer > 0)                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T         │ Thickness of shear panel. (Real0.0)                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSM       │ Nonstructural mass per unit area. (Real)                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ F1        │ Effectiveness factor for extensional stiffness along edges 1-2 and 3-4. See Remark 2. (Real > 0.0; │
│           │ Default = 0.0)                                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ F2        │ Effectiveness factor for extensional stiffness along edges 2-3 and 1-4. See Remark 2. (Real > 0.0; │
│           │ Default = 0.0)                                                                                     │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. PSHEAR is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PSHEAR property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PSHEAR entries.

2. The effective extensional area is defined by means of equivalent rods on the perimeter of the element. If F1  <  1.01, the areas of the rods on edges 1-2 and 3-4 are set equal to  ![bulkp07220.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07220.jpg?_LANG=enus)  where PA is the panel surface area-half the vector cross product area of the diagonals-and L12, L34 are the lengths of sides 1-2 and 3-4. Thus, if F1 = 1.0, the panel is fully effective for extension in the 1-2 direction. If F1 > 1.01, the areas of the rods on edges 1-2 and 3-4 are each set equal to  ![bulkp07222.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07222.jpg?_LANG=enus) .

![bulkp07224.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07224.jpg?_LANG=enus)

Figure 0-95 Extensional Area for Shear Panel

     Thus, if F1 = 30, the effective width of skin contributed by the panel to the flanges on edges 1-2 and 3-4 is equal to 15T. The significance of F2 for edges 2-3 and 1-4 is similar.

3. Poisson’s ratio coupling for extensional effects is ignored.

4. The parameter entry MDLPRM,SHEARP,GARVEY(default) selects the standard Garvey shear panel. MDLPRM,SHEARP,HARDER selects the Harder shear panel: See Remark   of the CSHEAR entry.

