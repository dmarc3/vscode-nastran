## [DBUPDATE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/TOC.DBUPDATE.xhtml) - Specifies Database Directory Update Interval

Specifies the maximum length of CPU time between database directory updates to the MASTER DBset. This statement is intended to be used if the INIT MASTER(RAM=r) option is specified.

#### Format:

```nastran
DBUPDATE [=] update-time
```

#### Example:

```nastran
DBUPDATE = 5.5
```

The preceding example would call for a database directory update at the end of a DMAP module execution after five and one-half minutes of CPU time have elapsed from the last update.

```text
┌─────────────┬────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ update-time │ CPU time interval in minutes (real or integer) between database directory updates. │
└─────────────┴────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The difference in CPU time from the last update is checked after the execution of each DMAP instruction. The database directory is updated if this difference is greater than update-time. Update-time and CPU time is accurate to the nearest whole second only.
2. If update-time < 0, then database directory updates are only performed at the end of the run.
3. Defaults for update-time are machine dependent and may be found in the  MSC Nastran Installation and Operations Guide .
4. Periodic updates of the directory tables to MASTER DBset increases the integrity of the database during system crashes (for example, crashes due to insufficient time or space).
5. Directory updates are performed automatically at various points in the execution of the DMAP in addition to those specified by DBUPDATE. An asterisk appears after the word “BEGN” in the executive summary table whenever an update occurs. See the   in the  MSC Nastran Reference Guide . These updates occur whenever a permanent data block, parameter DMAP equivalence, or restart equivalence is broken. Updates also occur upon deletions. Additions to the database do not automatically cause a directory update to take place.
6. This statement is in effect only when INIT MASTER(RAM=r) is being used. INIT MASTER(S) and INIT MASTER(NORAM) disable periodic and automatic updates.
7. Update-time may also be changed with the DMAP instruction PUTSYS(update-time, 128) or the NASTRAN SYSTEM(128)=update-time statement. (The update-time must be a real, single-precision value specified in minutes.)
