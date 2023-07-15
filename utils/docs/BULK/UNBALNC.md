## [UNBALNC](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.UNBALNC.xhtml) - Specifies an Unbalanced Load for Rotordynamic Transient or Frequency Response Analysis

Used in rotordynamic analyses to specify a rotating unbalance load in terms of a cylindrical system with the rotor rotation as the z-axis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
UNBALNC SID     MASS    GRID    X1      X2      X3                              
        ROFFSET THETA   ZOFFSET T/Fon   T/FOFF  CFLAG                           
        UFT1    UFT2    UFT3    UFR1    UFR2    UFR3                            
        MCT1    MCT2    MCT3    MCR1    MCR2    MCR3                            
        SCR1    SCR2    SCR3                                                    
```
#### Example:<span></span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
UNBALNC 100     0.1     1001    0.0     1.0     0.0     
        0.02    30.0    0.5                     MASS    
        1001    1002    1003    1004    1005    1006    
        2001    2002    2003    2004    2005    2006    
        3001    3003    3004                            
```
#### <span></span>

```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID        │ Set identification number. (Integer; Required; no Default)                                         │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MASS       │ Mass of imbalance. See Remark 4. (Real or Integer; if integer must be > 0; Required; no Default)   │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GRID       │ Grid identification number of applying imbalance. See Remark 10. (Integer; Required; no Default)   │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X1, X2, X3 │ Components of the vector, from GRID, in the displacement coordinate system of GRID, which is used  │
│            │ to define a cylindrical coordinate system centered at GRID; see Remark 5. (Real; Required; no      │
│            │ Default)                                                                                           │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ROFFSET    │ Offset of mass in the radial direction of the unbalance coordinate system. See Remark 4. (Real or  │
│            │ Integer; if integer, must be > 0; Default = 1.0)                                                   │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ THETA      │ Angular position, in degrees, of the mass in the unbalance coordinate system. (Real; Default =     │
│            │ 0.0)                                                                                               │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ZOFFSET    │ Offset of mass in the z-direction of the unbalance coordinate system. See Remark 4. (Real or       │
│            │ Integer; if integer, must be > 0; Default = 0.0)                                                   │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│            │ Start time or frequency for applying imbalance load. See Remark 6. (Real > 0.0; Default = 0.0)     │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│            │ Stop time or frequency for terminating imbalance load. See Remark 6. (Real > 0.0; Default =        │
│            │ 999999.0)                                                                                          │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UFT1-3     │ EPOINTs to output the unbalanced forces in the T1, T2, and T3 directions. See Remark 6. (Integer > │
│            │ 0)                                                                                                 │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UFR1-3     │ EPOINTs to output the unbalanced forces in the R1, R2, and R3 directions. See Remark 6. (Integer > │
│            │ 0)                                                                                                 │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MCT1-3     │ EPOINTs to output the mass-correction forces in the T1, T2, and T3 directions. See Remark          │
│            │ 6. (Integer > 0)                                                                                   │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MCR1-3     │ EPOINTs to output the mass-correction forces in the R1, T2, and R3 directions. See Remark          │
│            │ 6. (Integer > 0)                                                                                   │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SCR1-3     │ EPOINTs to output the speed-correction forces in the R1, R2, and R3 directions. (Integer > 0)      │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CFLAG      │ Correct flag to specify whether 1) the mass will be used to modify the total mass in the transient │
│            │ response calculations, 2) the effect of the rotor spin rate change will be included in the         │
│            │ transient response calculation, or 3) both; see Remark 7. (Character: NONE, MASS, SPEED, or BOTH,  │
│            │ Default = NONE).                                                                                   │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
