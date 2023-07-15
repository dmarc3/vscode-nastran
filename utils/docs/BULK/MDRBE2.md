## [MDRBE2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDRBE2.xhtml) - Rigid Body Element Between Two or More Modules, Form 2

Defines a rigid body with independent degrees-of-freedom that are specified at a single grid point and with dependent degrees-of-freedom that are specified at an arbitrary number of grid points. All grid points may be defined in different Modules.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDRBE2  EID     MODN    GN      CM      MOD1    GM1     MOD2    GM2             
        MOD3    GM3     MOD4    GM4     MOD5    GM5     MOD6    GM6             
        MOD7    GM7     MOD8    GM8     -etc.-  ALPHA   TREF                    
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDRBE2  9       101     8       12      201     10      202     12              
        202     14      203     15      203     16      6.5-6                   
```
```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000).                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODN      │ Module ID that contains the GRID entry for GN. (Integer ≥ 0).                                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GN        │ Identification number of grid point to which all six independent degrees-of-freedom for the      │
│           │ element are assigned. (Integer > 0)                                                              │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CM        │ Component numbers of the dependent degrees-of-freedom in the global coordinate system at grid    │
│           │ points GMi. See Remark 12. under RBE2. (Integers 1 through 6 with no embedded blanks.)           │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODi      │ Module IDs that contain the GRID entries for GMj. (Integer ≥ 0).                                 │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GMi       │ Grid point identification numbers at which dependent degrees-of-freedom are assigned. (Integer > │
│           │ 0)                                                                                               │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALPHA     │ Thermal expansion coefficient. See Remark 11. under RBE2. (Real or blank)                        │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TREF      │ Reference temperature for the calculation of thermal loads. (Real; Default=0.0).                 │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The MDRBE2 entry must be defined in the main Bulk Data section only (Module 0).

2. See all remarks and figures under the RBE2 entry description. All remarks and figures under RBE2 apply to MDRBE2.

