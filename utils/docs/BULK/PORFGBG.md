## [PORFGBG](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PORFGBG.xhtml) - Flow Between Two Air Bags Through a Hole

Defines a hole in a couple and/or GBAG (sub)surface, connected to another GBAG. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PORFGBG FID     SIZE            FLOW    GBID    MID                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PORFGBG 1       SMALL           BOTH    1                                       
```

```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ FID       │ Unique number of a PORFGBG entry. It can be       │                                                   │
│           │ referenced from either a LEAKAGE to model the     │                                                   │
│           │ flow between GBAGs, or between Eulerian air bag   │                                                   │
│           │ and a GBAG or between Eulerian air bags. (Integer │                                                   │
│           │ > 0; Required)                                    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SIZE      │ Defines the type of flow method that is used for  │                                                   │
│           │ mass leaving or entering the air bag volume.      │                                                   │
│           │  (Character; Default = SMALL)                     │                                                   │
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
│           │ IN                                                │ Only inflow allowed into the GBAG or the coupling │
│           │                                                   │ surface that references this entry.               │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ OUT                                               │ Only outflow allowed into the GBAG or the         │
│           │                                                   │ coupling surface that references this entry.      │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ GBID      │ Number of a GBAG entry. This GBAG is the one that │                                                   │
│           │ is connected to the GBAG or coupling surface that │                                                   │
│           │ references this entry. (Integer > 0; Required)    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MID       │ MATDEUL ID number of the GBAG gas. Only used when │                                                   │
│           │ connecting a GBAG to an Eulerian air bag that     │                                                   │
│           │ uses the multi-material Euler solver and          │                                                   │
│           │ SIZE=LARGE. See Remark 3. (Integer > 0)           │                                                   │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. The PORFGBG entry can be referenced from a LEAKAGE entry.
2. When used with Euler and SIZE=SMALL, this entry can only be used with the single material hydrodynamic Euler solver, using an EOSGAM (ideal gas) equation of state.
3. For SIZE=LARGE: once gas from a GBAG enters an Eulerian domain it is treated as Eulerian material. For the single material Euler solver only one Eulerian material is present and the material number MID can be left blank. Since GBAG material is an ideal gas it is required that Eulerian material also uses an EOSGAM (ideal gas) equation of sate. When using the Multi-material solver the Material number MID has to point to one of the Eulerian materials and the equation of state of that material has to be of type EOSGAM.
