## [HTRRAD](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.HTRRAD.xhtml) - Air Bag Radiation

Defines the heat transfer through radiation for a COUPLE and/or GBAG surface.

Radiation is heat transfer from the air bag to the environment through the air bag surface. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
HTRRAD  HTRID   GASBMI-CGASEMI-TTENV    SBOLTZ                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
HTRRAD  2       0.15            293.0   5.676E-8                                
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HTRID     │ Unique number of a HTRRAD entry. Referenced from HEATLOS. (Integer > 0; Required)                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GASEMI-C  │ Constant gas emissivity. See Remark 3. (Real > 0)                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GASEMI-T  │ The gas emissivity is a tabular function of time. The number given here is the number of a TABLED1 │
│           │ entry. See Remark 3. (Integer > 0)                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TENV      │ Environmental temperature. (Real > 0; Required)                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SBOLTZ    │ Stephan-Boltzman constant. (Real > 0; Required)                                                    │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The HTRRAD entry can be referenced from a HEATLOS entry.
2. When used with Euler, the entry can only be used with the single material hydrodynamic Euler solver using an EOSGAM (ideal gas) equation of state. Two of the four gasconstants ( ![bulkfgil03972.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03972.jpg?_LANG=enus) ,  R ,  ![bulkfgil03974.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03974.jpg?_LANG=enus)  and/or  ![bulkfgil03976.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03976.jpg?_LANG=enus) ) have to be defined on the EOSGAM entry.
3. Either GASEMI-C or GASEMI-T must be specified.
4. Energy will only transfer out of the air bag if the temperature inside the air bag is higher than the environmental temperature.
