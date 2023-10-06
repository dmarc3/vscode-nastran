## [PROJ](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/TOC.PROJ.xhtml) - Defines Database Project-Identifier

Defines the current or default project identifier, project-ID.

#### Format:

```nastran
PROJ [=] 'project-ID'
```

#### Examples:

1. PROJ = 'MY JOB'
2. The following project-ID will be truncated to 40 characters:

     ```nastran
     PROJ 'CAR MODEL 1999 BODY FRAME SYM - PROTYP B RUN'
     ```

     and all subsequent restarts must have the statement.

     ```nastran
     PROJ 'CAR MODEL 1999 BODY FRAME SYM - PROTYP B'
     ```

```text
┌────────────┬─────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                 │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤
│ project-ID │ Project identifier. Must be enclosed in single quotes. (Character string, maximum of 40 │
│            │ characters; Default = blank)                                                            │
└────────────┴─────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. There may be only one PROJECT statement in the File Management Section. The PROJECT statement must be specified before all DBCLEAN, DBDICT, RESTART, DBLOCATE, and DBLOAD statements where project-ID is not specified by the user.
2. This statement is optional and specifies that all data blocks and parameters to be stored on or accessed from the database in the current run shall also be identified by project-ID. Therefore, in subsequent runs that may access this data through other FMS statements such as RESTART, the project-ID must be specified.
3. Project-ID is the default on DBCLEAN, DBDICT, and RESTART FMS statements and in the WHERE and CONVERT clause of the DBLOCATE statement.
4. Leading blanks and trailing blanks enclosed within the single quotes are ignored. All other blanks are considered part of the project-ID.
