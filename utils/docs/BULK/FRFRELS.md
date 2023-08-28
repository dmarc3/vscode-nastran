## [FRFRELS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FRFRELS.xhtml) - FRF Component Grid Point Release for FRF Based Assembly (FBA)

Defines the degrees-of-freedom of FRF component connection grid points that are not to be connected in an FRF Based Assembly (FBA) process.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FRFRELS SID     C       COMPID1/GRIDPNT1COMPID2/GRIDPNT2COMPID3/GRIDPNT3+       
+                       COMPNAM1        COMPNAM2        COMPNAM3                
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FRFRELS 100     45      10      15      BODY    20      FRAME   30              
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FRFRELS 20      1       WING    25      NACELLE 35                              
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Identification number of the FRFRELS entry. (Integer > 0)                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Component number(s). See Remark 1. (Any unique combination of the integers 1 through 6 with no │
│           │ embedded blanks.)                                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COMPIDi   │ Identification number of an FRF component whose FRFs have been generated in a previous Nastran │
│           │ execution. See Remark 2. (Integer > 0)                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COMPNAMi  │ Name of an FRF component whose FRFs have been generated in a previous Nastran execution. See   │
│           │ Remark 2. (Up to 8 characters; no blank allowed)                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GRIDPNTi  │ Grid point identification number. See Remarks 3. and 4. (Integer > 0)                          │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The grid point component(s) specified by C will not be connected in the FBA process.
2. If FRF component COMPIDi/COMPNAMi is not part of the FBA process, then the release data for that FRF component is ignored.
3. GRIDPNTi must be among the connection points of the corresponding FRF component COMPIDi/COMPNAMi. If not, the program terminates the job with a user fatal message.
4. If GRIDPNTi is not connected to any other grid point in the FBA process, the program ignores the FRFRELS data for this point and issues a warning message indicating this to the user.
5. If the connection points of an FRF component in the FBA process consist of coincident grid points, the program identifies such points via a user information message.  All such coincident grid points must be referenced on FRFCONN or FRFRELS entries in order to ensure proper connections in the FBA process.  In the absence of such specifications for coincident connection grid points, the program terminates the job with a user fatal error.
