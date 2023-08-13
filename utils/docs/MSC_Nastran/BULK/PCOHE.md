## [PCOHE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PCOHE.xhtml) - Interface Cohesive Zone Modeling Element Properties

Defines the properties of a fully nonlinear element used to simulate the onset and progress of delamination in SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCOHE   PID     MID     INT     T       OUTPUT  SECANT                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCOHE   700     701                                                             
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification. (Integer > 0)                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Identification number of a MCOHE entry. (Integer > 0)                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INT       │ Integration scheme. 0 or blank Gauss integration, 1 for Newton-Coates/Lobatto integration. See     │
│           │ Remark 3. (Integer 0 or 1; Default 0)                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T         │ Thickness. See Remark 2. (Real > 0; Default = 1.0)                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OUTPUT    │ Location selection for stress/strain output. If OUTPUT=GRID or blank, output is at the corner grid │
│           │ points. If OUTPUT=GAUSS output at the Gauss points. If INT=1, OUTPUT will be set to GRID.          │
│           │ (Character or Blank; Default Grid)                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SECANT    │ Tangent matrix scheme. 0 or blank a secant-type matrix is used to set up the element stiffness     │
│           │ matrix, 1 a tangent-type matrix is used to set up the element stiffness matrix. (Integer 0 or 1;   │
│           │ Default 0)                                                                                         │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. PCOHE can be referenced by CIFQUAD, CIFHEX, CIFPENT, and CIFQDX entries.
2. The thickness T applies only to CIFQUAD elements.
3. For initially very stiff interface elements, the Newton-Coates/Lobatto integration scheme may be preferred.
4. PCOHE is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PCOHE property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PCOHE entries
