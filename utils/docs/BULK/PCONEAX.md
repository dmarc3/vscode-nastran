## [PCONEAX](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PCONEAX.xhtml) - Conical Shell Element Property

Defines the properties of a conical shell element described on a CCONEAX entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCONEAX ID      MID1    T1      MID2    I       MID3    T2      NSM     +       
+       Z1      Z2      PHIl    PHI2    PHI3    PHI4    PHI5    PHI6    +       
+       PHI7    PHI8    PHI9    PHI10   PHI11   PHI12   PHI13   PHI14           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCONEAX 2       4       1.0     6       16.3    8       2.1     0.5             
        0.001   -0.002  23.6    42.9                                            
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Property identification number. (Unique Integer > 0)                                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ MIDi      │ Material identification number for membrane, bending, and transverse shear. (Integer > 0) │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ T1        │ Membrane thickness. (Real > 0.0 if MID1 = 0)                                              │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ T2        │ Transverse shear thickness. (Real > 0.0 if MID3 = 0)                                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ I         │ Moment of inertia per unit width. (Real)                                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ NSM       │ Nonstructural mass per unit area. (Real)                                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ Z1, Z2    │ Fiber distances from the middle surface for stress recovery. (Real)                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ PHIi      │ Azimuthal coordinates (in degrees) for stress recovery. (Real)                            │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. PCONEAX is allowed only if an AXIC entry is also present.
2. PCONEAX entries may reference MAT1 or MAT2 material entries. However, only orthotropic material properties are consistent with axisymmetry. Therefore, G13 and G23 values on the MAT2 entry referenced by MID1 or MID2 and the G12 value on the MAT2 entry referenced by MID3 should be set to 0.0. In addition, the MID3 entry, if it references a MAT2 material matrix, should be of size 2 x 2.
3. If either MID1 = 0 or blank or T1 = 0.0 or blank, then both must be zero or blank.
4. If either MID2 = 0 or blank or I = 0.0 or blank, then both must be zero or blank.
5. If either MID3 = 0 or blank or T2 = 0.0 or blank, then both must be zero or blank.
6. A maximum of 14 azimuthal coordinates (PHIi) for stress recovery may be specified.
7. For a discussion of the conical shell problem, see Section 5.3.3 of the  MSC Nastran Reference Guide.
8. The following elastic relationships are assumed:

    - In-plane forces per unit width

       ![bulkp06894.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06894.jpg?_LANG=enus)

       where  ![bulkp06896.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06896.jpg?_LANG=enus)  is the vector of strains in the middle surface.

    - Bending moments per unit width

       ![bulkp06898.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06898.jpg?_LANG=enus)  

       where  ![bulkp06900.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06900.jpg?_LANG=enus)  is the vector of curvatures.

    - Transverse shear forces per unit width

       ![bulkp06902.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06902.jpg?_LANG=enus)  
  
       where  ![bulkp06904.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06904.jpg?_LANG=enus)  is the vector of transverse shear strains.
  
       ![bulkp06906.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06906.jpg?_LANG=enus)  are the stress-strain matrices defined by MID1, MID2, and MID3, respectively.
  