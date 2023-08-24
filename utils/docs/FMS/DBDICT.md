## [DBDICT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/TOC.DBDICT.xhtml) - Prints Database Directory Tables

DBDICT prints the following database directory tables:
- Data blocks described by an NDDL DATABLK statement.
- Parameters described by an NDDL PARAM statement.
- All unique paths (KEYs) and their qualifier values.
- Qualifiers and their current values.
- Data blocks not described by an NDDL DATABLK statement.
- Parameters not described by an NDDL PARAM statement.
- Project and version information.

#### Basic Format:

The basic format of DBDICT specifies which tables to print and prints all items (data blocks and parameters) found in the directory. Also, the attributes (colnames) to be printed, and the print format, are predefined. Note that more than one table may be specified on the same DBDICT statement.

![fms00627.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/../../../assets/fms00627.jpg?_LANG=enus)  

#### Examples:

```nastran
DBDICT
DBDICT PARAM PROJVERS
```

#### Full Format:

The full format permits the selection of items by name and/or by the WHERE describer. The full format also permits the attributes to be printed using the SELECT describer. In addition, the print format can be specified with the SORT, FORMAT, and LABEL describers. Note that the full format only allows the specification of a single table on a DBDICT statement.

![fms00629.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/../../../assets/fms00629.jpg?_LANG=enus)  

```nastran
SELECT(colname[- ‘ col-label’]. . . ),
```

```text
┌────────┬────────────────────────────────────────────────────────────┐
│ FORMAT │ (FWIDTH = w [.d]  DWIDTH = w [.d]  AWIDTH = a  IWIDTH = i, │
├────────┼────────────────────────────────────────────────────────────┤
│        │ LWIDTH = k  COLSPACE = c  VALUE = w,                       │
├────────┼────────────────────────────────────────────────────────────┤
│        │ colname = col-width, . . .),                               │
└────────┴────────────────────────────────────────────────────────────┘
```

![fms00631.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/../../../assets/fms00631.jpg?_LANG=enus)  

