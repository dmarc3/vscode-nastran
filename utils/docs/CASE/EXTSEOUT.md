## [EXTSEOUT (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.EXTSEOUT.Case1.xhtml) - External Superelement Creation Specification

Request the creation of an external superelement in SOLs 101, 103, 107 through 112, or 400 only.

#### Format:

![casecontrol4a00972.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00972.jpg?_LANG=enus)  

#### Example(s):

```nastran
EXTSEOUT
EXTSEOUT(DMIGOP2=26)
EXTSEOUT(ASMBULK EXTID=200)
EXTSEOUT(ASMBULK EXTBULK EXTID=100)
EXTSEOUT(ASMBULK=AUTO EXTBULK EXTID=100)
EXTSEOUT(ASMBULK=MANQ EXTID=10 DMIGDB)
EXTSEOUT(ASMBULK EXTID=100 DMIGOP2=26)
EXTSEOUT(ASMBULK EXTID=100 DMIGPCH)
EXTSEOUT(ASMBULK EXTID=100 DMIGSFIX=XSE100 DMIGPCH)
EXTSEOUT(ASMBULK EXTID=200 DMIGSFIX=EXTID DMIGPCH)
EXTSEOUT(ASMBULK EXTID=100 MATOP4=26)
EXTSEOUT(ASMBULK EXTID=200 MATOP4=-25)
EXTSEOUT(ASMBULK=MANQ,EXTBULK,EXTID=20,HDF5)
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
│ FSCOUP      │ Store the boundary fluid-structure coupling matrix. See Remark 1.                                  │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ASMBULK or  │ Generate Bulk Data entries for use in a subsequent superelement assembly process and store them on │
│ ASMBULK =   │ the assembly punch file (.asm). This data, which is used in the main bulk data portion of a        │
│ MAN         │ subsequent assembly job, includes an SEBULK entry that specifies MANUAL as the method for          │
│             │ searching boundary points, and an SECONCT entry that defines connections for boundary grid and     │
│             │ scalar points. See Remarks 3., 6., and 15.                                                         │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ASMBULK =   │ Similar to the ASMBULK = MAN option, except that the generated SECONCT entry defines connections   │
│ MANQ        │ not only for boundary grid and scalar points, but also for Q-set points. This allows the user to   │
│             │ have control over the Q-set points of the external superelement in the subsequent assembly job.    │
│             │ See Remarks 3., 5., and 15.                                                                        │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ASMBULK =   │ Generate Bulk Data entries for use in a subsequent superelement assembly process, and store them   │
│ AUTO        │ on the assembly punch file (.asm). This data, which is to be used in the main bulk data portion of │
│             │ a subsequent assembly job, includes an SEBULK entry that specifies AUTO as the method for          │
│             │ searching boundary points, and an SECONCT entry that defines connections for boundary scalar       │
│             │ points. See Remarks 3., 6., and 15.                                                                │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXTBULK     │ Generate Bulk Data entries related to the external superelement and store them on the standard     │
│             │ punch file (.pch). This data is used in the BEGIN SUPER portion of the bulk data of a subsequent   │
│             │ assembly job. EXTBULK need not be specified if DMIGPCH or MATOP4 (see the following descriptions)  │
│             │ is specified. See Remarks 3., 7., 8., and 15. Note that, in general, the EXTBULK keyword is not    │
│             │ required and is provided solely for user convenience. In the absence of EXTBULK and the associated │
│             │ output on the standard punch file resulting from it, the subsequent assembly job will retrieve the │
│             │ required data for the external superelement from the medium on which the boundary matrices are     │
│             │ stored.                                                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXTID=seid  │ seid (integer > 0) is the superelement ID to be used on the SEBULK and SECONCT (if applicable)     │
│             │ Bulk Data entries stored on the assembly punch file (.asm) if ASMBULK is specified, and in the     │
│             │ BEGIN SUPER Bulk Data entry stored on the standard punch file (.pch) if EXTBULK or DMIGPCH is      │
│             │ specified. See Remarks 3. - 9., 13., and 17.                                                       │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DMIGSFIX =  │ cccccc is the suffix (up to six characters) to be employed in the names of the DMIG matrices       │
│ cccccc      │ stored on the standard punch file (.pch) if the DMIGPCH option is specified. See Remarks 10. -     │
│             │ 13. See also Example 3 in Remark 18.                                                               │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DMIGSFIX =  │ The seid defined by the EXTID keyword is the suffix to be employed in the names of the DMIG        │
│ EXTID       │ matrices stored on the standard punch file (.pch) if the DMIGPCH option is specified. See Remarks  │
│             │ 3., 10. - 13. See also Example 3 in Remark 18.                                                     │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MATDB (or   │ Store the boundary matrices and other information on the database. Dbext is the name of a new      │
│ MATRIXDB) = │ dbset on which to store the boundary matrices.  Dbext must be allocated on an INIT FMS statement.  │
│ dbext       │   By default, matrices are stored on DBALL. See Example 1 in Remark 18. Dbext is required if       │
│ (Default)   │ 3-step external superelement data recovery will be performed.                                      │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DMIGDB=     │ Similar to MATDB (or MATRIXDB) except that the boundary matrices are stored as DMIG Bulk Data      │
│ dbext       │ entries on the database.Dbext is the name of a new dbset on which to store the boundary matrices.  │
│             │ Dbext must be allocated on an INIT FMS statement.   By default, matrices are stored on DBALL. See  │
│             │ Example 1 in Remark 18. Dbext is required if 3-step external superelement data recovery will be    │
│             │ performed.                                                                                         │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DMIGOP2 =   │ Store the boundary matrices as DMIG Bulk Data entries on an .op2 file whose Fortran unit number is │
│ unitop2     │ given by unitop2 (Integer > 0). See Remark 16. See also Example 2 in Remark 18.                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DMIGPCH     │ Store the boundary matrices as DMIG Bulk Data entries on the standard punch file (.pch). Note      │
│             │ that, if boundary matrices include both structural and fluid grids, use DMIGOP2 instead. See       │
│             │ Remarks 3. and 7. - 15. See also Example 3 in Remark 18.                                           │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MATOP4 =    │ unitop4 is a non-zero integer with the following meanings: unitop4 > 0 Store the boundary matrices │
│ unitop4(or  │ in sparse format on an .op4 file whose Fortran unit number is given by unitop4 unitop4 < 0 Store   │
│ MATRIXOP4 = │ the boundary matrices in non-sparse format on an .op4 file whose Fortran unit number is given by   │
│ unitop4)    │ |unitop4| See Remarks 3., 7., 8., 15., and 16. See also Example 4 in Remark 18.                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HDF5        │ Output the required reduced matrices, loads, displacement OTM of the current run to support the    │
│             │ generation of the smart superelement (SSE) to the file jobname.odys.h5                             │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ASET/QSET   │ Specifies how the external superelement’s q-set dofs (dynamic degrees-of-freedom) are defined on   │
│             │ the exported file. By default, all q-set dofs are written to QSET/QSET1 entries which means the    │
│             │ superelement’s modes will be “added” to but not synthesized into the assembly’s modes.   By        │
│             │ specifying ASET, the q-set dofs are written to ASET/ASET1 entries and will be synthesized into the │
│             │ assembly’s. The ASET/QSET switch does not affect DMIGPCH media option which always writes          │
│             │ ASET/ASET1 entries.                                                                                │
└─────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
