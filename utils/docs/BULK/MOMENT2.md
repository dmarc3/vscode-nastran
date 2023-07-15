## [MOMENT2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MOMENT2.xhtml) - Follower Moment, Alternate Form 2

Defines a concentrated moment at a grid point by specification of a magnitude and four grid points that determine the direction.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MOMENT2 SID     G       M       G1      G2      G3      G4                      
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MOMENT2 6       13      -2.93   16      13      17      13                      
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Load set identification number.  (Integer > 0)                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G         │ Grid point identification number at which the moment is applied.  (Integer > 0)                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ M         │ Magnitude of moment.  (Real)                                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid point identification numbers used to determine the unit vector .  (Integer > 0; G1 and G2 │
│           │ cannot be coincident; G3 and G4 cannot be coincident.)                                         │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The concentrated moment applied to grid point G is given by

![bulkno06026.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06026.jpg?_LANG=enus)  

     where  ![bulkno06028.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06028.jpg?_LANG=enus)  is the unit vector parallel to the cross product of the vectors from G1 to G2, and G3 to G4.

2. In the static solution sequences, SID must be selected by the LOAD Case Control command.

     In the dynamic solution sequences, if there is a LOADSET Case Control command, then SID must be referenced in the LID field of a selected LSEQ entry.  If there is no LOADSET Case Control command, then SID must be referenced in the EXCITEID field of an RLOADi or TLOADi entry.

3. The follower force effects due to loads from this entry are included in the stiffness in all linear solution sequences that calculate a differential stiffness. The solution sequences are SOLs 103, 105, 107 to 112, 115 and 116 (see also the parameter  ). In addition, follower force effects are included in the force balance in the nonlinear static and nonlinear transient dynamic solution sequences, SOLs 106, 129, 153, 159, and 400if geometric nonlinear effects are turned on with PARAM,LGDISP,1. The follower force stiffness is included in the nonlinear static solution sequences (SOLs 106, 153 and 400) but not in the nonlinear transient dynamic solution sequences (SOLs 129 and 159).

