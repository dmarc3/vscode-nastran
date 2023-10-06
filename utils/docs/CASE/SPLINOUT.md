## [SPLINOUT (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SPLINOUT.Case.xhtml) - Export of Spline Matrix

Requests output of the spline matrix for external use.

#### Format:

![casecontrol4a01360.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01360.jpg?_LANG=enus)  

```text
┌───────────┬──────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                          │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ BOTH      │ Requests output of the force and displacement splines (Default). │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ DISP      │ Requests output of only the displacement splines.                │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ FORCE     │ Requests output of only the force splines.                       │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ OP2       │ Requests output to an .op2 file                                  │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ unit      │ Unit the .op2 file is assigned to                                │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ DMIPCH    │ Requests output to a .pch file.                                  │
└───────────┴──────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Matrices are output in external sort.
2. If displacement and force splines are identical, only displacement splines are output.
3. Option FACTORS is only allowed together with option OP2.
4. If OP2 =  unit  is specified, a table relating the matrix columns to structural degrees of freedom, and the matrix rows to aerodynamic degrees of freedom, will be written to the .op2 file.
5. If OP2 =  unit  is specified, an appropriate ASSIGN OP2 statement must be present in the File Management Section for this unit.
6. If DMIPCH is specified, DMI entries are written to the.pch file.
