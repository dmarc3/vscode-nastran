## [MONPNT3](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MONPNT3.xhtml) - Integrated Load Monitor Point

Sums select Grid Point Forces to a user chosen monitor point.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MONPNT3 NAME    LABEL                                                   +
+       AXES    GRIDSET ELEMSET CP      X       Y       Z       XFLAG   +        
+       CD                                                                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MONPNT3 t0      Fuselage station 1105                                   +
+       123456  1       2       0       30.0                    ASM             
```

```text
┌───────────┬───────────────────────────────────────────────────┬─────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ NAME      │ Unique character string of up to 8 characters     │                                                 │
│           │ identifying the monitor point (Character,         │                                                 │
│           │ Required)                                         │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ LABEL     │ A optional string comprising of no more than 56   │                                                 │
│           │ characters (fields 3 through 9) that identifies   │                                                 │
│           │ the monitor point.                                │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ AXES      │ Component axes about which to sum. Any unique     │                                                 │
│           │ combination of the integers 1 through 6 with no   │                                                 │
│           │ embedded blanks. (Integer; Required)              │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ GRIDSET   │ Refers to a SET1 entry that has a list of grids   │                                                 │
│           │ to be included in the monitored point. (Integer;  │                                                 │
│           │ Required)                                         │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ ELEMSET   │ Refers to a SET1 entry that has a list of         │                                                 │
│           │ elements to include at the monitored point.       │                                                 │
│           │ (Integer; optional)                               │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ CP        │ The identification number of a coordinate system  │                                                 │
│           │ in which the (x,y,z) coordinates are defined.     │                                                 │
│           │ (Integer ³ 0; Default=0)                          │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ X,Y,Z     │ The coordinates in the CP coordinate system about │                                                 │
│           │ which the forces are to be summed. (Real; Default │                                                 │
│           │ = 0.0).                                           │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ XFLAG     │ Exclusion flag. Exclude the indicated Grid Point  │                                                 │
│           │ Force types from summation at the monitor point.  │                                                 │
│           │ Default = blank (no type excluded). See Remark 4. │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ S                                                 │ SPCforces                                       │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ M                                                 │ MPC forces                                      │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ A, L, or P                                        │ applied loads                                   │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ D                                                 │ dmig’s (and any other type not described above) │
│           │                                                   │ at the monitored point.                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ C                                                 │ contact forces (SOL 400 only).                  │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ CD        │ The identification number of a coordinate system  │                                                 │
│           │ in which the results are output. (Integer>=0,     │                                                 │
│           │ Default = the coordinate system specified by the  │                                                 │
│           │ CP field.                                         │                                                 │
└───────────┴───────────────────────────────────────────────────┴─────────────────────────────────────────────────┘
```

#### Remarks:

1. The MONPNT3 is available for SOLs 101, 103, 108, 109, 111, 112, 144, 146, 200 and 400 (ANALYSIS = NLSTAT or NLTRAN). Note that MONPNT3 output to csv file is available only to SOL 144.
2. If ELEMSET is blank, no contributions are made from the set of elements attached to the grid.
3. Fictitious grids or elements do not produce error or warning messages.
4. For linear solution sequences, if the exclusion flags omit some grid point force types but not all of them (i.e; if the field is not blank and is not SMAD) then the following limitations exist:
     - The results for that MONPNT3 will not be exported to a CSV file, for SOL 144 only.
     - That MONPNT3 may not be used on a MONSUM, MONSUM1 or MONSUMT entry.
     - It is only available in SOLs 101, 103, 144 and SOL 200 (ANALYSIS = STATICS, MODES, or SAERO).
5. MONPNT3 can be useful in calculating shear, moment and torque from the internal loads in a structure. For example, if a split is made in a fuselage component and all the grids that reside on this split are placed in the GRIDSET, differing internal loads resultants can be obtained based on the ELEMSET and XFLAG values. If a cut is made in a structure, there are three types of loads:

     A - loads that come from the elements upstream of the cut.

     B - loads that are applied to the grids on the cut from any other source.

     C - loads that come from the elements downstream of the cut.

     Where A + B + C = 0

     Useful options for these two values are:

     - If the ELEMSET includes all the elements that connect to the GRIDSET that are on the upstream/outboard part of the split and the XFLAG value is blank then the internal load is calculated using the elements that connect to the GRIDSET that are NOT included in ELEMSET. The direction of this load is reversed. So actually -C will be calculated which matches A+B. This in effect gives the resultants on the downstream/inboard side of the split pointing into upstream/ outboard direction which will include any loads applied to the GRIDSET from any source.

     - If the ELEMSET includes all the elements that connect to the GRIDSET that are on the upstream/outboard part of the split and the XFLAG value is SMAD then the internal load is calculated using the elements listed in ELEMSET. In that case, A will be calculated. This in effect gives the resultants on the upstream/outboard side of the split and does not include loads applied to the GRIDSET from any other source.

6. For SOL 400 (ANALYSIS = NLSTAT or NLTRAN), the following limitations exist:
     - The results for that MONPNT3 will not be exported to a CSV file, for SOL 144 only.
     - That MONPNT3 may not be used on a MONSUM, MONSUM1 or MONSUMT entry.
     - Thermal loads are not supported.
7. For linear solution sequences with XFLAG= blank or SMAD, the program applies a mini-EMA (element matrix assembly) algorithm that bypasses GPFDR (grid point force data recovery) and another modules to improve performance. This algorithm forms a stiffness matrix that just includes those elements specified in MONPNT3 entries. The monitor point results are computed directly from multiplying this matrix by an integration matrix that transfers forces to the monitor points. These results may be slightly different from the GPFDR results, such as clean zero forces versus small residual forces.