![fms00633.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/../../../assets/fms00633.jpg?_LANG=enus)  

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DATABLK      │ Print the data blocks. datablk-list specifies a list of NDDL-defined data blocks separated by      │
│              │ commas. If LOCAL is specified, the non-NDDL-defined data blocks are printed.                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PARAM        │ Print the parameter table. param-list specifies a list of parameters separated by commas. If LOCAL │
│              │ is specified, the non-NDDL-defined parameters are printed.                                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PROJVERS     │ Print the project-version table.                                                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ QUALIFIERS   │ Print the qualifier table.                                                                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ QUALCURR     │ Print the current values of the qualifiers. SORT is ignored.                                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ where-expr   │ Logical expression that specifies the desired values of colnames described below. For example,     │
│              │ WHERE(VERSION=4 AND SEID < > 2 AND SEID > 0) selects all items under version 4 for all values of   │
│              │ SEID greater than 0 except 2. See the beginning of this section for a further description. The     │
│              │ default for VERSION is the last version, and PROJECT is the current project. The default for qual  │
│              │ is *, which is all qualifier values found on the database. See also Remark 12.                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SELECT       │ Specifies a list of column names to be printed. The order of the specified colnames will be        │
│              │ printed from left to right. If colname is not specified, then all columns will be printed.         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ colname      │ Column name. Colname specifies a particular attribute of the database item such as data block name │
│              │ (NAME), creation date (CDATE), number of blocks (SIZE), or qualifier name (SEID, SPC, etc.). The   │
│              │ allowable colnames are given in the Remarks.                                                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ col-label    │ The label to printed above the column identified by colname. The default for col-label is the      │
│              │ colname. col-label may not be specified for the following colnames: QUALSET, QUALALL, and TRAILER. │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FWIDTH=w.d   │ Specifies the default width for single-precision real numbers in real and complex qualifiers       │
│              │ (Integers: w > 0 and d > 0; Default = 12.5).                                                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DWIDTH=w.d   │ Specifies the default width for double-precision real numbers in real and complex qualifiers       │
│              │ (Integers: w > 0 and d > 0; Default = 17.10).                                                      │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AWIDTH=a     │ Specifies the default width for character string qualifiers. Character strings are printed with    │
│              │ enclosing single quotation marks, even if the string is blank (Integer > 0; Default = 8).          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IWIDTH=i     │ Specifies the default width for integer qualifiers (Integer >  0; see Remarks for defaults).       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LWIDTH=k     │ Specifies the default width for logical qualifiers. Logical values are printed as either “T” for   │
│              │ TRUE or “F” for FALSE (Integer >  0; Default = 1).                                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COLSPACE=c   │ Specifies the default number of spaces between columns (Integer >  0; see Remarks for defaults).   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VALUE=w      │ Specifies the default width for parameter values. The values are printed as character strings with │
│              │ left justification (Integer > 0; Default = 40)                                                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ col-width    │ The print width of the data under colname or qual-name. For real numbers, specify w.d where w is   │
│              │ the width of the field and d is the number of digits in the mantissa. For integers and character   │
│              │ strings, specify w, where w is the width of the field. col-width may not be specified for colnames │
│              │ QUALSET, QUALALL, and TRAILER.                                                                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT         │ Specifies how the rows are sorted. The sort is performed in order according to each colname        │
│              │ specified in the list. A “D” following the colname causes the sort to be in descending order. An   │
│              │ “A” following the colname causes the sort to be in ascending order. Colnames QUALSET, QUALALL, and │
│              │ TRAILER may not be specified under SORT. Each colname specified in SORT must be separated by       │
│              │ commas.                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ page-title   │ A title to be printed on each page of the directory output.                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RIGHT,       │ Print justification of the page title.                                                             │
│ CENTER, LEFT │                                                                                                    │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. DBDICT prints seven different tables according to a default or a user-defined format. The tables are:

     ```text
     ┌──────────────┬─────────────────────────────────┬────────────────────┬────────────┐
     │ Describer    │ Description                     │ Default Page-Title │ See Remark │
     ├──────────────┼─────────────────────────────────┼────────────────────┼────────────┤
     │ DATABLK      │ Data blocks described by a NDDL │ NDDL DATABLOCKS    │ 2.         │
     │              │ DATABLK statement.              │                    │            │
     ├──────────────┼─────────────────────────────────┼────────────────────┼────────────┤
     │ PARAM        │ Parameters described by a NDDL  │ NDDL PARAMETERS    │ 3.         │
     │              │ PARAM statement.                │                    │            │
     ├──────────────┼─────────────────────────────────┼────────────────────┼────────────┤
     │ QUALCURR     │ Current qualifiers and their    │ CURRENT QUALIFIERS │ 4.         │
     │              │ values.                         │                    │            │
     ├──────────────┼─────────────────────────────────┼────────────────────┼────────────┤
     │ QUALIFIERS   │ Qualifiers and their values for │ QUALIFIERS         │ 5.         │
     │              │ each key number.                │                    │            │
     ├──────────────┼─────────────────────────────────┼────────────────────┼────────────┤
     │ DATABLK(LOCA │ Data blocks not described by a  │ LOCAL DATABLOCKS   │ 6.         │
     │ L)           │ NDDL DATABLK statement.         │                    │            │
     ├──────────────┼─────────────────────────────────┼────────────────────┼────────────┤
     │ PARAM(LOCAL) │ Parameters not described by a   │ LOCAL PARAMETERS   │ 7.         │
     │              │ NDDL PARAM statement.           │                    │            │
     ├──────────────┼─────────────────────────────────┼────────────────────┼────────────┤
     │ PROJVERS     │ Project-Version.                │ PROJECT-VERSION    │ 8.         │
     └──────────────┴─────────────────────────────────┴────────────────────┴────────────┘
     ```

     If DBDICT is specified without any describers, then the NDDL Data blocks Table will be printed. See Remark  2.

     DATABLK(LOCAL) and PARAM(LOCAL) produce no output, and QUALCURR produces the default values specified on the NDDL QUAL statement.

     The defaults and allowable colnames for SELECT, FORMAT, SORT, and LABEL depend on the table. The defaults are described in the following remarks and tables.

2. The default print of the NDDL Data Blocks Table is obtained by

     ```nastran
     DBDICT
     ```

     or

     ```nastran
     DBDICT DATABLK
     ```

     and is equivalent to

     ```nastran
     DBDICT DATABLK ,
       SELECT(NAME,DATABASE,DBSET,PROJ,VERS,CDATE,CTIME,
         SIZE,KEY,PURGED=’PU’,EQUIVD=’EQ’,
         POINTER=’FILE’,QUALSET) ,
       FORMAT(NAME=8,DBSET=8,CDATE=6,CTIME=6,SIZE=5,
         KEY=4 ,PURGED=4,EQUIVD=4,POINTER=8,
         IWIDTH=5,COLSPACE=1) ,
       SORT(PROJ=A,VERS=A,DBSET=A,NAME=A) ,
       LABEL(’NDDL DATABLOCKS’ CENTER)
     ```

     and looks like:

          See link for figure.

     Figure 3-1   DBDICT DATABLK Example

     Table 2  gives the allowable colnames and a description that may be specified in the FORMAT, SELECT, and SORT describers.

          See link for table.

