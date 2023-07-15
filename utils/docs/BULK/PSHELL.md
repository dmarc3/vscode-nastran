## [PSHELL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PSHELL.xhtml) - Shell Element Property

Defines the membrane, bending, transverse shear, and coupling properties of thin shell elements.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PSHELL  PID     MID1    T       MID2    12I/T**3MID3    TS/T    NSM             
        Z1      Z2      MID4                                                    
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PSHELL  203     204     1.90    205     1.2     206     0.8     6.32            
        +.95    -.95                                                            
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number. (Integer > 0)                                                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID1      │ Material identification number for the membrane. (Integer > 0 or blank)                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T         │ Default membrane thickness for Ti on the connection entry. If T is blank then the thickness must  │
│           │ be specified for Ti on the CQUAD4, CTRIA3, CQUAD8, and CTRIA6 entries. (Real or blank) Average    │
│           │ thickness if TFLAG = 1 .                                                                          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID2      │ Material identification number for bending. (Integer > -1 or blank)                               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 12I/T**3  │ Bending moment of inertia ratio, . Ratio of the actual bending moment inertia of the shell, I, to │
│           │ the bending moment of inertia of a homogeneous shell, . The default value is for a homogeneous    │
│           │ shell. (Real > 0.0; Default = 1.0)                                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID3      │ Material identification number for transverse shear. If MID2 is blank or -1, then MID3 must be    │
│           │ blank. (Integer > 0 or blank)                                                                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TS/T      │ Transverse shear thickness ratio, . Ratio of the shear thickness, , to the membrane thickness of  │
│           │ the shell, T. The default value is for a homogeneous shell. (Real > 0.0; Default = .833333)       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSM       │ Nonstructural mass per unit area. (Real)                                                          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Z1, Z2    │ Fiber distances for stress calculations. The positive direction is determined by the right-hand   │
│           │ rule, and the order in which the grid points are listed on the connection entry. See Remark 11.   │
│           │ for defaults. (Real or blank)                                                                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID4      │ Material identification number for membrane-bending coupling. See Remarks. (Integer > 0 or blank, │
│           │ must be blank unless MID1 > 0 and MID2 > 0, may not equal MID1 or MID2.)                          │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. PSHELL is a primary property entry. Primary properties are used to internally group entities. Therefore it is highly recommended that PSHELL entries use unique identification numbers (PIDs) with respect to all other property entries to avoid unexpected grouping results. PSHELL, PCOMP, and PCOMPG entries must have unique PIDs.

2. The structural mass is calculated from the density using the membrane thickness and membrane material properties. If MID1 is blank, then the density is obtained from the MID2 material.

3. The results of leaving an MIDi field blank (or MID2 = -1) are:

MID1

No membrane or coupling stiffness

MID2

No bending, coupling, or transverse shear stiffness

MID3

No transverse shear flexibility

MID4

No bending-membrane coupling unless ZOFFS is specified on the connection entry. See Remark 6.

MID2=-1

See Remark 12.

Note: MID1 and MID2 must be specified if the ZOFFS field is also specified on the connection entry.

--------------------

4. The continuation entry is not required.

5. The structural damping (GE on the MATi entry) is obtained from the MID1 material. If MID1 is blank, then it is obtained from the MID2 material. If PARAM,SHLDAMP,DIFF is set or is anything other than SAME, then the structural damping  ![bulkp07236.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07236.jpg?_LANG=enus)  matrix is computed using the GE entries on the MATi entries according to rules in the following table ( ). If a single PSHELL corresponds to row eight (8) of  , then all PSHELLs in the model will follow the rule of row eight (8). Rows 1-7 is an attempt to maintain upward compatibility, if a user inadvertently places a SHLDAMP,DIFF in the model.

