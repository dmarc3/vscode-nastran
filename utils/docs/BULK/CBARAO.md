## [CBARAO](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CBARAO.xhtml) - Auxiliary Output Points Along Bar Element Axis (CBAR Entry)

Defines a series of points along the axis of a bar element (CBAR entry) for stress and force recovery output. This entry is applicable in static and normal modes analysis only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBARAO  EID     SCALE   X1      X2      X3      X4      X5      X6              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBARAO  1065    FR      0.2     0.4     0.6     0.8                             
```

#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBARAO  EID     SCALE   NPTS    X1      DELTAX                                  
CBARAO  1065    FR      4       0.2     0.2                                     
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification of a CBAR entry. (0 < Integer < 100,000,000)                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ SCALE     │ Defines scale of Xi values.  (Character = “LE” or “FR”)                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ Xi        │ Series of locations along element axis for stress and force data recovery.  (Real > 0.0) │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ DELTAX    │ Incremental distance along element axis.  (Real)                                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ NPTS      │ Number of stress recovery points, not including the end points.  (Integer > 0)           │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry defines intermediate locations on the axis of selected CBAR elements for additional data recovery.  The values of Xi are actual distances along the length if SCALE = “LE”.  If SCALE = “FR”, the values of Xi are ratios of actual distances to the bar length.  A PLOAD1 Bulk Data entry for the CBAR element in question must be present to obtain intermediate data recovery.
2. When the alternate format is used, a series of locations Xi = X[i-1]+DELTAX, i = 1, 2, ..., NPTS is generated.
3. If a CBARAO or PLOAD1 entry is specified and stress and/or force output is requested, then the stresses and/or forces will be calculated at each location Xi and output as a separate line.  The force and stress values at the end points of the beam will always be output.  This output format will be used for all beam and bar elements.
4. Intermediate loads on the element defined by the PLOAD1 entry will be accounted for in the calculation of element stresses and forces.  If no PLOAD1 entry is defined for the element, the shear forces are constant, the moments are linear, and it is not necessary that the user define additional points.
5. For each bar element, either the basic format or the alternate format, but not both, may be used.  A maximum of six internal points can be specified with the basic form.  The end points must not be listed because data will be generated for them, as explained in Remark   If more than six unequally spaced internal points are desired, it is advisable to subdivide the bar into two or more elements.
