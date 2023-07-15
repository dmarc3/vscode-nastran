## [MDRBE3](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDRBE3.xhtml) - Interpolation Constraint Element Between Two or More Modules

Defines the motion at a reference grid point as the weighted average of the motions at a set of other grid points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDRBE3  EID     REFMOD  REFGRID REFC    WT1     C1      MOD1,1  G1,1            
        MOD1,2  G1,2    MOD1,3  G1,3    WT2     C2      MOD2,1  G2,1            
        MOD2,2  G2,2    -etc.-  WT3     C3      MOD3,1  G3,1    MOD3,2          
        G3,2    -etc.-  WT4     C4      MOD4,1  G4,1    MOD4,2  G4,2            
        -etc.-                                                                  
        “UM”    MOD1    GM1     CM1     MOD2    GM2     CM2                     
                MOD3    GM3     CM3     -etc.-                                  
        “ALPHA” ALPHA   TREF                                                    
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDRBE3  14      1000    100     1234    1.0     123     101     1               
        102     3       103     5       4.7     1       101     2               
        102     4       103     6       5.2     2       101     7               
        102     8       103     9       5.1     1       104     15              
        105     16                                                              
        UM      101     100     14      102     5       3                       
                103     7       2                                               
        ALPHA   6.5-6                                                           
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number.  Unique with respect to all elements. (0 < Integer < 100,000,000)   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REFMOD    │ Module IDs that contain the GRID entry for REFGRID. (Integer ≥ 0).                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REFGRID   │ Reference grid point identification number. (Integer > 0)                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REFC      │ Component numbers at the reference grid point. (Any of the integers 1 through 6 with no embedded   │
│           │ blanks.)                                                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WTi       │ Weighting factor for components of motion on the following entry at grid points Gi,j.  (Real)      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component numbers with weighting factor WTi at grid points Gi,j. (Any of the integers 1 through 6  │
│           │ with no embedded blanks.)                                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODi,j    │ Module IDs that contain the GRID entries for Gi,j. (Integer ≥ 0).                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi,j      │ Grid points with components Ci that have weighting factor WTi in the averaging equations. (Integer │
│           │ > 0)                                                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “UM”      │ Indicates the start of the degrees-of-freedom belonging to the dependent degrees-of-freedom. The   │
│           │ default action is to assign only the components in REFC to the dependent degrees-of-freedom.       │
│           │ (Character)                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODk      │ Module IDs that contain the GRID entries for GMk. (Integer ≥ 0).                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GMi       │ Identification numbers of grid points with degrees-of-freedom in the m-set. (Integer > 0)          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CMi       │ Component numbers of GMi to be assigned to the m-set. (Any of the Integers 1 through 6 with no     │
│           │ embedded blanks.)                                                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “ALPHA”   │ Indicates that the next number is the coefficient of thermal expansion. (Character)                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALPHA     │ Thermal expansion coefficient. See Remark 14. under RBE3. (Real or blank)                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TREF      │ Reference temperature for the calculation of thermal loads. (Real; Default=0.0).                   │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The MDRBE3 entry must be defined in the main Bulk Data section only (Module 0).

2. See all remarks and figures under the RBE3 entry description. All remarks and figures under RBE3 apply to MDRBE3.

