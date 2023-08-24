## [PCOMP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PCOMP.xhtml) - Layered Composite Element Property

Defines the properties of an n-ply composite material laminate.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCOMP   PID     Z0      NSM     SB      FT      TREF    GE      LAM     +       
+       MID1    T1      THETA1  SOUT1   MID2    T2      THETA2  SOUT2   +       
+       MID3    T3      THETA3  SOUT3   -etc.-                                  
```

#### Example of multiple plies per line format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCOMP   181     -0.224  7.45    10000.0 HOFF                                    
        171     0.056   0.      YES                     45.                     
                        -45.                            90.                     
```

#### Example of single ply per line format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCOMP   181     -0.224  7.45    10000.  HOFF                                    
        171     .056    0.      YES                                             
        171     .056    45.     YES                                             
        171     .056    -45.    YES                                             
        171     .056    90.     YES                                             
```

```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PID       │ Property identification number.                   │                                                   │
│           │ (0 < Integer < 10000000)                          │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Z0        │ Distance from the reference plane to the bottom   │                                                   │
│           │ surface. See Remarks 10. and 11. (Real;           │                                                   │
│           │ Default = -0.5 times the element thickness.)      │                                                   │
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
│           │ 7.                                                │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ “HILL” for the Hill theory. “HOFF” for the        │                                                   │
│           │ Hoffman theory. “TSAI” for the Tsai-Wu theory.    │                                                   │
│           │ “STRN” for the Maximum Strain theory. “HFAIL” for │                                                   │
│           │ the Hashin failure criterion “HTAPE” for the      │                                                   │
│           │ Hashin tape criterion “HFABR” for the Hashin      │                                                   │
│           │ fabric criterion                                  │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TREF      │ Reference temperature. See Remark 3. (Real;       │                                                   │
│           │ Default = 0.0)                                    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ GE        │ Damping coefficient. See Remarks 4. and 12.       │                                                   │
│           │ (Real; Default = 0.0)                             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ LAM       │ Laminate Options. (Character or blank,            │                                                   │
│           │ Default = blank). See Remarks 13. and 14.         │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ “Blank”                                           │ All plies must be specified and all stiffness     │
│           │                                                   │ terms are developed.                              │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ “SYM”                                             │ Only plies on one side of the element centerline  │
│           │                                                   │ are specified. The plies are numbered starting    │
│           │                                                   │ with 1 for the bottom layer. If an odd number of  │
│           │                                                   │ plies are desired, the center ply thickness (T1)  │
│           │                                                   │ should be half the actual thickness.              │
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
│           │                                                   │ MID3, MID4 and TS/T and 12I/T**3 terms are set as │
│           │                                                   │ blanks).                                          │
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
│ MIDi      │ Material ID of the various plies. The plies are   │                                                   │
│           │ identified by serially numbering them from 1 at   │                                                   │
│           │ the bottom layer. The MIDs must refer to MAT1,    │                                                   │
│           │ MAT2, MAT8, or MATDIGI Bulk Data entries. See     │                                                   │
│           │ Remarks 1. 15. and 16. For use with MAT4 and      │                                                   │
│           │ MAT5, see Remark 18. (Integer > 0 or blank,       │                                                   │
│           │ except MID1 must be specified.)                   │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Ti        │ Thicknesses of the various plies. See Remarks 1.  │                                                   │
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
│           │ 5. and 6. (Character: “YES” or “NO”;              │                                                   │
│           │ Default = “NO”)                                   │                                                   │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. The default for MID2, ..., MIDn is the last defined MIDi. In the example above, MID1 is the default for MID2, MID3, and MID4. The same logic applies to Ti.
2. At least one of the four values (MIDi, Ti, THETAi, SOUTi) must be present for a ply to exist. The minimum number of plies is one.
3. The TREF specified on the material entries referenced by plies are not used. Instead TREF on the PCOMP entry is used for all plies of the element. If not specified, it defaults to “0.0.”

     If the PCOMP references temperature dependent material properties, then the TREF given on the PCOMP will be used as the temperature to determine material properties.

     TEMPERATURE Case Control commands are ignored for deriving the equivalent PSHELL and MAT2 entries used to describe the composite element.

     If for a nonlinear static analysis the parameter COMPMATT is set to YES, the temperature at the current load step will be used to determine temperature-dependent material properties for the plies and the equivalent PSHELL and MAT2 entries for the composite element. The TREF on the PCOMP entry will be used for the initial thermal strain on the composite element and the stresses on the individual plies. If the parameter EPSILONT is also set to INTEGRAL,TREF is not applicable.

