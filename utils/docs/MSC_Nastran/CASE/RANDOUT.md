## [RANDOUT (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.RANDOUT.Case.xhtml) - Control for EXCLUSIVE Random Result, PSDF, Output to HDF5 and/or OP2

Control for exclusive random result, PSDF, output, to HDF5 and/or OP2

#### Format:

![casecontrol4a01268.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01268.jpg?_LANG=enus)  

#### Examples:

```nastran
RANDOUT= YES
RANDOUT (PSDF, HDF5) = YES
RANDOUT= NO
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                 │
├───────────┼─────────────────────────────────────────────────────────────────────────┤
│ PSDF      │ Requests only PSDF result output to HDF5 and/or OP2 (Default).          │
├───────────┼─────────────────────────────────────────────────────────────────────────┤
│ BOTH      │ Both HDF5 and OP2 will only output random result, PSDF (Default).       │
├───────────┼─────────────────────────────────────────────────────────────────────────┤
│ HDF5      │ HDF5 will only output random result, PSDF. OP2 will output all results. │
├───────────┼─────────────────────────────────────────────────────────────────────────┤
│ OP2       │ OP2 will only output random results. HDF5 will output all results.      │
├───────────┼─────────────────────────────────────────────────────────────────────────┤
│ NO        │ No request on exclusive random result, PSDF, output to HDF5 and/or OP2  │
├───────────┼─────────────────────────────────────────────────────────────────────────┤
│ YES       │ Requests to exclusively output random result, PSDF, to HDF5 and/or OP2. │
└───────────┴─────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Case Control command, RANDOUT, is used to exclude all non-random results as well as random results other than PSDF, from HDF5 or OP2 database to reduce the file size for large models with random analysis.
2. If used, RANDOUT must be placed above all SUBCASE's. It overrides all Case Control commands, such as DISP, VELO, ACCEL, STRESS, STRAIN, FORCE, and so on, which may have some request on random results.
