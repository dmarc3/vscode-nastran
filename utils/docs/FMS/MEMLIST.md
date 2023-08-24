## [MEMLIST](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/TOC.MEMLIST.xhtml) - Specify Datablocks Eligible for SMEM

Specifies a list of scratch datablocks that may reside in scratch memory (SMEM).

#### Format:

```nastran
MEMLIST DATABLK = (DBname1, DBname2, ..., DBnamei)
```

#### Example:

```nastran
MEMLIST DATABLK = (KOO, MOO, KQQ, MQQ)
```

If generated, datablocks KOO, MOO, KQQ, and MQQ will reside in scratch memory. All other datablocks will be excluded from scratch memory.

```text
┌───────────┬──────────────────────────────┐
│ Describer │ Meaning                      │
├───────────┼──────────────────────────────┤
│ DBnamei   │ Name of a Nastran datablock. │
└───────────┴──────────────────────────────┘
```

#### Remarks:

1. Only NDDL and local scratch datablocks may be included in MEMLIST specification.
2. Datablocks specified will reside in SMEM on a first-come, first-served basis.
3. Datablocks not specified by this statement will not reside in SMEM.
4. Database directories for the SCRATCH DBset reside in SMEM and are not affected by any MEMLIST specification.
5. Continuation lines are allowed.
6. Multiple MEMLIST statementss are honored.
7. Scratch I/O activity is reported in the .f04 file by including DIAG 42 in the Executive Control Section.
