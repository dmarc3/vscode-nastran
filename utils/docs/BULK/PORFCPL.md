## [PORFCPL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PORFCPL.xhtml) - Flow Between Two Coupling Surfaces Through a Hole

Defines an interaction between two coupling surfaces through a hole. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PORFCPL PID     SIZE            FLOW    CSID    MID                             
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PORFCPL 1       SMALL           BOTH    1                                       
```
```text
┌───────────┬──────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                          │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PID       │ Unique PORFCPL identification number.            │                                                   │
│           │ (Integer > 0; Required)                          │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SIZE      │ Defines the type of flow method that is used for │                                                   │
│           │ mass leaving or entering the airbag volume.      │                                                   │
│           │  (Character; Default = SMALL)                    │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ SMALL                                            │ The size of the hole in the surface is the same   │
│           │                                                  │ or smaller than the size of the Euler mesh used.  │
│           │                                                  │ The velocity of the gasflow through the hole is   │
│           │                                                  │ based on the theory of one-dimensional gas flow   │
│           │                                                  │ through a small orifice, and depends on the       │
│           │                                                  │ pressure difference. This is the method that is   │
│           │                                                  │ used if the PORHOLE is used on a GBAG entry.      │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ LARGE                                            │ The size of the hole in the surface is larger     │
│           │                                                  │ than the Euler mesh used. The velocity of the     │
│           │                                                  │ gasflow through the hole is based on the velocity │
│           │                                                  │ method for an Eulerian air bag. If the PORHOLE is │
│           │                                                  │ used on a GBAG entry, it will default back to     │
│           │                                                  │ method used for SIZE=SMALL.                       │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ FLOW      │ Defines the allowed directions of the flow.      │                                                   │
│           │ (Character; Default = BOTH)                      │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ BOTH                                             │ In- and outflow are allowed.                      │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ IN                                               │ Only inflow allowed into the COUPLE that          │
│           │                                                  │ references this entry.                            │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ OUT                                              │ Only outflow allowed into the COUPLE that         │
│           │                                                  │ references this entry.                            │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ CSID      │ The ID of the COUPLE entry. This COUPLE is the   │                                                   │
│           │ one that is connected to the coupling surface    │                                                   │
│           │ that references this entry. (Integer > 0;        │                                                   │
│           │ Required)                                        │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MID       │ MATDEUL ID number of the transported gas. Only   │                                                   │
│           │ used when connecting to a GBAG and Euler solver  │                                                   │
│           │ uses the multi-material and SIZE=LARGE. See      │                                                   │
│           │ Remark 2. (Integer > 0)                          │                                                   │
└───────────┴──────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```
#### Remarks:

1. The PORFCPL entry can only be referenced from LEAKAGE entry.

2. For SIZE=LARGE: once gas from a GBAG flows into an Eulerian domain it is treated as Eulerian material. For the single material Euler solver only one Eulerian material is present and the material number MID can be left blank. Since GBAG material is an ideal gas it is required that Eulerian material also uses an EOSGAM (ideal gas) equation of sate. When using the multi-material solver the Material number MID has to point to one of the Eulerian materials and the equation of state of that material has to be of type EOSGAM.

