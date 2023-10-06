## [BCSCAP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCSCAP.xhtml) - Defines a cap and number of segments

Defines whether a cap is added to a beam section and/or defines the number of segments used to model rod and tube sections for segment to segment beam contact in SOL 101 and 400 for general contact or in SOLs 101, 103, 105, 107 - 112, 200 and 400 for the permanently glued contact

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCSCAP  EID     IESCAP  NSEG                                                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCSCAP  2       1       20                                                      
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Beam element identification number. (Integer > 0; Required)                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IESCAP    │ End and side cap flag (Integer ³ 0; default=0). 0 no end or side cap 1 end cap only 2 side cap     │
│           │ only 3 averaged side cap only 4 end cap and side cap 5 end cap and averaged side cap               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSEG      │ Number of segments for circular sections TYPE=ROD, TUBE or TUBE2 beam sections defined on PBARL or │
│           │ PBEAML. See remarks 2. (Integer ³ 3; default=32)                                                   │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If the card is not defined but the beam is included in segment to segment contact, all caps will be ignored. This card is only useful when a user needs to define the cap of beams for segment to segment contact.

![bcscap.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bcscap.png?_LANG=enus)

2. The segments for circular cross sections will be generated as the figure below.

![bcscap2.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bcscap2.png?_LANG=enus)