```text
┌───────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Note: │ Default widths for qualifiers are DWIDTH=17.10, IWIDTH=5, LWIDTH=1, AWIDTH=8, and FWIDTH=12.5. │
└───────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

3. The default print of the NDDL Parameter Table is obtained by

     ```nastran
     DBDICT PARAM
     ```

     and is equivalent to

     ```nastran
     DBDICT PARAM,
       SELECT(NAME,DATABASE,DBSET,PROJ,VERS,CDATE,CTIME,
         KEY,VALUE,QUALSET),
       FORMAT(NAME=8,DATABASE=8,DBSET=8,CDATE=6,CTIME=6,
         KEY=4,VALUE=40,IWIDTH=5,COLSPACE=1),
       SORT(PROJ=A,VERS=A,DBSET=A,NAME=A),
       LABEL(’NDDL PARAMETERS’ CENTER)
     ```

     and looks like:

          See link for figure.

     Figure 3-2    DBDICT PARAM Example

     Table 3  gives the allowable colnames along with a description that may be specified in the FORMAT, SELECT, and SORT describers.

          See link for table.

```text
┌───────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Note: │ Default widths for qualifiers are DWIDTH=17.10, AWIDTH=8, IWIDTH=5, LWIDTH=1, and FWIDTH=12.5. │
└───────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

4. The default print of the qualifier table is obtained by

     ```nastran
     DBDICT QUALIFIERS
     ```

     and is equivalent to

     ```nastran
     DBDICT QUALIFIERS ,
       SELECT(KEY QUALALL) ,
       FORMAT(DWIDTH=17.10 AWIDTH=8 IWIDTH=5 LWIDTH=1 ,
         FWIDTH=12.5  COLSPACE=2) SORT(KEY=A) ,
       LABEL(’QUALIFIERS’ CENTER )
     ```

     and looks like:

          See link for figure.

     Figure 3-3    DBDICT QUALIFIERS Example

     QUALALL selects all qualifiers to be printed. The qualifiers will be printed in alphabetic order. QUALSET selects only the qualifiers SEID, PEID, SPC, MPC, LOAD, and METH to be printed.

     Table 4  gives the allowable colnames and a description that may be specified in the FORMAT, SELECT, and SORT describers. QUALALL and QUALSET may not be specified in the FORMAT or SORT describers. The qualifier names and values are not printed one per row, but rather from left to right as one logical line that is allowed to wrap after 132 columns.

          See link for table.

```text
┌───────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
│ Note: │ Default widths for qualifiers are DWIDTH=17.10, IWIDTH=5, LWIDTH=1, and FWIDTH=12.5. AWIDTH │
│       │ defaults to the length specified on the QUAL statement in the NDDL sequence.                │
└───────┴─────────────────────────────────────────────────────────────────────────────────────────────┘
```

5. The default print of the current qualifier table is obtained by

     ```nastran
     DBDICT QUALCURR
     ```

     and is equivalent to

     ```nastran
     DBDICT QUALCURR SELECT(QUALALL),
       FORMAT(AWIDTH=8,IWIDTH=5,LWIDTH=1,COLSPACE=2),
       LABEL=(’CURRENT QUALIFIERS’ CENTER)
     ```

     and looks like:

          See link for figure.

     Figure 3-4   DBDICT QUALCURR Example

     Table 5  gives the allowable colnames and a description that may be specified in the SELECT describers.

          See link for table.

```text
┌───────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
│ Note: │ Default widths for qualifiers are DWIDTH=17.10, IWIDTH=5, LWIDTH=1, and FWIDTH=12.5. AWIDTH │
│       │ defaults to the length specified on the QUAL statement in the NDDL sequence.                │
└───────┴─────────────────────────────────────────────────────────────────────────────────────────────┘
```

