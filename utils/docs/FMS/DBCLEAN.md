## [DBCLEAN](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/TOC.DBCLEAN.xhtml) - Deletes Database Versions and/or Projects

Deletes one or more versions and/or projects from the database.

#### Format:

```nastran
DBCLEAN VERSlON = {version-ID,*} [PROJECT={’project-lD’,*}]
```

```text
┌────────────┬──────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                              │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ version-ID │ Version identifier of the database to be deleted.                                    │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ *          │ Wildcard. All versions or projects to be deleted.                                    │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ project-ID │ Project identifier of the project to be deleted. (See the FMS statement, PROJ, 105.) │
└────────────┴──────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. There may be up to ten DBCLEAN statements in the FMS Section.
2. If no project-ID is given, the current project-ID is assumed.

#### Example:

```nastran
DBCLEAN VERS = 7 PROJ = ’OUTER WING - LEFT’
```

The preceding example would delete from the database all data blocks and parameters stored under Version 7 of the project identified as OUTER WING - LEFT.
