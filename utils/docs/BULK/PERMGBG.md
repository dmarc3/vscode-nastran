## [PERMGBG](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PERMGBG.xhtml) - Air Bag Permeability

Defines a permeable area of a COUPLE and/or GBAG surface, connected to another GBAG.

The velocity of the gas flow through the surface is defined as a linear or tabular function of the pressure difference. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PERMGBG PID     PERMC   PERMT   FLOW    GBID                                    
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PERMGBG 12              10              2                                       
```
```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PID       │ Unique identification number of a PERMEAB entry.  │                                                   │
│           │ It can be referenced from either a LEAKAGE to     │                                                   │
│           │ model the flow between GBAGs, or from a LEAKAGE   │                                                   │
│           │ to model the flow between an Eulerian air bag and │                                                   │
│           │ a GBAG. (Integer > 0; Required)                   │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PERMC     │ Permeability is a linear function of the pressure │                                                   │
│           │ difference. permeability = PERM – C*abs (Pinside  │                                                   │
│           │ – Pgbid) The gas flow is from the higher to the   │                                                   │
│           │ lower pressure. See Remark 3. (Real > 0)          │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PERMT     │ Permeability is a tabular function of the         │                                                   │
│           │ pressure difference: table contains: permeability │                                                   │
│           │ versus |Pinside – Pgbid| The gas flow is from the │                                                   │
│           │ higher to the lower pressure. See Remark          │                                                   │
│           │ 3. (Integer > 0)                                  │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ FLOW      │ Defines the allowed directions of the flow.       │                                                   │
│           │ (Character; Default = BOTH)                       │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ BOTH                                              │ In- and outflow are allowed.                      │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ IN                                                │ Only inflow allowed into the GBAG or the coupling │
│           │                                                   │ surface that references this entry.               │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ OUT                                               │ Only outflow allowed into the GBAG or the         │
│           │                                                   │ coupling surface that references this entry.      │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ GBID      │ Number of a GBAG entry. This GBAG is the one that │                                                   │
│           │ is connected to the GBAG or coupling surface that │                                                   │
│           │ references this entry. (Integer > 0; Required)    │                                                   │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```
#### Remarks:

1. The PERMGBG entry can be referenced from a LEAKAGE entry.

2. When used with Euler, the entry can only be used with the single material hydrodynamic Euler solver, using an EOSGAM (ideal gas) equation of state.

3. Either PERMC or PERMT must be specified.

