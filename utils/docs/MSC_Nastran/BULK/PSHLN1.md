## [PSHLN1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PSHLN1.xhtml) - Nonlinear Property Extensions for a PSHELL or PCOMP(G) Entry

Specifies additional nonlinear properties for shell elements that point to a PSHELL or PCOMP(G) entry in SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PSHLN1  PID     MID1    MID2            ANAL                            +       
+       “C3”    BEH3    INT3    BEH3H   INT3H                           +       
+       “C4”    BEH4    INT4    BEH4H   INT4H                           +       
+       “C6”    BEH6    INT6    BEH6H   INT6H                           +       
+       “C8”    BEH8    INT8    BEH8H   INT8H                                   
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PSHLN1  22      98                                                              
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of an existing PSHELL or PCOMP(G) entry. (Integer > 0)              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID1      │ Membrane material identification number. See Remark 17. (Integer > 0 or blank)                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID2      │ Bending material identification number. See Remark 17. (Integer > 0 or blank)                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ANAL      │ Analysis type. ANAL = ‘IS’ - Implicit structural elements are being referred to. ANAL = ‘IH’ -     │
│           │ Implicit heat analysis elements are being referred to. ANAL = ‘ISH’ - Implicit structural and heat │
│           │ elements are being referred to. (Character Default ISH)                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C3        │ Keyword indicating that two items following apply to elements with three corner grids. (Character) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C4        │ Keyword indicating that two items following apply to elements with four corner grids. (Character)  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C6        │ Keyword indicating that items following apply to elements with three corner grids and three        │
│           │ midside grids. (Character)                                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C8        │ Keyword indicating that two items following apply to elements with four corner grids and four      │
│           │ midside grids. (Character)                                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BEHi      │ Element structural behavior. See Remark 12. (Character Default: DCTN for BEH3, DCT for BEH4, and   │
│           │ DCT for BEH8, MB for BEH6)                                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INTi      │ Integration scheme. See Remarks 11. and 13. (Character Default: LDK for INT3, L for INT4, QRI for  │
│           │ INT8, Q for INT6)                                                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BEHiH     │ Element heat behavior. See Remark 12. (Character Default: DCT for BEH3H, BEH4H, and BEH8H, MB for  │
│           │ BEH6H)                                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INTiH     │ Integration scheme. See Remarks 11. and 13. (Character Default: L for INT3H, L for INT4H, Q for    │
│           │ INT8H and INT6H)                                                                                   │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The PID must point to an existing PSHELL, PCOMP, or PCOMPG Bulk Data entry and is honored only in SOL 400.
2. The keyword entries may occur in any order or not at all. If a keyword entry is missing, its defaults are assumed.
3. MID1 if blank (or 0) use the MID1 value on the PSHELL. If > 0 it will override the MID1 value on the PSHELL. MID1 is ignored for PCOMP/PCOMPG.
4. MID2:
     - If BEHi = DCT or DCTN: If blank (or 0) use the MID2 value on the PSHELL. If > 0 it will override the MID2 value on the PSHELL. If MID2 = -1 on the PSHELL entry it must be replaced with a positive value MID2 entry or the PSHELL should be replaced with a PLPLANE entry and a PSHLN2 entry should be used instead of a PSHLN1 entry.
     - If BEHi = MB: MID2 on both the PSHELL and PSHLN1 entries are ignored.
     - MID2 is ignored for PCOMP/PCOMPG.
5. The MID1 or MID2 entries, were applicable, may point to MAT1, MAT2, MAT8, MATHE and MATSMA entries. The table below shows associated nonlinear entries. The association is established through the material entries having the same values as the MID1 or MID2 entries.

          Caution: The primary MATHE and the secondary MATVE, MATVP, MATEP, MATF, and MATS8 entries are only associated with a Shell (CQUAD4, CQUADR, CQUAD8, CTRIA3, CTRIAR, or CTRIA6) element if the Shell element refers to a PSHLN1 entry.

     The MID entry for nonlinear heat may point to MAT4 or MAT5 entries.

          See link for table.

6. If MID3 is not specified on the PSHELL, BEH4 = DCTN with INT4 = LDK should be used and any CQUAD8 elements using this PSHELL should have a new PSHELL with MID3 specified. If not a fatal message will be issued. MID3 is not used for PCOMP/PCOMPG.
7. If MID2 is not specified on the PSHELL or overridden with a nonzero value on the PSHLN1, BEH4 = MB. and BEH8 = MB. If not, a fatal message will be issued.

     See link for tables.

8. NSM is not currently supported when this entry is used.
9. When this entry points to a PCOMP or a PCOMPG, special restrictions should be noted for some of the PCOMP/PCOMPG entries:
     - NSM, FT and GE are not supported. If a failure theory for any ply defined on the PCOMP/PCOMG entry is required, a MATF entry should be specified for the associated material.
     - The allowable inter-laminar bond strength SB is supported. When used in conjunction with the parabolic shear option (NLMOPTS, TSHEAR), the provided value of SB is used to calculate the ply shear bond index for thick shells using the relation - Bond index = max(inter-laminar shear stress)/SB.
     - LAM=BLANK and LAM=SYM (only for PCOMP) are supported. No smearing i.e., conversion of PCOMP/PCOMG into equivalent PSHELL is supported. Conventional integration through the thickness and across all layers is used. LAM=MEM, BEND, SMEAR and SMCORE are treated in a manner similar to LAM=BLANK, i.e., the sequence of the plies and the data given for each ply is used to carry out the conventional thickness integration.
     - SOUTi is not supported for individual plies. If STRESS output is requested for a particular shell element, then integration point stresses and elastic strains in the material coordinate system for all plies of the element are printed. If the parabolic shear option is used, then integration point values of the inter-laminar stresses and the bond index are also printed.
     - Layer Composite (PCOM/PCOMG) is not supported to CTRAI6 by PSHLN1.
10. If BEHi = MB is selected on PSHLN1, any ZOFF entry on the element connection entry will be ignored with a user warning.
11. In the following table, BEHi refers to the nonlinear structural behavior of shell elements. An  underlined  item delineates a default.

     See link for tables.

12. In the following table, BEHiH refers to the nonlinear heat behavior of shell elements. An  underlined  item delineates a default.

     See link for table.

13. Integration codes in Remark   are:

     See link for table.

14. Smeared shell formulation will be used in case MID1 and MID2 are different from one another or different from MID3 used on the corresponding PSHELL entry. Smeared shell formulation allows membrane, bending and transverse shear properties to be defined independently, however, it is limited to linear elastic material behavior only.
15. For creep material defined through MATVP, VALC=0 must be set on NLMOPTS, for explicit formulation if BEH=PSTRS.
16. For shape memory materials defined through MATSMA, only the thermo-mechanical model is available if BEH=PSTRS.
17. Structural damping is supported for elements which reference PSHLN1. The structural damping coefficient, GE, is supported for elements using the MAT1 entries.
