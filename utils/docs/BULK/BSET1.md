## [BSET1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BSET1.xhtml) - Fixed Analysis Degrees-of-Freedom, Alternate Form of BSET Entry

Defines analysis set (a-set) degrees-of-freedom to be fixed (b-set) during generalized dynamic reduction or component mode synthesis calculations.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BSET1   C       ID1     ID2     ID3     ID4     ID5     ID6     ID7     +       
+       ID8     ID9     ID10    -etc.-                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BSET1   2       135     14      6       23      24      25      26      +       
+       122     127                                                             
```

#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BSET1   C       ID1     “THRU”  ID2                                             
BSET1   3       6       THRU    32                                              
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Component numbers.  (Integer zero or blank for scalar points, or any unique combinations of the │
│           │ Integers 1 through 6 for grid points with no embedded blanks.)                                  │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Grid or scalar point identification numbers.  (Integer > 0; For “THRU” option, ID1< ID2)        │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. BSET1 and BNDFIX1 entries are equivalent to each other. Either one of them or any combination of them may be employed.
2. If there are no BSETi/BNDFIXi or CSETi/BNDFREE/BNDFRE1 entries present, all a-set points are considered fixed during component mode analysis.  If there are only BSETi/BNDFIXi entries present, any a-set degrees-of-freedom not listed are placed in the free boundary set (c-set).  If there are only CSETi/BNDFREE/BNDFRE1 entries present or both BSETi/BNDFIXi and CSETi/BNDFREE/BNDFRE1 entries present, the c-set degrees-of-freedom are defined by the CSETi/BNDFREE/BNDFRE1 entries, and any remaining a-set points are placed in the b-set.
3. Degrees-of-freedom specified on BSETi/BNDFIXi entries form members of the mutually exclusive b-set. They may not be specified on other entries that define mutually exclusive sets.  See the   for a list of these entries.
4. If PARAM,AUTOSPC is YES, then singular b-set and c-set degrees-of-freedom will be reassigned as follows:
     - If there are no o-set (omitted) degrees-of-freedom, then singular b-set and c-set degrees-of-freedom are reassigned to the s-set.
     - If there are o-set (omitted) degrees-of-freedom, then singular c-set degrees-of-freedom are reassigned to the b-set. Singular b-set degrees-of-freedom are not reassigned.
5. SOL 400 does not support OMITAX as well as ASETi, OMITi, BSETi, CSETi, SUPORTi, and QSETi except in the some situations (See Remark   under  ).
