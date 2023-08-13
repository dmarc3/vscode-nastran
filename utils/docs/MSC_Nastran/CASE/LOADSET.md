## [LOADSET (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.LOADSET.Case.xhtml) - Static Load Set Selection

Selects a sequence of static load sets to be applied to the structural model. The load sets may be referenced by dynamic load commands.

#### Format:

```nastran
LOADSET=n
```

#### Example:

```nastran
LOADSET=100
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of at least one LSEQ Bulk Data entry. (Integer  > 0) │
└───────────┴────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. When used in superelement analysis, this command must be used for all   superelements. The number of static load vectors created for each superelement depends upon the type of analysis. In static analysis, the number of vectors created is equal to the number of unique EXCITEIDs on all LSEQ entries in the Bulk Data; in dynamic analysis, the number of vectors created is equal to the number of unique EXCITEIDs on all RLOAD1, RLOAD2, TLOAD1, TLOAD2 and ACSRCE entries in the Bulk Data.
2. When the LOADSET command is used in superelement statics, the residual structure should have as many loading conditions as   the number of unique EXCITEID sets defined on all   LSEQ entries. The subcases after the first should contain only SUBTITLE and LABEL information, and residual structure output requests. SUBTITLE and LABEL information for all superelements will be obtained from the residual structure.
3. When multiple subcases are specified in the dynamic solution sequences (SOLs 108, 109, 111, 112, 118, 146), the LOADSET must appear in the first subcase or above all subcases. In SOL 200 with ANALYSIS=DFREQ, MFREQ, or MTRAN, a different LOADSET may be specified in the first subcase pertaining to each ANALYSIS command.
4. In SOL 101, the design sensitivity output will identify all expanded subcases by a sequence of unique integers beginning with n.
5. In the nonlinear static solution sequences (SOLs 106 and 153), the LOADSET must appear above all subcases and only one LOADSET may be specified.
6. Only one LOADSET command is allowed per superelement and it must be specified in the superelement’s first subcase.
7. It is no longer necessary to employ LOADSET/LSEQ data to specify static loading data for use in dynamic analysis. In the absence of a LOADSET Case Control command, all static loads whose load set IDs match the EXCITEIDs on all RLOAD1, RLOAD2, TLOAD1, TLOAD2, and ACSRCE Bulk Data entries are automatically processed.
8. . If you use the LOADSET command in a static analysis, the loading matrix will be generated corresponding to, and in ascending order of, the EXCITEID's on the referenced LSEQ entries. Any LOAD commands within subcases will be ignored.
9. Use of the LOADSET/LSEQ should be avoided as it is an obsolete entry and is never needed and is only documented for legacy code. Some new features such as SUBSTEP do not support it and will issue a fatal message.
