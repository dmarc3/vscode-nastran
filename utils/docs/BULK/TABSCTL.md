## [TABSCTL](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TABSCTL.xhtml) - Load Stepping Control Table - SOL 400

This option allows the user to provide user criteria for load stepping control. It is referred to by an NLSTEP entry. The criteria defined herein are used for controlling the load step size. The criteria come in two flavors as defined in the NLSTEP entry: limit and target. When used as limits, the time step will be reduced if the criterion would be violated. When used as target, the time step will also be increased if the calculated results are less than what is specified by the criteria.

The criteria are calculated for elements or grids as defined below. By default all elements or nodes are used for evaluating the respective criterion, but this can be limited to specific sets. (See the  NLSTEP, 931  entry.)

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABSCTL TID                                                             +       
+       ICRIT_1 SET3_ID1YT1_1   MT1_1   YT2_1   MT2_1   YT3_1   MT3_1   +       
+       YT4_1   MT4_1                                                   +       
+       ICRIT_2 SET3_ID2YT1_2   MT_2    YT2_2   MT2_1   YT3_2   MT3_2   +       
+       YT4_2   MT4_2                                                   +       
+       ...     ...     ...     ...                                     +       
+       ICRIT_n SET3_IDnYT1_n   MT1_n   YT1_n   MT2_n   YT3_n   MT3_n   +       
+       YT4_n   MT4_n                                                           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABSCTL 17                                                              +       
+       ESI     84      .03     21.     0.4     55.     0.6             +       
+       ESRI    18      .03     21.                                     +       
+       EPSI    ALL     1.1                                                     
```

```text
┌───────────┬──────────────────────────────────────────────────┬───────────────────────────────────────────┐
│ Describer │ Meaning                                          │                                           │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────┤
│ TID       │ ID of TABSCTL entry. (Integer > 0)               │                                           │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────┤
│ ICRITi    │ Type of user criterion to use and the type of    │                                           │
│           │ entity it refers to: (Character; no Default)     │                                           │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────┤
│           │ ESI                                              │ Element Strain Increment                  │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────┤
│           │ EPSI                                             │ Element Plastic Strain Increment          │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────┤
│           │ ECSI                                             │ Element Creep Strain Increment            │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────┤
│           │ ENCSI                                            │ Element Normalized Creep Strain Increment │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────┤
│           │ ESTRI                                            │ Element STRess Increment                  │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────┤
│           │ ESRI                                             │ Element Strain Energy Increment           │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────┤
│           │ GTI                                              │ Grid Temperature Increment                │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────┤
│           │ GDI                                              │ Grid Displacement Increment               │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────┤
│           │ GRI                                              │ Grid Rotation Increment                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────┤
│           │ ENSTRI                                           │ Element Normalized STRess Increment       │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────┤
│ SET3_IDi  │ ID of a SET3 Bulk Data entry. (Integer > 0 or    │                                           │
│           │ (ALL or BLANK); Default = ALL)                   │                                           │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────┤
│ YT1_i     │ First limit or target value for the current      │                                           │
│           │ criterion i. (Real; no Default)                  │                                           │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────┤
│ MT1_i     │ First range or target value for the current      │                                           │
│           │ criterion i. See Remark 2. (Real-default blank-  │                                           │
│           │ always active)                                   │                                           │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────┤
│ YT2_i     │ Second limit or target value for criterion.      │                                           │
│           │ (Real; no Default)                               │                                           │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────┤
│ MT2_i     │ Second range of applicability for criterion i.   │                                           │
│           │ See Remark 2. (Real-default blank-always active) │                                           │
└───────────┴──────────────────────────────────────────────────┴───────────────────────────────────────────┘
```
