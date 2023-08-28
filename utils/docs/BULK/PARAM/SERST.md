## [SERST](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.SERST.xhtml)

Default    = AUTO

By default, all restarts are considered automatic (see  Restart Procedures   in the MSC Nastran Reference Guide ).  If none of the following Case Control commands are entered, then SEALL=ALL is the default action:  SEMG, SELG, SEKR, SELR, SELA, SEMA, SEMR, and SEALL.

These commands may be used to partition the analysis into several runs.  By default, the restart will proceed in automatic fashion for each command, regenerating only that data that is affected by modifications in the Bulk Data and Case Control or changes in upstream superelements.  If the user wishes to overwrite the data, even if it is not affected by modifications to the data, then PARAM,SERST,MANUAL must be entered.

With PARAM,SERST,AUTO or MANUAL, all superelements will be processed through Phase 0 (see  Superelement Analysis   in the MSC Nastran Reference Guide ).  This phase includes execution of the sequencer module (SEQP), initial superelement processing (SEP1), and initial geometry processing (GP1 and GP2) modules, which can result in significant CPU overhead.  If this overhead is not desired, then PARAM,SERST,SEMI will limit Phase 0 and Phase 1 to only those superelements specified on the SEMG, SELG, SEKR, SELR, SELA, SEMA, SEMR, and SEALL Case Control commands.  If none of these commands is entered, then execution will skip Phase 0 and 1.

In the modal solution sequences (SOLs 110, 111, 112, 145, 146, and 200), the modes of the residual structure are automatically computed in Phase 2 if any SE-type command (e.g., SEMG=n) is requested for the residual structure.  If PARAM,SERST,SEMI and no SE-type command is specified for the residual structure, then, by default, its modes will not be recomputed.  This logic is intended for restarts from SOL 103 into one of the modal solutions.  If, however, the modes have not already been computed or need to be recomputed, then PARAM,SERST,RSMDS must be specified to force the calculation of the residual structure modes.

If PARAM,SERST,SEDR is specified, then Phases 0, 1, and 2 will be skipped. This option is intended for data recovery (Phase 3) runs only.

The options of SEMI, RSMDS, and SEDR are intended for models that are defined on more than one database; i.e., superelements are defined on separate databases (multiple MASTER DBsets) and processed in separate runs. Also, with this technique, databases are attached with the DBLOCATE File Management statement rather than the RESTART File Management statement.  In general, these options are not recommended because they disable the automatic restart capability, which compromises the database integrity.

