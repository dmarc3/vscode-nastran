## [MATS8](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATS8.xhtml) - Advanced Orthotropic, Nonlinear Elastic Material for Shell Elements

Specifies NLELAST option for advanced orthotropic, nonlinear elastic material for plane stress and shell elements in SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATS8   MID     TE1     TE2     TNU12   TG12    TG1Z    TG2Z    TRHO            
        TA1     TA2                                                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATS8   34      12                                                              
        1                                                                       
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Identification number of a MAT8 entry. (Integer > 0; no Default)                          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ TE1       │ ID of TABL3Di entry for E1. (Integer; no Default; leave blank if table is not required)   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ TE2       │ ID of TABL3Di entry for E2. (Integer; no Default; leave blank if table is not required)   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ TNU12     │ ID of TABL3Di entry for NU12. (Integer; no Default; leave blank if table is not required) │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ TG12      │ ID of TABL3Di entry for G12. (Integer; no Default; leave blank if table is not required)  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ TG1Z      │ ID of TABL3Di entry for G1Z. (Integer; no Default; leave blank if table is not required)  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ TG2Z      │ ID of TABL3Di entry for G2Z. (Integer; no Default; leave blank if table is not required)  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ TRHO      │ ID of TABL3Di entry for RHO. (Integer; no Default; leave blank if table is not required)  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ TA1       │ ID of TABL3Di entry for A1. (Integer; no Default; leave blank if table is not required)   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ TA2       │ ID of TABL3Di entry for A2. (Integer; no Default; leave blank if table is not required)   │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. TABL3Di is a table where an entry can be a function of up to 4 variables such as strain, temperature, strain rate, etc. As an example, say the analysis required TE1 to be a function of strain. Then the corresponding TABL3D0 entry is TABL3D0, KIND=73 to specify  local strain component  as the independent variable. The dependent variable is  E1 .
2. In SOL 400, MATS8 is used in conjunction with MAT8 and is only supported for shell elements with property extensions.  This implies that for such elements, PSHELL should be associated with PSHLN1. Note that, prior to MD Nastran 2010, if the property extensions were missing, then the MATS8 data was not considered in the element’s formulation.  From MD Nastran 2010 onwards, if the property extensions are missing, they are automatically added with appropriate settings by the program unless the user has set NLMOPTS,SPROPMAP,-1 in the bulk data.
