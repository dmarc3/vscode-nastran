## [PBUSHT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PBUSHT.xhtml) - Frequency Dependent or Nonlinear Force Deflection Spring and Damper Property

Defines the frequency dependent properties or the stress dependent properties for a generalized spring and damper structural element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBUSHT  PID     “K”     TKID1   TKID2   TKID3   TKID4   TKID5   TKID6   +       
+               “B”     TBID1   TBID2   TBID3   TBID4   TBID5   TBID6   +       
+               “GE”    TGEID1  TGEID2  TGEID3  TGEID4  TGEID5  TGEID6  +       
+               “KN”    TKNID1  TKIND2  TKNID3  TKIND4  TKIND5  TKIND6  +       
+                       FDC     FUSE    DIR     OPTION  LOWER   UPPER   +       
+                       FSRS    LRGR                                            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBUSHT  35      K       72                                              +       
+               B       18                                                      
```

```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PID       │ Property identification number that matches the   │                                                   │
│           │ identification number on a PBUSH entry. (Integer  │                                                   │
│           │ > 0)                                              │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ “K”       │ Flag indicating that the next 1 to 6 fields are   │                                                   │
│           │ stiffness frequency table identification numbers. │                                                   │
│           │ (Character)                                       │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TKIDi     │ Identification number of a TABLEDi entry that     │                                                   │
│           │ defines the stiffness vs. frequency relationship  │                                                   │
│           │ in directions 1 through 6. (Integer > 0; Default  │                                                   │
│           │ = 0)                                              │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ “B”       │ Flag indicating that the next 1 to 6 fields are   │                                                   │
│           │ force per velocity frequency table identification │                                                   │
│           │ numbers. (Character)                              │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TBIDi     │ Identification number of a TABLEDi entry that     │                                                   │
│           │ defines the force per unit velocity damping vs.   │                                                   │
│           │ frequency relationship in directions 1 through 6. │                                                   │
│           │ (Integer > 0; Default = 0)                        │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ “GE”      │ Flag indicating that the next field is a          │                                                   │
│           │ structural damping frequency table identification │                                                   │
│           │ number. (Character)                               │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TGEIDi    │ Identification number of a TABLEDi entry that     │                                                   │
│           │ defines the non-dimensional structural damping    │                                                   │
│           │ vs. frequency relationship. (Integer > 0; TGEID1  │                                                   │
│           │ default = 0, for TGEID2-6 see defaults described  │                                                   │
│           │ in Remark 6.)                                     │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ “KN”      │ Flag indicating that the next 1 to 6 fields are   │                                                   │
│           │ nonlinear force-deflection table identification   │                                                   │
│           │ numbers. (Character)                              │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TKNIDi    │ Identification number of a TABLEDi entry that     │                                                   │
│           │ defines the force vs. deflection relationship in  │                                                   │
│           │ directions 1 through 6. (Integer > 0;             │                                                   │
│           │ Default = 0)                                      │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ FDC       │ Force deflection curve rule. Specifies a          │                                                   │
│           │ dependence between displacement components. See   │                                                   │
│           │ Remark 16. for use with the FUSE option.          │                                                   │
│           │ (Character or blank default blank)                │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ “NR” or blank                                     │ Implies there is no force deflection rule. T1-R6  │
│           │                                                   │ directions are all independent of each other.     │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ “TRXY”                                            │ A radial dependence exists between  and  element  │
│           │                                                   │ displacements. Either K1 or K2 may be specified   │
│           │                                                   │ on the PBUSH entry. If both are specified then K1 │
│           │                                                   │ will be used. On the PBUSHT “KN” entry either     │
│           │                                                   │ TKNID1 or TKNID2 may be specified. If both are    │
│           │                                                   │ specified then TKNID1 is used. The expression     │
│           │                                                   │ is used for table lookup. Under the OPTION=ULTLD, │
│           │                                                   │ the force used for the fuse calculation is        │
│           │                                                   │ computed using . Under the OPTION=RULTLD, the     │
│           │                                                   │ true forces  and  in the springs "x" and "y" are  │
│           │                                                   │ used for the fuse calculation. New K1 is returned │
│           │                                                   │ from slope of load-deflection curve at slope at   │
│           │                                                   │ current .                                         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ “TRXZ”                                            │ A radial dependence exists between  and  element  │
│           │                                                   │ displacements. Either K1 or K3 may be specified   │
│           │                                                   │ on the PBUSH entry. If both are specified then K1 │
│           │                                                   │ is used. On the PBUSHT “KN” entry either TKNID1   │
│           │                                                   │ or TKNID3 may be specified. If both are specified │
│           │                                                   │ then TKNID1 is used. The expression   is used for │
│           │                                                   │ table lookup. Under the OPTION=ULTLD, the force   │
│           │                                                   │ used for the fuse calculation is computed using . │
│           │                                                   │ Under the OPTION=RULTLD, the true forces  and  in │
│           │                                                   │ the springs "x" and "z" are used for the fuse     │
│           │                                                   │ calculation. New K1 is returned from slope of     │
│           │                                                   │ load-deflection curve at slope at current .       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ “TRYZ”                                            │ A radial dependence exists between  and  element  │
│           │                                                   │ displacements. Either K2 or K3 may be specified   │
│           │                                                   │ on the PBUSH entry. If both are specified then K2 │
│           │                                                   │ is used. On the PBUSHT “KN” entry either TKNID2   │
│           │                                                   │ or TKNID3 may be specified. If both are specified │
│           │                                                   │ then TKNID2 is used. The expression   is used for │
│           │                                                   │ table lookup. Under the OPTION=ULTLD, the force   │
│           │                                                   │ used for the fuse calculation is computed using . │
│           │                                                   │ Under the OPTION=RULTLD, the true forces  and  in │
│           │                                                   │ the springs "y" and "z" are used for the fuse     │
│           │                                                   │ calculation. New K2 is returned from slope of     │
│           │                                                   │ load-deflection curve at slope at current .       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ “TS”                                              │ A spherical dependence exists between , , and     │
│           │                                                   │  element displacements. Either K1, K2 or K3 may   │
│           │                                                   │ be specified on the PBUSH entry. If all three are │
│           │                                                   │ specified K1 is used. IF only K2 and K3 are       │
│           │                                                   │ specified then K2 is used. On the PBUSHT “KN”     │
│           │                                                   │ entry TKNID1, or TKNID2 or TKNID3 may be          │
│           │                                                   │ specified. If all three are specified then TKNID1 │
│           │                                                   │ is used. If only TKNID2 and TKNID3 are specified  │
│           │                                                   │ then TKNID2 is used. The expression   is used for │
│           │                                                   │ table lookup. Under the OPTION=ULTLD, the force   │
│           │                                                   │ used for the fuse calculation is computed using . │
│           │                                                   │ Under the OPTION=RULTLD, the true forces ,  and   │
│           │                                                   │ in the springs "x", "y", and "z" are used for the │
│           │                                                   │ fuse calculation. New K1 is returned from slope   │
│           │                                                   │ of load-deflection curve at slope at current      │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ FUSE      │ 0                                                 │ The element remains active irrespective of        │
│           │                                                   │ failure level. (Integer 0, 1, or 2, Default = 0)  │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 1                                                 │ The element is deactivated if maximum failure as  │
│           │                                                   │ specified in OPTION is reached. Elements remains  │
│           │                                                   │ for postprocessing.                               │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 2                                                 │ The element is deactivated if maximum failure as  │
│           │                                                   │ specified in OPTION is reached. Element is        │
│           │                                                   │ removed from postprocessing.                      │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ DIR       │ The fuse direction component numbers. (Any unique │                                                   │
│           │ combination of the Integers 1 through 6 with no   │                                                   │
│           │ embedded blanks; Default = 0)                     │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 0                                                 │ Any direction is allowed to fuse. Same if user    │
│           │                                                   │ entered 123456.                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 1 through 6 may be placed in the field with no    │                                                   │
│           │ embedded blanks. See Remark 13. for use with FDC. │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ OPTION    │ Specifies a failure mode. (Character -            │                                                   │
│           │ Default="RELDIS")                                 │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ “ULTLD”                                           │ The specified failure load in compression or      │
│           │                                                   │ tension will be used to define failure using load │
│           │                                                   │ computed from the appropriate radial dependence   │
│           │                                                   │ of displacement relationship.                     │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ “RELDIS”                                          │ The specified max relative + displacement will be │
│           │                                                   │ used to define failure.                           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ “RULTLD”                                          │ The specified failure load in compression or      │
│           │                                                   │ tension will be  used to define failure using the │
│           │                                                   │ actual current physical load in each spring.      │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ LOWER     │ Lower failure bound. (Real; Default=0.0)          │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ If OPTION = “ULTLD”then LOWER specifies a lower   │                                                   │
│           │ failure load                                      │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ If OPTION = “RELDIS” then LOWER specifies a       │                                                   │
│           │ minimum relative displacement before failure.     │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ UPPER     │ Upper failure bound. (Real; Default=0.0)          │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ If OPTION = “ULTLD”then UPPER specifies an upper  │                                                   │
│           │ failure load.                                     │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ If OPTION = “RELDIS” then UPPER specifies a       │                                                   │
│           │ maximum relative displacement before failure.     │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ FSRS      │ Fuse Stiffness Retention Factor is a factor which │                                                   │
│           │ scales the stiffness so that the stiffness does   │                                                   │
│           │ not instantly drop to a zero value. (Real > 0.0;  │                                                   │
│           │ Default = 1.-5)                                   │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ LRGR      │ Specifies if large rotation is to occur at end A. │                                                   │
│           │ (Integer > 0; Default = 0). See Remark 14.        │                                                   │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. The “K”, “B”, and “GE” fields are associated with same entries on the PBUSH entry.
2. PBUSHT may only be referenced by CBUSH elements in the residual structure which do not attach to any omitted degrees-of-freedom of ASET and/or dependent DOFs of MPC/Rigid elements. Otherwise, the solution is an approximation based on nominal properties.
3. For nonlinear analysis the nominal values are used at the beginning of the analysis to compute initial loading of the CBUSH element and meaningful values should be supplied for stiffness. As the nonlinear analysis proceeds, the user supplied load deflection curves are used to compute new stiffness values. For frequency dependent modal frequency response the system modes are computed using the nominal Ki values. The frequency-dependent values are used at every excitation frequency.
4. The “K”, “B”, “GE” or “KN” fields may be specified in any order.
5. The PBUSHT is used in SOL 108 and SOL 111 when any “K”, “B”, or “GE” is specified. It is used in SOL 106, SOL 129 or SOL 400 when “KN” is specified. It is ignored in all other solution sequences.
6. For upward compatibility, if ONLY TGEID1 is specified on a PBUSHT entry and TGEIDi,
i = 2 – 6 are all blank on the PBUSHT entry, then the single structural damping table is applied to all defined GEi for the PBUSH entry. In this case, TGEIDi, i = 2 – 6, blank is not equivalent to 0 but a special flag.

     A PBUSHT entry that has any TGEIDi, i = 2 – 6 numerically specified including a 0, all the fields TGEIDi are then treated separately and any TGEIDi, i=2 - 6 field with no entry specified is defaulted to a 0 value and the results are radically different from the no TGEIDi, i=2 – 6 specified as described above.

     Thus for the entry: 

     ```nastran
     $---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
     PBUSHT  3303000 K       33030001                                        +       
     +               GE      33030002                                                
     ```

     The GE table ID 3303002 will be replicated to fields 5 through 9. While:  

     ```nastran
     $---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
     PBUSHT  3303000 K       33030001                                        +        
     +               GE      330300020                                               
     ```

     The 0 in FIELD 5 of the above PBUSHT above negates table 3303002 being replicated, hence, fields 5 through 9 will not have any associated table lookup.

