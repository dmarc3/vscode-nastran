## [PBUSH2D](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PBUSH2D.xhtml) - 2-D Linear/Nonlinear Connection Properties

Defines linear and nonlinear properties of a two-dimensional element (CBUSH2D entry).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBUSH2D PID     K11     K22     B11     B22     M11     M22             +       
+       SQUEEZE BDIA    BLEN    BCLR    SOLN    VISCO   PVAPCO          +       
+       NPORT   PRES1   THETA1  PRES2   THETA2  OFFSET1 OFFSET2                 
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBUSH2D 1000    50.0    150.0   0.02    0.02                            +       
+       SQUEEZE 1.0     2.0     0.05    LONG    2.1     300.0           +       
+       2       100.0   30.0    120.0   90.0    0.01    0.0                     
```

OR (to include cross coupling terms) 

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBUSH2D PID     K11     K22     B11     B22     M11     M22             +       
+       CROSS   K12     K21     B12     B21     M12     M21                     
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number (Integer > 0; Required).                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ K11       │ Nominal stiffness in T1 rectangular direction (Real; Required).                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ K22       │ Nominal stiffness in T2 rectangular direction (Real; Required).                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ B11       │ Nominal damping in T1 rectangular direction (Real; Default = 0.0).                          │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ B22       │ Nominal damping in T2 rectangular direction (Real; Default = 0.0).                          │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ M11       │ Nominal acceleration-dependent force in T1 direction (Real; Default = 0.0).                 │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ M22       │ Nominal acceleration-dependent force in T2 direction (Real; Default = 0.0).                 │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ ‘SQUEEZE’ │ Indicates that squeeze-film damper will be specified (Character; Required).                 │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ BDIA      │ Inner journal diameter. (Real > 0.0; Required)                                              │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ BLEN      │ Damper length. (Real > 0.0; Required).                                                      │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ BCLR      │ Damper radial clearance (Real > 0.0; Required).                                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ SOLN      │ Solution option: LONG or SHORT bearing (Character; Default = LONG).                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ VISCO     │ Lubricant viscosity (Real > 0.0; Required).                                                 │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ PVAPCO    │ Lubricant vapor pressure (Real; Required).                                                  │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ NPORT     │ Number of lubrication ports: 1 or 2 (Integer; no Default).                                  │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRES1     │ Boundary pressure for port 1 (Real > 0.0; Required if NPORT= 1 or 2).                       │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ THETA1    │ Angular position for port 1 (0.0 < Real < 360.0; Required if NPORT= 1 or 2).  See Remark 2. │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRES2     │ Boundary pressure for port 2 (Real > 0.0; Required if NPORT= 2).                            │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ THETA2    │ Angular position for port 2 (0.0 < Real < 360.0; Required if NPORT= 2).  See Remark 2.      │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ OFFSET1   │ Offset in the SFD direction 1, see Remark 3. (Real; Default = 0.0).                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ OFFSET2   │ Offset in the SFD direction 2, see Remark 3. (Real; Default = 0.0)                          │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ CROSS     │ Indicates that cross coupling terms will be provided.                                       │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ K12, K21  │ Cross coupling stiffness terms.                                                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ B12, B21  │ Cross coupling damping terms.                                                               │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ M12, M21  │ Cross coupling mass terms.                                                                  │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Either SQUEEZE or CROSS option can be used. Both options cannot be specified. SQUEEZE option will be supported only in SOL400. When SQUEEZE option is used, the squeeze film damper model force calculation is invoked using all the entries specified.
2. The angular measurement is counterclockwise from the displacement x-axis for the XY plane, the y-axis for the YZ plane, and the z-axis for the XZ plane.
3. Offsets are measured from GB relative to GA.  For example, if direction 2 is in the vertical direction and a gravity load is placed on GA, OFFSET2 will be a positive value (GB ‘moves’ toward GA in the positive direction 2).
4. PBUSH2D is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PBUSH2D property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PBUSH2D entries.
5. PBUSH2D may be used in conjunction with THPAD obtained from ROMAC for rotordynamic applications. Also see   and   bulk data entries.
6. The template used for specifying matrices using cross entries is:

     ![inset_006812.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/inset_006812.jpg?_LANG=enus)  

     where I=K,B or M
