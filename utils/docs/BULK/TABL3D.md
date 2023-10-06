## [TABL3D](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TABL3D.xhtml) - Multi-Dimensional Table

Specifies a table where an entry can be a function of up to 4 variables such as strain, temperature, strain rate, etc. for SOL 400.

#### Format 0: Simple Table Type 0 - entry is a function of only one variable:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABL3D0 ITID            KIND    EXTRP   ITIDS   ITIDB   SM              +       
+       X1      Y1      X2      Y2      X3      Y3      X4      Y4      +       
+       X5      Y5      -etc.-                                                  
```

#### Format 1: Multi-Dimensional Table Type 1 - entry is a function of 2, 3, or 4 variables, data entered one row at a time

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABL3D1 ITID    NV      KIND1   KIND2   KIND3   KIND4   NW1     NW2     +        
+       NW3     NW4     EXTRP1  EXTRP2  EXTRP3  EXTRP4                  +        
+       ITIDS1  ITIDB1  ITIDS2  ITIDB2  ITIDS3  ITIDB3  ITIDS4  ITIDB4  +        
+       SM1     SM2     SM3     SM4                                     +        
+       X11     X12     X13     X14     X15     X16     -etc.-          +        
+       X21     X22     X23     X24     X25     X26     -etc.-          + Enter if NW2>0
+       X31     X32     X33     X34     X35     X36     -etc.-          + Enter if NW3>0
+       X41     X42     X43     X44     X45     X46     -etc.-          + Enter if NW4>0
+       Y1      Y2      Y3      Y4      Y5      Y6      -etc.-          + See Remark 8
```

#### Format 2: Multi-Dimensional Table Type 2- entry is a function of 2, 3, or 4 variables, data entered one point at a time

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABL3D2 ITID    NV      KIND1   KIND2   KIND3   KIND4   NW1     NW2     +         
+       NW3     NW4     EXTRP1  EXTRP2  EXTRP3  EXTRP4                  +         
+       ITIDS1  ITIDB1  ITIDS2  ITIDB2  ITIDS3  ITIDB3  ITIDS4  ITIDB4  +         
+       SM1     SM2     SM3     SM4                                     +         
+       X11     X12     X13     X14     X15     X16     -etc.-          +         
+       X21     X22     X23     X24     X25     X26     -etc.-          + Enter if NW2>0
+       X31     X32     X33     X34     X35     X36     -etc.-          + Enter if NW3>0
+       X41     X42     X43     X44     X45     X46     -etc.-          + Enter if NW4>0
+       Y1      Y2      Y3      Y4      Y5      Y6      -etc.-          + See Remark 2
```

```text
┌───────────┬───────────────────────────────────────────────────┬──────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                          │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│ ITID      │ Table identification number.  (Integer > 0; no    │                                          │
│           │ Default)                                          │                                          │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│ SM or SMi │ Flag to indicate smoothing of the table data.     │                                          │
│           │ (Integer; Default = 0)                            │                                          │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│           │ 0                                                 │ Do not smooth the data                   │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│           │ 1                                                 │ Smooth the data                          │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│ NV        │ Number of variables the entry is a function of    │                                          │
│           │ (Integer, 1, 2, 3, or 4; no Default)              │                                          │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│ KIND or   │ “Independent” variable type (such as strain,      │                                          │
│ KINDi     │ temperature, Integer > 0; no Default; see         │                                          │
│           │ Table 0-32 for application values)                │                                          │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│ EXTRP or  │ Extrapolation flag. (Integer; Default = 2)        │                                          │
│ EXTRPi    │                                                   │                                          │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│           │ 1                                                 │ Do not allow extrapolation               │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│           │ 2                                                 │ Allow extrapolation (both ends of curve) │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│ ITIDS or  │ Table IDs meant for future expansion to reference │                                          │
│ ITIDSi,   │ other tables from this table when trying to       │                                          │
│ ITIDB or  │ evaluate this table outside its defined range.    │                                          │
│ ITIDBi    │ Currently not used, leave blank.                  │                                          │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│ Nwi       │ Number of X values of each variables. (i can      │                                          │
│           │ range from 1 to 4) (Integer > 0; no Default)      │                                          │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│ Xi or Xij │ Value of “independent” variable such as strain,   │                                          │
│           │ temperature, ... (Real; no Default)               │                                          │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│ Yi        │ Value of the quantity desired such as stress,     │                                          │
│           │ Poisson’s ratio, ... (Real; no Default)           │                                          │
└───────────┴───────────────────────────────────────────────────┴──────────────────────────────────────────┘
```

        See link for table.

#### Remarks (General):

1. Independent Variable Types marked as ‘NOT AVAILABLE’ are not available in SOL 400.
2. Dependent quantities cannot be arbitrary functions of the Independent Variable Types shown in  . For e.g., Young’s Modulus can be varied with Temperature and Space but cannot be varied with Time. Incorrect tabular settings that are not allowed will be errored out by the program.
3. For time-independent materials, dependent variables (i.e., yield stress) can typically be defined only as a function of temperature, stress/strain data or coordinates. For time-dependent materials, (e.g., creep coefficient), properties can also be defined as a function of time.
4. For contact dependent variables, (i.e., friction coefficient) can typically be defined as a function of temperature, contact body quantities like normal stress, body force, distance from body, relative velocity, etc.
5. If the independent variable is out of range of the table, the user can indicate if the last point in the table should be used or if the table should be extrapolated. Extrapolation means the table is continued with its first or last slope. Care should be taken with extrapolation, particularly for material properties.
6. Independent variable types for coordinates (5, 6, 7) depend on the type of analysis flagged. For a small strain or Total Lagrange or non-mechanical analysis, these coordinates refer to the original coordinates. For Updated Lagrange mechanical analysis, these coordinates refer to the updated
7. At present, options to specify additional tables using ITIDS, ITIDB, ITIDS1, ITIDB1, … ITIDS4, ITIDB4are not active and will be ignored if entered.
8. Independent variable types are typically specified for materials or contact. When material properties are varied through TABL3DX, the tables are honored only for elements with property extensions. For e.g., if TABL3D0 is used in conjunction with MATEP for a CHEXA mesh with PSOLID properties, then the elements should be given the PSLDN1 property extension for the table to be valid. Note that, with default property mapping (NLMOPTS,SPROPMAP,0), the property extensions will be added automatically based on the rules specified in Remark   of the NLMOPTS entry.
9. The strains and stresses identified as independent variables depend n the parameters flagged for large displacement.
    - For PARAM,LGDISP,-1, the strains and stresses are engineering quantities.
    - For PARAM,LGDISP,n (n > 0) or with NLMOPTS,LRGSTRN,n (n > 0), the strains are typically Logarithmic strains and the stresses are Cauchy Stresses.
