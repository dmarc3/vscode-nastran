## [COSMOUT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.COSMOUT.xhtml) - Define the physical quantities of output in Co-Simulation service

Defines the physical quantities of output which Nastran will yield and provide to the co-simulation partner in Co-simulation analysis. It is supported only in SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COSMOUT PHYOUT                                                          +       
+       PHYQUA1 PHYQUA2 PHYQUA3                                                 
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COSMOUT 506                                                             +       
+       DISP    ACCE                                                            
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHYOUT    │ Identification number of COSMOUT referenced by a COSMSRV Bulk Data Entry (Integer > 0).          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHYQUAi   │ Name of physical quantities which will be provided to partner software as input in co-simulation │
│           │ analysis (Character) One or any combination of the following physical quantities can be used:    │
│           │ ◾DISP ◾VELO ◾ACCE                                                                             │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Currently, it supports only one or combination of DISP, VELO, and ACCE.
2. The displacement, velocity and acceleration from Nastran to co-simulation are always in basic coordinate system, even these degree of freedom are defined in local rectangular coordinate system like CORD2R. Note that only rectangular local coordinate system is supported; the cylindrical and spherical local coordinate systems are not supported in co-simulation analysis.
