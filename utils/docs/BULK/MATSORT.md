## [MATSORT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATSORT.xhtml) - Advanced Orthotropic, Nonlinear Elastic Material for Shell Elements

Specifies NLELAST option for advanced 3D orthotropic, nonlinear elastic materials in SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATSORT MID     TE1     TE2     TE3     TNU12   TNU23   TNU31   TRHO    +       
+       TG12    TG23    TG31    TA1     TA2     TA3                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATSORT 689     77      77      77                                              
                                89      89      89                              
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Identification number of a MATORT entry. (Integer > 0; no Default)                        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ TE1       │ ID of TABL3Di entry for E1. (Integer; no Default; leave blank if table is not required)   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ TE2       │ ID of TABL3Di entry for E2. (Integer; no Default; leave blank if table is not required)   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ TE3       │ ID of TABL3Di entry for E3. (Integer; no Default; leave blank if table is not required)   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ TNU12     │ ID of TABL3Di entry for NU12. (Integer; no Default; leave blank if table is not required) │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ TNU23     │ ID of TABL3Di entry for NU23. (Integer; no Default; leave blank if table is not required) │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ TNU31     │ ID of TABL3Di entry for NU31. (Integer; no Default; leave blank if table is not required) │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ TRHO      │ ID of TABL3Di entry for RHO. (Integer; no Default; leave blank if table is not required)  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ TG12      │ ID of TABL3Di entry for G12. (Integer; no Default; leave blank if table is not required)  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ TG23      │ ID of TABL3Di entry for G23. (Integer; no Default; leave blank if table is not required)  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ TG31      │ ID of TABL3Di entry for G31. (Integer; no Default; leave blank if table is not required)  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ TA1       │ ID of TABL3Di entry for A1. (Integer; no Default; leave blank if table is not required)   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ TA2       │ ID of TABL3Di entry for A2. (Integer; no Default; leave blank if table is not required)   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ TA3       │ ID of TABL3Di entry for A3. (Integer; no Default; leave blank if table is not required)   │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. TABL3Di is a table where an entry can be a function of up to 4 variables such as strain, temperature, strain rate, etc. If one of the independent variables is temperatures then you should not use MATTORT.
2. In SOL 400, MATSORT is used in conjunction with MATORT and is only supported for 2D and 3D elements with property extensions.  This implies that for such elements, PCOMP / PCOMPG, PSHEAR, PSHELL, PLPLANE and PSOLID should be associated with PSHLN1, PSHEARN, PSHLN1, PSHLN2 and PSLDN1 respectively. Note that, prior to MD Nastran 2010, if the property extensions were missing, then the analysis would stop with an error.  From MD Nastran 2010 onwards, if the property extensions are missing, they are automatically added with default settings by the program unless the user has set NLMOPTS,SPROPMAP,-1 in the bulk data.
