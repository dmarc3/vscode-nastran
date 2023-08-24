## [DCONADD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DCONADD.xhtml) - Design Constraint Set Combination

Defines the design constraints for a subcase as a union of DCONSTR entries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DCONADD DCID    DC1     DC2     DC3     DC4     DC5     DC6     DC7     +       
+       DC8     -etc.-                                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DCONADD 10      4       12                                                      
```

```text
┌───────────┬────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                    │
├───────────┼────────────────────────────────────────────────────────────┤
│ DCID      │ Design constraint set identification number. (Integer > 0) │
├───────────┼────────────────────────────────────────────────────────────┤
│ DCi       │ DCONSTR entry identification number. (Integer > 0)         │
└───────────┴────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The DCONADD entry is selected by a DESSUB or DESGLB Case Control command.
2. All DCi must be unique from other DCi.
3. For PART SE, DCi from different PART SEs can be referenced on a single DCONADD and  only DCONADD in the main Bulk Data Section, starts with ‘BEGIN BULK’ or ‘BEGIN SUPER=0’, will be considered as part of design constraints.  Note that DCONADD entries in ‘BEGIN SUPER=seid’ where seid>0 will be ignored.
