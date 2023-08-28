## [RESTART](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/TOC.RESTART.xhtml) - Reuses Database From a Previous Run

Requests that data stored in a previous run be used in the current run.

#### Format:

![fms00664.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/../../../assets/fms00664.jpg?_LANG=enus)  

#### Examples:

1. RESTART VERSION=7

     Version number 7 will be retrieved for this run (version 8). At the end of the run, version 7 will be deleted.

2. PROJ=’FENDER’ RESTART

     The last version under project-ID FENDER will be used in the current run.

3. ASSIGN RUN1=’run1.MASTER’ RESTART LOGICAL=RUN1

     The run1.MASTER and its associated database will be used (read only) for restart purposes.

```text
┌────────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                          │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ project-ID │ Project identifier. See description of the PROJ FMS statement. Must be enclosed in single right- │
│            │ hand quotation marks (’) (Character string, maximum of 40 characters; default is the project-ID  │
│            │ specified on the PROJ FMS statement).                                                            │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ version-ID │ Version number (Integer  >  0).                                                                  │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LAST       │ Specifies the last version under project-ID.                                                     │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ KEEP       │ Data stored under VERSION will remain on the database after the run is completed.                │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOKEEP     │ Data stored under VERSION will be deleted from the database after the run is completed.          │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ dbname     │ Specifies the logical name of an existing MASTER (master directory) DBset to be used for restart │
│            │ purposes. This MASTER and its associated database will be opened in a read-only mode to perform  │
│            │ the restart; any new data will be written to the database for the current run. For read-only     │
│            │ restart (NOKEEP), the logical name MASTER should not be used and UFM 10626 will be issued.       │
└────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. There may only be one RESTART statement in the File Management Section.
2. A new version-ID is automatically assigned whenever a restart is performed.
3. If project-ID or version-ID or both are specified and cannot be found, then a fatal message will be issued.
4. The RESTART statement is required to perform restarts in solution sequences 101 through 400.
5. If PROJECT is not specified, then the run will restart from the project-ID specified on the PROJ statement (See Example  ).
6. Databases created by one MSC Nastran version typically cannot be directly restarted into a different MSC Nastran version. Restrictions are typically documented in the current release guide; however, a DBLOCATE type restart might work.
7. Restarts do not work with DMP. Restarts do not work with ACMS for versions released before 2018.
8. If NASTRAN IFPSTAR=YES (default) and scr=no then the Bulk Data images will be stored on the IFPDAT file; for example, if the input file name is run1 then run1.IFPDAT will be created along with run1.MASTER and run1.DBALL. Please note the following when performing a restart.
     - If run1.IFPDAT, run1.MASTER and run1.DBALL are in the same folder then only the MASTER file needs to be specified on an ASSIGN statement. For example, ASSI cold='run1.MASTER' RESTART LOGI=cold
     - If run1.IFPDAT is in a different folder than that of run1.MASTER and run1.DBALL (or IFPDAT has been renamed in the same folder) then both the MASTER and IFPDAT must specified on ASSIGN statements and the IMPORT keyword must be specified on the ASSIGN IFPDB statement:
      
          ```nastran
          ASSI cold='run1.MASTER'
          RESTART LOGI=cold
          ASSI IFPDB='other_folder/run1.IFPDAT' IMPORT
          ```

9. For SOL 400 one must also use  .
10. The database is not suitable for restart if any of the following was specified in the cold start. If a restart is attempted then the program will issue User Fatal Message 9061.
     - EXTSEOUT(DMIGDB or MATDB or MATRIXDB) without defining DBEXT.
     - scr=post
     - scr=no and “NASTRAN SYSTEM(316)>0”.
11. Restarts of SOL 112 fatigue analyses also require case control FATIGUE(STROUT=-1). Please see   in  MSC.Nastran Embedded Fatigue User's Guide  for restarts for fatigue analyses.
