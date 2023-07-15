## [COSMSRV](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.COSMSRV.xhtml) - Define the Co-Simulation service

Defines the co-simulation service for analysis on a coupled group and exchanged physical quantities. It is supported only in SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COSMSRV CSRVID  SERV            FOLFORCE                                +       
+       GRPID1  PHYINP  GRPID2  PHYOUT                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COSMSRV 21      scFlow          FOLLOW                                  +       
+       202     305     202     406                                             
```

```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────┐
│ Describer │                                                   │ Meaning                                       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ CSRVID    │ Identification number referenced by a COSMSEL     │                                               │
│           │ Bulk Data Entry (Integer > 0).                    │                                               │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ SERV      │ Cosim service identifier (Character) (support     │                                               │
│           │ scFLOW only now).                                 │                                               │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ FOLFORCE  │ Flag for how forces received from CoSim for       │                                               │
│           │ scFLOW are processed.                             │                                               │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│           │ NOFOLL                                            │ Forces will be applied as received from CoSim │
│           │                                                   │ over the entire increment. (Default)          │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│           │ FOLLOW                                            │ Forces received from CoSim will be treated as │
│           │                                                   │ follower forces.                              │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ GRPID1    │ Identification number of COSMGRP Bulk Data Entry  │                                               │
│           │ (Integer > 0).       It defines the coupled area  │                                               │
│           │ in which Nastran receives the input from co-      │                                               │
│           │ simulation partner.                               │                                               │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ GRPID2    │ Identification number of COSMGRP Bulk Data Entry  │                                               │
│           │ (Integer > 0). It defines the coupled area in     │                                               │
│           │ which Nastran provides output of analysis to co-  │                                               │
│           │ simulation       partner.                         │                                               │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ PHYINP    │ Identification number of COSMINP Bulk Data Entry  │                                               │
│           │ (Integer > 0). It defines the physical quantities │                                               │
│           │ which Nastran receives from co-simulation         │                                               │
│           │       partner.                                    │                                               │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ PHYOUT    │ Identification number of COSMOUT Bulk Data Entry  │                                               │
│           │ (Integer > 0). It defines the physical quantities │                                               │
│           │ which Nastran provides to co-simulation           │                                               │
│           │       partner.                                    │                                               │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────┘
```

#### Remarks:

1. Currently, it supports one set of coupled area only.
2. At present, GRPID1 should be same as GRPID2.
3. SERV is a mandatory input. Currently, any characters are acceptable; scFLOW is recommended.
