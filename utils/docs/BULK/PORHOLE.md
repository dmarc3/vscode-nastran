## [PORHOLE](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PORHOLE.xhtml) - Holes in Air Bag Surface

Defines a hole in a COUPLE and/or GBAG surface. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PORHOLE FID     SIZE            FLOW    PENV    RHOENV  SIEENV  CP      +       
+       MID                                                                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PORHOLE 301                                                                     
```

```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PID       │ Unique number of a PORHOLE entry. (Integer > 0;   │                                                   │
│           │ Required)                                         │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SIZE      │ Defines the type of flow method that is used for  │                                                   │
│           │ mass leaving or entering the airbag volume.       │                                                   │
│           │ (Character; Default = SMALL)                      │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ SMALL                                             │ The size of the hole in the surface is the same   │
│           │                                                   │ or smaller than the size of the Euler mesh used.  │
│           │                                                   │ The velocity of the gasflow through the hole is   │
│           │                                                   │ based on the theory of one-dimensional gas flow   │
│           │                                                   │ through a small orifice, and depends on the       │
│           │                                                   │ pressure difference. This is the method that is   │
│           │                                                   │ used if the PORHOLE is used on a GBAG entry.      │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ LARGE                                             │ The size of the hole in the surface is larger     │
│           │                                                   │ than the Euler mesh used. The velocity of the     │
│           │                                                   │ gasflow through the hole is based on the velocity │
│           │                                                   │ method for an Eulerian air bag. If the PORHOLE is │
│           │                                                   │ used on a GBAG entry, it will default back to     │
│           │                                                   │ method used for SIZE=SMALL.                       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ FLOW      │ Defines the allowed directions of the flow.       │                                                   │
│           │ (Character; Default = BOTH)                       │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ BOTH                                              │ In- and outflow are allowed.                      │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ IN                                                │ Only inflow allowed.                              │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ OUT                                               │ Only outflow allowed.                             │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PENV      │ Environmental presssure. (Real > 0.0; Required)   │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ RHOENV    │ Environmental density. (Real > 0.0; Required)     │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SIEENV    │ Environmental specific internal energy. (Real >   │                                                   │
│           │ 0.0; Required)                                    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ CP        │ Environmental specific heat at constant pressure. │                                                   │
│           │ See Remark 4. (Real > 0.0)                        │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MID       │ MATDEUL ID number of the environment gas. Only    │                                                   │
│           │ used for an Eulerian air bag that uses the multi- │                                                   │
│           │ material Euler solver and SIZE=LARGE. See Remark  │                                                   │
│           │ 6. (Integer > 0)                                  │                                                   │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. The PORHOLE entry can be referenced from a LEAKAGE entry.
2. When used with Euler, this entry can only be used with the single material hydrodynamic Euler solver, using an EOSGAM (ideal gas) equation of state.
3. The values for the environment ![bulkp07190.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07190.jpg?_LANG=enus)  (PENV),  ![bulkp07192.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07192.jpg?_LANG=enus)  (RHOENV),  ![bulkp07194.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07194.jpg?_LANG=enus)  (SIEENV) must be defined consistent with an ideal-gas equation of state:

     ![bulkp07196.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07196.jpg?_LANG=enus)  

     The  ![bulkp07198.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07198.jpg?_LANG=enus)  is calculated and is only used when inflow occurs. Inflow occurs when  ![bulkp07200.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07200.jpg?_LANG=enus) .

4. CP is only required if updating of Euler or gasbag gas constants is done, for example if hybrid inflators are defined.
5. For in and out flow of an uniform pressure air bag (GBAG), the material transport is based on the theory of one-dimensional gas flow through a small orifice, and depends on the pressure difference. This is equivalent to the PORHOLE entry.
6. When used in combination with the single material hydrodynamic Euler solver, an EOSGAM (ideal gas) equation of state is required. In that case, the material number, MID, can be left blank. When using the multi-material solver, the material number, MID, has to point to one of the Eulerian materials and the equation of state of that material has to be of type EOSGAM.
