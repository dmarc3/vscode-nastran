## [ASET](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ASET.xhtml) - Degrees-of-Freedom for the a-set

Defines degrees-of-freedom in the analysis set (a-set).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ASET    ID1     C1      ID2     C2      ID3     C3      ID4     C4              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ASET    16      2       23      3516    1       4                               
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Grid or scalar point identification number.  (Integer > 0)                                      │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component numbers.  (Integer zero or blank for scalar points, or any unique combinations of the │
│           │ Integers 1 through 6 for grid points with no embedded blanks.)                                  │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Degrees-of-freedom specified on this entry form members of the mutually exclusive a-set.  They may not be specified on other entries that define mutually exclusive sets.  See   for a list of these entries.
2. When ASET, ASET1, QSET, and/or QSET1 entries are present, all   degrees-of-freedom not otherwise constrained (e.g., SPCi or MPC entries) will be placed in the omitted set (o-set).
3. In nonlinear analysis, all degrees-of-freedom attached to nonlinear elements must be placed in the a-set.  In other words, if the ASET or ASET1 entry is specified then all nonlinear degrees-of-freedom must be specified on the ASET or ASET1 entry.
4. SOL 400 does not support OMITAX as well as ASETi, OMITi, BSETi, CSETi, SUPORTi, and QSETi except in the following situations:
    - Multidisciplinary (linear) analysis. See Remark 3-  under the ANALYSIS Case Control command regarding “Standard linear physics”. This means there are no subcases for nonlinear analysis using ANALYSIS=NLSTATICS, NLTRAN, HSTAT or HTRAN.
    - Linear perturbation with:
        - EXTSEOUT Case Control command for external superelement creation. This includes runs with AVLEXB Case Control command.
        - ADAMSMNF Case Control command. The ASETi/ QSETi entries must be specified in the BEGIN BULK FLXBDY section. See Remark  21.  under the ADAMSMNF Case Control command.
    - Superelements defined with BEGIN SUPER may contain ASETi, OMITi, BSETi, CSETi, and QSETi entries.
