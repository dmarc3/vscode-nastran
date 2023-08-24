## [ASSIGN](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/TOC.ASSIGN.xhtml) - Assigns Physical File

Assigns physical file names or other properties to DBset members or special FORTRAN files that are used by other FMS statements or DMAP modules. Also, assigns physical name and/or other properties to modal neutral files (.mnf) for MSC Nastran/ADAMS interface.

#### Format 1: Assign a DBset member name

ASSIGN    log-name= ![fms00607.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/../../../assets/fms00607.jpg?_LANG=enus)    [TEMP]   [ DELETE]   [ SYS=’sys-spec’ ]

#### Format 2: Assign a FORTRAN file

ASSIGN    logical-key  ![fms00609.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/../../../assets/fms00609.jpg?_LANG=enus)     [UNIT = u]

![fms00611.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/../../../assets/fms00611.jpg?_LANG=enus)

![fms00613.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/../../../assets/fms00613.jpg?_LANG=enus)

[DEFER ]   ![fms00615.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/../../../assets/fms00615.jpg?_LANG=enus)   [ DELETE]   [SYS = ‘sys-spec’]

[IMPORT]

#### Examples:

1. Assign the DBALL DBset:

```nastran
ASSIGN DB1=’filename of member DB1’
INIT DBALL LOGI=(DB1)
```

2. Assign FORTRAN file 12 to the OUTPUT4 module using the ASCII option:

```nastran
ASSIGN OUTPUT4=’filename of FORTRAN file’
UNIT=12, FORM=FORMATTED
```

3. Assign FORTRAN file to the OPCASE using the ASCII option:

```nastran
ASSIGN OPCASE=’Filename of FORTRAN file’, STATUS=NEW
```

4. Define SYS parameters for the SCR300 DBset file using the default file name:

```nastran
ASSIGN SCR300 SYS=’...’
```

5. Set the default .op2 file format to UNFORMATTED_64 and assign two .op2 files, one to unit 12 with the file name "test_op2.12' and one to unit 35 with file name 'test_op2.35' in ASCII mode.

```nastran
ASSIGN OUTPUT2 UNFORMATTED_64
...
ASSIGN OUTPUT2='test_op2.12' UNIT=12
ASSIGN OUTPUT2='test_op2.35' UNIT=35 FORM=FORMATTED
```

6. Assign a Fortran unit to the Universal File (UF) containing the FRF information for a test FRF component to be used in an FRF Based Assembly (FBA) process.

```nastran
ASSIGN UNVFILE=’testcomp_unv’ UNIT=25
```

