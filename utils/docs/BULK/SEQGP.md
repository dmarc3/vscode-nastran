## [SEQGP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SEQGP.xhtml) - Grid and Scalar Point Resequencing

Used to manually order the grid points and scalar points of the problem.  This entry is used to redefine the sequence of grid and scalar points to optimize bandwidth.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEQGP   ID1     SEQID1  ID2     SEQID2  ID3     SEQID3  ID4     SEQID4          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEQGP   5392    15.6    596     0.2     2       1.9     3       2               
```

```text
┌───────────┬───────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                       │
├───────────┼───────────────────────────────────────────────────────────────┤
│ IDi       │ Grid or scalar point identification number.  (Integer > 0)    │
├───────────┼───────────────────────────────────────────────────────────────┤
│ SEQIDi    │ Sequenced identification number.  (Real > 0.0 or Integer > 0) │
└───────────┴───────────────────────────────────────────────────────────────┘
```
