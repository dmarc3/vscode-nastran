## [ABSTRCT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ABSTRCT.xhtml) - Meta Data Collector for HDF5 output and post processing

Allows the user to define an arbitrary group of Nastran entities (ABSTRACTion), using any Nastran keyword type including elements, grids, materials, etc. and associate a name and description for the group.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ABSTRCT ABSTNM  ABSTID  NASTNM  NASTID1 NASTID2 NASTID3 -etc.-                  
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ABSTRCT PILLAR  50      CBEAM   10                                              
ABSTRCT PILLAR  50      CBUSH   30                                              
ABSTRCT PILLAR  50      RBE3    90                                              
```
```text
┌───────────┬──────────────────────────────────────────────────┐
│ Describer │ Meaning                                          │
├───────────┼──────────────────────────────────────────────────┤
│ ABSTNM    │ Up to eight characters for the name of the meta  │
│           │ data group. (Character).                         │
├───────────┼──────────────────────────────────────────────────┤
│ ABSTID    │ Unique identification number for the meta data   │
│           │ group. (Integer>0).                              │
├───────────┼──────────────────────────────────────────────────┤
│ NASTNM    │ Up to eight characters for the name of the       │
│           │ Nastran entity being added to the meta data      │
│           │ group. (Character).                              │
├───────────┼──────────────────────────────────────────────────┤
│ NASTIDi   │ ID referencing a Nastran entity of the specified │
│           │ type or a set of such entities.                  │
└───────────┴──────────────────────────────────────────────────┘
```
#### Remarks:

1. The group definition is transmitted from the input file to the .op2 and/or .h5 results file with no impact on the solution.

2. The group definition can subsequently be recovered from either the .op2 or .h5 file by a post-processor.

3. Associated with this entry are the entries:  ,  ,  ,  .

