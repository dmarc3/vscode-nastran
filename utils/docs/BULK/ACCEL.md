## [ACCEL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ACCEL.xhtml) - Acceleration Load

Defines static acceleration loads, which may vary over a region of the structural model. The load variation is based upon the tabular input defined on this Bulk Data entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ACCEL   SID     CID     N1      N2      N3      DIR                     +       
+       LOC1    VAL1    LOC2    VAL2    Continue        
```
#### Example(s):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ACCEL   100     2       0.0     1.0     2.0     X                       +       
+       0.0     1.0     1000.0  3.0                                             
```
```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Load set identification number (Integer > 0)                                                    │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID       │ Coordinate system identification number. (Integer ≥ 0; Default = 0)                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ni        │ Components of the acceleration vector measured in coordinate system CID. (Real; at least one )  │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DIR       │ Component direction of acceleration variation. (Character; one of X, Y, and Z)                  │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LOCi      │ Location along direction DIR in coordinate system CID for specification of a load scale factor. │
│           │ (Real)                                                                                          │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VALi      │ The load scale factor associated with location LOCi. (Real)                                     │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. For all grids of the model, the acceleration vector is defined by  ![bulkab02009.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02009.jpg?_LANG=enus) , where  ![bulkab02011.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02011.jpg?_LANG=enus)  is the vector defined by (N1, N2, N3). The magnitude of  ![bulkab02013.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02013.jpg?_LANG=enus)  is equal to  VAL  times the magnitude of  ![bulkab02015.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02015.jpg?_LANG=enus) . The scale factor  VAL  for each grid is found linearly interpolating the DIR coordinate of the grid between table values  LOCi/VALi . If the GRID point coordinate in coordinate system CID is outside the range of the table, VAL is determined either from  VAL1  or  VALn  (the last value, see the following figure).

2. This type of acceleration load may be combined with other loads, such as FORCE, MOMENT, GRAV, and ACCEL1 loads, by specification on a LOAD entry. The SID on an ACCEL entry may not be the same as that of any other load entry.

3. This acceleration load does not include effects due to mass on scalar points.

4. A CID of zero references the basic coordinate system.

5. The DIR field must contain one of the characters X, Y, or Z. The DIR direction defines the direction of acceleration load variation along direction 1, 2, or 3 respectively of coordinate system CID.

6. A minimum of two pairs of {LOCi, VALi} data must be specified.

![bulkab02017.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02017.jpg?_LANG=enus)

Definition of Load Scale Factor vs Location

7. If Modules are present then this entry may only be specified in the main Bulk Data section.

8. In the static solution sequences, SID must be selected by the LOAD Case Control command. In the dynamic solution sequences, if there is a LOADSET Case Control command, then SID must be referenced in the LID field of a selected LSEQ entry. If there is no LOADSET Case Control command, then SID must be referenced in the EXCITEID field of an RLOADi or TLOADi entry.

