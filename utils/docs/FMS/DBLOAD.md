## [DBLOAD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/TOC.DBLOAD.xhtml) - Loads a Database from a FORTRAN File

Recovers data blocks or parameters from a database created by the DBUNLOAD statement.

#### Format:

![fms00637.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/../../../assets/fms00637.jpg?_LANG=enus)  ,

![fms00639.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/../../../assets/fms00639.jpg?_LANG=enus)  

#### Example:

1. Load the database stored in ASClI format on FORTRAN unit 12.

```nastran
DBLOAD  UNIT=12 FORMAT=NEUTRAL
ASSIGN  DBLOAD=’physical file name of unloaded database’  UNIT=12 FORMATTED
```

2. Load version 1 of KAA under project FRONT BUMPER and store it on the primary database under version 5 and project BUMPER. Overwrite duplicates found on the primary database.

```nastran
DBLOAD  DATABLK=(KAA) WHERE(PROJECT=’FRONT BUMPER’ AND ,SEID=10 AND VERSION=1) CONVERT(VERSION=5;  , PROJECT=’BUMPER’) OVRWRT
ASSIGN  DBLOAD=’physical file name of unloaded database’
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ datablk-list │ Specifies a list of data blocks separated by commas. The default is  *  which selects all data     │
│              │ blocks. The loaded data block may be renamed in the primary database by specifying a slash after   │
│              │ the old name, followed by the new name. For example, if KLL is to be renamed to KLL1, then         │
│              │ DATABLK=(KLL/KLL1) is specified.                                                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ param-list   │ Specifies a list of parameters separated by commas. The default is  *, which selects all           │
│              │ parameters. The loaded parameter may be renamed in the primary database by specifying a slash      │
│              │ after the old name followed by the new name. For example, if LUSETS is to be renamed to LUSET,     │
│              │ then PARAM=(LUSETS/LUSET) is specified.                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ where-expr   │ A logical expression that specifies the desired values of qualifiers PROJECT, VERSION, and DBSET.  │
│              │ For example, WHERE(VERSlON=4 AND SElD<>2 AND SEID>0) selects all items under version 4 for all     │
│              │ values of SElD greater than 0 except 2. See the beginning of this section for more information on  │
│              │ WHERE and CONVERT clauses.                                                                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│              │ The default for VERSION is  *  for all versions; PROJECT is  *  for all projects; and DBSET is *   │
│              │  for all DBsets. The default for qual is  *, which is all qualifier values found on the loaded     │
│              │ database. See also Remark 8.                                                                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ convert-expr │ Modifies the values for PROJECT, VERSION, DBSET, and qualifiers selected by the where-expr. The    │
│              │ format of convert-expr is:                                                                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│              │ PROJECT=project-expr; VERSION=version-expr; DBSET=DBset-name; quali=qual-expri[;..]                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│              │ For example, CONVERT (SEID=100 + SElD; SPC=102). See the beginning of this section for more        │
│              │ information on WHERE and CONVERT clauses.                                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│              │ The default action for VERSION and PROJECT is to use the same version lDs and project IDs; i.e.,   │
│              │ CONVERT(PROJECT=PROJECT; VERSlON=VERSlON). But if either PROJECT or VERSION is specified in the    │
│              │ convert-expr, then both must be specified. The default action for qualifiers and DBSET is to use   │
│              │ the same values as long as they are defined in both databases. If not, see Remark 8.               │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ unit         │ Specifies the FORTRAN unit number of the database to be loaded. The unit must be specified on an   │
│              │ ASSIGN statement that references the physical filename of the loaded database. The default is 51.  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OVRWRT       │ By default, if duplicate data blocks or parameters exist on the loaded and primary databases, then │
│ NOOVRWRT     │ a fatal message is issued. A duplicate means that a data block or parameter has not only the same  │
│              │ name but also the same qualifier values, PROJECT, VERSION, and DBSET as a data block or parameter  │
│              │ on the primary database.                                                                           │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NEUTRAL      │ The database to be loaded may be in BINARY or NEUTRAL format. BlNARY indicates the database to be  │
│ BINARY       │ loaded is in binary or FORTRAN unformatted format. NEUTRAL indicates the database to be loaded is  │
│              │ in ASClI format. The default is BlNARY.                                                            │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The DBLOAD statement and its applications are discussed further in    in the MSC Nastran Reference Guide .
2. If the DATABLK keyword is specified and PARAM is not specified, then only data blocks may be loaded. If the PARAM keyword is specified and DATABLK is not specified, then only parameters may be loaded. If neither DATABLK nor PARAM is specified, then all data blocks and parameters may be loaded.
3. The DB keyword is equivalent to DATABLK, and the PARM keyword is equivalent to PARAM.
4. The database to be loaded is attached as read-only. In other words, items can only be fetched and not stored on this database.
5. If more than one DBLOAD statement is specified, then they will be processed in the order in which they appear. If a duplicate data block or parameter is found on two or more different DBLOAD statements, then the last duplicate will be used.
6. If NEUTRAL is specified, then the FORMATTED keyword must be specified on the corresponding ASSIGN statement.
7. If a data block or parameter is being renamed, then the new name must be defined in the NDDL of the primary database.
8. If the database to be loaded and the primary database have different NDDL schemes and CONVERT is not used, then the following is performed:
     - If a qualifier in the NDDL of the database to be loaded is not in the NDDL of the primary database, then all of its values are converted to the null value corresponding to its type. For example, if the qualifier is integer, real, double-precision, complex, or character, then the value is converted to 0, 0., 0.D0, (0.,0.), or blank, respectively. If this conversion results in a duplicate data block(s) or parameter(s), then a User Warning Message is printed and the duplicates are not loaded.
     - If a DBset-name in the NDDL of the database to be loaded is not in the NDDL of the primary database, then its values will be converted to the PARAM default value in the NDDL of the database to be loaded.
9. Data blocks that are equivalenced on the database to be loaded remain equivalenced as long as they are loaded in the same DBLOAD statement or in consecutive DBLOAD statements with the same unit number. Otherwise, a separate copy for the secondary data block is produced.
10. It is not possible to restart from a database created by DBLOAD in the same run.
11. SOL 190 (or DBTRANS) is also required with DBLOAD if:
     - The database to be loaded has a different BUFFSlZE.
     - The database to be loaded is in neutral format or is being transferred between different machine types.

     See also the   Database Concepts    in the MSC Nastran Reference Guide .

