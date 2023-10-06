## [PERMEAB](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PERMEAB.xhtml) - Air Bag Permeability

Defines the permeability of a COUPLE and/or GBAG (sub)surface.

Permeability is the velocity of gasflow through a (sub)surface and is defined as a linear or tabular function of the pressure difference over the surface. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PERMEAB PID     PERMC   PERMT   FLOW    PENV    RHOENV  SIEENV  CP              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PERMEAB 201     0.5             OUT     1.E5    1.128   2.21E5  1001.           
```

```text
┌───────────┬───────────────────────────────────────────────────┬──────────────────────────────┐
│ Describer │ Meaning                                           │                              │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────┤
│ PID       │ Unique identification number of a PERMEAB entry.  │                              │
│           │ (Integer > 0, Required)                           │                              │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────┤
│ PERMC     │ Permeability is a linear function of the pressure │                              │
│           │ difference. permeability = PERM – C*abs (Pinside  │                              │
│           │ – PENV) For Pinside > PENV: outflow For Pinside < │                              │
│           │ PENV: inflow See Remark 3. (Real > 0)             │                              │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────┤
│ PERMT     │ Permeability is a tabular function of the         │                              │
│           │ pressure difference: table contains: permeability │                              │
│           │ versus |Pinside – PENV| For Pinside > PENV:       │                              │
│           │ outflow For Pinside < PENV: inflow See Remark     │                              │
│           │ 3. (Integer > 0)                                  │                              │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────┤
│ FLOW      │ Defines the allowed directions of the flow.       │                              │
│           │ (Character, Default = BOTH)                       │                              │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────┤
│           │ BOTH                                              │ In- and outflow are allowed. │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────┤
│           │ IN                                                │ Only inflow allowed.         │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────┤
│           │ OUT                                               │ Only outflow allowed.        │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────┤
│ PENV      │ Environmental pressure. (Real > 0, Required)      │                              │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────┤
│ RHOENV    │ Environmental density. (Real > 0, Required)       │                              │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────┤
│ SIEENV    │ Environmental specific internal energy. (Real >   │                              │
│           │ 0, Required)                                      │                              │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────┤
│ CP        │ Environmental specific heat at constant pressure. │                              │
│           │ See Remark 5. (Real > 0)                          │                              │
└───────────┴───────────────────────────────────────────────────┴──────────────────────────────┘
```

#### Remarks:

1. The PERMEAB entry can be referenced from a LEAKAGE entry.
2. When used with Euler, the entry can only be used with the single material hydrodynamic Euler solver or Roe solver using an EOSGAM (ideal gas) equation of state.
3. Either PERM-C or PERM-T must be specified.
4. The values for the environment  ![bulkp06954.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06954.jpg?_LANG=enus)  (PENV),  ![bulkp06956.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06956.jpg?_LANG=enus)  (RHOENV),  ![bulkp06958.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06958.jpg?_LANG=enus)  (SIEENV) must be defined consistent with an ideal-gas equation of state:

     ![bulkp06960.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06960.jpg?_LANG=enus)  

     The  ![bulkp06962.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06962.jpg?_LANG=enus)  is calculated and is used when inflow occurs. Inflow occurs when  ![bulkp06964.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06964.jpg?_LANG=enus) .

5. CP is only required if updating of Euler or gasbag gas constants is done, for example if hybrid inflators are defined.
