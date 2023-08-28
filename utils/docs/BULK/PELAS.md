## [PELAS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PELAS.xhtml) - Scalar Elastic Property

Specifies the stiffness, damping coefficient, and stress coefficient of a scalar elastic (spring) element (CELAS1 or CELAS3 entry).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PELAS   PID1    K1      GE1     S1      PID2    K2      GE2     S2              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PELAS   7       4.29    0.06    7.92    27      2.17    0.0032                  
```

```text
┌───────────┬─────────────────────────────────────────────────────┐
│ Describer │ Meaning                                             │
├───────────┼─────────────────────────────────────────────────────┤
│ PIDi      │ Property identification number. (Integer > 0)       │
├───────────┼─────────────────────────────────────────────────────┤
│ Ki        │ Elastic property value. (Real)                      │
├───────────┼─────────────────────────────────────────────────────┤
│ GEi       │ Damping coefficient, . See Remarks 5. and 6. (Real) │
├───────────┼─────────────────────────────────────────────────────┤
│ Si        │ Stress coefficient. (Real)                          │
└───────────┴─────────────────────────────────────────────────────┘
```

#### Remarks:

1. Be careful using negative spring values.
2. Spring values are defined directly on the CELAS2 and CELAS4 entries, and therefore do not require a PELAS entry.
3. One or two elastic spring properties may be defined on a single entry.
4. For a discussion of scalar elements, see    in the  MSC Nastran Reference Guide.
5. If PARAM,W4 is not specified, GEi is ignored in transient analysis. See  .
6. To obtain the damping coefficient GE, multiply the critical damping ratio  ![bulkp06952.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06952.jpg?_LANG=enus)  by 2.0.
7. If PELAS is used in conjunction with PELAST, Ki > 0, and the initial slope of the nonlinear force-displacement relationship defined by the PELAST should agree with Ki.
8. PELAS is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PELAS property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PELAS entries.
