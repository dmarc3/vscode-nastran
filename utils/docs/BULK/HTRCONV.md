## [HTRCONV](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.HTRCONV.xhtml) - Air Bag Convection

Defines the heat transfer through convection for a COUPLE and/or GBAG surface.

Convection is heat transfer from the air bag to the environment through the air bag surface. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
HTRCONV HTRID   HTRCFC  HTRCFT  TENV                                            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
HTRCONV 8               14      293.0                                           
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HTRID     │ Unique number of a HTRCONV entry. Referenced from HEATLOS. (Integer > 0; Required)               │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HTRCFC    │ Constant heat transfer convection coefficient. See Remark 3. (Real > 0)                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HTRCFT    │ The heat transfer convection coefficient is a tabular function of time. The number given here is │
│           │ the number of a TABLED1 entry. See Remark 3. (Integer > 0)                                       │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TENV      │ Environmental temperature. (Real > 0; Required)                                                  │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The HTRCONV entry can be referenced from a HEATLOS entry.
2. When used with Euler, the entry can only be used with the single material hydrodynamic Euler solver using an EOSGAM (ideal gas) equation of state. Two of the four gas constants ( ![bulkfgil03966.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03966.jpg?_LANG=enus) ,  R ,  ![bulkfgil03968.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03968.jpg?_LANG=enus)  and/or  ![bulkfgil03970.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03970.jpg?_LANG=enus) ) have to be defined on the EOSGAM entry.
3. Either HTRCF-C or HTRCF-T must be specified.
4. Energy will only transfer out of the air bag if the temperature inside the air bag is higher than the environmental temperature.
