## [NLRSFD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.NLRSFD.xhtml) - Nonlinear Transient Load Proportional to a Squeeze Film Damper

Defines a nonlinear transient radial squeeze film damper.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLRSFD  SID     GA      GB      PLANE   BDIA    BLEN    BCLR    SOLN    +       
+       VISCO   PVAPCO  NPORT   PRES1   THETA1  PRES2   THETA2  NPNT    +       
+       OFFSET1 OFFSET2 GROUP...NAME2                                   +       
+       RDATA1  RDATA2  RDATA3  RDATA4  RDATA5  RDATA6  RDATA7  RDATA8          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLRSFD  100     1001    1002    XY      1.0     2.0     0.05    LONG    +       
+       2.1     300.0   1       100.0   30.0    120.0   90.0    51      +       
+       0.01    0.0     GRPNAME                                         +       
+       0.0                             0.0     0.      0.0     0.0             
```

#### Alternate Example with UDS:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLRSFD  100     1001    1002    XY      1.0     1.0     1.0                     
        1.0     1       1       1.0     1.0     1.0     1.0     1               
        1.0     1.0     MYSUB   EXT                                             
        1.0E-4                                                                  
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Nonlinear load set identification number. (Integer > 0; Required)                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GA        │ Inner (e.g., damper journal) grid for squeeze film damper. (Integer > 0; Required)                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GB        │ Outer (e.g., housing) grid for squeeze film damper. (Integer > 0; Required)                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLANE     │ Radial gap orientation plane: XY, XZ, or ZX. See Remark 1. (Character; Default = XY)               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BDIA      │ Inner journal diameter. (Real > 0.0; Required)                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BLEN      │ Damper length. (Real > 0.0; Required)                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BCLR      │ Damper radial clearance. (Real > 0.0; Required)                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SOLN      │ Solution option: LONG or SHORT bearing. (Character; Default = LONG)                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VISCO     │ Lubricant dynamic viscosity. (Real > 0.0; Required)                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PVAPCO    │ Lubricant vapor pressure. (Real; Required)                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NPORT     │ Number of lubrication ports: 1 or 2 (Integer; no Default)                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRES1     │ Boundary pressure for port 1. (Real > 0.0; Required if NPORT = 1 or 2)                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ THETA1    │ Angular position for port 1. (0.0 < Real > 360.0; Required if NPORT = 1 or 2). See Remark 2.       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRES2     │ Boundary pressure for port 2. (Real > 0.0; Required if NPORT = 2).                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ THETA2    │ Angular position for port 2. See Remark 2. (0.0 < Real < 360.0; Required if NPORT = 2)             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NPNT      │ Number of finite difference points for damper arc. (Odd Integer < 201; Default = 101)              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OFFSET1   │ Offset in the SFD direction 1. (Real; Default = 0.0)                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OFFSET2   │ Offset in the SFD direction 2. (Real; Default = 0.0)                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GRPNAME   │ The GRPNAME is the name used for the group on the FMS CONNECT SERVICE statement; this is used with │
│           │ an external User Defined Service (UDS). See Remark 6. (Character or Blank)                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EVALNAME  │ Value passed to the external User Defined Service as argument “evalname”. (Character or Blank)     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RDATAi    │ Parameters passed to the external User Defined Service as arguments “parmi”. (Real; Default =      │
│           │ 0.0). See Remark 7.                                                                                │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The XY, YZ, and ZX planes are relative to the displacement coordinates of GA and GB. The plane coordinates correspond to the NLRSFD directions 1 and 2.

     In order to ensure correct results, points GA and GB must satisfy the following three conditions:

     - They must both be grid points
     - They must be coincident
     - They must have parallel displacement coordinate systems

     The program checks for the above conditions. If they are not satisfied, the program terminates the execution with an appropriate fatal message.

2. The angular measurement is counterclockwise from the displacement x-axis for the XY plane, the y-axis for the YZ plane, and the z-axis for the ZX plane.
3. OFFSET1 = Damper housing ID center offset displacement relative to OD center in the horizontal direction. Entered as a positive value for horizontally to the left (negative x-direction) displacement (inches).
4. OFFSET2 = Damper housing ID center offset displacement relative to OD center in the vertical direction. Entered as a positive value for downward (negative y-direction) displacement (inches). Positive entry typically used for -1 g compensation.
5. The time step algorithm in transient solution sequences may loose unconditional stability when this load entry is used. In most practical cases, the time step size chosen to reach a certain accuracy is below the stability limit. It is recommended to decrease the time step if results diverge. Additional recommendations are outlined in the user guides.
6. If GRPNAME is blank, the NLRSFD entry used the values defined in the fields prior to GRPNAME. If GRPNAME contains a valid group (as defined on the FMS CONNECT SERVICE entry), the values in fields BDIA, BLEN, BCLR, SOLN, VISCO, PVAPCO, NPORT, PRES1, THETA1, PRES2, THETA2, NPNT, OFFSET1 and OFFSET2 are ignored and the NLRSFD will obtain its characteristics from an external source via the CONNECT SERVICE architecture.
7. Parameters may be changed by the external service; the changed values will be stored and returned on a subsequent call.
8. The squeeze films damper defined via the CONNECT SERVICE architecture in NLRSFD does not support rotors defined using ROTORSE.