7. For nonlinear analysis, only the “KN” line and optionally its two continuation lines are used.
8. For frequency responses, only the “K”, “B” and/or “GE” fields are used.
9. The continuations entries to “KN” are optional.
10. When the FDC field specifies one of the optional radial or spherical rules, stiffness entries not involved in the rule may still have their own independent force-deflection curves.
11. If FUSE=0, the remaining entries are ignored. If FUSE > 0, the “OPTION”, “UPPER”, and “LOWER” fields must be specified.
12. UPPER > LOWER required.
13. The following relationships exists between FDC and DIR

```text
┌──────────────┬──────────────────────────────────────────────────┬───────────────────────────────────────┐
│ FDC = “TRXY” │ 1 or 2 or 12 in the DIR field applies to the     │ a 3 in the DIR field will be ignored. │
│              │ radial rule                                      │                                       │
├──────────────┼──────────────────────────────────────────────────┼───────────────────────────────────────┤
│ FDC = “TRXZ” │ 1 or 3 or 13in the DIR field applies to the      │ a 2 in the DIR field will be ignored. │
│              │ radial rule                                      │                                       │
├──────────────┼──────────────────────────────────────────────────┼───────────────────────────────────────┤
│ FDC = “TRYZ” │ 2 or 3 or 23 in the DIR field applies to the     │ a 1 in the DIR field will be ignored. │
│              │ radial rule                                      │                                       │
├──────────────┼──────────────────────────────────────────────────┼───────────────────────────────────────┤
│ FDC = “TS”   │ Any unique combination of the integers 1 through │                                       │
│              │ 3 with no embedded blanks in the DIR field       │                                       │
│              │ applies to the spherical rule                    │                                       │
└──────────────┴──────────────────────────────────────────────────┴───────────────────────────────────────┘
```

