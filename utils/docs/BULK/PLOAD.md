## [PLOAD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PLOAD.xhtml) - Static Pressure Load

Defines a uniform static pressure load on a triangular or quadrilateral surface comprised of surface elements and/or the faces of solid elements.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PLOAD   SID     P       G1      G2      G3      G4                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PLOAD   1       -4.0    16      32      11                                      
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Load set identification number. (Integer > 0)                              │
├───────────┼────────────────────────────────────────────────────────────────────────────┤
│ P         │ Pressure. (Real)                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid point identification numbers. (Integer > 0; G4 may be zero or blank.) │
└───────────┴────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. In the static solution sequences, SID must be selected by the LOAD Case Control command.

     In the dynamic solution sequences, if there is a LOADSET Case Control command, then SID must be referenced in the LID field of a selected LSEQ entry.  If there is no LOADSET Case Control command, then SID must be referenced in the EXCITEID field of an RLOADi or TLOADi entry.

2. The grid points define either a triangular or a quadrilateral surface to which a pressure is applied. If G4 is blank, the surface is triangular.
3. In the case of a triangular surface, the assumed direction of the pressure is computed according to the right-hand rule using the sequence of grid points G1, G2, G3 illustrated in  .

     ![bulkp07140.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07140.jpg?_LANG=enus)
     
     Figure 0-88 Pressure Convention for Triangular Surface of Surface Elements 
      
     and/or the Faces of Solid Elements

     The total load on the surface (see  Figure 0-89 ), AP, is divided into three equal parts and applied to the grid points as concentrated loads. A minus sign in field 3 reverses the direction of the load.

4. In the case of a quadrilateral surface, the grid points G1, G2, G3, and G4 should form a consecutive sequence around the perimeter. The right-hand rule is applied to find the assumed direction of the pressure. Four concentrated loads are applied to the grid points in approximately the same manner as for a triangular surface. The following specific procedures are adopted to accommodate irregular and/or warped surfaces:

     - The surface is divided into two sets of overlapping triangular surfaces. Each triangular surface is bounded by two of the sides and one of the diagonals of the quadrilateral.

     - One-half of the pressure is applied to each triangle, which is then treated in the manner described in Remark 

     ![bulkp07142.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07142.jpg?_LANG=enus)
     
     Figure 0-89 Pressure Convention for Quadrilateral Surface of Surface Elements and/or the Faces of Solid Elements

5. The follower force effects due to loads from this entry are included in the stiffness in all linear solution sequences that calculate a differential stiffness. The solution sequences are SOLs 103, 105, 107 to 112, 115 and 116 (see also the parameter  ). In addition, follower force effects are included in the force balance in the nonlinear static and nonlinear transient dynamic solution sequences, SOLs 106, 129, 153, 159 and 400 if geometric nonlinear effects are turned on with PARAM,LGDISP,1. The follower force stiffness is included in the nonlinear static solution sequences (SOLs 106, 153 and 400) but not in the nonlinear transient dynamic solution sequences (SOLs 129 and 159).

