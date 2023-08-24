## [COMPILE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/TOC.COMPILE.xhtml) - Compiles DMAP Statements

Requests the compilation of a subDMAP, subDMAP alter, or NDDL sequence.

#### Format 1:  Compiles a subDMAP or subDMAP alter sequence

![executive00667.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/../../../assets/executive00667.jpg?_LANG=enus)  

![executive00669.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/../../../assets/executive00669.jpg?_LANG=enus)  

#### Format 2:  Compiles an NDDL sequence

![executive00671.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/../../../assets/executive00671.jpg?_LANG=enus)  

#### Examples:

1. The following compiles an alter in subDMAP PHASEIDR:

     ```nastran
     COMPILE PHASE1DR
     ALTER ’CALL PHASE1A’
     CEND
     ```

2. The following compiles a subDMAP called MYDMAP. (SUBDMAP and END are DMAP statements; see the  MSC Nastran DMAP Programmer’s Guide ):

     ```nastran
     COMPILE MYDMAP LIST REF
     SUBDMAP MYDMAP $
     .
     .
     .
     END $
     CEND
     ```

3. The following obtains a listing of the NDDL:

     ```nastran
     ACQUIRE NDDL
     COMPILE NDDL=NDDL LIST
     CEND
     ```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ subDMAP-name │ The name of a subDMAP sequence. SubDMAP-name must be 1 to 8 alphanumeric characters in length and  │
│              │ the first character must be alphabetic. The keywords DMAP and SUBDMAP are optional and do not have │
│              │ to be specified.                                                                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ nddl-name    │ The name of an NDDL sequence (Character; 1 to 8 alphanumeric characters in length and the first    │
│              │ character must be alphabetic). The keyword NDDL must be specified.                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ souin-DBset  │ The name of a DBset from which the subDMAP or NDDL source statements will be retrieved (Character; │
│              │ 1 to 8 alphanumeric characters in length and the first character must be alphabetic). The default  │
│              │ is MSCSOU if the next statement is not a subDMAP statement.                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ souout-DBset │ The name of a DBset on which the subDMAP or NDDL source statements will be stored (Character; 1 to │
│              │ 8 alphanumeric characters in length and the first character must be alphabetic). The default is    │
│              │ the SCRATCH DBset.                                                                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ objout-DBset │ The name of a DBset on which the subDMAP object code will be stored (Character; 1 to 8             │
│              │ alphanumeric characters in length and the first character must be alphabetic). The default is the  │
│              │ OBJSCR DBset.                                                                                      │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LIST,NOLIST  │ LIST requests a compiled listing of the subDMAP or NDDL sequence. NOLIST suppresses the listing.   │
│              │ NOLIST is the default.                                                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REF,NOREF    │ REF requests a compiled cross reference of the subDMAP or NDDL sequence. NOREF suppresses the      │
│              │ cross reference. NOREF is the default.                                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DECK,NODECK  │ DECK requests the subDMAP or NDDL source statements to be written to the PUNCH file. NODECK        │
│              │ suppresses the writing to the PUNCH file. NODECK is the default.                                   │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. SubDMAP names for MSC Nastran solution sequences are given in the SOL statement description. The “COMPILER LIST REF” statement may be used to determine the appropriate subDMAP-name.
2. If a subDMAP is being compiled and SOUIN=souin-DBset is specified, then an ALTER Executive Control statement, or an INCLUDE statement which contains an ALTER statement as the first non-comment line, must appear immediately after this statement. If not, then the SUBDMAP DMAP statement must appear immediately after this statement. See the  MSC Nastran DMAP Programmer’s Guide .
3. Starting in MSC/Nastran Version 69, DBsets USRSOU and USROBJ were no longer automatically created. They must be initialized by the INIT FMS statement and then may be specified for souin-dbset (or souout-dbset) and objout-dbset, respectively. They may be used to store the subDMAP source statements and object code on the primary database for reexecution in a subsequent run. Consider the following example:

     In the first run, the following COMPILE statement compiles and stores a subDMAP called MYDMAP:

     ```nastran
     COMPILE MYDMAP SOUOUT=USRSOU OBJOUT=USROBJ
     SUBDMAP MYDMAP $
     .
     .
     END $
     CEND
     ```

     In the second run, the SOL statement is used to execute the MYDMAP stored in the previous run. The LINK statement is required to retrieve the object code from the USROBJ DBset:

     ```nastran
     SOL MYDMAP
     LINK MYDMAP INCL=USROBJ
     CEND
     ```

     In the third run, the COMPILE statement is used to alter MYDMAP and execute:

     ```nastran
     SOL MYDMAP
     COMPILE MYDMAP SOUIN=USRSOU
     ALTER...
     .
     .
     .
     CEND
     ```

4. If SOUOUT or OBJOUT is specified and a subDMAP with the same name as subDMAP-name already exists on the database, then its source statements or object code will be replaced.
5. A COMPILE statement is required for each subDMAP to be compiled. If two or more COMPILE statements reference the same subDMAP name, then only the last is used in the linking of the object code. If the COMPILE statement is being used only to alter a subDMAP and two or more COMPILE statements reference the same subDMAP name, then the multiple alters are assembled and the subDMAP is compiled only once.
6. Only one COMPILE statement for an NDDL sequence may be specified in the input file.
     - SOUIN=souin-DBset requests only a compilation of the NDDL sequence stored on souin-DBset for purposes of obtaining a listing or a cross reference, and it cannot be modified with the ALTER statement. See Remark   COMPILE NDDL=NDDL SOUIN=MSCSOU LIST requests a listing of the MSC Nastran NDDL sequence. The ACQUIRE FMS statement or the SOL statement must be specified in order to attach the corresponding delivery database.
     - To alter the MSC Nastran NDDL sequences, the entire modified NDDL sequence is included after the COMPILE statement, and SOUIN=souin-DBset is not specified.
     - SOUOUT=souout-DBset requests the storage of   the NDDL source statements on the souout-DBset, and may not be specified with SOUIN=souin-DBset.
7. The COMPILER statement may be used to override the defaults of NOLIST, NOREF, and NODECK. In other words, if LIST or NOLIST, REF or NOREF, or DECK or NODECK is not specified, then the corresponding option on the COMPILER statement will be used. In the following example, REF on the COMPILER statement will override the default of NOREF on the COMPILE statement:

     ```nastran
     COMPILER REF
     COMPILE MYDMAP
     ```

8. MSCSOU and MSCOBJ, specified with SOUOUT and OBJOUT, are special DBsets similar to USRSOU and USROBJ except that they are used in the creation or modification of a delivery database. For an example application, see the  .
