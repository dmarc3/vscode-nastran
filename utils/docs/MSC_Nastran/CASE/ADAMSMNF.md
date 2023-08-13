## [ADAMSMNF* (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.ADAMSMNF.Case.xhtml) - Control for Nastran/ADAMS Interface

Control for Nastran/ADAMS Interface modal neutral file (.mnf)

#### Format:

![casecontrol4a00738.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00738.jpg?_LANG=enus)  

#### Example(s):

```nastran
ADAMSMNF FLEXBODY = YES
```

```text
┌───────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Note: │ *Nastran/ADAMS modal stress recovery (MSR) interface is also available. See Remark 19. CAUTION: Do │
│       │ not use mode=i8 (64 bit integer, 64 bit float) option when submitting the Nastran job if the       │
│       │ ADAMSMNF EXPORT option specifies DB or BOTH and your intent is to use the DB in ADAMS. ADAMS does  │
│       │ not currently support i8 DB files. If you use mode=i8, you must use the MNF in ADAMS.              │
│       │ NASTRAN/ADAMS MNF can be used with SOL 400 as described in Remark 21. ADAMSMNF cannot be run in    │
│       │ linear solution sequences with RIGID=LAGRANGE. A fatal will be issued. The main reason is that the │
│       │ Lagrange multipliers are in the wrong set for the boundary solution and resulting orthonormal      │
│       │ modes will in general not be correct.                                                              │
└───────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FLEXBODY  │ Requests that the Nastran/ADAMS interface be executed.                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NO        │ Executes standard Nastran.                                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ YES       │ Executes Nastran/ADAMS interface.                                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FLEXONLY  │ Requests standard DMAP solution and data recovery following Nastran/Adams interface execution.     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ YES       │ Executes only the Nastran/ADAMS interface.                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NO        │ Executes Nastran/ADAMS interface and standard DMAP solution and data recovery.                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ADMCHECK  │ Requests Nastran/ADAMS diagnostic output.                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ YES       │ Prints diagnostic output.                                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NO        │ Suppresses diagnostic output.                                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ADMOUT    │ Requests that the Nastran/ADAMS interface outputs Nastran .op2 files.                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ YES       │ .op2 files are generated.                                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NO        │ Requests that .op2 files are not generated.                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OUTGSTRS  │ Controls grid point stress output to .op2 file or .mnf or both.                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ YES       │ Grid point stress is output to .op2 file or .mnf or both.                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NO        │ Grid point stress is not output to .op2 file, or .mnf file.                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OUTGSTRN  │ Controls grid point strain output to .op2 file, or .mnf or both.                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ YES       │ Grid point strain is output to .op2 file or .mnf or both.                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NO        │ Grid point strain is not output to .op2 file or .mnf.                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OUTSTRS   │ Controls element stress output to .op2 file.                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ YES       │ Element stress is output to .op2 file.                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NO        │ Element stress is not output to .op2 file.                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OUTSTRN   │ Controls element strain output to .op2 file.                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ YES       │ Element strain is output to .op2 file.                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NO        │ Element strain is not output to .op2 file.                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ V1ORTHO   │ Lower frequency bound of the Craig-Bampton modes in cycles/unit time.                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ value1    │ Value of lower bound.                                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ V2ORTHO   │ Higher frequency bound of the Craig-Bampton modes in cycles/unit time.                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ value2    │ Value of higher bound.                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MINVAR    │ Requests the type of mass invariants to be computed. See Remark 3.                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FULL      │ All nine mass invariants will be calculated.                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CONSTANT  │ Only mass invariants (5-1), (5-2), (5-6), and (5-7) will be calculated.                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PARTIAL   │ All mass invariants except (5-5) and (5-9) will be calculated.                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE      │ No mass invariants are computed. (This option is invalid for structure/fluid coupled system. )     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RIGID     │ No modal information is output to the .mnf file. Only units, grid point coordinates, element       │
│           │ connectivity, interface nodes, and invariant (5-1), (5-2), and (5-7) data are shared in the .mnf   │
│           │ file.                                                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXPORT    │ Controls modal output.                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MNF       │ output to MNF file                                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DB        │ output to Nastran database                                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BOTH      │ output to Nastran database and MNF file                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PSETID    │ Selects a set of elements (including PLOTEL) whose grids are retained in the MNF, and whose        │
│           │ connectivity defines face geometry for ADAMS display.                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ Specified in the OUTPUT(PLOT) Section of Nastran.                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Select all the sets defined in the OUTPUT(PLOT) Section of Nastran.                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MONITOR   │ Request or suppress output of monitor point data to Adams MNF. Default is output (Yes). Specify No │
│           │ to suppress output.                                                                                │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
