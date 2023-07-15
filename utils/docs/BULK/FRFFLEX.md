## [FRFFLEX](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FRFFLEX.xhtml) - FRF Component Flexible Connection Specification for FRF Based Assembly (FBA)

Defines properties for flexible connections between FRF components in an FRF Based Assembly (FBA) process.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FRFFLEX FLEXID  C       COMPID1/POINT1  COMPID2/POINT2  KVALUE/ BVALUE/         
                        COMPNAM1        COMPNAM2        KTABID  BTABID          
        GEVAL...                                                                
```
#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FRFFLEX 10      1       100     15      200     25      100.0   150             
        0.02                                                                    
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FRFFLEX 20      4       STRUT   120     WING    260     10      0.25            
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FLEXID    │ Unique identification number of the FRFFLEX entry. (Integer > 0)                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ A single component number. (Any integer between 1 and 6 for grid points; integer 0 or blank for   │
│           │ scalar points.)                                                                                   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COMPIDi   │ Identification number of an FRF component whose FRFs have been generated in a previous Nastran    │
│           │ execution. See Remark 1. (Integer > 0)                                                            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COMPNAMi  │ Name of an FRF component whose FRFs have been generated in a previous Nastran execution. See      │
│           │ Remark 1. (Up to 8 characters; no blank allowed)                                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ POINTi    │ Grid or scalar point identification number. See Remark 2. (Integer > 0)                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ KVALUE    │ Elastic property value (force per unit displacement).  See Remark 3. (Real > 0.0 or blank)        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ KTABID    │ Identification number of a TABLEDi entry that defines the elastic property value (force per unit  │
│           │ displacement) as a function of frequency.  See Remark 3. (Integer > 0 or blank)                   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BVALUE    │ Damping property value (force per unit velocity).  See Remark 3. (Real > 0.0 or blank)            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BTABID    │ Identification number of a TABLEDi entry that defines the damping property value (force per unit  │
│           │ velocity) as a function of frequency.  See Remark 3. (Integer > 0 or blank)                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GEVALUE   │ Damping coefficient value.  See Remarks 4., 5. and 6. (Real > 0.0 or blank)                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GETABID   │ Identification number of a TABLEDi entry that defines the damping coefficient value as a function │
│           │ of frequency.  See Remarks 4., 5. and 6. (Integer > 0 or blank)                                   │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. If neither of the FRF components COMPID1/COMPNAM1 and COMPID2/COMPNAM2 is part of the FBA process, then this entry is ignored. However, if one of them is part of the FBA process but not the other, the program terminates the job with a user fatal message.

2. POINTi must be among the connection points of the corresponding FRF component COMPIDi/COMPNAMi. If not, the program terminates the job with a user fatal message.

3. The KVALUE/KTABID and BVALUE/BTABID fields may not both be blank.

4. The continuation entry is not needed if GEVALUE/GETABID is not to be defined.

5. GEVALUE/GETABID may not be specified unless KVALUE/KTABID is specified.

6. To obtain the damping coefficient, multiply the critical damping ratio  ![bulkfgil03840.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03840.jpg?_LANG=enus)  by 2.0.

7. It is important to note that this entry by itself does  not  define a connection between the specified points.  It merely defines properties for flexible connections between two points whose connection is established either explicitly via an FRFCONN entry or is implied by automatic connection.

8. The flexible connection properties for component C of connection points POINT1 and POINT2 may be defined on more than one FRFFLEX entry.

9. In the absence of FRFFLEX data, the program assumes rigid connections between the corresponding components.

10. A grid point component may not appear on both an FRFFLEX entry and an FRFRELS entry.  If it does, the program identifies such usage and terminates the job with a user fatal message.

