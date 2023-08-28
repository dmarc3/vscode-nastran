## [PCOMPG](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PCOMPG.xhtml) - Layered Composite Element Property (Alternate to PCOMP Entry)

Defines global (external) ply IDs and properties for a composite material laminate.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCOMPG  PID     Z0      NSM     SB      FT      TREF    GE      LAM     +       
+       GPLYID1 MID1    T1      THETA1  SOUT1   GEFLG                   +       
+       GPLYID2 MID2    T2      THETA2  SOUT2                                   
```

#### Example of single ply per line format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCOMPG  181     -0.224  7.45    10000.  HOFF                            +       
+       1001    171     .056    0.      YES                             +       
+       101     171     .07     45.     YES                             +       
+       2002    171     .056    -45.    YES                             +       
+       102     171     0.55    90.     YES                                     
```

```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PID       │ Property identification number.                   │                                                   │
│           │ (0 < Integer < 10000000)                          │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Z0        │ Distance from the reference plane to the bottom   │                                                   │
│           │ surface. See Remark 11. (Real; Default = -0.5     │                                                   │
│           │ times the element thickness.)                     │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NSM       │ Nonstructural mass per unit area. (Real)          │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SB        │ Allowable shear stress of the bonding material    │                                                   │
│           │ (allowable interlaminar shear stress). Required   │                                                   │
│           │ if FT is also specified. (Real > 0.0)             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ FT        │ Failure theory. The following theories are        │                                                   │
│           │ allowed (Character or blank. If blank, then no    │                                                   │
│           │ failure calculation will be performed) See Remark │                                                   │
│           │ 8.                                                │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ “HILL” for the Hill theory. “HOFF” for the        │                                                   │
│           │ Hoffman theory. “TSAI” for the Tsai-Wu theory.    │                                                   │
│           │ “STRN” for the Maximum Strain theory. “HFAIL” for │                                                   │
│           │ the Hashin failure criterion “HTAPE” for the      │                                                   │
│           │ Hashin tape criterion “HFABR” for the Hashin      │                                                   │
│           │ fabric criterion                                  │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TREF      │ Reference temperature. See Remark 4. (Real;       │                                                   │
│           │ Default = 0.0)                                    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ GE        │ Damping coefficient. See Remark 5. (Real;         │                                                   │
│           │ Default = 0.0)                                    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ LAM       │ Laminate Options. (Character or blank,            │                                                   │
│           │ Default = blank). See Remarks 14.                 │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ “Blank”                                           │ All plies must be specified and all stiffness     │
│           │                                                   │ terms are developed.                              │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ “MEM”                                             │ All plies must be specified, but only membrane    │
│           │                                                   │ terms (MID1 on the derived PSHELL entry) are      │
│           │                                                   │ computed.                                         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ “BEND”                                            │ All plies must be specified, but only bending     │
│           │                                                   │ terms (MID2 on the derived PSHELL entry) are      │
│           │                                                   │ computed.                                         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ “SMEAR”                                           │ All plies must be specified, stacking sequence is │
│           │                                                   │ ignored MID1=MID2 on the derived PSHELL entry and │
│           │                                                   │ MID3, MID4 and TS/T and 12I/T**3 terms are set to │
│           │                                                   │ zero).                                            │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ “SMCORE”                                          │ All plies must be specified, with the last ply    │
│           │                                                   │ specifying core properties and the previous plies │
│           │                                                   │ specifying face sheet properties. The stiffness   │
│           │                                                   │ matrix is computed by placing half the face sheet │
│           │                                                   │ thicknesses above the core and the other half     │
│           │                                                   │ below with the result that the laminate is        │
│           │                                                   │ symmetric about the mid-plane of the core.        │
│           │                                                   │ Stacking sequence is ignored in calculating the   │
│           │                                                   │ face sheet stiffness.                             │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ GPLYIDi   │ User-defined Global (External) Ply ID. See Remark │                                                   │
│           │ 1. (Integer > 0)                                  │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MIDi      │ Material ID of the various plies. The plies are   │                                                   │
│           │ identified by serially numbering them from 1 at   │                                                   │
│           │ the bottom layer. The MIDs must refer to MAT1,    │                                                   │
│           │ MAT2, or MAT8 Bulk Data entries. See Remarks      │                                                   │
│           │ 2. and 15. For use with MAT4 and MAT5, see Remark │                                                   │
│           │ 18. (Integer > 0 or blank, except MID1 must be    │                                                   │
│           │ specified.)                                       │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Ti        │ Thicknesses of the various plies. See Remark 2.   │                                                   │
│           │ (Real or blank, except T1 must be specified.)     │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ THETAi    │ Orientation angle of the longitudinal direction   │                                                   │
│           │ of each ply with the material axis of the         │                                                   │
│           │ element. (If the material angle on the element    │                                                   │
│           │ connection entry is 0.0, the material axis and    │                                                   │
│           │ side 1-2 of the element coincide.) The plies are  │                                                   │
│           │ to be numbered serially starting with 1 at the    │                                                   │
│           │ bottom layer. The bottom layer is defined as the  │                                                   │
│           │ surface with the largest -Z value in the element  │                                                   │
│           │ coordinate system. (Real; Default = 0.0)          │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SOUTi     │ Stress or strain output request. See Remarks      │                                                   │
│           │ 6. and 7. (Character: “YES” or “NO”;              │                                                   │
│           │ Default = “NO”)                                   │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ GEFLG     │ Ply structural damping flag may be only entered   │                                                   │
│           │ only once and if entered must be entered on the   │                                                   │
│           │ first ply. At least two layers are required else  │                                                   │
│           │ frequency dependency is ignored. For a one-layer  │                                                   │
│           │ PCOMPG use PCOMFQ entry for frequency dependency. │                                                   │
│           │ (Integer -2,or -1; Default=0) See Remark 17.      │                                                   │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. The global ply identification number must be unique with respect to other plies in the entry. The plies are defined in stacking sequence starting with the bottom layer.
2. The default for MID2, ..., MIDn is the last defined MIDi. In the example above, MID1 is the default for MID2, MID3, and MId4. The same logic applies to Ti.
3. The global ply ID (GPLYIDi) and at least one of the four values (MIDi, Ti, THETAi, SOUTi) must be present for a ply to exist. The minimum number of plies is one.
4. The TREF specified on the material entries referenced by plies are not used. Instead TREF on the PCOMPG entry is used for all plies of the element. If not specified, it defaults to “0.0.”

     If the PCOMPG references temperature dependent material properties, then the TREF given on the PCOMPG will be used as the temperature to determine material properties.

     TEMPERATURE Case Control commands are ignored for deriving the equivalent PSHELL and MAT2 entries used to describe the composite element.

     If for a nonlinear static analysis the parameter COMPMATT is set to YES, the temperature at the current load step will be used to determine temperature-dependent material properties for the plies and the equivalent PSHELL and MAT2 entries for the composite element. The TREF on the PCOMPG entry will be used for the initial thermal strain on the composite element and the stresses on the individual plies. If the parameter EPSILONT is also set to INTEGRAL,TREF is not applicable.

5. GE given on the PCOMPG entry will be used for the element and the values supplied on material entries for individual plies are ignored. The user is responsible for supplying the equivalent damping value on the PCOMPG entry. If PARAM,W4 is not specified GE is ignored in transient analysis. When GEij values are present on the MAT2 entry, Nastran will ignore the GE value given on the first continuation entry field (6) of the MAT2 and the GE entry given in field (8) of the PCOMPG entry and use the given GEij values.
6. Stress and strain output for individual plies are available in all superelement static,  frequency response (direct and modal), transient response (direct and modal) and normal modes analysis and requested by the STRESS and STRAIN Case Control commands. Composite lamina stress/strain are available in random analysis by XYPLOT command.
7. For Nastran conventional elements, if PARAM,NOCOMPS is set to -1, stress and strain output for individual plies will be suppressed and the homogeneous stress and strain output will be printed. See also Remark 
8. In order to get failure index output the following must be present:
    - STRESS or STRAIN Case Control commands,
    - SB, FT, and SOUTi on the PCOMPG Bulk Data entry,
    - Xt, Xc, Yt, Yc, and S on all referenced MAT8 Bulk Data entries if stress allowables are used, or Xt, Xc, Yt, S, and STRN=1.0 if strain allowables are used.
        - -1 - failure in the fiber direction
        - -2 - failure in the matrix direction
        - -12 - failure in the inplane shear.
    - For Hashin Failure criterion, HFi  (i=1,2,3,4,10,11) must be present in all referenced MAT8 bulk entry.
    - For Hashin Tape criterion, HTi (i=1,2,3,4,5,6,10,11,12) must be present in all referenced MAT8 bulk entry.
    - For Hashin Fabric criterion, HFBi (i=1,2,3,4,5,6,10,11,12) must be present in all referenced MAT8 bulk entry.
    - Hashin failure theory output is captured with following code.
        - 1 - failure in the tensile first fiber mode.
        - -1 - failure in the compressive first fiber mode.
        - 2 - failure in the tensile second fiber mode.
        - -2 - failure in the compressive second fiber mode.
        - 3 - failure in the tensile matrix mode.
        - -3 - failure in the compressive matrix mode.

9. A function of this entry is to derive equivalent internal PSHELL and MATi entries to describe the composite element. Any sorted echo request will also cause printout and/or punch of the derived PSHELL and MATi entries in User Information Message 4379 and/or the punch file. Use the NASTRAN system cell (361) PRTPCOMP=1 to print equivalent PSHELL/MAT2 Bulk Data entries to the .f06 file. Use the ECHO=PUNCH Case Control command to write them to the .pch file.
10. The failure index for the bonding material is calculated as Failure Index =  ![bulkp06888.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06888.jpg?_LANG=enus) .
11. If the value specified for Z0 is not equal to -0.5 times the thickness of the element and PARAM,NOCOMPS,-1 is specified, then the homogeneous element stresses are incorrect, while lamina stresses and element forces and strains are correct. For correct homogeneous stresses, use ZOFFS on the corresponding connection entry. Use of Z0 to offset a laminate does not change the reference plane. Z0 offsets the bottom of the plies from the reference plane.
12. An unsymmetric layup or the use of Z0 to specify an unsymmetric layup, is not recommended in buckling analysis or the calculation of differential stiffness. Also, Z0 should not be used to specify an unsymmetric layup. The presence of coupling between bending and extension generally increases deflections. Hence, coupling decreases the effective stiffness of a laminate, reduces buckling loads and vibration frequencies significantly.
13. To obtain the damping coefficient GE, multiply the critical damping ratio  ![bulkp06890.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06890.jpg?_LANG=enus)  by 2.0.
14. Element output for the SMEAR and SMCORE options is produced using the PARAM NOCOMPS -1 methodology that suppresses ply stress/strain results and prints results for the equivalent homogeneous element.
15. Temperature-dependent ply properties only available in SOL 106 and SOL400. See PARAM,COMPMATT for details.
16. PCOMPG is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PCOMPG property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PSHELL, PCOMP, PCOMPG entries.
17. Defines structural damping matrix data for composites. This entry if used MUST appear on the first ply entry ONLY and all subsequent plies follows depending if -1 or -2 described below

        See link for table.

18. In SOL400 only, this entry may refer to MAT4 or MAT5 entries. If it does, and the user has not supplied PSHLN1 entries, Nastran will internally generate a PSHLN1 entry. For details, the user should refer to Remark   of the PSHLN1 entry.
