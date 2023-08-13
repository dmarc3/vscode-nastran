## [EXPORTLD (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.EXPORTLD.Case.xhtml) - Saves a Load Vector on the Database for Subsequent Reuse

Saves the load vector for the current subcase on the database.

#### Format:

![casecontrol4a00964.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00964.jpg?_LANG=enus)  

#### Examples:

```nastran
EXPO(LOADNAME=LANDGEAR)
EXPORTLD=10
```

```text
┌─────────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer       │ Meaning                                                                                           │
├─────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LOADID=lid      │ User assignable value for the LOADID describer. Used to uniquely identify a saved load vector for │
│                 │ later retrieval (using DBLOCATE, for example). The default value is the subcase ID.               │
├─────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LOADNAME=Idname │ User-assignable value (of up to eight characters) for the LOADNAME describer. Used to uniquely    │
│                 │ identify a saved load vector for later retrieval. The default value is blank.                     │
├─────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ N               │ Results for grid point components in SET n will be exported.                                      │
├─────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL             │ Results for ALL grid point components will be exported. Default is ALL.                           │
└─────────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Each load vector is stored individually as a one column matrix that is qualified by LOADID and LOADNAME. The combination of both the LOADID and the LOADNAME describers should uniquely identify the load vector to avoid overwriting (or possibly triggering the output twice rule an existing load vector).
2. If placed above the SUBCASE entry, then the load vectors for all subcases are saved.
3. The load vectors are qualified by LOADID and LOADNAME for selection using the WHERE clause on FMS commands that support it.
4. The following table shows the value of the LOADID and LOADNAME describers that are assigned for various EXPORTLD requests:

```text
┌──────────────┬──────────────────────────────────────────────────────────┐
│ Example      │ Results                                                  │
├──────────────┼──────────────────────────────────────────────────────────┤
│ EXPORTLD     │ LOADID=subcase ID, LOADNAME=’ ‘ - default value applied. │
├──────────────┼──────────────────────────────────────────────────────────┤
│ EXPORTLD(LOA │ LOADID=12, LOADNAME=’ ‘                                  │
│ DID=12)      │                                                          │
├──────────────┼──────────────────────────────────────────────────────────┤
│ EXPORTLD(LOA │ LOADID=1, LOADNAME=’FORCE12’                             │
│ DID=1,LOADNA │                                                          │
│ ME=FORCE12)  │                                                          │
├──────────────┼──────────────────────────────────────────────────────────┤
│ EXPORTLD(LOA │ LOADID=subcase ID, LOADNAME=’ALLCASES’                   │
│ DNAME=ALLCAS │                                                          │
│ ES)          │                                                          │
└──────────────┴──────────────────────────────────────────────────────────┘
```

5. The load vector is typically imported into a run using the FMS DBLOCATE statement. The imported load is referenced by using its LOADID value on a LOAD Case Control command or Bulk Data entry. For example:

```nastran
ASSIGN loads1=’run1.MASTER’
DBLOCATE datablk=(EXTLD) WHERE(LOADNAME=’ALLCASES’),
CONVERT (LOADID=LOADID+1000) LOGICAL=loads1
...
CEND
LOADS=1001 $ Select external load with LOADID=1001, imported from previous run.
```