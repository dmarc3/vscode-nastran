## [PLPLANE](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PLPLANE.xhtml) - Fully Nonlinear Plane Element Properties

Defines the properties of a fully nonlinear (i.e., large strain and large rotation, etc.) plane strain, plane stress, or axisymmetric element. Please refer to PSHLN2.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PLPLANE PID     MID     CID     STR                                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PLPLANE 203     204     -2      GRID                                            
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Element property identification number. (Integer > 0)                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Identification number of a MATHP entry for Nastran conventional elements, or MATHE and other       │
│           │ linear or nonlinear material entries for Nastran advanced nonlinear elements. (Integer > 0). See   │
│           │ Remarks 7.                                                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID       │ Identification number of a coordinate system defining the plane of deformation. See Remarks 2. and │
│           │ 3. (Default = 0)                                                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STR       │ Location of stress and strain output. (Character: “GAUS” or “GRID”, Default = “GRID”)              │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. PLPLANE can be referenced by a CQUAD, CQUAD4, CQUAD8, CQUADX, CTRIA3, CTRIA6, or CTRIAX entry.
2. Plane strain hyperelastic elements must lie on the x-y plane of the CID coordinate system. Stresses and strains are output in the CID coordinate system.
3. Axisymmetric hyperelastic elements must lie on the x-y plane of the basic coordinate system. CID may not be specified and stresses and strains are output in the basic coordinate system.
4. Negative values of CID will indicate an axes combination for axisymmetric elements. The following table describes the value and axes. Inside one model, only one CID value is allowed.

    ```text
    ┌───────┬────────┬───────────┐
    │ Axial │ Radial │ CID Value │
    ├───────┼────────┼───────────┤
    │ X     │ Y      │ -2        │
    ├───────┼────────┼───────────┤
    │ X     │ Z      │ -3        │
    ├───────┼────────┼───────────┤
    │ Y     │ X      │ -4        │
    ├───────┼────────┼───────────┤
    │ Y     │ Z      │ -5        │
    ├───────┼────────┼───────────┤
    │ Z     │ X      │ -6        │
    ├───────┼────────┼───────────┤
    │ Z     │ Y      │ -7        │
    └───────┴────────┴───────────┘
    ```

5.  CID = 0 is the default value which equal to CID = -2.
6. PLPLANE is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PLPLANE property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness among PLPLANE, PAXSYMH, and PSHELL entries.
7. When using Enhanced materials (SOL400), the MID field may point to additional Material entries such as a MAT1. For a full list see the PSHLN2 entry. If a material type other than the MATHP or MATHE entry is used in solution sequences other than SOL400, wrong results will occur. Note linear stress recovery is not available for any element using the PLPLANE.
