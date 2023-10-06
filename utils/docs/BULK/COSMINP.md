## [COSMINP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.COSMINP.xhtml) - Define the physical quantities of input in Co-Simulation service

Defines the physical quantities of input which Nastran will receive from the co-simulation partner in Co-simulation analysis. It is supported in SOL 400 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COSMINP PHYIN                                                           +        
+       PHYQUA1 PHYQUA2                                                         
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COSMINP 405                                                             +       
+       FORCE                                                                   
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHYIN     │ Identification number of COSMINP referenced by a COSMSRV Bulk Data Entry (Integer > 0).          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHYQUAi   │ Name of physical quantities which will be provided to Nastran as input in co-simulation analysis │
│           │ (Character; Default: FORCE)                                                                      │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Currently, it supports FORCE and TEMP (temperature load) from CoSIM only.
2. Basically, all 2D (CQUAD4, CQUAD8, CQUADR, CTRIA3, CTRIA6, CTRIAR) and 3D elements (CHEXA, CPENTA, CTETRA, CPYRAM) are supported for Temperature Load by CoSim. However, some combinations of features are not supported as shown below:

```text
┌──────────────┬─────────────┬────────────────────┬─────────────────────┬──────────────────────────┐
│ Nonlinear    │ PARM,LGDISP │ Element Type       │ Temperature Load by │ Note                     │
│ Property Ext │             │                    │ CoSim               │                          │
│ ensionsa1 PS │             │                    │                     │                          │
│ HLN1,        │             │                    │                     │                          │
│ PSLDN1, etc. │             │                    │                     │                          │
├──────────────┼─────────────┼────────────────────┼─────────────────────┼──────────────────────────┤
│ No           │ -1          │ Nastran Linear     │ Not supported       │                          │
├──────────────┼─────────────┼────────────────────┼─────────────────────┼──────────────────────────┤
│ No           │ 1 or 2      │ Nastran Nonlinear  │ Supported           │ CQUAD8 and CTRIA6 is not │
│              │             │                    │                     │ supported                │
├──────────────┼─────────────┼────────────────────┼─────────────────────┼──────────────────────────┤
│ Yes          │ Any         │ Advanced Nonlinear │ Supported           │                          │
└──────────────┴─────────────┴────────────────────┴─────────────────────┴──────────────────────────┘
```

```text
┌───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ a1 - Nonlinear Property Extensions may be automatically defined by the PROPMAP feature of NLMOPTS │
└───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
