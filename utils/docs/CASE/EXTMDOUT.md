## [EXTMDOUT (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.EXTMDOUT.Case.xhtml) - External Module Creation Specification

Request the creation of an external module in SOLs 101, 103, 107 through 112, or 400 only.

#### Format:

![casecontrol4a00970.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00970.jpg?_LANG=enus)  

#### Example(s):

```nastran
EXTMDOUT
EXTMDOUT(DMIGOP2=26)
EXTMDOUT(ASMBULK EXTID=200)
EXTMDOUT(ASMBULK EXTBULK EXTID=100)
EXTMDOUT(ASMBULK=AUTO EXTBULK EXTID=100)
EXTMDOUT(ASMBULK=MANQ EXTID=10 DMIGDB)
EXTMDOUT(ASMBULK EXTID=100 DMIGOP2=26)
EXTMDOUT(ASMBULK EXTID=100 DMIGPCH)
EXTMDOUT(ASMBULK EXTID=100 DMIGSFIX=XSE100 DMIGPCH)
EXTMDOUT(ASMBULK EXTID=200 DMIGSFIX=EXTID DMIGPCH)
EXTMDOUT(ASMBULK EXTID=100 MATOP4=26)
EXTMDOUT(ASMBULK EXTID=200 MATOP4=-25)
```

(See also Remarks  17.  and  18. )

```text
┌─────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STIFFNESS   │ Store the boundary stiffness matrix. See Remarks 1. and 2.                                         │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MASS        │ Store the boundary mass matrix. See Remark 1.                                                      │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DAMPING     │ Store the boundary viscous damping matrix. See Remarks 1. and 2.                                   │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ K4DAMP      │ Store the boundary structural damping matrix. See Remark 1.                                        │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LOADS       │ Store the boundary static loads matrix. See Remark 1.                                              │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ASMBULK or  │ Generate Bulk Data entries for use in a subsequent module assembly process and store them on the   │
│ ASMBULK =   │ assembly punch file (.asm). This data, which is used in the main bulk data portion of a subsequent │
│ MAN         │ assembly job, includes an MDBULK entry that specifies MANUAL as the method for searching boundary  │
│             │ points, and an MDCONCT entry that defines connections for boundary grid and scalar points. See     │
│             │ Remarks 3., 5., and 14.                                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ASMBULK =   │ Generate Bulk Data entries for use in a subsequent module assembly process, and store them on the  │
│ AUTO        │ assembly punch file (.asm). This data, which is to be used in the main bulk data portion of a      │
│             │ subsequent assembly job, includes an MDBULK entry that specifies AUTO as the method for searching  │
│             │ boundary points, and an MDCONCT entry that defines connections for boundary scalar points. See     │
│             │ Remarks 3., 5., and 14.                                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXTBULK     │ Generate Bulk Data entries related to the external module and store them on the standard punch     │
│             │ file (.pch). This data is used in the BEGIN MODULE portion of the bulk data of a subsequent        │
│             │ assembly job. EXTBULK need not be specified if DMIGPCH or MATOP4 (see the following descriptions)  │
│             │ is specified. See Remarks 3., 6., 7. and 14. Note that, in general, the EXTBULK keyword is not     │
│             │ required and is provided solely for user convenience. In the absence of EXTBULK and the associated │
│             │ output on the standard punch file resulting from it, the subsequent assembly job will retrieve the │
│             │ required data for the external superelement from the medium on which the boundary matrices are     │
│             │ stored.                                                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXTID=mdid  │ mdid (integer > 0) is the module ID to be used on the MDBULK and MDCONCT (if applicable) Bulk Data │
│             │ entries stored on the assembly punch file (.asm) if ASMBULK is specified, and in the BEGIN MODULE  │
│             │ Bulk Data entry stored on the standard punch file (.pch) if EXTBULK or DMIGPCH is specified. See   │
│             │ Remarks 3. to 8., 12., and 16.                                                                     │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DMIGSFIX =  │ cccccc is the suffix (up to six characters) to be employed in the names of the DMIG matrices       │
│ cccccc      │ stored on the standard punch file (.pch) if the DMIGPCH option is specified. See Remarks 9. to     │
│             │ 12. See also Example 3 in Remark 17.                                                               │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DMIGSFIX =  │ The mdid defined by the EXTID keyword is the suffix to be employed in the names of the DMIG        │
│ EXTID       │ matrices stored on the standard punch file (.pch) if the DMIGPCH option is specified. See Remarks  │
│             │ 3., 9. to 12. See also Example 3 in Remark 17.                                                     │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MATDB (or   │ Store the boundary matrices and other information on the database. Dbext is the name of a new      │
│ MATRIXDB) = │ dbset on which to store the boundary matrices.  Dbext must be allocated on an INIT FMS statement.  │
│ dbext       │   By default, matrices are stored on DBALL. See Example 1 in Remark 17. Dbext is required if       │
│ (Default)   │ 3-step external module data recovery will be performed.                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DMIGDB=     │ Similar to MATDB (or MATRIXDB) except that the boundary matrices are stored as DMIG Bulk Data      │
│ dbext       │ entries on the database.Dbext is the name of a new dbset on which to store the boundary matrices.  │
│             │ Dbext must be allocated on an INIT FMS statement.   By default, matrices are stored on DBALL. See  │
│             │ Example 1 in Remark 17. Dbext is required if 3-step external module data recovery will be          │
│             │ performed.                                                                                         │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DMIGOP2 =   │ Store the boundary matrices as DMIG Bulk Data entries on an .op2 file whose Fortran unit number is │
│ unitop2     │ given by unitop2 (Integer > 0). See Remark 15. See also Example 2 in Remark 17.                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DMIGPCH     │ Store the boundary matrices as DMIG Bulk Data entries on the standard punch file (.pch). Note      │
│             │ that, if boundary matrices include both structural and fluid grids, use DMIGOP2 instead. See       │
│             │ Remarks 3. and 6. to 14. See also Example 3 in Remark 17.                                          │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MATOP4 =    │ unitop4 is a non-zero integer with the following meanings: unitop4 > 0 Store the boundary matrices │
│ unitop4(or  │ in sparse format on an .op4 file whose Fortran unit number is given by unitop4 unitop4 < 0 Store   │
│ MATRIXOP4 = │ the boundary matrices in non-sparse format on an .op4 file whose Fortran unit number is given by   │
│ unitop4)    │ |unitop4| See Remarks 3., 6., 7., 14., and 15. See also Example 4 in Remark 17.                    │
└─────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
