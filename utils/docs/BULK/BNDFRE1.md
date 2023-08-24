## [BNDFRE1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BNDFRE1.xhtml) - Free Boundary Degrees-of-Freedom, Alternate Form of BNDFREE Entry

Defines analysis set (a-set) degrees-of-freedom to be free (c-set) during generalized dynamic reduction or component modes calculations.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BNDFRE1 C       ID1     ID2     ID3     ID4     ID5     ID6     ID7     +       
+       ID8     ID9     -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BNDFRE1 124     1       5       7       6       9       12      122     +       
+       127                                                                     
```

#### Alternate Formats and Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BNDFRE1 C       ID1     “THRU”  ID2                                             
BNDFRE1 3       6       THRU    32                                              
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BNDFRE1         “ALL”                                                           
BNDFRE1         ALL                                                             
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Component number.  (Integer zero or blank for scalar points, or any unique combination of the │
│           │ Integers 1 through 6 for grid points with no embedded blanks)                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Grid or scalar point identification number.  (Integer > 0; For THRU option, ID1 < ID2)        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ All a-set degress-of-freedom will be set free (included in c-set).                            │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. BNDFRE1 and CSET1 entries are equivalent to each other. Either one of them or any combination of them may be employed.
2. If there are no BSETi/BNDFIXi or CSETi/BNDFREE/BNDFRE1 entries present, all a-set points are considered fixed during component mode analysis.  If there are only BSETi/BNDFIXi entries present, any a-set degrees-of-freedom not listed are placed in the free boundary set (c-set).  If there are only CSETi/BNDFREE/BNDFRE1 entries present or both BSETi/BNDFIXi and CSETi/BNDFREE/BNDFRE1 entries present, the c-set degrees-of-freedom are defined by the CSETi/BNDFREE/BNDFRE1 entries, and any remaining a-set points are placed in the b-set.
3. Degrees-of-freedom specified on CSETi/BNDFREE/BNDFRE1 entries form members of the mutually exclusive c-set.  They may not be specified on other entries that define mutually exclusive sets.  See   for a list of these entries.
4. If PARAM,AUTOSPC is YES, then singular b-set and c-set degrees-of-freedom will be reassigned as follows:
     - If there are no o-set (omitted) degrees-of-freedom, then singular b-set and c-set degrees-of-freedom are reassigned to the s-set.
     - If there are o-set (omitted) degrees-of-freedom, then singular c-set degrees-of-freedom are reassigned to the b-set.  Singular b-set degrees-of-freedom are not reassigned.
