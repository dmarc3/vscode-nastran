## [LSEQ](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.LSEQ.xhtml) - Static Load Set Definition

Defines a sequence of static load sets.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
LSEQ    SID     EXCITEIDLID     TID                                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
LSEQ    100     200     1000    1001                                            
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Set identification of the set of LSEQ entries.  See Remark 5. (Integer > 0)                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXCITEID  │ The EXCITEID set identification assigned to this static load vector.  See Remark 5. (Integer > 0) │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LID       │ Load set identification number of a set of static load entries such as those referenced by the    │
│           │ LOAD Case Control command.  (Integer > 0 or blank)                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TID       │ Temperature set identification of a set of thermal load entries such as those referenced by the   │
│           │ TEMP(LOAD) Case Control command.  (Integer > 0 or blank)                                          │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. LSEQ will not be used unless selected in the Case Control Section with the LOADSET command.
2. The number of static load vectors created for each superelement depends upon the type of analysis. In static analysis, the number of vectors created is equal to the number of unique EXCITEIDs on all LSEQ entries in the Bulk Data; in dynamic analysis, the number of vectors created is equal to the number of unique EXCITEIDs on all RLOAD1, RLOAD2, TLOAD1, TLOAD2 and ACSRCE entries in the Bulk Data.
3. EXCITEID may be referenced by CLOAD, RLOAD1, RLOAD2, TLOAD1, and TLOAD2 entries in order to apply the static load in nonlinear, static and dynamic analysis.
4. Element data recovery for thermal loads is not currently implemented in dynamics.
5. The SID-EXCITEID number pair must be unique with respect to similar pairs on all other LSEQ entries in the Bulk Data.
6. In a nonsuperelement analysis, LID and TID cannot both be blank.  In superelement analysis, they may both be blank as long as static loads are prescribed in the upstream superelements.
7. It is no longer necessary to employ LOADSET/LSEQ data to specify static loading data for use in dynamic analysis. In the absence of LSEQ Bulk Data entries, all static loads whose load set IDs match the EXCITEIDs on all RLOAD1, RLOAD2, TLOAD1, TLOAD2 and ACSRCE entries in the Bulk Data are automatically processed.
