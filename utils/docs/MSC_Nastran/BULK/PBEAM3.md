## [PBEAM3](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PBEAM3.xhtml) - Three-node Beam Property

Defines the properties of a three-node beam element (CBEAM3 entry).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBEAM3  PID     MID     A(A)    IZ(A)   IY(A)   IYZ(A)  J(A)    NSM(A)  +       
+       CY(A)   CZ(A)   DY(A)   DZ(A)   EY(A)   EZ(A)   FY(A)   FZ(A)   +       
+       SO(B)           A(B)    IZ(B)   IY(B)   IYZ(B)  J(B)    NSM(B)  +       
+       CY(B)   CZ(B)   DY(B)   DZ(B)   EY(B)   EZ(B)   FY(B)   FZ(B)   +       
+       SO(C)           A(C)    IZ(C)   IY(C)   IYZ(C)  J(C)    NSM(C)  +       
+       CY(C)   CZ(C)   DY(C)   DZ(C)   EY(C)   EZ(C)   FY(C)   FZ(C)   +       
+       KY      KZ      NY(A)   NZ(A)   NY(B)   NZ(B)   NY(C)   NZ(C)   +       
+       MY(A)   MZ(A)   MY(B)   MZ(B)   MY(C)   MZ(C)   NSIY(A) NSIZ(A) +       
+       NSIYZ(A)NSIY(B) NSIZ(B) NSIYZ(B)NSIY(C) NSIZ(C) NSIYZ(C)CW(A)   +       
+       CW(B)   CW(C)   STRESS                                          +       
+       WC(A)   WYC(A)  WZC(A)  WD(A)   WYD(A)  WZD(A)  WE(A)   WYE(A)  +       
+       WZE(A)  WF(A))  WYF(A)  WZF(A)  WC(B)   WYC(B)  WZC(B)  WD(B)   +       
+       WYD(B)  WZD(B)  WE(B)   WYE(B)  WZE(B)  WF(B)   WYF(B)  WZF(B)  +       
+       WC(C)   WYC(C)  WZC(C)  WD(C)   WYD(C)  WZD(C)  WE(C)   WYE(C)  +       
+       WZE(C)  WF(C)   WYF(C)  WZF(C)                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBEAM3  1010    2       2.9     3.5     5.97                    1.0     +       
+       0.2     3.0     -1.2    2.6     2.0     0.5                     +       
+       YES             1.0     23.6    34.7                            +       
+       1.1     3.2                                                     +       
+       YESA            3.2     2.1     3.2                     1.0     +       
+       0.8             0.5                                             +       
+       0.9     1.0             1.5                                     +       
+               1.0                                                             
```

```text
┌──────────────┬───────────────────────────────────────────────────┬─────────────────────────────────────────────────┐
│ Describer    │ Meaning                                           │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ PID          │ Property identification number. (Integer > 0;     │                                                 │
│              │ Required)                                         │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ MID          │ Material identification number. See Remark        │                                                 │
│              │ 1. (Integer > 0; Required)                        │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ A(A)         │ Area of the beam cross-section at end A. (Real >  │                                                 │
│              │ 0.0; Required)                                    │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ IZ(A)        │ Area moment of inertia at end A about local       │                                                 │
│              │ z-axis and the neutral axis. (Real > 0.0;         │                                                 │
│              │ Required)                                         │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ IY(A)        │ Area moment of inertia at end A about local       │                                                 │
│              │ y-axis and the neutral axis. (Real > 0.0;         │                                                 │
│              │ Required)                                         │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ IYZ(A)       │ Area product of inertia at end A about local y-   │                                                 │
│              │ and z-axes and the neutral axis. If y- and z-     │                                                 │
│              │ axes are principal axes, then IYZ(A)=0.0. (Real,  │                                                 │
│              │ but  > 0.0; Default = 0.0)                        │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ J(A)         │ Torsional stiffness parameter at end A. (Real >   │                                                 │
│              │ 0.0; Default = IZ+IY)                             │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ NSM(A)       │ Nonstructural mass per unit length at end A.      │                                                 │
│              │ (Real; Default = 0.0)                             │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ Ci(f), Di(j) │ The local y and z coordinates (i=Y, Z) at point j │                                                 │
│ Ei(j), Fi(j) │ (j=A, B, C), used for stress output. (Real;       │                                                 │
│              │ Default = 0.0)                                    │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ A(j), IZ(j), │ Area, moments of inertia, torsional stiffness     │                                                 │
│ IY(j)        │ parameter and nonstructural mass for the cross-   │                                                 │
│ IYZ(j),      │ section at j (j=B, C). (Real; See Remark 2.)      │                                                 │
│ J(j), NSM(j) │                                                   │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ SO(j)        │ Stress output request option at j (j=B, C).       │                                                 │
│              │ (Character; Default = “YESA”)                     │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│              │ “YES”                                             │ Stresses are recovered at Ci, Di, Ei, and Fi on │
│              │                                                   │ the next continuation.                          │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│              │ “YESA”                                            │ Stresses are recovered at points with the same  │
│              │                                                   │ (y, z) location at end A                        │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ KY, KZ       │ Shear effectiveness factors for local y- and      │                                                 │
│              │ z-directions. (Real > 0.0, Default = 1.0)         │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ NY(j), NZ(j) │ Local (y, z) coordinates of neutral axis for j    │                                                 │
│              │ (j=A, B, C). (Real, Default = 0.0 at end A and    │                                                 │
│              │ same values as end A for j = B, C)                │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ MY(j), MZ(j) │ Local (y, z) coordinates of nonstructural mass    │                                                 │
│              │ center of gravity at j (j=A, B, C). (Real,        │                                                 │
│              │ Default = 0.0 at end A and same values as end A   │                                                 │
│              │ for j=B,C)                                        │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ NSIY(j),     │ Nonstructural mass moments of inertia per unit    │                                                 │
│ NSIZ(j)      │ length about local y and z-axes, respectively,    │                                                 │
│              │ with regard to the nonstructural mass center of   │                                                 │
│              │ gravity at j (j=A, B, C). (Real, Default = 0.0 at │                                                 │
│              │ end A and same values as end A for j=B, C)        │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ NSIYZ(j)     │ Nonstructural mass product of inertia per unit    │                                                 │
│              │ length about local y and z-axes, respectively,    │                                                 │
│              │ with regard to the nonstructural mass center of   │                                                 │
│              │ gravity at j (j=A, B, C). (Real, Default = 0.0 at │                                                 │
│              │ end A and same values as end A for j=B, C)        │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ CW(j)        │ Warping coefficient at j (j=A, B, C). (Real       │                                                 │
│              │ > 0.0; Default = 0.0 at end A; same values as end │                                                 │
│              │ A for j = B, C)                                   │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ STRESS       │ Location selection for stress, strain and force   │                                                 │
│              │ output. (Character; Default = “GRID”; See Remark  │                                                 │
│              │ 3.)                                               │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ Wi(j)        │ Values of warping function at stress recovery     │                                                 │
│              │ points i = C, D, E and F, at location j=A, B, and │                                                 │
│              │ C. (Real; Default = 0.0 at end A and same values  │                                                 │
│              │ as end A for j=B, C)                              │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ WYi(j),      │ Gradients of warping function in the local (y, z) │                                                 │
│ WZi(j)       │ coordinate system at stress recovery points i=C,  │                                                 │
│              │ D, E, and F, at location j=A, B, and C. (Real;    │                                                 │
│              │ Default = 0.0 at end A and same values as end A   │                                                 │
│              │ for j=B, C.                                       │                                                 │
└──────────────┴───────────────────────────────────────────────────┴─────────────────────────────────────────────────┘
```

#### Remarks:

1. For structural analysis, MID must reference a MAT1, MAT2 or MAT8 material entry.
2. If any fields 4 through 9, for values of A, IZ, IY, IYZ, J and NSM at end B or C, are blank, then those values for end B or C are set to the values given for end A.
3. If STRESS=“GRID”, then the stresses, strains and forces are recovered at A, B and C. If STRESS=“GAUSS”, then the stresses, strains and forces are recovered at Gauss integration points,  ![bulkp06648.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06648.jpg?_LANG=enus) . The beam cross-section properties at these points are interpolated from those at A, B and C.
4. If all fields of W i ( j ), WY i ( j ) and WZ i ( j ) ( i =C, D, E, F and  j =A, B, C), are left blank, both stresses and strains due to the warping effect will not be recovered at the stress recovery points.
5. PBEAM3 is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PBEAM3 property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PBEAM, PBEAML, PBCOMP, PBMSECT, PBEAM3 entries.
6. When PBMSECT is used the resulting PBEAM3 image printed after the:

     ```text
     *** USER INFORMATION MESSAGE 4379 (IFP9B)
     THE USER SUPPLIED PBMSECT BULK DATA ENTRIES ARE REPLACED BY THE FOLLOWING PBEAM3 ENTRIES.
     contains special composite related data and will look different from the above entry description.
     ```
