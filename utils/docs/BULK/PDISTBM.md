## [PDISTBM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PDISTBM.xhtml) - Element property material distributions.

Defines element distributions of property data.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PDISTBM ID      TYPE    PID     MIDNUM                                          
        EID1    MIDV1   EID2    MIDV2   EID3    MIDV3   EID4    MIDV4           
        EID5    MIDV5   EID6    MIDV6   EID7    MIDV7   EID8    MIDV8           
        -etc.-  -etc.-  -etc.-  -etc.-  -etc.-  -etc.-                          
```
#### Example:<span></span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PDISTBM 70013   PSHELL  700     2                                               
        205     16                                                              
```
#### <span>16</span><span></span>

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Unique identification number. (Integer > 0, no default)                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Name of a property entry, PBAR, PBEAM, PBEAM3,  PCOMP, PCOMPG, PROD, PSHEAR, PSHELL, PSOLID, and │
│           │ PTUBE (Character-Required).                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number that matches the identification number of an existing Property    │
│           │ entry. (Integer > 0, no default)                                                                 │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MIDNUM    │ MIDi name (Integer ≥ 0, Default=1) See Remark 6.                                                 │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EIDi      │ Element ID associated with Property PID. (Integer > 0, no default)                               │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MIDVi     │ The replacement value of the MIDi. (Integer>0, no default)                                       │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### <span></span>

Remarks:

1. The PID must point to an existing “PSHELL”, “PCOMPG”, “PCOMP”, and “PSOLID”, entry. If this entry is used, Nastran will check that all elements have a unique element ID across all element types. If a non-unique element ID is found a fatal message will be issued.

2. If no distribution is given, the value associated with the named property entry will be used.

3. If an EID occurs on this entry for an element not associated with referred to property entry the EID is ignored.

4. If an EID is referred to twice on this entry or another PDISTBM entry with the same PID and MIDNUM referral a fatal message will be issued.

5. The MIDVi the user supplies must be a valid MATi entry unique across all existing MATi entries. The MATi may have associated MATiF entries, however, TABLED5 (Frequency as a function of temperature) entry is not currently supported with spatial entries.

6. The MIDNUM is property dependent. For example a PSHELL has MID1 through MID4, so a MIDNUM=3 means that the MID3 field of the PSHELL is being changed. For PCOMP or PCOMPG the MIDNUM refers to the MIDi of the Numerical order of ply.