4. GE given on the PCOMP entry will be used for the element and the values supplied on material entries for individual plies are ignored. The user is responsible for supplying the equivalent damping value on the PCOMP entry. If PARAM,W4 is not specified GE is ignored in transient analysis. When GEij values are present on the MAT2 entry, Nastran will ignore the GE value given on the first continuation entry field (6) of the MAT2 and the GE entry given in field (8) of the PCOMP entry and use the given GEij values.
5. Stress and strain output for individual plies are available in all superelement static, normal modes, buckling, frequency response (direct and modal), transient response (direct and modal) and nonlinear static analysis and requested by the STRESS and STRAIN Case Control commands. Composite lamina stress/strain are available in random analysis by XYPLOT command.
6. For Nastran conventional elements, if PARAM,NOCOMPS is set to -1, stress and strain output for individual plies will be suppressed and the homogeneous stress and strain output will be printed. See also Remark 
7. In order to get failure index output the following must be present:
   - STRESS or STRAIN Case Control commands,
   - SB, FT, and SOUTi on the PCOMP Bulk Data entry,
   - Xt, Xc, Yt, Yc, and S on all referenced MAT8 Bulk Data entries if stress allowables are used, or Xt, Xc, Yt, S, and STRN=1.0 if strain allowables are used.
       - -1 - failure in the fiber direction.
       - -2 - failure in the matrix direction
       - -12 - failure in the inplane shear
   - For Hashin Failure criterion, HFi  (i=1,2,3,4,10,11) must be present in all referenced MAT8 bulk entry.
   - For Hashin Tape criterion, HTi (i=1,2,3,4,5,6,10,11,12) must be present in all referenced MAT8 bulk entry.
   - For Hashin Fabric criterion, HFBi (i=1,2,3,4,5,6,10,11,12) must be present in all referenced MAT8 bulk entry.
   - Hashin failure theory output is captured with following code.
       -  1 - failure in the tensile first fiber mode.
       - -1 - failure in the compressive first fiber mode.
       -  2 - failure in the tensile second fiber mode.
       - -2 - failure in the compressive second fiber mode.
       -  3 - failure in the tensile matrix mode.
       - -3 - failure in the compressive matrix mode.

8. A function of this entry is to derive equivalent internal PSHELL and MATi entries to describe the composite element. Any sorted echo request will also cause printout and/or punch of the derived PSHELL and MATi entries in User Information Message 4379 and/or the punch file. Use the NASTRAN system cell (361) PRTPCOMP=1 to print equivalent PSHELL/MAT2 Bulk Data entries to the .f06 file. Use the ECHO=PUNCH Case Control command to write them to the .pch file.
9. The failure index for the bonding material is calculated as Failure Index =  ![bulkp06884.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06884.jpg?_LANG=enus) .
10. If the value specified for Z0 is not equal to -0.5 times the thickness of the element and PARAM,NOCOMPS,-1 is specified, then the homogeneous element stresses are incorrect, while element forces and strains are correct. For correct homogeneous stresses, use ZOFFS on the corresponding connection entry.
11. Use of Z0 to offset a laminate does not change the reference plane. Z0 offsets the bottom of the plies from the reference plane. An unsymmetric layup or the use of Z0 to specify an unsymmetric layup, is not recommended in buckling analysis or the calculation of differential stiffness. Also, Z0 should not be used to specify an unsymmetric layup. The presence of coupling between bending and extension generally increases deflections. Hence, coupling decreases the effective stiffness of a laminate, reduces buckling loads and vibration frequencies significantly.
12. To obtain the damping coefficient GE, multiply the critical damping ratio  ![bulkp06886.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06886.jpg?_LANG=enus)  by 2.0.
13. The SYM option for the LAM option computes the complete stiffness properties while specifying half the plies. The MEM, BEND, SMEAR and SMCORE options provide special purpose stiffness calculations. SMEAR ignores stacking sequence and is intended for cases where this sequence is not yet known, stiffness properties are smeared. SMCORE allows simplified modeling of a sandwich panel with equal face sheets and a central core.
14. Element output for the SMEAR and SMCORE options is produced using the PARAM NOCOMPS -1 methodology that suppresses ply stress/strain results and prints results for the equivalent homogeneous element.
15. Temperature-dependent ply properties only available in SOL 106 and SOL 400. See PARAM,COMPMATT for details.
16. PCOMP is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PCOMP property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PSHELL, PCOMP, PCOMPG entries.
17. For PCOMP, the non-default Zo option should not be used in conjunction with MEM, BEND, SMEAR or SMCORE as wrong results may occur. These four options provide special purpose stiffness calculations wherein stacking sequence effects are ignored (membrane-bending coupling terms are set to zero) at the preliminary design stage level. A better choice for offsets is to use the ZOFF option on the connectivity entries (CQUAD4, CTRIA3 etc).
A User Fatal Message is issued if the user specifies a non-default value of Zo for any of the above smearing options. The fatal message may be changed to a User Warning Message by specifying a positive value for system cell 668 (e.g. nastran system(668)=1) to allow the program to continue.
18. In SOL400 only, this entry may refer to MAT4 or MAT5 entries. If it does, and the user has not supplied PSHLN1 entries, Nastran will internally generate a PSHLN1 entry. For details, the user should refer to Remark   of the PSHLN1 entry.
19. In layer composite output, the traditional element model outputs stress or strain separately by using STRESS or STRAN Case Control Command, respectively.

     The advanced element model does not recognize STRAIN Case Control Command. As long as user gives STRESS Case Control Command, both stress and strain are outputted together (similar to NLSTRESS).

