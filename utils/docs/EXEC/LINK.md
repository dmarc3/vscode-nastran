## [LINK](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/TOC.LINK.xhtml) - Links a Main SubDMAP

Links a main subDMAP to form a solution sequence.

#### Format:

![executive00691.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/../../../assets/executive00691.jpg?_LANG=enus)  

![executive00693.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/../../../assets/executive00693.jpg?_LANG=enus)  

#### Examples:

1. LINK STATICS

     Links the STATICS main subDMAP. The program links any subDMAPs compiled in this run, with any other subDMAP objects called in STATICS and stored on the MSCOBJ DBset.

2. LINK MYDMAP,SOLNAM=STATICS,SOLOUT=USROBJ, NOMAP,INCLUDE=USROBJ

     Links MYDMAP and renames the solution sequence executable to STATICS.  The executable will be saved on the USROBJ DBset. The order of search for subDMAP objects is:

     - Compiled subDMAP in this run.

     - USROBJ DBset.

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ The solution number of the main subDMAP. See the SOL statement description for the list of valid   │
│              │ numbers (Integer > 0).                                                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ subDMAP-name │ The name of a main subDMAP. See the MSC Nastran DMAP Programmer’s Guide (Character; 1 to 8         │
│              │ alphanumeric characters in length and the first character must be alphabetic).                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ solout-DBset │ The name of a DBset where the solution sequence executable and the link table of the solution      │
│              │ sequence may be stored. See Remark 6. (Character; 1 to 8 alphanumeric characters in length and the │
│              │ first character must be alphabetic).                                                               │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ exeout-DBset │ The name of an alternate DBset different than solout-DBset where only the solution sequence        │
│              │ executable may be stored. See Remark 6. (Character; 1 to 8 alphanumeric characters in length and   │
│              │ the first character must be alphabetic).                                                           │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ incl-DBset   │ The name of a DBset where other subDMAP objects are obtained. See Remark 2. (Character; 1 to 8     │
│              │ alphanumeric characters in length and the first character must be alphabetic).                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ newname      │ A new name which is referenced by the SOL statement. (Character; 1 to 8 alphanumeric characters in │
│              │ length and the first character must be alphabetic; default is subDMAP-name.)                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAP          │ Prints the link map. A link map will give the name of all the subDMAPs that make up the solution   │
│              │ sequence.                                                                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOMAP        │ Suppresses printing of the link map.                                                               │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. All DBsets specified on this statement must have the same BUFFSIZE. See the   FMS statement.
2. SubDMAP objects are created with the COMPILE statement either in the current run or obtained from previous runs. The LINK statement collects objects in the following order:
     - Objects created with the COMPILE statement in the current run.
     - Objects residing on the DBset-name specified by the INCLUDE keyword. The default is MSCOBJ.
3. Upon successful linking of a subDMAP, the subDMAP may be executed with the SOL statement.
4. The LINK statement must appear after all the COMPILE packages, if any. A compile package begins with the COMPILE statement and is delimited by the ENDALTER, CEND, LINK, or another COMPILE statement.
5. The link table is necessary for COMPILER (or DIAG 4, 14, 17) Executive Control statement requests and the automatic link process.
6. EXEOUT is useful in building delivery databases where executables are not to be saved. EXEOUT will be defaulted to the same DBset as specified by SOLOUT.
