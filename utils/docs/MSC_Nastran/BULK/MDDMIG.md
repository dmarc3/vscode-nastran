## [MDDMIG](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDDMIG.xhtml) - Direct Matrix Input at Points Defined in Two or More Modules

Defines direct input matrices related to grid, extra, and/or scalar points defined in two or more Modules. The matrix is defined by a single header entry and one or more column entries. A column entry is required for each column with nonzero elements.

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDDMIG  NAME    “0”     IFO     TIN     TOUT    POLAR           NCOL            
```

#### Header Entry Format:

#### Column Entry Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDDMIG  NAME    MODJ    GJ      CJ                                      +       
+               MOD1    G1      C1      A1      B1                      +       
+               MOD2    G2      C2      A2      B2      -etc.-                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDDMIG  STIF    0       1       3       4                                       
MDDMIG  STIF    11      27      1                                               
                20      2       3       3.+5    3+3                             
                20      2       4       2.5+10  0.                              
                45      50              1.0     0.                              
```

```text
┌───────────┬───────────────────────────────────────────────────┬────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ NAME      │ Name of the matrix. See Remark 1 under DMIG. (One │                                                │
│           │ to eight alphanumeric characters, the first of    │                                                │
│           │ which is alphabetic.)                             │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ IFO       │ Form of matrix input. IFO = 6 must be specified   │                                                │
│           │ for matrices selected by the K2GG, M2GG, and B2GG │                                                │
│           │ Case Control commands. (Integer)                  │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 1                                                 │ Square                                         │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 2 or 9                                            │ Rectangular                                    │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 6                                                 │ Symmetric                                      │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ TIN       │ Type of matrix being input: (Integer)             │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 1                                                 │ Real, single precision (One field is used per  │
│           │                                                   │ element.)                                      │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 2                                                 │ Real, double precision (One field is used per  │
│           │                                                   │ element.)                                      │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 3                                                 │ Complex, single precision (Two fields are used │
│           │                                                   │ per element.)                                  │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 4                                                 │ Complex, double precision (Two fields are used │
│           │                                                   │ per element.)                                  │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ TOUT      │ Type of matrix that will be created:  (Integer)   │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 0                                                 │ Set by precision system cell (Default)         │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 1                                                 │ Real, single precision                         │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 2                                                 │ Real, double precision                         │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 3                                                 │ Complex, single precision                      │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 4                                                 │ Complex, double precision                      │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ POLAR     │ Input format of Ai, Bi.  (Integer=blank or 0      │                                                │
│           │ indicates real, imaginary format; Integer > 0     │                                                │
│           │ indicates amplitude, phase format.)               │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ NCOL      │ Number of columns in a rectangular matrix.  Used  │                                                │
│           │ only for IFO = 9. See Remarks 5 and 6 under DMIG. │                                                │
│           │ (Integer > 0)                                     │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ MODJ      │ Module IDs that contain the GRID entry for GJ.    │                                                │
│           │ (Integer ≥ 0).                                    │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ GJ        │ Grid, scalar or extra point identification number │                                                │
│           │ in Module MODJ for column index.  (Integer > 0)   │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ CJ        │ Component number for grid point GJ.  (0 < Integer │                                                │
│           │ < 6; blank or zero if GJ is a scalar or extra     │                                                │
│           │ point.)                                           │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ MODi      │ Module IDs that contain the GRID entry for Gi.    │                                                │
│           │ (Integer ≥ 0).                                    │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ Gi        │ Grid, scalar, or extra point identification       │                                                │
│           │ number in Module MODi for row index.  (Integer >  │                                                │
│           │ 0)                                                │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ Ci        │ Component number for Gi for a grid point.  (0 <   │                                                │
│           │ CJ < 6; blank or zero if Gi is a scalar or extra  │                                                │
│           │ point.)                                           │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ Ai, Bi    │ Real and imaginary (or amplitude and phase) parts │                                                │
│           │ of a matrix element.  If the matrix is real (TIN  │                                                │
│           │ = 1 or 2), then Bi must be blank.  (Real)         │                                                │
└───────────┴───────────────────────────────────────────────────┴────────────────────────────────────────────────┘
```

#### Remarks:

1. The MDDMIG entry must be defined in the main Bulk Data section only (Module 0).
2. See all remarks and figures under the DMIG entry description.   All remarks and figures under DMIG apply to MDDMIG.
3. When IFO=2 or 9, MODJ indicates the column number and not a module ID.   GJ and CJ are ignored.
