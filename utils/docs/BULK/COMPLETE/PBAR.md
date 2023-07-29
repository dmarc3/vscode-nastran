## [PBAR](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PBAR.xhtml) - Simple Beam Property

Defines the properties of a simple beam element (CBAR entry).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBAR    PID     MID     A       I1      I2      J       NSM             +       
+       C1      C2      D1      D2      E1      E2      F1      F2      +       
+       K1      K2      I12                                                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBAR    39      6       2.9             5.97                                    
                        2.0     4.0                                             
```

```text
┌─────────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                       │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID         │ Property identification number. (Integer > 0)                                                 │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID         │ Material identification number. See Remarks 2. and 3. (Integer > 0)                           │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ A           │ Area of bar cross section. (Real; Default = 0.0)                                              │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ I1, I2, I12 │ Area moments of inertia. See Figure 0-68. (Real; I1 > 0.0, I2 > 0.0, I1*I2 > ; Default = 0.0) │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ J           │ Torsional constant. See Figure 0-68. (Real; Default = 0.0)                                    │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSM         │ Nonstructural mass per unit length. (Real)                                                    │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci, Di, Ei, │ Stress recovery coefficients. (Real; Default = 0.0)                                           │
│ Fi          │                                                                                               │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ K1, K2      │ Area factor for shear. See Remark 5. (Real or blank)                                          │
└─────────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Both continuation entries may be omitted.
2. For structural problems, MID must reference a MAT1 material entry.
3. For heat transfer problems, MID must reference a MAT4 or MAT5 material entry.
4. See the CBAR entry description for a discussion of bar element geometry.
5. The transverse shear stiffnesses times unit length in planes 1 and 2 are K1*A*G and K2*A*G, respectively, where G is the shear modulus. The default values for K1 and K2 are infinite; in other words, the transverse shear flexibilities are set equal to zero. K1 and K2 are ignored if I12 ![bulkp06528.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06528.jpg?_LANG=enus) 0. K1 and K2 must be blank if A = 0.0.
6. The stress recovery coefficients C1 and C2, etc., are the y and z coordinates in the bar element coordinate system of a point at which stresses are computed. Stresses are computed at both ends of the bar. For conventional element, only bending components of strain and stress are outputted at points C1 and C2, etc. Membrane components of strain and stress are outputted as axial value. For advanced nonlinear element, the bending and membrane components of strain and stress are superposed and outputted together at the points C1 and C2, etc., there is no axial value individually.
7. For response spectra analysis on stress recovery coefficients, the CBEAM element entry should be used because bar element results will be inaccurate.
8.  describes the PBAR element coordinate system.

     where:

          See link for definitions.

     ![bulkp06538.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06538.jpg?_LANG=enus)

     Figure 0-68 PBAR Element Coordinate System

9. For cross-sections that are not doubly symmetric, when a beam is loaded through the centroid, it may in addition to bending undergo rotation. The CBAR element, by default, does not represent this behavior because the shear center is not explicitly accounted for on a CBAR entry.

     By definition, for the CBAR element, the load is applied at the centroid and not at the shear center. If load application at the shear center is desired, appropriately applied offsets can be used on the CBAR entry or the CBAR/PBAR element replaced by the CBEAM/PBEAM element which by default explicitly applies the load through the shear center.

     If warping considerations and bi-moment calculations are important, the CBEAM/PBEAM element should be used.

10. Mass moment of inertial formulation has changed in Version 2003. System (398) may be used to select the formulation in pre-Version 2004 systems.
11. PBAR is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PBAR property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PBAR, PBARL, PBRSECT entries.
