## [DBUNLOAD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/TOC.DBUNLOAD.xhtml) - Unloads a Database to a FORTRAN File

Stores data blocks or parameters from the primary database onto a FORTRAN file in a binary or neutral format, for purposes of database compression or database transfer between different computers.

#### Format:

![fms00645.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/../../../assets/fms00645.jpg?_LANG=enus)  

![fms00647.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/../../../assets/fms00647.jpg?_LANG=enus)  

#### Example:

1. Unload the database in ASCII format onto FORTRAN unit 12.

```nastran
DBUNLOAD UNIT=12 FORMAT=NEUTRAL
ASSIGN   DBUNLOAD=’physical file name of FORTRAN unit 12’ ,
         UNIT=12 FORMATTED
```

2. Unload version 1 of KAA under project FRONT BUMPER.

```nastran
DBUNLOAD DATABLK=(KAA) WHERE(PROJECT=’FRONT BUMPER’ ,AND SEID=10 AND VERSION=1)
ASSIGN   DBUNLOAD=’physical file name of FORTRAN unit 50’
```

```text
┌──────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ datablk-list │ Specifies a list of data blocks separated by commas. The default is *, which selects all data     │
│              │ blocks.                                                                                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ param-list   │ Specifies a list parameters separated by commas. The default is *, which selects all parameters.  │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ where-expr   │ Logical expression that specifies the desired values of qualifiers PROJECT, VERSION, and DBSET.   │
│              │ For example, WHERE(VERSION=4 AND SElD<>2 AND SElD>0)selects all items under version 4 for all     │
│              │ values of SEID greater than 0 except 2. See the beginning of this section on WHERE and CONVERT    │
│              │ Clauses.                                                                                          │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│              │ The default for VERSION is  *  for all versions; PROJECT is *  for all projects; and DBSET is  *  │
│              │  for all DBsets. The default for qual is *, which is all qualifier values found on the primary    │
│              │ database.                                                                                         │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ unit         │ Specifies the FORTRAN unit number to unload the database. The unit must be specified on an ASSIGN │
│              │ statement, which references its physical filename. The default is 50.                             │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NEUTRAL      │ The database may be unloaded in BINARY or NEUTRAL format. BlNARY indicates the database is to be  │
│ BINARY       │ unloaded in binary or FORTRAN unformatted. NEUTRAL indicates the database is to be unloaded in    │
│              │ ASCII format. The default is BlNARY.                                                              │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOREWIND     │ By default, if DBUNLOAD is executed more than once for the same unit, then the unit is not        │
│ REWIND       │ rewound. REWlND requests that the unit be rewound prior to unloading.                             │
└──────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The DBUNLOAD statement and its applications are discussed further in    in the MSC Nastran Reference Guide .
2. If the DATABLK keyword is specified and PARAM is not specified, then only data blocks may be unloaded. If the PARAM keyword is specified and DATABLK is not specified, then only parameters may be unloaded. If neither DATABLK nor PARAM is specified, then all data blocks and parameters may be unloaded.
3. The DB keyword is equivalent to DATABLK, and the PARM keyword is equivalent to PARAM.
4. If more than one DBUNLOAD statement is specified, then they will be processed in the order in which they appear.
5. If NEUTRAL is specified, then the FORMATTED keyword must be specified on the corresponding ASSIGN statement.
6. If NEUTRAL is specified, then only data blocks with an NDDL description are unloaded. (See the  MSC Nastran DMAP Programmer’s Guide   under the DATABLK statement.) An NDDL description is required for TYPE=TABLE and none is required for TYPE=MATRlX. The data block must be unloaded in BINARY if TYPE=UNSTRUCTURED, KDlCT, or KELM.
7. Data blocks that are equivalenced on the primary database remain equivalenced as long as they are unloaded in the same DBUNLOAD statement or in consecutive DBUNLOAD statements with the same unit number. Otherwise, a separate copy for the secondary data block is produced.
