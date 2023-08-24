## [DBLOCATE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/TOC.DBLOCATE.xhtml) - Attaches Secondary Databases

Obtains data blocks or parameters from prior versions of the primary database, or other databases. DBLOCATE may also be used to compress the primary database and to migrate databases created in prior MSC Nastran versions.

#### Format:

![fms00641.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/../../../assets/fms00641.jpg?_LANG=enus)  ,

![fms00643.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/../../../assets/fms00643.jpg?_LANG=enus)  

#### Example:

1. Locate in version 4 of MASTER3 all data blocks named KAA for all superelements with IDs greater than 0.

```nastran
DBLOCATE DATABLK=(KAA) WHERE(PROJECT=’FRONT BUMPER’  ,AND SEID>0 AND VERSION=4) LOGI=MASTER3
ASSIGN   MASTER3=’physical file name of master DBset’
```

2. Copy all data blocks and parameters from the last version of MASTER3 to the primary database. For all items with the qualifier SEID, change the SEID to twice the old ID number.

```nastran
DBLOCATE CONVERT(SEID=2*SEID) COPY LOGI=MASTER3
ASSIGN   MASTER3=’physical file name of master DBset’
```

3. Compress a database with multiple versions. All versions under the current project-ID (see PROJ statement) will be copied from the database OLDDB to NEWDB.

```nastran
ASSIGN   MASTER3=’physical filename of new master DBset’
ASSIGN   OLDDB=’physical filename of old master DBset’
DBLOCATE LOGI=OLDDB COPY WHERE(VERSION=*) ,
         CONVERT(VERSION=VERSION;PROJECT=PROJECT)
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ datablk-list │ Specifies a list of data blocks separated by commas. The default is *, which selects all data      │
│              │ blocks. The located data block may be renamed in the primary database by specifying a slash after  │
│              │ the old name followed by the new name. For example, if KLL is to be renamed to KLL1, then          │
│              │ DATABLK = (KLL/KLL1) is specified.                                                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ param-list   │ Specifies a list of parameters separated by commas. The default is *, which selects all            │
│              │ parameters. The located parameter may be renamed in the primary database by specifying a slash     │
│              │ after the old name followed by the new name. For example, if LUSETS is to be renamed to LUSET,     │
│              │ then PARAM=(LUSETS/LUSET) is specified.                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ where-expr   │ A logical expression that specifies the desired values of qualifiers PROJECT, VERSION, and DBSET.  │
│              │ For example, WHERE(VERSlON= 4 AND SEID < > 2 AND SEID > 0) selects all items under version 4 for   │
│              │ all values of SEID greater than 0 except 2. See the beginning of this section for more information │
│              │ on WHERE and CONVERT clauses.                                                                      │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│              │ The default for VERSION is the last version-ID and PROJECT is the current project-ID. The default  │
│              │ for qual is *, which is all qualifier values found on the located database. See also Remark 9.     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ convert-expr │ Modifies the values for PROJECT, VERSION, DBSET, and qualifiers selected by the where-expr. The    │
│              │ format of convert-expr is:                                                                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│              │ PROJECT=project-expr; VERSION=version-expr; DBSET=DBset-name; quali=qual-expri[;...]               │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│              │ For example, CONVERT (SEID=100+SEID; SPC=102)See the beginning of this section for more            │
│              │ information on WHERE and CONVERT clauses.                                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│              │ The default action for VERSION and PROJECT is to convert to the current version-ID and current     │
│              │ project-ID. But if either PROJECT or VERSION is specified in the convert-expr, then both must be   │
│              │ specified. See Example 3. The default action for qualifiers and DBSET is to use the same values as │
│              │ long both databases have the same NDDL scheme. If not, see Remark 9.                               │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ dbname       │ Specifies the logical name of the master directory DBset of the located database. dbname must be   │
│              │ specified on an ASSIGN statement, which references the physical file name. By default, the located │
│              │ database is also the primary database. (If dbname is specified for the primary database, then      │
│              │ dbname must be MASTER.)                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OVRWRT       │ By default, duplicate data blocks or parameters on the located database will take precedence over  │
│ NOOVRWRT     │ those on the primary database. A duplicate means that a data block or parameter has not only the   │
│              │ same name but also the same qualifier values, PROJECT, VERSION, and DBSET as the data block or     │
│              │ parameter on the primary database. If NOOVRWRT is specified, then a fatal message is issued.       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COPY         │ Requests that the located data blocks or parameters be copied to the primary database.             │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The DBLOCATE statement and its applications are discussed further in the    in the MSC Nastran Reference Guide .
2. If the DATABLK keyword is specified and PARAM is not specified, then only data blocks may be located. If the PARAM keyword is specified and DATABLK is not specified, then only parameters may be located. If neither DATABLK nor PARAM is specified, then all data blocks and parameters may be located.
3. The DB keyword is equivalent to DATABLK, and the PARM keyword is equivalent to PARAM.
4. If more than one DBLOCATE statement is specified, then they will be processed in the order in which they appear. If a duplicate data block or parameter is found on two or more different DBLOCATE statements, then the last duplicate will be used.
5. If the located database is not the primary database, then it is attached for read-only purposes. In other words, items can only be fetched and not stored on the located database.
6. If the RESTART FMS statement is also specified, then located data blocks and parameters are treated as if they exist in the restart version. In other words, restart equivalences will be made on located items at the beginning of the run and can be subsequently broken as a result of regeneration and/or NDDL dependencies.
7. If a data block or parameter is being renamed, then the new name must be defined in the NDDL of the primary database.
8. If LOGICAL refers to the primary database and one version is to be copied to another, then the items are equivalenced.
9. If the located database and the primary database have different NDDL schemes and CONVERT is not used, then the following is performed:
     - If a qualifier in the NDDL of the located database is not in the NDDL of the primary database, then all of its values are converted to the null value corresponding to its type. For example, if the qualifier is integer, real, double precision, complex or character then the value is converted to 0, 0., 0.D0, (0.,0.), or blank, respectively. If this conversion results in a duplicate data block(s) or parameter(s), then a User Warning Message is printed and the duplicates are not located.
     - If a dbset-name in the NDDL of the located database is not in the NDDL of the primary database, then its values will be converted to the PARAM default value in the NDDL of the located database.
