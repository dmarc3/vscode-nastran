## [QSET](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.QSET.xhtml) - Generalized Degree-of-Freedom

Defines generalized degrees-of-freedom (q-set) to be used for dynamic reduction or component mode synthesis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
QSET    ID1     C1      ID2     C2      ID3     C3      ID4     C4              
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
QSET    15      123456  1       3       9       2       105     6               
```
```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Grid or scalar point identification number.  (Integer > 0)                                   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component number.  (Integer zero or blank for scalar points or any unique combination of the │
│           │ Integers 1 through 6 for grid points with no embedded blanks.)                               │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Degrees-of-freedom specified on this entry form members of the mutually exclusive q-set.  They may not be specified on other entries that define mutually exclusive sets.  See   for a list of these entries.

2. Degrees-of-freedom specified on QSET and QSET1 entries are automatically placed in the a-set.

3. When ASET, ASET1, QSET, and/or QSET1 entries are present, all   degrees-of-freedom not otherwise constrained (e.g., SPCi or MPC entries) will be placed in the omitted set (o-set).

4. If Modules are present then this entry may only be specified in the main Bulk Data section.

5. SOL 400 does not support OMITAX as well as ASETi, OMITi, BSETi, CSETi, SUPORTi, and QSETi except in some situations (See Remark   under  ).

