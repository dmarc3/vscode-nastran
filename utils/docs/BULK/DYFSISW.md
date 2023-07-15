## [DYFSISW](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DYFSISW.xhtml) - Fluid Structure Interaction Activation Switch

Allows activating or deactivating Fluid Structure Interaction and Eulerian solver. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DYFSISW SWID    TID     INITV                                                   
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DYFSISW 14      10                                                              
```
```text
┌───────────┬──────────────────────────────────────────────────┬──────────────────────────────────────────────────┐
│ Describer │ Meaning                                          │                                                  │
├───────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ SWID      │ Unique number of a DYFSISW entry. (Integer > 0;  │                                                  │
│           │ Required)                                        │                                                  │
├───────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ TID       │ TABLED1 ID. Fluid Structure Interface and Euler  │                                                  │
│           │ solver are switched on and off, depending on the │                                                  │
│           │ y-value of the table. The x-value of the table   │                                                  │
│           │ represents the time; the y-value denotes:        │                                                  │
├───────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ ON                                               │ y > 0.0                                          │
├───────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ OFF                                              │ y < 0.0                                          │
├───────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ INITV     │ Euler element initialization flag. See remark 3. │                                                  │
│           │ (Character, Default=NO)                          │                                                  │
├───────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ NO                                               │ Element initialization at cycle 0                │
├───────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ YES                                              │ Element initialization when the elements becomes │
│           │                                                  │ active                                           │
└───────────┴──────────────────────────────────────────────────┴──────────────────────────────────────────────────┘
```
#### Remarks:

1. The default is that COUPLE, AIRBAG and Euler solver is active at all times.

2. When Euler solver is deactivated, no output will be generated for the Eulerian elements.

3. For simulations involving a prestress phase the Euler elements can be initially deactivated. When the Euler elements are activated the Eulerian masses still originate from the Euler initiation at cycle 0. If during prestressing the structure did not move much, then these Eulerian masses of cycle 0 can give a stable run. But if there has been substantial movement of the structure then Eulerian masses can be erroneously compressed. This shows up by large pressures and velocities in the Euler elements and a time step too small. To avoid this instability the Euler initialization can be postponed until the Euler elements become active.

