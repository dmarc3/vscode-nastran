## [CDUMi](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CDUMi.xhtml) - Dummy Element Connection

Defines a dummy element (3 < i < 7).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CDUMi   EID     PID     G1      G2      G3      G4      -etc.-                  
        A1      A2      -etc.-                                                  
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CDUM3   114     108     2       5       6       8       11 
        2.4             30000   2               50         
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)                    │
├───────────┼───────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of a PDUMi entry.  See Remark 2. (Integer > 0) │
├───────────┼───────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid point identification numbers of connection points.  (Integer > 0;  )     │
├───────────┼───────────────────────────────────────────────────────────────────────────────┤
│ Ai        │ Additional fields.  (Real or Integer)                                         │
└───────────┴───────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The user must write the associated element subroutines for matrix generation, stress recovery, etc., and perform a link edit to replace the dummy routines.  See the  MSC Nastran Programmer’s Manual.
2. If no property entry is required, PID may contain the material identification number.
3. Additional entries are defined in the user-written element routines.
4. The fields on this entry are required to be defined on the corresponding ADUMi entry. This entry requires a license for  "USER MODIFIABLE Nastran" Other than the EID field, all field checking is the responsibility of the user supplied code.
