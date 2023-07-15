## [MDRROD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDRROD.xhtml) - Rigid Pin-Ended Element Connection Between Two Modules

Defines a pin-ended element that is rigid in translation between two Modules.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDRROD  EID     MODA    GA      MODB    GB      CMA     CMB     ALPHA           
        TREF                                                                    
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDRROD  14      11      1       21      2       2               6.5-6           
```
```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)                                       │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODA,MODB │ Module IDs that contain the GRID entries for GA and GB (Integer ≥ 0).                            │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GA, GB    │ Grid point identification numbers of connection points in Modules MODA and MODB, respectively.   │
│           │ (Integer > 0)                                                                                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CMA,CMB   │ Component number of one and only one dependent translational degree-of-freedom in the global     │
│           │ coordinate system assigned by the user to either GA or GB. See Remark 3. under RROD. (Integer 1, │
│           │ 2, or 3. Either CMA or CMB must contain the integer, and the other must be blank for the linear  │
│           │ MDRROD. For Lagrange MDRROD, both CMA and CMB can be blank.)                                     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALPHA     │ Thermal expansion coefficient. See Remark 11. under RROD. (Real or blank)                        │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TREF      │ Reference temperature for the calculation of thermal loads. (Real; Default=0.0).                 │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
,./k

#### Remarks:

1. The MDRROD entry must be defined in the main Bulk Data section only (Module 0).

2. See all remarks and figures under the RROD entry description. All remarks and figures under RROD apply to MDRROD.

