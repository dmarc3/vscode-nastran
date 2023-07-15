## [CSET](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CSET.xhtml) - Free Boundary Degrees-of-Freedom

Defines analysis set (a-set) degrees-of-freedom to be free (c-set) during generalized dynamic reduction or component mode synthesis calculations.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CSET    ID1     C1      ID2     C2      ID3     C3      ID4     C4              
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CSET    124     1       5       23      6       16                              
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Grid or scalar point identification number.  (Integer > 0)                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component number.  (Integer zero or blank for scalar points, or any unique combinations of the │
│           │ Integers 1 through 6 for grid points.  No embedded blanks.)                                    │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. CSET and BNDFREE entries are equivalent to each other. Either one of them or any combination of them may be employed.

2. If there are no BSETi/BNDFIXi or CSETi/BNDFREE/BNDFRE1 entries present, all a-set points are considered fixed during component mode analysis.  If there are only BSETi/BNDFIXi entries present, any a-set degrees-of-freedom not listed are placed in the free boundary set (c-set).  If there are only CSETi/BNDFREE/BNDFRE1 entries present or both BSETi/BNDFIXi and CSETi/BNDFREE/BNDFRE1 entries present, the c-set degrees-of-freedom are defined by the CSETi/BNDFREE/BNDFRE1 entries, and any remaining a-set points are placed in the b-set.

3. Degrees-of-freedom specified on CSETi/BNDFREE/BNDFRE1 entries form members of the mutually exclusive c-set.  They may not be specified on other entries that define mutually exclusive sets.  See the  Degree-of-Freedom Sets  for a list of these entries.

4. If PARAM,AUTOSPC is YES, then singular b-set and c-set degrees-of-freedom will be reassigned as follows:

     • If there are no o-set (omitted) degrees-of-freedom, then singular b-set and c-set degrees-of-freedom are reassigned to the s-set.

     • If there are o-set (omitted) degrees-of-freedom, then singular c-set degrees-of-freedom are reassigned to the b-set. Singular b-set degrees-of-freedom are not reassigned.

5. SOL 400 does not support OMITAX as well as ASETi, OMITi, BSETi, CSETi, SUPORTi, and QSETi except in some situations (See Remark  4.  under  ASET ).

