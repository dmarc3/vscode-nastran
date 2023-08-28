## [NLRESTART (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.NLRESTART.Case.xhtml) - Nonlinear Restart Request

Request a RESTART execution at a specified point for SOL 400.

Please note that when running NLRESTART with Advanced Nonlinear Element, the Data Blocks for Advanced Nonlinear Element must be saved in the corresponding cold start run with the proper DBSAVE, NLPACK, and INTOUT. See Remark  12.

#### Format:

![casecontrol4a01196.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01196.jpg?_LANG=enus)  

#### Example:

```nastran
NLRESTART SUBCASE 1, STEP 2, LOADFAC 0.3
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ i         │ Specifies the identification number of a previously executed SUBCASE (Integer; Default is the      │
│           │ first SUBCASE).                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ j         │ Specifies the identification number of a previously executed STEP (Integer; Default is the first   │
│           │ STEP).                                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ f         │ Specified the load factor of a previously executed load increment in nonlinear static analysis     │
│           │ (Real; 0.0 < f < 1.0; Default = 1.0).                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ t         │ Specified the time of a previously executed time step in nonlinear transient analysis (Real; ,     │
│           │ where  is the initial time of STEP j, and  is the last time of STEP j; Default = ).                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OVERRIDE  │ To force the run to continue even though there are fundamental changes to the model's geometry,    │
│           │ properties, and/or connectivity. In general, NLRESTART does not allow changes to the model's       │
│           │ geometry, properties, or connectivity and UFM 9424 will be issued if a change is detected. Please  │
│           │ be cautious in using OVERRIDE because the model changes may result in wrong answers and/or a fatal │
│           │ termination and, therefore, is not recommended in all cases.                                       │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