```text
┌───────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Note: │ Large values of damping associated with an MID4 entry, when using PARAM,SHLDAMP,DIFF, can cause │
│       │ structural instability in transient dynamics.                                                   │
└───────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
```text
┌──────────────┬─────────┐
│ SHELL        │         │
│ Structural   │         │
│ Damping      │         │
│ Rules        │         │
├──────────────┼─────────┤
│ Row          │ MID1    │
├──────────────┼─────────┤
│ 1* 2 3 4     │ v v v v │
├──────────────┼─────────┤
│ 5 6          │         │
├──────────────┼─────────┤
│ 7            │ v1      │
├──────────────┼─────────┤
│ 8            │ v1      │
├──────────────┼─────────┤
│ * vMIDi      │         │
│ values the   │         │
│ same; viMIDi │         │
│ values       │         │
│ different or │         │
│ blank value  │         │
│ from a MATj  │         │
│ entry        │         │
│ associated   │         │
│ with MIDi    │         │
├──────────────┼─────────┤
│ If for row   │         │
│ eight (8), a │         │
│ gei = 0, it  │         │
│ is replaced  │         │
│ by gei =     │         │
│ 1.0E-8       │         │
└──────────────┴─────────┘
```
.

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
The P...
The D...
PSHEL...
The M...
MAT2 ...
Any P...
2       For t...
3       For c...
```
6. The following should be considered when using MID4.

     •     The MID4 field should be left blank if the material properties are symmetric with respect to the middle surface of the shell. If the element centerline is offset from the plane of the grid points but the material properties are symmetric, the preferred method for modeling the offset is by use of the ZOFFS field on the connection entry. Although the MID4 field may be used for this purpose, it may produce ill-conditioned stiffness matrices (negative terms on factor diagonal) if done incorrectly.

     • Only one of the options MID4 or ZOFFS should be used; if both methods are specified the effects are cumulative. Since this is probably not what the user intends, this may results in unexpected answers. Note that the mass properties are not modified to reflect the existence of the offset when the ZOFFS and MID4 methods are used. If the weight or mass properties of an offset plate are to be used in an analysis, the RBAR method must be used to represent the offset. See    in the  MSC Nastran Reference Guide .

     • The effects of MID4 are not considered in the calculation of differential stiffness. Therefore, it is recommended that MID4 be left blank in buckling analysis.

7. This entry is referenced by the CTRIA3, CTRIA6, CTRIAR, CQUAD4, CQUAD8, and CQUADR entries via PID.

8. For structural problems, MIDi must reference a MAT1, MAT2, or MAT8 material property entry

9. If the transverse shear material MID3 or the membrane-bending coupling term MID4 references a MAT2 entry, then G33 must be zero. If MID3 references a MAT8 entry, then G1Z and G2Z must not be zero.

10. For heat transfer problems, MIDi must reference a MAT4 or MAT5 material property entry.

11. The default for Z1 is -T/2, and for Z2 is +T/2. T is the local plate thickness defined either by T on this entry or by membrane thicknesses at connected grid points, if they are input on connection entries.

12. For plane strain analysis, set MID2=-1 and set MID1 to reference a MAT1 entry. In-plane loads applied to plain strain elements are interpreted as line-loads with a value equal to the load divided by the thickness. Thus, if a thickness of “1.0” is used, the value of the line-load equals the load value. Pressure can be approximated with multiple line loads where the pressure value equals the line-load divided by the length between the loads.

13. For a material nonlinear property, MID1 must reference a MATS1 entry and be the same as MID2, unless a plane strain (MID2 = -1) formulation is desired. Also, MID3 cannot reference a MATS1 entry.

14. If transverse shear flexibility is specified for a model with curved shells where the loading is dominated by twist and shell normals are turned off (e.g., PARAM,SNORM,-1), then results may be inaccurate and may diverge when the mesh is refined. PARAM,SNORM should be set for this unique model condition.

15. For 3D contact analysis, MID2 must be non-zero and for 2D contact analysis, MID1 must be non-zero.

