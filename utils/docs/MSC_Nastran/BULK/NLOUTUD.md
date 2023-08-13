## [NLOUTUD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.NLOUTUD.xhtml) - User Defined Output Requests For Nonlinear Explicit Analysis.

User defined output requests for elements or Lagrangian grid points. Use in SOL700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLOUTUD NID     GROUP   UNAME   DTOUT   STEPS   OUTNAME                 +       
+       EL1/G1  EL2/G2  Eli/Gli                                                 
```

#### Example:

In FMS Section of the MSC Nastran input stream:

CONNECT SERVICE myuds  ![bulkno06100.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06100.jpg?_LANG=enus) SCA.MDSolver.Obj.Uds.Dytran.InitOut ![bulkno06102.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06102.jpg?_LANG=enus)

In Bulk Data:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLOUTUD 4       MYUDS   EEXOUT  0.01            OUTPUTR1                        
+       1       2       3       4                                               
```

```text
┌─────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Field   │ Contents                                                                                        │
├─────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NID     │ Unique output number. (Integer > 0; Required)                                                   │
├─────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GROUP   │ The group name used for the FMS section CONNECT SERVICE statement. (Character; no Default)      │
├─────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNAME   │ Name User subroutine name associated with the entry. (Character; default=EEXOUT) EEXOUT: Output │
│         │ for elements GEXOUT: Output for Lagrangian grid points                                          │
├─────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DTOUT   │ Output time interval. (Real > 0.0; default=blank)                                               │
├─────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STEPS   │ Output step interval. (Integer > 0; default=blank)                                              │
├─────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OUTNAME │ Name for output request. (Character; required.)                                                 │
├─────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Eli     │ Element id for user output. (Integer > 0; required)                                             │
├─────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi      │ Grid point id for user output. (Integer > 0; required)                                          │
└─────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Only can be used for SOL 700.
2. UNAME can be EEXOUT or GEXOUT.
3. Only one of DTOUT and STEPS is available.
4. When UNAME is set to EEXOUT, element id's are required for user output and when UNAME is set to GEXOUT, grid point id's are required for user output.
5. The file names that will be generated are:

     ```text
     {jobname}_{OUTNAME}_{cycle number}.[THS,ARC]
     ```
