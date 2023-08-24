## [DTI](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DTI.xhtml) - Direct Table Input

Defines table data blocks.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DTI     NAME    “0"     T1      T2      T3      T4      T5      T6      +       
+       V01     V02     -etc.-                                                  
DTI     NAME    IREC    V1      V2      V3      V4      V5      V6      +       
+       V7      V8      V9      V10     -etc.-  “ENDREC”                        
```

#### Example:  (The first logical entry is the header entry.)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DTI     XXX     0       3       4       4096            1       0               
        1.2     2.3                                                             
DTI     XXX     1       2.0     -6      ABC     6.000   -1      2               
        4       -6.2    2.9     1       DEF     -1      ENDREC                  
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ NAME      │ Any character string that will be used in the DMAP sequence to reference the data block. See │
│           │ Remark 1. (Character; the first character must be alphabetic.)                               │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ti        │ Trailer values.  (Integer > 0; Default = 32767)                                              │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ IREC      │ Record number.  (Integer > 1)                                                                │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ V0i, Vi   │ Value.  (Integer, Real, Character or blank)                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ “ENDREC”  │ Flags the end of the string of values (V0i or Vi) that constitute record IREC.  (Character)  │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The user defines the data block and therefore must write a DMAP (or ALTER a solution sequence), which includes the DTIIN modules, in order to use the DTI   feature. See the  MSC Nastran DMAP Programmer’s Guide . All of the rules governing the use of data blocks in DMAP sequences apply.
2. All fields following ENDREC must be blank.
3. The entry using IREC = 0 is called the header entry and is an optional entry. The values T1 through T6 go to a special record called the trailer. Other values on the optional continuation go to the header record. If the header entry or the trailer is not specified, T1 through T6 = 32767. On this entry, “ENDREC” may be used only if there is at least one continuation.
4. In addition to the optional header entry, there must be one logical entry for each record in the table. Null records require no entries.
5. “ENDREC” is used to input blank values at the end of a record. If “ENDREC” is not specified, the string for a record ends with the last nonblank field.
6. The maximum number of DMI and DTI data blocks is 1000.
7. If Ti is not an integer, a machine-dependent error will be issued that may be difficult to interpret.
8. If Modules are present then this entry may only be specified in the main Bulk Data section.
