## [MPCADD](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MPCADD.xhtml) - Multipoint Constraint Set Combination

Defines a multipoint constraint set as a union of multipoint constraint sets defined via MPC entries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MPCADD  SID     S1      S2      S3      S4      S5      S6      S7      +       
+       S8      S9      -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MPCADD  101     2       3       1       6       4                               
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Set identification number.  (Integer > 0)                                                        │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Sj        │ Set identification numbers of multipoint constraint sets defined via MPC entries.  (Integer > 0) │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Multipoint constraint sets must be selected with the Case Control command MPC = SID.
2. The Sj must be unique and may not be the identification number of a multipoint constraint set defined by another MPCADD entry.
3. MPCADD entries take precedence over MPC entries.  If both have the same SID,   only the MPCADD entry will be used.
4. By default, the grid point connectivity created by the MPC, MPCADD, and MPCAX entries is not considered during resequencing, (see the PARAM,OLDSEQ description in  . In order to consider the connectivity during resequencing, SID must be specified on the PARAM,MPCX entry. Using the example above, specify PARAM,MPCX,101.
5. If Modules are present then this entry may only be specified in the main Bulk Data section.
