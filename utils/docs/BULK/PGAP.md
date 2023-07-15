## [PGAP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PGAP.xhtml) - Gap Element Property

Defines the properties of the gap element (CGAP entry).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PGAP    PID     U0      F0      KA      KB      KT      MU1     MU2             
        TMAX    MAR     TRMIN                                                   
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PGAP    2       .025    2.5     1.E6            1.E6    0.25    0.25            
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number. (Integer > 0)                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ U0        │ Initial gap opening. See Figure 0-86. (Real; Default = 0.0)                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ F0        │ Preload. See Figure 0-86. (Real > 0.0; Default = 0.0)                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ KA        │ Axial stiffness for the closed gap; i.e., . See Figure 0-86. (Real > 0.0)                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ KB        │ Axial stiffness for the open gap; i.e., . See Figure 0-86. See Remark 2. (Real > 0.0; Default = )  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ KT        │ Transverse stiffness when the gap is closed. See Figure 0-87. It is recommended that .             │
│           │ (Real > 0.0; Default = )                                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MU1       │ Coefficient of static friction  for the adaptive gap element or coefficient of friction in the y   │
│           │ transverse direction  for the nonadaptive gap element. See Remark 3. and Figure 0-87. (Real > 0.0; │
│           │ Default = 0.0)                                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MU2       │ Coefficient of kinetic friction  for the adaptive gap element or coefficient of friction in the z  │
│           │ transverse direction  for the nonadaptive gap element. See Remark 3. and Figure 0-87. (Real > 0.0  │
│           │ for the adaptive gap element, ; Default = MU1)                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TMAX      │ Maximum allowable penetration used in the adjustment of penalty values. The positive value         │
│           │ activates the penalty value adjustment. See Remark 4. (Real; Default = 0.0)                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAR       │ Maximum allowable adjustment ratio for adaptive penalty values KA and KT. See Remark 5.            │
│           │ (1.0 < Real < ; Default = 100.0)                                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TRMIN     │ Fraction of TMAX defining the lower bound for the allowable penetration. See Remark 6.             │
│           │ (0.0 < Real < 1.0; Default = 0.001)                                                                │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. ,  , and   show the gap element and the force-displacement curves used in the stiffness and force computations for the element.

2. For most contact problems, KA (penalty value) should be chosen to be three orders of magnitude higher than the stiffness of the neighboring grid points. A much larger KA value may slow convergence or cause divergence, while a much smaller KA value may result in inaccurate results. The value is adjusted as necessary if TMAX > 0.0.

3. When the gap is open, there is no transverse stiffness. When the gap is closed and there is friction, the gap has the elastic stiffness (KT) in the transverse direction until the friction force is exceeded and slippage starts to occur.

4. There are two kinds of gap elements: adaptive gap and nonadaptive gap. If TMAX  >  0.0, the adaptive gap element is selected by the program. When TMAX = 0.0, penalty values will not be adjusted, but other adaptive features will be active (i.e., the gap-induced stiffness update, gap-induced bisection, and subincremental process). The value of TMAX = -1.0 selects the nonadaptive (old) gap element. The recommended allowable penetration TMAX is about 10% of the element thickness for plates or the equivalent thickness for other elements that are connected to the gap.

5. The maximum adjustment ratio MAR is used only for the adaptive gap element. Upper and lower bounds of the adjusted penalty are defined by

![bulkp07122.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07122.jpg?_LANG=enus)  

     where  ![bulkp07124.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07124.jpg?_LANG=enus)  is either KA or KT.

6. TRMIN is used only for the penalty value adjustment in the adaptive gap element. The lower bound for the allowable penetration is computed by  ![bulkp07126.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07126.jpg?_LANG=enus) . The penalty values are decreased if the penetration is below the lower bound.

![bulkp07128.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07128.jpg?_LANG=enus)

Figure 0-85 The CGAP Element Coordinate System

![bulkp07130.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07130.jpg?_LANG=enus)

Figure 0-86   CGAP Element Force-DeflectIon Curve for Nonlinear Analysis

![bulkp07132.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07132.jpg?_LANG=enus)

Figure 0-87 Shear Force for CGAP Element

7. If U0 is specified negative and GA and GB are not coincident, then the direction for closing must be controlled by the use of the CID field on the CGAP entry.

8. PGAP is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PGAP property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PGAP entries.

