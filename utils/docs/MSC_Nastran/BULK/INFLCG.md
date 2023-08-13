## [INFLCG](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.INFLCG.xhtml) - Airbag Cold Gas Inflator Model

Defines the cold gas-inflator characteristics of a COUPLE and/or GBAG subsurface. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
INFLCG  INFLID  TANKVOL INITPRESINITTEMPINITMAS GASNAM          R               
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
INFLCG  11      0.875   131325  293     1.37    1.4             286             
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ INFLID    │ Unique number of an INFLCG entry. Referenced from ABINFL. (Integer > 0; Required)            │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ TANKVOL   │ Tank Volume. (Real > 0; Required)                                                            │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ INITPRES  │ Initial tank pressure. (Real > 0; Required)                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ INITTEMP  │ Initial tank temperature. (Real > 0; Required)                                               │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ INITMAS   │ Initial gas mass of inflator. (Real > 0; Required)                                           │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ , GASNAM  │ Ratio of specific heat constants if real. Name of an INFLGAS entry if character. See Remarks │
│           │ 4. and 5. (Real > 0 or 1)                                                                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ Specific heat at constant volume. See Remark 6. (Real > 0)                                   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ R         │ Gas constant. See Remark 6. (Real > 0)                                                       │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ Specific heat at constant pressure. See Remark 6. (Real > 0)                                 │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The INFLCG entry can be referenced from an ABINFL entry.
2. When used in an Euler coupled analysis, the entry can only be used with the single material hydrodynamic Euler solver using an EOSGAM (ideal gas) equation of state.
3. Either INITPRESS or INITMASS has to be specified, but not both. The relation between INITMASS and INITPRESS is given by

     ![bulkfgil04014.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil04014.jpg?_LANG=enus)  

4. The cold gas inflator is a reservoir filled with high pressure gas. It is assumed that the volume stays constant at TANKVOL. The mass inside the inflator will steadily decrease due to flow into the Euler domain or to a GBAG. Due to inertia it can happen that the pressure of the inflator becomes less that the outside pressure. In that case some inflow into the inflator occurs. Transport between inflator and the Euler domain or GBAG is based on the constancy of total temperature. This is equivalent to the pressure method.
5. If this field contains a real entry real or is left blank, the inflator gas constants are given on the INFLTR entry itself. Otherwise, the entry will be read as the name of an INFLGAS entry. In this case, the remaining entries must be left blank.
6. Specify only two of the four gas constants. They are related as:

     ![bulkfgil04016.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil04016.jpg?_LANG=enus)  
