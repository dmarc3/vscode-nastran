## [PLOADB3](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PLOADB3.xhtml) - Applied distributed load on CBEAM3 elements

Defines a distributed load to a CBEAM3 element over entire length of the beam axis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PLOADB3 SID     EID     CID     N1      N2      N3      TYPE    SCALE   +       
+       P(A)    P(B)    P(C)                                                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PLOADB3 10      1002    LOCAL   1.0                     MOMENT                  
        100.    90.     70.                                                     
```

```text
┌────────────┬───────────────────────────────────────────────────┬────────────────────────────┐
│ Describer  │ Meaning                                           │                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────┤
│ SID        │ Load set identification number. (Integer > 0;     │                            │
│            │ Required)                                         │                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────┤
│ EID        │ CBEAM3 element identification number. (Integer >  │                            │
│            │ 0, Required)                                      │                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────┤
│ CID        │ Coordinate system for load definition. (Character │                            │
│            │ or Integer; Default = “BASIC”)                    │                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────┤
│            │ “LOCAL”                                           │ Local coordinate system;   │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────┤
│            │ “ELEMENT”                                         │ Element coordinate system; │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────┤
│            │ “BASIC” or 0                                      │ Basic coordinate system;   │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────┤
│ n (n>0):   │ Any user-specified coordinate system              │                            │
│            │ identification number.                            │                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────┤
│ N1, N2, N3 │ Load vector components measured in coordinate     │                            │
│            │ system specified by CID. (Real; at least one Ni ≠ │                            │
│            │ 0.0)                                              │                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────┤
│ TYPE       │ Type of applied load. (Character = “FORCE”,       │                            │
│            │ “MOMENT” or “BIMOMENT”; Required)                 │                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────┤
│ SCALE      │ Load vector scale factor. (Real; Default = 1.0)   │                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────┤
│ P(j)       │ Magnitudes of load at j (j=A, B and C). (Real;    │                            │
│            │ Default = 0.0)                                    │                            │
└────────────┴───────────────────────────────────────────────────┴────────────────────────────┘
```

#### Remarks:

1. In the static solution sequences, SID must be selected by the LOAD Case Control command.

     In the dynamic solution sequences, if there is a LOADSET Case Control command, then SID must be referenced in the LID field of a selected LSEQ entry.  If there is no LOADSET Case Control command, then SID must be referenced in the EXCITEID field of an RLOADi or TLOADi entry.

2. The load vector is defined by  ![bulkp07166.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07166.jpg?_LANG=enus) . The orientation of load  ![bulkp07168.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07168.jpg?_LANG=enus)  is determined by vector  ![bulkp07170.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07170.jpg?_LANG=enus)  and the magnitude is equal to  SCALE • P  times magnitude of vector  ![bulkp07172.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07172.jpg?_LANG=enus) .
3. The distributed load is applied over the entire length of the beam axis, along the line of the shear center.
