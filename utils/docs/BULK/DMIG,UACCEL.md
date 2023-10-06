## [DMIG,UACCEL](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DMIG.UACCEL.xhtml) - Direct Matrix Input of Enforced Static Acceleration

Defines rigid body accelerations in the basic coordinate system.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DMIG    UACCEL  “0"     “9"     TIN                             NCOL
DMIG    UACCEL  L                       G1      C1      X1              +
+       G1      C2      X2              G1      C3      X3          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DMIG    UACCEL  0       9       1                               4
DMIG    UACCEL  2                       2       3       386.4    
DMIG    UACCEL  3                       2       4       3.0      
DMIG    UACCEL  4                       2       6       1.0      
```

```text
┌───────────┬──────────────────────────────────────────────────┬───────────────────────────────────────────────┐
│ Describer │ Meaning                                          │                                               │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ TIN       │ Type of matrix being input. (Integer 1 or 2)     │                                               │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│           │ 1                                                │ Real, single precision (One field is used per │
│           │                                                  │ element.)                                     │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│           │ 2                                                │ Real, double precision (One field is used per │
│           │                                                  │ element.)                                     │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ NCOL      │ Number of columns, see Remark 2. Default is the  │                                               │
│           │ number of columns specified.  (Integer > 0)      │                                               │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ L         │ Load sequence number. (Integer > 0)              │                                               │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ G1        │ Grid point identification number of a single     │                                               │
│           │ reference point. (Integer > 0)                   │                                               │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ Ci        │ Component number for Gi in the basic coordinate  │                                               │
│           │ system. See Remark  4. (0 < Integer < 6)         │                                               │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ Xi        │ Value of enforced acceleration term in the basic │                                               │
│           │ coordinate system. (Real)                        │                                               │
└───────────┴──────────────────────────────────────────────────┴───────────────────────────────────────────────┘
```

#### Remarks:

1. DMIG,UACCEL is an optional entry when PARAM,INREL,-1 is specified in SOLs 101 or 200. If DMIG,UACCEL is present, the loads applied to the structure are the sum of the conventional applied loads plus the inertia loads resulting from the rigid body accelerations defined on this entry. If it is not present, conventional inertia relief calculations are performed.
2. The load sequence number interpretation depends on the value of the NCOL field. The recommended method is to set it equal to the number of loading conditions. The load sequence number L is then the sequence number of the subcase to which the applied acceleration will be applied.
3. The grid point identification number listed on Gi defines a single grid point   on the model where loads will be applied to cause the enforced acceleration state.  Gi must also appear on a SUPORT Bulk Data entry.  It must also appear on a PARAM,GRDPNT entry.  In superelement analysis, it must be a residual structure point exterior to all superelements.
4. The Xi value is the enforced acceleration at grid point Gi. The translation and rotation components are in consistent units and will be applied in the basic coordinate system regardless of the displacement coordinate system specified for Gi (CD field on GRID entry).
5. Only nonzero terms need be entered.
6. See    in  the MSC Nastran Reference Guide  for the theoretical basis of inertia relief with superelements.
7. If any DMIG entry is changed or added on restart then a complete re-analysis is performed.  Therefore, DMIG entry changes or additions are not recommended on restart.
