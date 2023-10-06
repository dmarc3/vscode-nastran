## [PEULER1](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PEULER1.xhtml) - Eulerian Element Properties

Eulerian element properties. The initial conditions of these elements are defined in geometric regions. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PEULER1 PID             TYPE    SID     SID2                                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PEULER1 100             HYDRO   300                                             
```

```text
┌───────────┬─────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                         │                                                   │
├───────────┼─────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PID       │ Unique property number. (Integer > 0; Required) │                                                   │
├───────────┼─────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TYPE      │ They type of Eulerian material(s) being used.   │                                                   │
│           │ (Character; Default = HYDRO)                    │                                                   │
├───────────┼─────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HYDRO                                           │ Hydrodynamic material + void.                     │
├───────────┼─────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 1STORDER                                        │ Single material, 1st order accurate Riemann       │
│           │                                                 │ solution-based fluids- & gases solver.            │
├───────────┼─────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 2NDORDER                                        │ Single material, 2nd order accurate Riemann       │
│           │                                                 │ solution-based fluids- & gases solver.            │
├───────────┼─────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ STRENGTH                                        │ Structural material with shear strength + void.   │
├───────────┼─────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ MMHYDRO                                         │ Multimaterial hydrodynamic material with no shear │
│           │                                                 │ strength + void.                                  │
├───────────┼─────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ MMSTREN                                         │ Structural multimaterial with shear strength +    │
│           │                                                 │ void.                                             │
├───────────┼─────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SID       │ Number of a TICEUL1 entry specifying the        │                                                   │
│           │ materials and geometric grouping criteria.      │                                                   │
│           │ (Integer > 0; Required)                         │                                                   │
├───────────┼─────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SID2      │ Number of a EULFOR1 entry defining acceleration │                                                   │
│           │ field.    (Integer>=0    Default=0)             │                                                   │
└───────────┴─────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. Remarks 1 through 6 of the PEULER definition apply also here.
2. Initial conditions and/or material assignments are defined on the TICEUL1 Bulk Data entry.
