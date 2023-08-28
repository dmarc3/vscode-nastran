## [HADACRI](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.HADACRI.xhtml) - Mesh Adaptivity Criterion and Corresponding Parameters - SOL 101 & 400 (Linear)

Specifies Mesh refinement criterion for adaptive mesh refinement and corresponding parameters.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
HADACRI CRITID  TYPE    F1      F2      F3      F4      F5      F6              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
HADACRI 1       1       0.9                                                     
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CRITID    │ Identification number referenced by the CRITID field in the HADAPTL Bulk Data entry. (Integer > 0; │
│           │ no Default)                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Type of Mesh refinement adaptivity criteria. See Remark 2. (Integer > 1 and < 4; Default = 1)      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ F1 to F8  │ Criteria specific parameters. See Remark 2. (Real; no Default)                                     │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The mesh refinement criteria currently available (and selected in the TYPE field) are:

        See link for table.

2. The following table describes the different refinement criteria and corresponding parameters:

        See link for table.

3. Each criteria must have a unique ID (specified by the CRITID field and referenced by the CRITID field of the Bulk Data entry,  ).
4. The user might need to adjust the VARPHI parameter to ensure proper singular geometric feature detection (such as sharp edges or corners) (See the Parameter,  ).
