## [ACCEL1](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ACCEL1.xhtml) - Acceleration Load

Defines static acceleration loads at individual GRID points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ACCEL1  SID     CID     A       N1      N2      N3                      +       
+       GRIDID1 GRIDID2 -etc.-                                                  
```
#### Example(s):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ACCEL1  100     2       10.0    1.0     2.0     0.0                             
        1       2       3       4       THRU    10      BY      2               
        20      21      THRU    30      40      52      69      70              
        82      90      100                                                     
```
```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Load set identification number (Integer > 0)                                                    │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID       │ Coordinate system identification number. (Integer ≥ 0; Default = 0)                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ A         │ Acceleration vector scale factor. (Real)                                                        │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ni        │ Components of the acceleration vector measured in coordinate system CID. (Real; at least one )  │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GRIDIDi   │ List of one or more GRID point identification numbers. Key words “THRU” and “BY” can be used to │
│           │ assist the listing. (Integer > 0)                                                               │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The acceleration vector is defined by  ![bulkab02021.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02021.jpg?_LANG=enus) , where  ![bulkab02023.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02023.jpg?_LANG=enus)  is the vector defined by (N1, N2, N3). The magnitude of  ![bulkab02025.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02025.jpg?_LANG=enus)  is equal to  A  times the magnitude of  ![bulkab02027.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02027.jpg?_LANG=enus) .

2. This type of acceleration load may be combined with other loads, such as FORCE, MOMENT, GRAV, and ACCEL loads, by specification on a LOAD entry. The SID on an ACCEL1 entry may not be the same as that of any other load entry.

3. This acceleration load does not include effects due to mass on scalar points.

4. A CID of zero references the basic coordinate system.

5. ACCEL1 loads are not supported with super elements.

6. In the static solution sequences, SID must be selected by the LOAD Case Control command. In the dynamic solution sequences, if there is a LOADSET Case Control command, then SID must be referenced in the LID field of a selected LSEQ entry. If there is no LOADSET Case Control command, then SID must be referenced in the EXCITEID field of an RLOADi or TLOADi entry.

