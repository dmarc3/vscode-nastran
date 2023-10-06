## [DBFIX](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/TOC.DBFIX.xhtml) - Database Directory Error Detection

Detects and optionally corrects errors in the database directory.

#### Format:

![fms00635.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/../../../assets/fms00635.jpg?_LANG=enus)  

#### Example:

```nastran
DBFIX LIST,NOCORRECT
```

The preceding example requests a printout of the directory pointers and any errors, but not the corrections.

```text
┌───────────┬──────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                      │
├───────────┼──────────────────────────────────────────────────────────────┤
│ LIST      │ Requests a debug listing of the database directory pointers. │
├───────────┼──────────────────────────────────────────────────────────────┤
│ NOLIST    │ Suppresses a debug listing of the database directory.        │
├───────────┼──────────────────────────────────────────────────────────────┤
│ CORRECT   │ Corrects the database if any errors are found.               │
├───────────┼──────────────────────────────────────────────────────────────┤
│ NOCORRECT │ Suppresses the correction of the database.                   │
└───────────┴──────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. It is recommended that a backup copy of the database be made before this statement is used, since corrections of the database are achieved through the deletion of data. Data blocks and parameters are deleted from the database if they have (1) incorrect paths (different than listed in the NDDL); (2) incorrect names (two or more names that are not equivalenced and reference the same data), or (3) incorrect directory pointers.
2. NOLIST does not suppress the listing of any corrections made to the database.