```text
┌─────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ log-name    │ The name of a DBset member name. log-name may also be referenced on an INIT statement after the    │
│             │ LOGICAL keyword.                                                                                   │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ filename1   │ The physical filename assigned to the DBset member. If the default filename (if there is one) is   │
│             │ to be used, filename1 may be omitted or specified as * or ‘*’. See Remark 6.                       │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ logical-key │ Specifies defaults for STATUS, UNIT, and FORM of FORTRAN files for other FMS statements, DMAP      │
│             │ modules, punching, and plotting operations.                                                        │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ filename2   │ The physical file name assigned to the FORTRAN file. If the default filename is to be used,        │
│             │ filename2 may be omitted or specified as * or ‘*”. See Remark 7.                                   │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNlT=u      │ u is the FORTRAN unit number of the FORTRAN file. If this describer is omitted and if filename2 is │
│             │ omitted, this ASSIGN statement will update the defaults for subsequent ASSIGN statements for the   │
│             │ same logical-key value. See Remark 7.                                                              │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TEMP        │ Requests that the file associated with log-name or logical-key/UNIT be deleted at the end of the   │
│             │ run. Warning, using TEMP on OP2 or XDB files will result in the inability to postprocess the       │
│             │ results.                                                                                           │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DELETE      │ Requests that the file associated with logical-key/UNIT, if it exists before the start of the run, │
│             │ be deleted.                                                                                        │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DELZERO     │ Requests that the file associated with logical-key/UNIT be deleted at the end of the run if it is  │
│             │ zero-length; that is, if it does not contain any data.                                             │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STATUS      │ Specifies whether the FORTRAN file is being created (STATUS=NEW) or has been created prior to the  │
│             │ run (STATUS=OLD). If its status is not known, then STATUS=UNKNOWN is specified.                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FORM        │ Indicates whether the FORTRAN file is written in ASCII (FORM=FORMATTED) or binary                  │
│             │ (FORM=UNFORMATTED, UNFORMATTED_64, UNFORMATTED_32, UNFORMATTED_MIX) format. See Remark 10., 11.,   │
│             │ 12., 13. 18. and 21.                                                                               │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DEFER       │ Defers opening/creating the specified file.  That is, the file will not be opened/created during   │
│             │ MSC Nastran initialization. The file must be explicitly opened by the module or DMAP accessing the │
│             │ file using, for example, FORTIO, before it can be used.                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ sys-spec    │ System-specific, machine-dependent or application-specific controls. For DBset files, these        │
│             │ control I/O performance. For FORTRAN files, only the PLOT and DBC Logical-Key Names use this       │
│             │ field. For the DBC Logical-Key, these controls are for I/O performance just as for DBset files.    │
│             │ For the PLOT Logical-Key, these controls are used for PostScript processing when FORM=FORMATTED is │
│             │ in effect and are ignored otherwise. See Remark 14.                                                │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RECL = l    │ The size of a block of input/output information specified in words. See Remark 15.                 │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SIZE = s    │ The number of blocks allocated to the DBC database. See Remark 16.                                 │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IMPORT      │ Imports external ifpdb. When this is absent, IFPDB is for export.                                  │
└─────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The ASSIGN statement and its applications are discussed further in the    in the MSC Nastran Reference Guide .
2. The log-name or logical-key describer must be the first describer on the ASSIGN statement. All other describers may appear in any order. With the exception of log-name, logical-key, filename1, filename2, and sys-spec, describers and values longer than four characters may be abbreviated to four characters.
3. For FORTRAN files, the logical-key names and their default attributes are listed in  . If a logical-key name is identified as “Assignable YES”, then the defaults may be overridden on the ASSIGN statement.
4. Certain reserved names may not be used for log-names or logical-key names. These names are the logical names listed in   that are identified as “Assignable NO”.   This list includes: SEMTRN, LNKSWH, MESHFL, LOGFL, INPUT, PRINT, INCLD1, and CNTFL. If they are used, then a User Fatal Message is issued. Unit numbers 1 through 10, 14, 16, 18, 19 and 21 should not be assigned. Up to 4000 ASSIGNs are allowed. Some operating systems may have a smaller limit. To avoid that limit use “ulmit -n 4096”. Unit numbers 1234, 1235, 1236, 1133 to 2269 are not allowed. Some operating systems may have their own limit on the number of open files as well. PUNCH and PLOT may be used, but are not recommended. Most keyword assignments can be specified as command line arguments and/or included in RC files. There are some exceptions such as solve=auto may be specified on the command line or the User RC files, but not in the system RC files (MSC_BASE/conf/RCfile).
5. If one of the logical-key names indicated in the Remarks   and   is not specified on this statement, then it is assumed to be a DBset member name log-name as shown in Format 1.
6. If the same log-name is used on more than one DBset ASSIGN statement, the following rules apply:
     - If there is no current entry for the specified log-name, a new entry in the DBset tables will be created. If there is an existing entry for the specified log-name, the ASSIGN parameters will modify that entry instead of creating a new one.
     - If filename1 is omitted or is specified as * or ‘*’, the default file name or, if this is a second or subsequent ASSIGN statement for the same log-name, the previously specified file name (or default name if none was previously specified) will be used.
7. If the same logical-key is used on more than one FORTRAN file ASSIGN statement, the following rules apply:
     - If filename2 is omitted (or specified as * or ‘*’) and if the UNIT describer is omitted, the ASSIGN parameters will modify the system default entry for the logical-key, establishing the new defaults for any subsequent ASSIGN entry for the logical-key. Note, however, that any entries previously created with the same logical-key will not be modified by the new parameters specified on this ASSIGN statement.
     - If the value specified by the UNIT describer matches the value for an entry created by a previous ASSIGN statement with a UNIT describer, then:
          * If the logical-key values are different, a UFM will be generated; and
          * If the logical-key values are the same, the previous entry will be updated instead of having a new entry created.
     - If the value specified by the UNIT describer does not match the value for an entry created by a previous ASSIGN statement with a UNIT describer, then a new entry will be created in the FORTRAN unit tables.
     - If the file name is omitted or specified as * or ‘*’, the default file name or, if this is a second or subsequent ASSIGN statement for the same logical-key/UNIT combination, a previously specified file name (or default name if none was previously specified) will be used.
8. If you are using IFPSTAR (default), you can use below command to import IFPDAT file created by the initial run if the file is not located in the same directory as MASTER and DBALL files. 

```nastran
ASSIGN IFPDB=first_run_directory/run1.IFPDAT IMPORT.
```

9. STATUS, UNIT, and FORM are ignored if assigning a log-name (DBset member name).
10. FORM=FORMATTED must be specified for a unit when:
     - ASCII output is desired from the OUTPUT4 DMAP modules that processes the unit. See the  MSC Nastran DMAP Programmer’s Guide .
     - FORMAT=NEUTRAL is selected on the DBUNLOAD and DBLOAD FMS statements that process the unit. See the    in the MSC Nastran Reference Guide .
     - The neutral file format is desired for the OUTPUT2 module.
     - PostScript output is desired for PLOT requests when “PLOTTER NAST” is in effect.
11. For the DBUNLOAD FMS statement and the OUTPUT2 and OUTPUT4 modules, binary format may be requested using FORM=UNFORMATTED, FORM=UNFORMATTED_64, FORM=UNFORMATTED_32 and FORM=UNFORMATTED_MIX. The output formats with these keywords are as the following:

```text
┌──────────────┬─────────────┬──────────────┬────────────────┐
│ FORM         │ Table (bit) │ Matrix (bit) │ Old keyword    │
├──────────────┼─────────────┼──────────────┼────────────────┤
│ UNFORMATTED  │ 64          │ 64           │ UNFORMATTED    │
├──────────────┼─────────────┼──────────────┼────────────────┤
│ UNFORMATTED_ │ 64          │ 64           │ LITTLEENDIAN64 │
│ 64           │             │              │                │
├──────────────┼─────────────┼──────────────┼────────────────┤
│ UNFORMATTED_ │ 32          │ 32           │ N/A            │
│ 32           │             │              │                │
├──────────────┼─────────────┼──────────────┼────────────────┤
│ UNFORMATTED_ │ 32          │ 64           │ LITTLEENDIAN   │
│ MIX          │             │              │                │
└──────────────┴─────────────┴──────────────┴────────────────┘
```

12. The FORM= describer is ignored for the DBLOAD FMS statement and INPUTT2 and INPUTT4 modules. MSC Nastran determines the actual file format when it accesses the specified file. If the FORM= describer is specified on an ASSIGN statement for these logical-keys, the syntax of the describer will be validated but will otherwise be ignored. However,
     - For non-native binary files the INPUTT2 modules can only process data blocks with an NDDL description. (See the  MSC Nastran DMAP Programmer’s Guide  under the DATABLK statement.) An NDDL description is required for TYPE=TABLE and none is required for TYPE=MATRIX. The data block must be processed with FORM=UNFORMATTED if TYPE=UNSTRUCTURED, KDICT, or KELM.
     - Although formatted files are machine independent, if the file in unformatted DBLOAD can only process input files in native binary format.
13. For the DBUNLOAD FMS statement and OUTPUT2 module, if FORM is other than UNFORMATTED (or equivalent, e.g., UNFORMATTED_32 on a Linux or Windows platform), then only data blocks with an NDDL description are processed. (See the  MSC Nastran DMAP Programmer’s Guide   under the DATABLK statement.) An NDDL description is required for TYPE=TABLE and none is required for TYPE=MATRIX. The data block must be processed with FORM=UNFORMATTED if TYPE=UNSTRUCTURED, KDICT, or KELM.
14. See the    for further information on sys-spec controls and on machine-dependent aspects of the ASSIGN statement. Also, if there are SYS specifications on more than one ASSIGN statement specifying the same log-name or logical-key/UNIT combination, the second and subsequent specifications will appended to the current SYS specification with a comma separator.
15. Currently the RECL keyword is used by the DBC module and has a default minimum of 1024 words. The maximum allowed is 65536 words and is used to increase the database capacity.
16. The SIZE keyword is used by the DBC module and has a default of 16777215. The maximum allowed is 2147483647 and is used to increase the database capacity. Patran releases before 2001 should use the defaults for RECL and SIZE or database verification failures will occur.
17. logical-key name MNF does not utilize UNIT or FORM.
18. For logical-key DBC, if the .xdb file is new, the desired binary format may be specified in the same way as for the OUTPUT2 and OUTPUT4 modules, as described in Remark  , except that FORM=FORMATTED is not valid. If the .xdb file is not new, the FORM= describer is ignored and MSC Nastran determines the format of the existing .xdb file. MSC Nastran can read and or update an .xdb file in any valid format. Note, on long-word systems (mode=i8) the effect of 64-bit output files is that ADAMS(MNF), Patran, and SimXpert may fail to process the results.
19. SOL700 reserves unit numbers 87-92 for its internal use. When using SOL700 users should not use these unit number to avoid conflicts.
20. The total length of any line in an ASSIGN statement must not exceed 72 characters. Long file names may be split across multiple lines with commas at the end of line and next to be without spaces. For example, the file:  ASSIGN SCR300='E:\hrishikesh_scr300\testing\delimiter\issue\scratch.SCR300' DELETE  
should be specified with the following input:  ASSIGN SCR300='E:\hrishikesh_scr300\testing\,   delimiter\issue\scratch.SCR300' DELETE .

```text
┌─────────────┬──────────────┬──────────┬──────────────┬────────┬────────────┬──────┬────────┬──────────────┐
│ Logical Key │ Physical     │ Unit No. │ Form         │ Status │ Assignable │ Open │ Access │ Description/ │
│ Name        │ Name         │          │              │        │            │      │        │ Application  │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ SEMTRN      │ sdir/data.f0 │ 1        │ FORMATTED    │ NEW    │ NO         │ YES  │ SEQ.   │ Input Data   │
│             │ 1            │          │              │        │            │      │        │ Copy Unit    │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ LNKSWH      │ sdir/data.f0 │ 2        │ UNFORMATTED  │ NEW    │ NO         │ YES  │ SEQ.   │ Link Switch  │
│             │ 2            │          │              │        │            │      │        │ Unit         │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ MESHFL      │ sdir/data.f0 │ 3        │ FORMATTED    │ NEW    │ NO         │ YES  │ SEQ.   │ Input Data   │
│             │ 3            │          │              │        │            │      │        │ Copy Unit    │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ LOGFl       │ out.f04      │ 4        │ FORMATTED    │ NEW    │ NO         │ YES  │ SEQ.   │ Execution    │
│             │              │          │              │        │            │      │        │ Summary Unit │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ INPUT       │ data.dat     │ 5        │ FORMATTED    │ OLD    │ NO         │ YES  │ SEQ.   │ Input File   │
│             │              │          │              │        │            │      │        │ Unit         │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ PRINT       │ out.f06      │ 6        │ FORMATTED    │ NEW    │ NO         │ YES  │ SEQ.   │ Main Print   │
│             │              │          │              │        │            │      │        │ Output Unit  │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ PUNCH       │ out.pch      │ 7        │ FORMATTED    │ NEW    │ YES        │ YES  │ SEQ.   │ Default      │
│             │              │          │              │        │            │      │        │ Punch Output │
│             │              │          │              │        │            │      │        │ Uniit        │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│             │ authorize.da │ 8        │ FORMATTED    │ OLD    │ NO         │ YES  │ SEQ.   │ Authorizatio │
│             │ t            │          │              │        │            │      │        │ n File       │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ INCLD1      │              │          │              │        │ NO         │      │        │ Available    │
│             │              │          │              │        │            │      │        │ for Use      │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ CNTFL       │              │          │              │        │ NO         │      │        │ Available    │
│             │              │          │              │        │            │      │        │ for Use      │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ INPUTT2     │ REQ          │ REQ      │              │ OLD    │ YES        │ NO   │ SEQ.   │ INPUTT2 Unit │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ OUTPUT2+    │ out.op2      │ 12       │ UNFORMATTED* │ NEW    │ YES        │ YES  │ SEQ.   │ OUTPUT2 Unit │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ INPUTT4     │ REQ          │ REQ      │              │ OLD    │ YES        │ NO   │ SEQ.   │ INPUTT4 Unit │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ OUTPUT4     │ REQ          │ REQ      │ UNFORMATTED* │ NEW    │ YES        │ NO   │ SEQ.   │ OUTPUT4 Unit │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ PLOT        │ out.plt      │ 14       │ UNFORMATTED+ │ NEW    │ YES        │ YES  │ SEQ.   │ Plotter      │
│             │              │          │ +            │        │            │      │        │ Output Unit  │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ BULKECHO    │ out.becho    │ 18       │ FORMATTED    │ NEW    │ YES        │ YES  │ SEQ.   │ Bulk         │
│             │              │          │              │        │            │      │        │ EchoUnit     │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ OUTPUT2F    │ out          │ 19       │ UNFORMATTED  │ NEW    │ YES        │      │ SEQ.   │ Named        │
│             │              │          │              │        │            │      │        │ OUTPUT2      │
│             │              │          │              │        │            │      │        │ Pattern      │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ OPCASE      │ REQ          │ 22       │ FORMATED     │ NEW    │ YES        │      │ SEQ.   │ Available    │
│             │              │          │              │        │            │      │        │ for Use      │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ TOPDES      │ out.des      │ 21       │ FORMATTED    │ NEW    │ YES        │ YES  │ SEQ.   │ Topology     │
│             │              │          │              │        │            │      │        │ Optimization │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ AESO        │ out.AESO     │ 23       │ FORMATTED    │ NEW    │ YES        │ YES  │ SEQ.   │ Optimization │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ DBC         │ out.xdb      │ 40       │ UNFORMATTED  │ NEW    │ YES        │ YES  │ DIRECT │ Database     │
│             │              │          │              │        │            │      │        │ Converter    │
│             │              │          │              │        │            │      │        │ Unit         │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ DBUNLOAD    │ REQ          │ 50       │ UNFORMATTED* │ NEW    │ YES        │ NO   │ SEQ.   │ DBUNLOAD FMS │
│             │              │          │              │        │            │      │        │ statement    │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ DBLOAD      │ REQ          │ 51       │              │ OLD    │ YES        │ NO   │ SEQ.   │ DBLOAD FMS   │
│             │              │          │              │        │            │      │        │ statement    │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ MNF         │ out.mnf      │ none     │ none         │ NEW    │ YES        │ NO   │ SEQ.   │ Interface    │
│             │              │          │              │        │            │      │        │ for          │
│             │              │          │              │        │            │      │        │ ADAMS/Flex   │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ A502LU      │              │          │              │        │            │      │        │ Available    │
│             │              │          │              │        │            │      │        │ for Use      │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ DBMIG       │              │          │              │        │            │      │        │ Available    │
│             │              │          │              │        │            │      │        │ for Use      │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ USERFILE    │ REQ          │ REQ      │ REQ          │ REQ    │ YES        │ NO   │ SEQ.   │ Any User-    │
│             │              │          │              │        │            │      │        │ Defined File │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ UNVFILE     │ REQ          │ REQ      │ FORMATTED    │ OLD    │ YES        │ NO   │ SEQ.   │ Universal    │
│             │              │          │              │        │            │      │        │ File (UF)    │
│             │              │          │              │        │            │      │        │ Unit         │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ ADFFILE     │ out.afu      │ none     │ none         │ NEW    │ YES        │ NO   │ SEQ.   │ Associated   │
│             │              │          │              │        │            │      │        │ Data File    │
│             │              │          │              │        │            │      │        │ Unit         │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ IFPDB       │ out.IFPDB    │ no       │ no           │ NEW    │ YES        │ NO   │ SEQ    │ Export or    │
│             │              │          │              │        │            │      │        │ import       │
│             │              │          │              │        │            │      │        │ IFPDAT file  │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ ACG         │ out.acg      │ no       │ no           │ NEW    │ YES        │ NO   │ SEQ    │ Automatic    │
│             │              │          │              │        │            │      │        │ Contact      │
│             │              │          │              │        │            │      │        │ Generation   │
│             │              │          │              │        │            │      │        │ file         │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ HDF5        │ out.h5       │ no       │ no           │ NEW    │ YES        │ NO   │ N/A    │ Nastran HDF5 │
│             │              │          │              │        │            │      │        │ result       │
│             │              │          │              │        │            │      │        │ database     │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ HDF5IN      │ pre_run.h5   │ REQ      │ no           │ OLD    │ YES        │ NO   │ SEQ    │ Read         │
│             │              │          │              │        │            │      │        │ displacement │
│             │              │          │              │        │            │      │        │ or           │
│             │              │          │              │        │            │      │        │ eigenvector  │
│             │              │          │              │        │            │      │        │ datasets     │
│             │              │          │              │        │            │      │        │ from MSC     │
│             │              │          │              │        │            │      │        │ Nastran hdf5 │
│             │              │          │              │        │            │      │        │ result       │
│             │              │          │              │        │            │      │        │ database     │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│ IMPFIN      │ example.impf │ REQ      │ no           │ OLD    │ YES        │ NO   │ N/A    │ Read         │
│             │              │          │              │        │            │      │        │ imperfection │
│             │              │          │              │        │            │      │        │ file         │
├─────────────┼──────────────┼──────────┼──────────────┼────────┼────────────┼──────┼────────┼──────────────┤
│             │ out.singular │ various  │ FORMATTED    │ NEW    │ NO         │ YES  │ SEQ    │ SET1 for     │
│             │ ities.bdf    │          │              │        │            │      │        │ massless     │
│             │              │          │              │        │            │      │        │ mechanisms   │
└─────────────┴──────────────┴──────────┴──────────────┴────────┴────────────┴──────┴────────┴──────────────┘
```

where: 

        See link for table.

21. Refer to Remarks  ,  ,  ,   and   above. For UNFORMATTED, the default is 64-bit machine precision. The Linux and Windows platforms, currently supported by MSC Nastran, are binary compatible. FORMATTED involves converting the binary numbers into a compressed ASCII representation, which will result in some roundoff. In a numerically stable problem, the roundoff should not cause problems. However, if the model is not numerically stable or the user is performing operations which require numeric precision, then the roundoff may come into play. See, also, IEEE 754-2008, published in August 2008 for roundoff criterion.
