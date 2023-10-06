## [FRFCONN](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FRFCONN.xhtml) - FRF Component Explicit Connection for FRF Based Assembly (FBA)

Defines explicit connection data for FRF components in an FRF Based Assembly (FBA) process.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FRFCONN CONNID  COMPID1/POINT1  COMPID2/POINT2                          +       
+               COMPNAM1        COMPNAM2                                        
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FRFCONN 10      5       100     15      200                                     
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FRFCONN 20      STRUT   25      WING    35                                      
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CONNID    │ Unique identification number of the FRFCONN entry. (Integer > 0)                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COMPIDi   │ Identification number of an FRF component whose FRFs have been generated in a previous Nastran │
│           │ execution. See Remark 1. (Integer > 0)                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COMPNAMi  │ Name of an FRF component whose FRFs have been generated in a previous Nastran execution. See   │
│           │ Remark 1. (Up to 8 characters; no blank allowed)                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ POINTi    │ Grid or scalar point identification number. See Remarks 2. through 6. (Integer > 0)            │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If neither of the FRF components COMPID1/COMPNAM1 and COMPID2/COMPNAM2 is part of the FBA process, then this entry is ignored. However, if one of them is part of the FBA process but not the other, the program terminates the job with a user fatal message.
2. POINTi must be among the connection points of the corresponding FRF component COMPIDi/COMPNAMi. If not, the program terminates the job with a user fatal message.
3. It is, in general, not necessary to have FRFCONN entries when the connections in the FBA process involve only grid points.  In the FBA process, all connection grid points of FRF components that have the same basic coordinates are normally connected automatically without any user intervention or specification.
4. If the connection points of an FRF component in the FBA process consist of coincident grid points, the program identifies such points via a user information message. All such coincident grid points must be referenced on FRFCONN or FRFRELS entries in order to ensure proper connections in the FBA process. In the absence of such specifications for coincident connection grid points, the program terminates the job with a user fatal error.
5. FRFCONN entries are required if the user wants to specify explicit connections between test FRF component grid points whose coordinates are not available and those of other FRF components. See Remark   under the description of the FRFCOMP entry for further details.
6. FRFCONN entries are also required if the user wants to combine scalar points of FRF components in the FBA process.
