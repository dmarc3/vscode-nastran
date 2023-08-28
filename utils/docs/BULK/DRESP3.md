## [DRESP3](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DRESP3.xhtml) - Design Sensitivity Response using user-supplied routine(s)

Defines an external response using user-supplied routine(s).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DRESP3  ID      LABEL   GROUP   TYPE    REGION                          +       
+       “DESVAR”DVID1   DVID2   DVID3   DVID4   DVID5   DVID6   DVID7   +       
+               DVID8   etc.                                            +       
+       “DTABLE”LABL1   LABL2   LABL3   LABL4   LABL5   LABL6   LABL7   +       
+               LABL8   etc.                                            +       
+       “DRESP1”NR1     NR2     NR3     NR4     NR5     NR6     NR7     +       
+               NR8     etc.                                            +       
+       “DNODE” G1      C1      G2      C2      G3      C3              +       
+               G4      C4      etc.                                    +       
+       “DVPREL1DPIP1   DPIP2   DPIP3   DPIP4   DPIP5   DPIP6   DPIP7   +       
+               DPIP8   DPIP9   etc.                                    +       
+       “DVCREL1DCIC1   DCIC2   DCIC3   DCIC4   DCIC5   DCIC6   DCIC7   +       
+               DCIC8   DCIC9   -etc.-                                  +       
+       “DVMREL1DMIM1   DMIM2   DMIM3   DMIM4   DMIM5   DMIM6   DMIM7   +       
+               DMIM8   DMIM9   -etc.-                                  +       
+       “DVPREL2DPI2P1  DPI2P2  DPI2P3  DPI2P4  DPI2P5  DPI2P6  DPI2P7  +       
+               DPI2P8  DPI2P9  -etc.-                                  +       
+       ‘DCREL2”DCI2C1  DCI2C2  DCI2C3  DCI2C4  DCI2C5  DCI2C6  DCI2C7  +       
+               DCI2C8  DCI2C9  -etc.-                                  +       
+       “DVMREL2DMI2M1  DMI2M2  DMI2M3  DMI2M4  DMI2M5  DMI2M6  DMI2M7  +       
+               DMI2M8  DMI2M9  -etc.-                                  +       
+       “DRESP2”NRR1    NRR2    NRR3    NRR4    NRR5    NRR6    NRR7    +       
+               NRR8    -etc.-                                          +       
+       DVLREL1 DLIL1   DLIL2   DLIL3   DLIL4   DLIL5   DLIL6   DLIL7   +       
+               DLIL8   DLIL9   -etc.-                                  +       
+       “USRDATAString                                                  +
+                       -etc.-          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DRESP3  1       LBUCK   TAILWNG BUCK                                    +       
+       DESVAR  101     3       4       5       1       205     209     +       
+               201                                                     +       
+       DTABLE  PI      YM      L                                       +       
+       DRESP1  14      1       4       22      6       33      2       +       
+       DNODE   14      1       4       1       22      3               +       
+               2       1       43      1                               +       
+       DVPREL1 101     102                                             +       
+       DVCREL1 201     202                                             +       
+       DVMREL1 301                                                     +       
+       DVPREL2 401     402                                             +       
+       DVCREL2 501                                                     +       
+       DVMREL2 601     602     603                                     +       
+       DRESP2  50      51                                              +       
+       USRDATA Constant        
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Unique identification number. (Integer > 0)                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABEL     │ User-defined label. (Character, no default)                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GROUP     │ Group name the external response type belongs to (Character). See Remark 2.                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ External response type (Character). See Remark 3.                                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DESVAR”  │ Flag indicating DESVAR entry identification numbers. (Character)                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DVIDi     │ DESVAR entry identification number. (Integer > 0)                                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DTABLE”  │ DTABLE flag. Indicates that the LABLs for the constants in a DTABLE or DTABLE2 entry follow. This │
│           │ field may be omitted if there are no constants involved in this relation. (Character)             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABLi     │ Label for a constant on the DTABLE or DTABLE2 entry. (Character)                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DRESP1”  │ Flag indicating DRESP1 entry identification numbers.  (Character)                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NRk       │ DRESP1 entry identification number.  (Integer > 0)                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DNODE”   │ Flag signifying that the following fields are grid points.                                        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gm        │ Grid point identification number.  (Integer > 0)                                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Cm        │ Degree-of-freedom number of grid point Gm.  (1 < Integer < 3)                                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DVPREL1” │ Flag indicating DVPREL1 entry identification number.  (Character)                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DPIPi     │ DVPREL1 entry identification number.  (Integer > 0)                                               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DVCREL1” │ Flag indicating DVCREL1 entry identification number. (Character)                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DCICi     │ DVCREL1 entry identification number. (Integer > 0)                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DVMREL1” │ Flag indicating DVMREL1 entry identification number. (Character)                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DMIMi     │ DVMREL1 entry identification number. (Integer > 0)                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DVPREL2” │ Flag indicating DVPREL2 entry identification number. (Character)                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DPI2Pi    │ DVPREL2 entry identification number. (Integer > 0)                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DVCREL2” │ Flag indicating DVCREL2 entry identification number. (Character)                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DCI2Ci    │ DVCREL2 entry identification number. (Integer > 0)                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DVMREL2” │ Flag indicating DVMREL2 entry identification number. (Character)                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DMI2Mi    │ DVMREL2 entry identification number (Integer > 0)                                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DRESP2”  │ Flag indicating other DRESP2 entry identification number. (Character)                             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NRRk      │ DRESP2 entry identification number. (Integer > 0)                                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DVLREL1” │ Flag indicating DVLREL1 identification number (character)                                         │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DLILi     │ DVLREL1 entry identification number (integer)                                                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “USRDATA” │ Flag indicating user input data (Character). See Remark 8.                                        │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. DRESP3 entries may reference DESVAR, DTABLE, DRESP1, DNODE, DVPREL1, DVCREL1, DVMREL1, DVPREL2, DVCREL2, DVMREL2, DRESP2 and DVLREL1entries. However, a DRESP3 entry cannot reference another DRESP3 entry.
2. The group name must be referenced by an FMS CONNECT entry.
3. Multiple types of external responses can be defined in one group. Each type name identifies a specific external response evaluated in the user-supplied routines. See  Building and Using the Sample Programs   MSC Nastran Utilities Guide  for a discussion of how to incorporate external responses.
    - Referenced DRESP2 entries cannot span subcases or superelements.
    - If referenced DRESP1 entries span subcases, the DRSPAN Case Control command is required to identify the DRESP1 IDs for each subcase. DRESP3 entries that span subcases must be invoked above the subcase level by DESGLB or DESOBJ commands.
    - Referenced DRESP1 entries that span superelements are supported automatically.
5. DRESP3 entries must have unique identification numbers with respect to DRESP2 and DRESP1 entries.
6. The “DESVAR”, “DTABLE”, “DNODE”, “DVPREL1”, “DVCREL1” and “DVMREL1”, “DVPREL2”, DVCREL2”, “DVMREL2”, “DRESP2”, “DVLREL1” and “USRDATA” keywords on the continuation entries must appear in the order given above. Any of these words, along with the subsequent data associated with them, may be omitted if they are not involved in this DRESP3 relationship. However, at least one of these types of arguments must exist.
7. The REGION field follows the same rules as for the DRESP1 entries. DRESP1 and DRESP3 responses will never be contained in the same region, even if they are assigned the same REGION identification number. The default is to put all responses referenced by one DRESP3 entry in the same region.
8. The data in the USRDATA field is character string based. It provides a convenient way to pass constants to the external response server routines. The maximum number of characters allowed is 32000.
