## [AVLEXB (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.AVLEXB.Case.xhtml) - Control for MSC Nastran-AVL EXCITE™ Interface

Control for MSC Nastran-AVL EXCITE TM  Interface: (1) EXB file export from SOL 103 and SOL 400, (2) EXCITE TM  results import and data recovery in SOL 111, 112 and 400.

#### Format:

![casecontrol4a00816.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00816.jpg?_LANG=enus)

#### Examples:

```nastran
EXB file export
AVLEXB EXBBODY = YES
AVL EXCITE TM  results import and data recovery
AVLEXB EXBBODY=NO AVLPOST=YES POSTUNT=130
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXBBODY   │ Controls the output of MSC Nastran-AVL EXCITETM (Default = NO): 1.NO: Do not output AVL EXB        │
│           │ Flexible body. 2.YES: Output AVL EXB Flexible body.                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MASINVAR  │ Requests the type of mass invariants to be computed (Default = FULL) : 1.FULL: All inertia         │
│           │ invariants are computed. 2.FIRST: Only first order inertia invariants are computed. 3.NONE: No     │
│           │ inertia invariants are computed.                                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RECOVRYM  │ Controls the output of recovery (output transformation) matrix (Default = No) : 1.YES: Output      │
│           │ A-set to (O+M)-set recovery matrix. 2.NO: Do not output the A-set to (O+M)-set recovery matrix.    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXBOSET   │ Selects a set of DOFs for controlling the output of recovery matrix  (Default = ALL): 1.U1-U5:     │
│           │ DOFs in the user defined set only are included in the O-set output to the EXB file and the partial │
│           │ recovery matrix output for these DOFs. These need to be defined in the bulk data using the         │
│           │ USET/USET1 bulk data entry. 2.ALL: Complete O-set in the model is retained for recovery.           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OUTGSTRS  │ Outputs Grid Point Modal Stresses (Default = NO) to the MSC Nastran op2 requires PARAM,POST,1 or   │
│           │ PARAM,POST,-1.                                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OUTGSTRN  │ Outputs Grid Point Modal Strains (Default = NO) to the MSC Nastran op2 requires PARAM,POST,1 or    │
│           │ PARAM,POST,-1.                                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ V1ORTHO   │ Lower frequency bound of the Craig-Bampton modes in cycles/unit time. value1: Value of the lower   │
│           │ bound.                                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ V2ORTHO   │ Higher frequency bound of the Craig-Bampton modes in cycles/unit time. value2: Value of higher     │
│           │ bound.                                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MFFEXP    │ Requests output of Mass matrix of O+M set (Default = No). MFFEXP = YES requires the user to        │
│           │ request full recovery (RECOVRYM=YES and EXBOSET = ALL).                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOD6      │ If model is pure bar/beam elements with concentrated masses, this option can output the element    │
│           │ dictionary table as well as element stiffness matrix (Default = No): 1.YES: Output KDICT & KELM    │
│           │ 2.NO: Do not output KDICT & KELM If NOD6 = YES these parameters are automatically set MASINVAR =   │
│           │ NONE, RECOVRYM = NO, MFFEXP = NO, EXBOSET = YES                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AVLPOST   │ Requests data recovery using the INP4 file generated by AVL EXCITETM (Default = No): 1.YES:        │
│           │ Request data recovery 2.NO: data recovery AVLPOST = YES requires EXBBODY = NO as the MSC Nastran   │
│           │ AVL EXCITETM interface cannot generate the EXB file and conduct data recovery in the same run.     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ POSTUNT   │ Unit number of the assigned INP4 file generated by AVL EXCITETM which will be used for data        │
│           │ recovery.                                                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXBONLY   │ Requests standard DMAP solution and data recovery following MSC Nastran-AVL EXCITETM interface     │
│           │ (Default = NO): 1.NO: Proceed with standard DMAP solution and data recovery after generating EXB   │
│           │ file. 2.YES: Executes only MSC Nastran-AVL EXCITETM interface.                                     │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
