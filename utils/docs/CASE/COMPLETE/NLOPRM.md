## [NLOPRM (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.NLOPRM.Case.xhtml) - Nonlinear Regular and Debug Output Control Parameters - SOL 400

Controls MSC Nastran nonlinear solution output, debug printout, debug POST and punch-out of contact constraints of MPC and MPCY Bulk Data entries.

#### Format:

![casecontrol4a01190.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01190.jpg?_LANG=enus)  

![casecontrol4a01192.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01192.jpg?_LANG=enus)  

![casecontrol4a01194.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01194.jpg?_LANG=enus)  

#### Example(s):

```nastran
NLOPRM        OUTCTRL=STD,SOLUTION       DBGPOST=LTIME 
NLOPRM        OUTCTRL=(SOLUTION,INTERM), MPCPCH=(OTIME,STEP)
```

```text
┌───────────┬──────────────────────────────────┬──────────────────────────────────┐
│ Describer │ Meaning                          │                                  │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│ OUTCTRL   │ Selects one or more following    │                                  │
│           │ nonlinear solution output        │                                  │
│           │ options                          │                                  │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ STD                              │                                  │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ SOLUTION                         │ Solution set output which does   │
│           │                                  │ not include solutions for        │
│           │                                  │ superelements                    │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ INTERM                           │ Intermediate nonlinear solution  │
│           │                                  │ output in OP2 and HDF5 files, at │
│           │                                  │ each solution output interval,   │
│           │                                  │ set by the user through          │
│           │                                  │ nonlinear solution controls,     │
│           │                                  │ such as NLPARM.                  │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│ NLDBG     │ Keyword selecting one or more    │                                  │
│           │ debug printout options           │                                  │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ NONE                             │ No debug print output (Default)  │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ NLBASIC                          │ Basic nonlinear information      │
│           │                                  │ printout                         │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ NRDBG                            │ Newton-Raphson iteration         │
│           │                                  │ information printout             │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ ADVDBG                           │ Advance nonlinear debug printout │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ N3DBASE                          │ For 3D contact, it requests to   │
│           │                                  │ print out the error tolerance of │
│           │                                  │ each contact body in the F06     │
│           │                                  │ file.                            │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ N3DMED                           │ For 3D contact, it requests to   │
│           │                                  │ print out the summary table of   │
│           │                                  │ all contact parameters, in       │
│           │                                  │ addition to the printout by      │
│           │                                  │ N3DBAS, in the .f06 file.        │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ N3DADV                           │ For 3D contact, it requests to   │
│           │                                  │ print out the body contact       │
│           │                                  │ information in long form, in     │
│           │                                  │ addition to the printouts by     │
│           │                                  │ both N3DBAS and N3DMED, in the   │
│           │                                  │ F06 file.                        │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ N3DSUM                           │ For 3D Contact, it simplifies    │
│           │                                  │ body contact information in      │
│           │                                  │ N3DADV.                          │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│ DBGPOST   │ Selects one of the following     │                                  │
│           │ debug POST options               │                                  │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ NONE                             │ No output (Default)              │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ LTIME                            │ To output all iterations in the  │
│           │                                  │ last load or time increment      │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ LSTEP                            │ To output all iterations in the  │
│           │                                  │ last STEP                        │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ LSUBC                            │ To output all iterations in the  │
│           │                                  │ last SUBCASE                     │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ ALL                              │ To output all iterations         │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│ MPCPCH    │ Selects one or more following    │                                  │
│           │ options to punch out contact     │                                  │
│           │ constraint equations in terms of │                                  │
│           │ MPC or MPCY Bulk Data entries in │                                  │
│           │ Nastran PCH file. This is not    │                                  │
│           │ available for segment-to-segment │                                  │
│           │ contact.                         │                                  │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ NONE                             │ No mpc or MPCY punch output      │
│           │                                  │ (Default)                        │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ BEGN                             │ MPC punch in the beginning of    │
│           │                                  │ the very first iteration         │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ OTIME                            │ MPC punch at every user          │
│           │                                  │ requested output step            │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ STEP                             │ MPC punch at the end of each     │
│           │                                  │ load case, such as SUBSTEP, STEP │
│           │                                  │ and SUBCASE                      │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ YBEGN                            │ MPCY punch in the beginning of   │
│           │                                  │ the very first iteration         │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ YOTIME                           │ MPCY punch at every user         │
│           │                                  │ requested output step            │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ YSTEP                            │ MPCY punch at the end of each    │
│           │                                  │ load case, such as SUBSTEP, STEP │
│           │                                  │ and SUBCASE)                     │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│ DELIMIT   │ Select output of delimiter for   │                                  │
│           │ subcases, steps, increments, and │                                  │
│           │ iterations.                      │                                  │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ No                               │ No output (default)              │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ Yes                              │ Select output                    │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│ GRIDINF   │ Select output of grid point      │                                  │
│           │ information (1) displacements of │                                  │
│           │ the grid; (2) EID: element ID    │                                  │
│           │ connected to this grid; (3) PID: │                                  │
│           │ property ID of relevant          │                                  │
│           │ elements; (4) ID of contact body │                                  │
│           │ which the grid belongs to; and,  │                                  │
│           │ (5) if the grid locates on the   │                                  │
│           │ surface of contact body.         │                                  │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ No                               │ No output (default)              │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ MAXGRID                          │ Output information of grid which │
│           │                                  │ has maximum displacement         │
│           │                                  │ component                        │
├───────────┼──────────────────────────────────┼──────────────────────────────────┤
│           │ GID                              │ Output information of grid which │
│           │                                  │ user specifies                   │
└───────────┴──────────────────────────────────┴──────────────────────────────────┘
```