14. LRGR = 0 (Default) the element coordinate system is rotated with the rotation of grid A for both the CID and the V vector. LRGR = 1 will suppress large rotation at end A. The initial CID and the V vector will remain unchanged. LRGR = 2 a mid-increment method is used to rotate the element system for the V vector. LRGR = 2 is deactivated if CID is not blank. When CID is blank, LRGR = 2 is recommended for SOL400 when large rotations are present as the mid-increment method “averages” the rotations at both ends of the CBUSH and allows rotation when end A might have a rotational constraint.
15. When the fuse criteria is reached in one of the stiffness components, the entire element is assumed to fail. The component stiffnesses are then computed to be  ![bulkp06874.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06874.jpg?_LANG=enus)  at initial failure.
16. The figures below depict, using FDC=TRYZ as a typical example, the OPTION="ULTLD" and OPTION="RULTLD". Under the OPTION="ULTLD" the resultant Fr load when FUSED will be  ![bulkp06876.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06876.jpg?_LANG=enus) . Under the OPTION="RULTLD" the resultant Fr load when FUSED will in general be  ![bulkp06878.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06878.jpg?_LANG=enus)  with one of the  ![bulkp06880.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06880.jpg?_LANG=enus) . For  FDC=TRYZ and DIR=123, the T1 direction is not included in the force direction curve rule, thus possible fusing in the T1 direction is always based on the actual T1 spring displacement and  Fx  if active will be  ![bulkp06882.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06882.jpg?_LANG=enus) . For FDC=NR fusing is always calculated based on each individual spring displacement and the actual individual spring loading.

![pbusht_figure.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/pbusht_figure.jpg?_LANG=enus)

Figure 0-82   FUSE Models

