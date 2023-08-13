## [RFORCE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RFORCE.xhtml) - Rotational Force

Defines a static loading condition due to an angular velocity and/or acceleration.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RFORCE  SID     G       CID     A       R1      R2      R3      METHOD  +       
+       RACC    MB                                                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RFORCE  2       5               -6.4    0.0     0.0     1.0     2               
        1.0                                                                     
```

```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID        │ Load set identification number.  (Integer > 0)                                                     │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G          │ Grid point identification number through which the rotation vector acts. (Integer > 0)             │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID        │ Coordinate system defining the components of the rotation vector. See Remark 16. (Integer >        │
│            │ 0; Default = 0)                                                                                    │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ A          │ Scale factor of the angular velocity in revolutions per unit time.  (Real)                         │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ R1, R2, R3 │ Rectangular components of rotation vector . The vector defined will pass through point G.  (Real;  │
│            │ unless A and RACC are both zero)                                                                   │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ METHOD     │ Method used to compute centrifugal forces due to angular velocity, see Remark 20.. For angular     │
│            │ acceleration, see Remark 13. (Integer = 1 or 2; Default = 1)                                       │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RACC       │ Scale factor of the angular acceleration in revolutions per unit time squared. (Real; Default =    │
│            │ 0.0)                                                                                               │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MB         │ Indicates whether the CID coordinate system is defined in the main Bulk Data Section (MB = -1) or  │
│            │ the partitioned superelement Bulk Data Section (MB = 0). Coordinate systems referenced in the main │
│            │ Bulk Data Section are considered stationary with respect to the assembly basic coordinate system.  │
│            │ See Remark 15. (Integer; Default = 0)                                                              │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The forces that are created with the RFORCE entry act on the structure as follows: the forces that are defined with the RFORCE entry for a constant angular velocity (A), act in the positive radial direction. These forces represent the inertia forces on the structure due to a constant angular velocity. The forces that are defined with the RFORCE entry for a constant angular acceleration (RACC), act in the same direction as the angular acceleration. These forces would be opposite to the inertia forces on the structure due to a constant angular acceleration. In  , the force vector at grid point Gi is given by

     (0-27) ![bulkqrs07440.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07440.jpg?_LANG=enus)

     where:

        See link for definitions.

     ![bulkqrs07456.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07456.jpg?_LANG=enus)
     
     Figure 0-97 RFORCE Vector at Grid Point Gi

2. In the static solution sequences, SID must be selected by the LOAD Case Control command.

     In the dynamic solution sequences, if there is a LOADSET Case Control command, then SID must be referenced in the LID field of a selected LSEQ entry.  If there is no LOADSET Case Control command, then SID must be referenced in the EXCITEID field of an RLOADi or TLOADi entry.

3. G = 0 signifies that the rotation vector acts through the origin of the basic coordinate system.
4. CID = 0 (Default) signifies that the rotation vector is defined in the basic coordinate system.
5. The load vector generated by this entry can be printed with an OLOAD command in the Case Control Section.
6. METHOD = 1 yields correct results only when there is no coupling in the mass matrix.  This occurs when the lumped mass option is used with or without the ZOFFS option (see the CQUAD4 entry for a description of ZOFFS).  METHOD = 2 yields correct results for lumped or consistent mass matrix only if the ZOFFS option is not used.  The acceleration terms due to the mass offset (X1, X2, X3) on the CONM2 entry are not computed with METHOD = 2.  All the possible combinations of mass matrices and offset and the correct method to be used are shown below.

        See link for table.

7. In cyclic symmetry analyses, the T3 axis of the basic coordinate system must be coincident with the axis of symmetry. In the DIH type of cyclic symmetry, the T1 axis also must be parallel to side 1 of segment 1R of the model.
8. For superelement analysis, G should reference a residual structure point that is exterior to all superelements when loading Superelement 0 and a separate G must be interior to each superelement when loading an upstream superelement else centrifugal loads will not be generated for that superelement. However, in cyclic analysis, User Fatal Message 4347 will be issued.
9. In a geometric nonlinear static analysis (SOL 106 and 400 when PARAM LDGISP is set to +1), this type of loading is a follower force type of loading. However, the orientation of coordinate system CID is not updated.
10. In nonlinear static solutions when there is more than one increment (INC) specified on the NLPARM entry for a given subcase, the load vector resulting from the RFORCE input (and not the angular velocity vector) is scaled linearly.  This means that loading by increments in the angular velocity can only be achieved by having subcases where the RFORCE loading is applied in a single increment.
11. The continuation entry is optional.
12. Forces due to angular acceleration (RACC) are computed with METHOD = 2 even if METHOD = 1 is specified.
13. Loads derived from this entry do not include effects due to mass specified for scalar points.
14. The follower force effects due to loads from this entry are included in the stiffness in all linear solution sequences that calculate a differential stiffness. The solution sequences are SOLs 103, 105, 107 to 112, 115 and 116 (see also the parameter  ). In addition, follower force effects are included in the force balance in the nonlinear solution sequences, SOLs 106, 129, 153, 159 and 400, if geometric nonlinear effects are turned on with PARAM,LGDISP,1. The follower force stiffness is included in the nonlinear static solution sequences (SOLs 106, 153 and 400) and general nonlinear solution sequence (SOL 400) for both ANALYSIS=NLSTAT and NLTRAN but not in the nonlinear transient dynamic solution sequences (SOLs 129 and 159).
15. The coordinate systems in the main Bulk Data Section are defined relative to the assembly basic coordinate system which is fixed.  This feature is useful when a superelement defined by a partitioned Bulk Data Section is rotated or mirrored and the gravity load is more conveniently defined in terms of coordinates which are fixed.
16. If CID is not a rectangular coordinate system, RFORCE will treat it as if it were and unexpected answers may result.
17. Follower force stiffness (param,followk,yes) is supported for method 2 only.
18. Multiple RFORCE entries with different SID’s may be used in SOL 400 in the same loadcase (STEP and/or SUBCASE). They should be combined using the LOAD entry similar to the way FORCE or PLOAD4 with different ID’s are combined.
19. Fields CID, METHOD, RACC, MB and IDRF will be ignored for SOL 700.
20. For Axisymmetric Harmonic elements, (elements selected with PAXSYMH entry), METHOD=2 is required. A selection of METHOD=1 will automatically be overridden and be replaced by METHOD=2 for all elements of the model.
21. Note that the LOAD entry scaling for RFORCE uses the square root of the absolute S×Si in rotor dynamics. Thus it is recommended that the LOAD entry not be used with RFORCE in rotor dynamics with a value other than S=1.0 and Si=1.0 value. See Remark   of the LOAD entry.
22. If Modules are present then this entry may only be specified in the main Bulk Data section.
