## [DBSETDEL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/TOC.DBSETDEL.xhtml) - Deletes a DBset

Deletes a DBset, all of its members, and associated physical files.

#### Format:

```nastran
DBSETDEL dbsetnamei
```

#### Example:

Delete DBset DBUP20 from the database.

```nastran
DBSETDEL DBUP20
```

```text
┌────────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                         │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ dbsetnamei │ Specifies the name(s) of DBset(s) to be deleted. The DBset names MASTER, OBJSCR, or SCRATCH may │
│            │ not be specified.                                                                               │
└────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The DBSETDEL statement and its applications are discussed further in    in the MSC Nastran Reference Guide .
2. If dbsetnamei does not exist, then no action is taken.
3. After a DBset has been deleted with this statement, it may be recreated with the INIT statement in a subsequent run.
