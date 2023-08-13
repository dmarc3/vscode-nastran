## [MDBCPAR](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDBCPAR.xhtml) - Defines Candidates Modules for Automatic Contact Detection Across Modules

Defines modules as candidates for automatic contact detection across modules.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDBCPAR         SET3ID                                                  +       
+       MODID11 MODID21                 MODID12 MODID22                 +       
+       MODID13 MODID23                 MODID1i MODID2i                         
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDBCPAR         2                                                               
        2       3                       4       7                               
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ SET3ID    │ Integer ≥ -1,default=-1. SET3 ID refers to a SET3 with DES=“MODULE”.            │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ MODID1i   │ The first module ID of the candidate of contact detection between two modules   │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ MODID2i   │ The second module ID of the candidate of contact detection between two modules. │
└───────────┴─────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Only one entry of MDBCPAR is allowed in module 0, and it must be in module 0.
2. MDBCPAR is used when BCONTACT=AUTO is set in case control command, and modules are present.
3. When SET3ID is -1, all the modules will be used to detect contact pairs across them, when it is 0,and when there is no continuation, no contact pair will be detected across modules. When SET3ID > 0, the modules defined in the SET3 entry with SID=SET3ID and DES=”MODULE” will be used to detect contact pairs across them. The distance tolerance of the pair detection is defined by DISTANCE parameter in MDBCATP.
4. Continuations are optional.
5. The pairs of MODID1i and MODID2i are the pairs of two modules to be used to detect contact pairs between them. The distance tolerance of the pair detection is defined by DISTANCE parameter in MDBCATP
