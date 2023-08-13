## [COSMSEL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.COSMSEL.xhtml) - Specify the Co-Simulation service

Specifies the selected co-simulation service for analysis through the COSMSRV. It is supported only in SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COSMSEL SID                                                             +       
+       CSRVID1 CSRVID2 CSRVID3                                                 
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COSMSEL 1                                                               +       
+       21                                                                      
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Identification number referenced by a COSMSEL Case Control command (Integer > 0). │
├───────────┼───────────────────────────────────────────────────────────────────────────────────┤
│ CSRVIDi   │ Identification number of COSMSRV entry (Integer > 0).                             │
└───────────┴───────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Currently, it supports only one COSMSRV.
