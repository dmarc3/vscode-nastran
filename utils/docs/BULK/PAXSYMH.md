## [PAXSYMH](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PAXSYMH.xhtml) - Linear Axisymmetric Harmonic Element Properties

Defines the properties of a linear axisymmetric harmonic element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PAXSYMH PID     MID     CID     NHARM   INT                                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PAXSYMH 100     10      5                                                       
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number. (Integer> 0). See Remarks 1. and 5.                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Identification number of MAT1 or MAT9 entry. (Integer> 0).                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID       │ Identification number of element coordinate system. (Integer > 0; Default = 0). See Remark 2.. │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NHARM     │ Harmonic index. (Integer > 0; Default = 1). See Remark 3..                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INT       │ Integration scheme. (Integer 0, 1, 2 or 3; Default = 0).  See Remark 4.                        │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry is referenced by the CQUADX and CTRIAX entries.
2. The Y-axis of CID defines the axis of symmetry while its X-Y plane defines the two-dimensional plane of the axisymmetric harmonic element. The X-axis of CID thus defines the radial direction.
3. The gyroscopic matrix is generated for the element only for the case of NHARM = 1 (the default).
4. The integration scheme INT selects the number of Gauss points used for matrix generation as indicated below:

    ```text
    ┌─────┬───────┬─────────────────────┬─────────────────────┐
    │ INT │ Order │ Gauss Points CQUADX │ Gauss Points CTRIAX │
    ├─────┼───────┼─────────────────────┼─────────────────────┤
    │ 1   │ 1x1   │ 1                   │ 1                   │
    ├─────┼───────┼─────────────────────┼─────────────────────┤
    │ 2   │ 2x2   │ 4                   │ 3                   │
    ├─────┼───────┼─────────────────────┼─────────────────────┤
    │ 3   │ 3x3   │ 9                   │ 7                   │
    └─────┴───────┴─────────────────────┴─────────────────────┘
    ```

    INT=0 uses INT=2 (no mid-side nodes) or INT=3 (mid-side nodes). The default INT=0 is recommended. The use of INT=1 will produce a singular stiffness and is meant for experimental use only.

5. PAXSYMH is a primary property entry.  Primary property entries are grouping entities for many applications in MSC Nastran.  Therefore it is highly recommended that the PAXSYMH property entries have unique identification numbers with respect to all other property entries, else unexpected grouping results may occur. There must be uniqueness among PAXSYMH, PLPLANE and PSHELL entries.