6. The default print of the Local Data Block Table is obtained by

     ```nastran
     DBDICT DATABLK(LOCAL)
     ```

     and is equivalent to

     ```nastran
     DBDICT DATABLK(LOCAL),
       SELECT(NAME,SUBDMAP,SIZE=’BLOCKS’,PURGED=’PU’,
         EQUIVD=’EQ’,POINTER,TRL1,TRL2,TRL3,TRL4,
         TRL5,TRL6,TRL7),
       FORMAT(NAME=8,SUBDMAP=8,IWIDTH=8,COLSPACE=2),
       SORT(NAME=A) LABEL(’LOCAL DATABLOCKS’ CENTER)
     ```

     and looks like:

          See link for figure.

     Figure 3-5 DBDICT DATABLK(LOCAL) Example

     TRLi specifies the data block trailer word i where 1    <    i    <    10. TRAILER selects all 10 data block trailer words.

     Table 6  gives the allowable colnames and a description that may be specified in the FORMAT, SELECT, and SORT describers.

          See link for table.

7. The default print of the local parameter table is obtained by

     ```nastran
     DBDICT PARAM(LOCAL)
     ```

     and is equivalent to

     ```nastran
     DBDICT PARAM(LOCAL) SELECT(NAME,SUBDMAP,VALUE),
       FORMAT(COLSPACE=4,VALUE=40,AWIDTH=8),
       SORT(NAME=A) LABEL(’ LOCAL PARAMETERS’ CENTER)
     ```

     and looks like:

          See link for figure.

     Figure 3-6 DBDICT PARAM(LOCAL) Example

     Table 7  gives the allowable colnames and a description that may be specified in the FORMAT, SELECT, and SORT describers.

          See link for table.

8. The default print of Project-Version Table is obtained by

     ```nastran
     DBDICT PROJVERS
     ```

     and is equivalent to

     ```nastran
     DBDICT PROJVERS ,
       SELECT(PROJECT=’PROJECT NAME’,PROJ=’PROJ NO.’ ,
         VERS=’VERSION’,DELFLG=’DELETED’ ,
         CDATE=’CREATION DATE’ CTIME=’CREATION
         TIME’) ,
       FORMAT(PROJECT=40,PROJ=10,VERS=10,DELFLG=7,
         COLSPACE=1 ,CDATE=13,CTIME=13) ,
       LABEL(’PROJECT-VERSION’,CENTER) ,
         SORT(PROJ=A,VERS=A)
     ```

     and looks like:

          See link for figure.

     Figure 3-7 DBDICT PROJVERS Example

     Table 8  gives the allowable colnames and a description that may be specified in the FORMAT, SELECT, and SORT describers.

          See link for table.

     CDATE is printed as YYMMDD where YY, MM, and DD are the year, month, and date, respectively. CTIME is HHMMSS where HH, MM, and SS are the hour, minute, and second, respectively.

9. If a parameter or qualifier value is defined to be character string, then the value will be printed with enclosing single quotation marks. Blank strings will also be printed with single quotation marks.
10. If a given qualifier is not in the path of a given data block or parameter, then blank spaces will be printed.
11. A line will wrap if additional columns need to be printed and not enough space is available on the output (assumed to be 132). The first column of each additional line is to be indented by the width of the first column printed for the entry.
12. The where-expr has the following rules:
     - If the where-expr specifies a colname that is not assigned to the data block or parameter, then no directory information will be printed for that data block or parameter. For example, given that SPC is not a qualifier for KGG, the following DBDICT statement will produce no output:

     ```nastran
     DBDICT DATABLK=KGG WHERE(SPC=10)
     ```

     - If the where-expr does not specify a colname that is assigned to the data block (or parameter), then the qualifier is wildcarded. For example, given that SEID is a qualifier for KAA, the following DBDICT statements are equivalent:

     ```nastran
     DBDICT DATABLK=KAA
     DBDICT DATABLK=KAA WHERE(SEID = *)
     ```

13. A colname specified in the where-expr must be specified in the SELECT clause if the SELECT clause is also specified.

#### Examples:

1. Print the project version table with a title.

     ```nastran
     DBDICT  PROJVERS SORT(PROJ,VERSION) LABEL(’PROJECT
     VERSION TABLE’ LEFT)
     ```

2. Print a directory of all data blocks qualified with PEID=10 or SEID=10. Print columns for the NAME and DBSET, and the qualifiers SPC, MPC, and LOAD.

     ```nastran
     DBDICT  DATABLK SELECT(NAME,SPC,MPC,LOAD,DBSET,SIZE,
     SEID,PEID) ,
     SORT(NAME,SIZE=D)  WHERE( SEID=10 OR PEID=10)
     ```
