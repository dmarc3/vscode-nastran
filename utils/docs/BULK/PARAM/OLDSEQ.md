## [OLDSEQ](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.OLDSEQ.xhtml)

![parameters01787.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01787.jpg?_LANG=enus)  

OLDSEQ selects from the following options for resequencing:

```text
┌────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ -1 │ No resequencing is performed.                                                                      │
├────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│  1 │ Use the active/passive option.                                                                     │
├────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│  2 │ Use the band option.                                                                               │
├────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│  3 │ For the active/passive and the band option select the option giving the lowest RMS value of the    │
│    │ active columns for each group of grid points.                                                      │
├────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│  4 │ Use the wavefront (Levy) option.                                                                   │
├────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│  5 │ Use the Gibbs-King option even if the CPU estimate is higher than for nonsequencing.               │
├────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│  6 │ Use the automatic nested dissection option even if the CPU estimate is higher than for no          │
│    │ resequencing.  See the following SUPER=2 description.                                              │
├────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│  8 │ Semiautomatic selection.  The program will compute estimates for two options that are suitable for │
│    │ the decomposition method selected by the PARALLEL and SPARSE keywords on the NASTRAN statement and │
│    │ select the option with the lowest estimate.  The following table shows the suitable options for    │
│    │ each decomposition method.                                                                         │
├────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│  9 │ The extreme partitioning method is used to partition the model into domains.                       │
├────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 10 │ The METIS partitioning method is used to partition the model into domains.                         │
├────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 11 │ The MSCMLV partitioning method is used to partition the model into domains.                        │
└────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
```text
┌────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Notes: │ 1.The model partitioning options make sense only when running with the DOMAINSOLVER command in the │
│        │ Executive Control Section.  For DOMAINSOLVER (PARTOPT=GRID), param,oldseq,9 is the default.  For   │
│        │ all other DOMAINSOLVER options, the default is param,oldseq,11. 2.The wavefront option does not    │
│        │ support superelement resequencing or starting nodes.  Also note that the automatic nested          │
│        │ dissection option uses starting nodes only to establish the root of the initial connectivity tree. │
└────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
If the value of OLDSEQ is changed in superelement analysis, an SEALL=ALL restart is required.

PARAM,FACTOR is used to generate the sequenced identification number (SEQlD) on the SEQGP entry as follows:

```nastran
SEQID=FACTOR*GRP+SEQ
```

where:

SEQ = generated sequence number 
GRP = group sequence number

If GRP=0, use GRP(MAX)+1 where GRP(MAX) is the largest group sequence number in the database.

PARAM,MPCX controls whether the grid point connectivity created by the MPC, MPCADD, and MPCAX entries and/or the rigid element entries (e.g., RBAR) is considered during resequencing:

```text
┌────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ -1 │ Do not consider the connectivity of the MPC, MPCADD, MPCAX, or rigid element entries.              │
├────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 0  │ Consider the connectivity of the rigid element entries only.  (Default).                           │
├────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ >0 │ Consider the connectivity of the rigid element entries and the MPC, MPCADD, and MPCAX entries with │
│    │ the set identification number set to the value of this parameter.                                  │
└────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
PARAM,SEQOUT controls the output options as follows:

```text
┌───┬───────────────────────────────────────────────────────────────────────────────┐
│ 0 │ Do not generate any printed or punched output for the new sequence (Default). │
├───┼───────────────────────────────────────────────────────────────────────────────┤
│ 1 │ Print a table of the internal/external sequence in internal order.            │
├───┼───────────────────────────────────────────────────────────────────────────────┤
│ 2 │ Write the SEQGP entries to the PUNCH file.                                    │
├───┼───────────────────────────────────────────────────────────────────────────────┤
│ 3 │ Perform SEQOUT=1 and 2.                                                       │
└───┴───────────────────────────────────────────────────────────────────────────────┘
```
PARAM,START specifies the number of the grid points at the beginning of the input sequence. The input sequence will be the sorted order of the grid point numbers including the effect of any SEQGP entries input by the user. A single SEQGP entry can be input to select the starting point for the new sequence. Otherwise, the first point of lowest connectivity will   be used as the starting point.

If PARAM,SUPER<0, all grid points from the connection table that are not part of the group currently being processed are deleted. This option provides for sequencing only the interior points of a superelement. If any superelements are present, the residual structure is not resequenced. If all of the grid points are in the residual structure, they are resequenced.

If PARAM,SUPER=0 or 1, all grid points in the connection table are considered. This option provides for the recognition of passive columns.

If PARAM,SUPER=2, then all points that are connected to multipoint constraints (via MPC entries) or rigid elements (e.g., the RBAR entry) are placed in a special group at the end of the sequence. This option also forces OLDSEQ=6 and may not be selected with other values of OLDSEQ. This option is intended primarily for models that have many active columns due to MPCs or rigid elements; e.g., a model with disjoint structures connected only by MPCs or rigid elements.

