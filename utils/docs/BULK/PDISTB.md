## [PDISTB](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PDISTB.xhtml) - Element property distributions.

Defines element distributions of property data.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PDISTB  ID      TYPE    PID     PNAME   LOCNUM  SMULT   DELTA                   
        EID1    V1      EID2    V2      EID3    V3      EID4    V4              
        EID5    V5      EID6    V6      EID7    V7      EID8    V8              
        -etc.-  -etc.-  -etc.-  -etc.-  -etc.-  -etc.-                          
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PDISTB  7008    PCOMPG  700     GE              .9                              
        205     .013    224     .015    362     .135                            
PDISTB  70014   PCOMPG  700     T       1                                       
        205     .013    224     .015    362     .135                            
PDISTB  70034   PCOMPG  700     T       3                                       
        205     .013    224     .015    362     .135    400     .067            
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Unique identification number. (Integer > 0, no default)                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Name of a property entry, PBAR, PBEAM, PBEAM3, PCOMP, PCOMPG, PROD, PSHEAR, PSHELL, PSOLID and     │
│           │ PTUBE (Character-Required).                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number that matches the identification number of an existing Property      │
│           │ entry. (Integer > 0, no default)                                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PNAME     │ Property name, such as “T”, “I12” (Character). See Remark 8.                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LOCNUM    │ The Numerical order of Ply in PCOMP or PCOMPG. The Station number on a PBEAM or PBEAM3. (Integer ≥ │
│           │ 0).                                                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SMULT     │ Scale factor of distribution entries. (Real, Default=1.0)                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DELTA     │ Delta value of distribution entries. (Real, Default=0.0)                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EIDi      │ Element ID associated with Property PID. (Integer > 0, no default)                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Vi        │ The value of item to be changed. (Real for not PSOLID, Integer ≥ -2 for PSOLID)                    │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The ID of the PDISTB is for user convenience of grouping identification and is not used for case control selection.

2. The PID must point to an existing “Property” entry as shown in the Table of Remark   entry below. If this entry is used, Nastran will check that all elements have a unique element ID across all element types. If a non-unique element ID is found a fatal message will be issued.

3. If no distribution is given, the value associated with the named property entry will be used.

4. If an EID occurs on this entry for an element not associated with referred to property the EID is ignored.

5. If an EID is referred to twice on this entry or another PDISTB entry with the same PID and PNAME, Or in the case of a PCOMP or PCOMPG with same PID, PNAME, and LOCNUM referral a fatal message will be issued.

6. VALUEi = SMULT* Vi + DELTA

7. The PID referred to may not have an associated PCOMPFQ entries. A fatal message will be issued if there is such an association.

8. For most Primary property entries, the QRG symbol is used for valid PNAME. See values in table below. For more difficult entries such as a PCOMP the PNAME for example of the thickness of PLY 3 would be entered as PNAME=T and LOCNUM=3. Note on PCOMPG it is the numerical PLY listed not the GPLYID. Thus for example if the second ply listed on a PCOMPG entry had GPLYID=4 and the thickness is to be changed then PNAME=T and LOCNUM=2 not 4.

```text
┌────────────┬───────────────────────────────────────────────────┐
│ Property   │ PNAME                                             │
├────────────┼───────────────────────────────────────────────────┤
│ Current    │                                                   │
│ Supported  │                                                   │
│ Items are: │                                                   │
├────────────┼───────────────────────────────────────────────────┤
│ PSHELL     │ T                                                 │
├────────────┼───────────────────────────────────────────────────┤
│            │ I12                                               │
├────────────┼───────────────────────────────────────────────────┤
│            │ TS                                                │
├────────────┼───────────────────────────────────────────────────┤
│            │ NSM                                               │
├────────────┼───────────────────────────────────────────────────┤
│            │ Z1, Z2                                            │
├────────────┼───────────────────────────────────────────────────┤
│ PCOMP (G)  │ Z0                                                │
├────────────┼───────────────────────────────────────────────────┤
│            │ NSM                                               │
├────────────┼───────────────────────────────────────────────────┤
│            │ SB                                                │
├────────────┼───────────────────────────────────────────────────┤
│            │ TREF                                              │
├────────────┼───────────────────────────────────────────────────┤
│            │ GE                                                │
├────────────┼───────────────────────────────────────────────────┤
│            │ T                                                 │
├────────────┼───────────────────────────────────────────────────┤
│            │ THETA                                             │
├────────────┼───────────────────────────────────────────────────┤
│            │ SOUT                                              │
├────────────┼───────────────────────────────────────────────────┤
│ PBEAM      │ LOCNUM=1 corresponds to END A; LOCNUM=12          │
│            │ corresponds to END B; LOCNUM=2-11 Intermediate    │
│            │ stations left to right.                           │
├────────────┼───────────────────────────────────────────────────┤
│            │ A                                                 │
├────────────┼───────────────────────────────────────────────────┤
│            │ I1, I2, I12                                       │
├────────────┼───────────────────────────────────────────────────┤
│            │ J                                                 │
├────────────┼───────────────────────────────────────────────────┤
│            │ NSM                                               │
├────────────┼───────────────────────────────────────────────────┤
│            │ K1, K2                                            │
├────────────┼───────────────────────────────────────────────────┤
│ PROD       │ A                                                 │
├────────────┼───────────────────────────────────────────────────┤
│            │ J                                                 │
├────────────┼───────────────────────────────────────────────────┤
│            │ NSM                                               │
├────────────┼───────────────────────────────────────────────────┤
│ PBAR       │ A                                                 │
├────────────┼───────────────────────────────────────────────────┤
│            │ I1, I2, I12                                       │
├────────────┼───────────────────────────────────────────────────┤
│            │ J                                                 │
├────────────┼───────────────────────────────────────────────────┤
│            │ NSM                                               │
├────────────┼───────────────────────────────────────────────────┤
│            │ K1, K2                                            │
├────────────┼───────────────────────────────────────────────────┤
│ PTUBE      │ OD                                                │
├────────────┼───────────────────────────────────────────────────┤
│            │ T                                                 │
├────────────┼───────────────────────────────────────────────────┤
│            │ NSM                                               │
├────────────┼───────────────────────────────────────────────────┤
│            │ OD2                                               │
├────────────┼───────────────────────────────────────────────────┤
│ PSHEAR     │ T                                                 │
├────────────┼───────────────────────────────────────────────────┤
│            │ NSM                                               │
├────────────┼───────────────────────────────────────────────────┤
│            │ F1, F2                                            │
├────────────┼───────────────────────────────────────────────────┤
│ PBEAM3     │ LOCNUM=1 corresponds to END A; LOCNUM=2           │
│            │ corresponds to END B; LOCNUM=3 “middle” station C │
├────────────┼───────────────────────────────────────────────────┤
│            │ A                                                 │
├────────────┼───────────────────────────────────────────────────┤
│            │ IZ, IY, IYZ                                       │
├────────────┼───────────────────────────────────────────────────┤
│            │ J                                                 │
├────────────┼───────────────────────────────────────────────────┤
│            │ NSM                                               │
├────────────┼───────────────────────────────────────────────────┤
│            │ KY, KZ                                            │
├────────────┼───────────────────────────────────────────────────┤
│            │ CW                                                │
├────────────┼───────────────────────────────────────────────────┤
│ PSOLID     │ CORDM                                             │
└────────────┴───────────────────────────────────────────────────┘
```
