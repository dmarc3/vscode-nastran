## [MATUDS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATUDS.xhtml) - Material User Defined Service or Subroutine

Allows the user to provide material routines for use with enhanced material models in SOL 400 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATUDS  MID     MTYPE   GROUP   UNAME                                   +       
+       “INT”   IDATA1  IDATA2  IDATA3  IDATA4  IDATA5  IDATA6  IDATA7  +       
+               IDATA8  IDATA9  ...     ...     IDATAn                  +       
+       “REAL”  RDATA1  RDATA2  RDATA3  RDATA4  RDATA5  RDATA6  RDATA7  +       
+               RDATA8  RDATA9  ...     ...     RDATAn                  +       
+       “CHAR”  CDATA1  CDATA2  ...     ...     CDATAn                          
```

#### Example:

In FMS Section of the MSC Nastran input stream:

CONNECT SERVICE MATERIAL  ![bulkno05880.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05880.jpg?_LANG=enus) SCA.MDSolver.Util.Ums ![bulkno05882.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05882.jpg?_LANG=enus)

In Bulk Data:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATUDS  17      MATEP   MATERIALUELASTOM                                        
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATUDS  17      MATUSR  MATERIALHYPELA2                                 +       
+       REAL    .00134  1.467+4 .03                                     +       
+       INT     8       3                                                       
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Identification number of a MAT1, MAT2, MAT3, MAT8, MAT9, MATHE, MATHP, MATORT, MATUSR, MCOHE, or │
│           │ MATD* entries.                                                                                   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MTYPE     │ The name of the material entry. MAT1, MATEP, MATF, MATHE, MATORT, MATUSR, MATVE, or MATVP.       │
│           │ (Character; no Default).                                                                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GROUP     │ The group name used for the FMS section CONNECT SERVICE statement. (Character; no Default)       │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNAME     │ User subroutine name associated with the entry. See Remark 6.and 7.(Character).                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “INT”     │ Keyword indicating that the following data is integer. (Character)                               │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDATAi    │ Additional user supplied Integer data not already existing on the specified MAT entry. (Integer; │
│           │ no Default)                                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “REAL”    │ Keyword indicating that the following data is real. (Character)                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RDATAi    │ Additional user supplied Real data not already existing on the specified MAT entry. (Real; no    │
│           │ Default)                                                                                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “CHAR”    │ Keyword indicating that the following data is Character. (Character)                             │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CDATAi    │ Additional user supplied Character data not already existing on the specified MAT entry.         │
│           │ (Character; no Default)                                                                          │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry triggers the call to a user material subroutine for advanced nonlinear materials. The GROUP must match the GROUP field of the CONNECT SERVICE FMS statement.
2. On the FMS CONNECT statement, only the CONNECT SERVICE can be used with this entry.
3. The MID must match an existing MID.
4. A CDATAi entry cannot be the Character “REAL”, “INT”, or “CHAR”
5. Certain user subroutines, such as MATHE, require integer or real data input as specified in the User Defined Services document.
6. UNAME must be truncated to 8 characters in the bulk data field.
7. The following user subroutines are currently available for user convenience. See the User Defined Services document for details.

        See link for table.

8. In SOL 400, MATUDS is only supported for elements with property extensions.  This implies that for such elements, PBAR / PBARL, PBEAM / PBEAML, PCOMP / PCOMPG, PROD, PSHEAR, PSHELL, PLPLANE and PSOLID should be associated with PBARN1, PBEMN1, PSHLN1, PRODN1, PSHEARN, PSHLN1, PSHLN2 and PSLDN1 respectively. If the property extensions are missing, they are automatically added with appropriate settings by the program unless the user has set NLMOPTS,SPROPMAP,-1 in the bulk data.
9. The UMAT and UCOHES user subroutines support user defined state variables, see UDSESV entry.
10. For hyper-elastic(or plastic) materials. the deformation gradient is available for bricks and shells in the user-defined material subroutines, the variable IHYPER on the material card should be set to 1. The deformation gradient components F , F , F , F , F , F , F , F  and F can be found in the history variables array in positions IDATA2+1 to IDATA2+9, the positions coming right after the requested number of history variables. For shell elements, the components of the deformation gradient are with respect to the co-rotational system for the element currently used. In this case the third row of the deformation gradient, the components F , F  and F  will not be properly updated when entering the user-defined material routine. These components depend on the thickness strain increment which in turn must be determined so that the normal stress in the shell vanishes. For a given thickness strain increment d3, these three components, f31, f32 and f33, can be determined by calling the subroutine. For hyper-elastic materials there are push forward operations that can be called from within the user defined subroutines too. If the local coordinate system option is invoked (IDATA3=1), then the deformation gradient is transformed to this local system prior to entering the user-defined material routine according to:

     ![bulkno05884.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05884.jpg?_LANG=enus)  

     where  ![bulkno05886.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05886.jpg?_LANG=enus)  refers to a transformation between the current global and material frames. For IDATA equal to 3 one can choose to put IHYPER equal to -1 which results in that the deformation gradient is transformed according to:

     ![bulkno05888.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05888.jpg?_LANG=enus)  

     where  ![bulkno05890.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05890.jpg?_LANG=enus)  is the transformation between the reference global and material and frames. For this latter option the spatial frame remains the global one so the stresses should be expressed in this frame of reference upon exiting the user defined routines. The suitable choice of IHYPER depends on the formulation of the material model. For shells, there is also the option of setting IHYPER=3 which will make the deformation gradient computed from the nodal coordinates and in the global coordinate system. With this option the user must compute the stress in the local system of interest, whence a transformation matrix between the global and this local system is passed to the user material routines. The columns in this matrix correspond to local basis vectors expressed in global coordinates, and this is the system that stress needs to be computed in. The user must be aware that since the deformation gradient is calculated directly from the element deformation it may not be consistent with the theory of the element that is used for the material. Also, the thickness used in the calculations is constant and there is currently no thickness change treatment for this option. In the following, a Neo-Hookean material is used as an example of the usage of the deformation gradient in user-defined materials. With λ and μ being the Lame parameters in the linearized theory, the strain energy density for this material is given by:

     ![bulkno05892.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05892.jpg?_LANG=enus)  

     meaning that the Cauchy stress can be expressed as:

     ![bulkno05894.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05894.jpg?_LANG=enus)  
