## [DMIG](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DMIG.xhtml) - Direct Matrix Input at Points

Defines direct input matrices related to grid, extra, and/or scalar points. The matrix is defined by a single header entry and one or more column entries. A column entry is required for each column with nonzero elements.

#### Header Entry Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DMIG    NAME    "0"     IFO     TIN     TOUT    POLAR           NCOL            
```

#### Column Entry Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DMIG    NAME    GJ      CJ              G1      C1      A1      B1      +       
+       G2      C2      A2      B2      -etc.-                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DMIG    STIF    0       1       3       4                                       
DMIG    STIF    27      1               2       3       3.+5    3.+3            
        2       4       2.5+10  0.      50              1.0     0.              
```

```text
┌───────────┬───────────────────────────────────────────────────┬────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ NAME      │ Name of the matrix. See Remark 1. (One to eight   │                                                │
│           │ alphanumeric characters, the first of which is    │                                                │
│           │ alphabetic.)                                      │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ IFO       │ Form of matrix input. IFO = 6 must be specified   │                                                │
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
│           │                                                   │ per element.                                   │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ TOUT      │ Type of matrix that will be created: (Integer)    │                                                │
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
│           │ indicates real, imaginary format; Integer > 0     │                                                │
│           │ indicates amplitude, phase format.)               │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ NCOL      │ Number of columns in a rectangular matrix. Used   │                                                │
│           │ only for IFO = 9. See Remarks 5. and 6.           │                                                │
│           │ (Integer > 0)                                     │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ GJ        │ Grid, scalar or extra point identification number │                                                │
│           │ for column index. (Integer > 0)                   │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ CJ        │ Component number for grid point GJ.               │                                                │
│           │ (0 < Integer < 6; blank or zero if GJ is a scalar │                                                │
│           │ or extra point.)                                  │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ Gi        │ Grid, scalar, or extra point identification       │                                                │
│           │ number for row index. (Integer > 0)               │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ Ci        │ Component number for Gi for a grid point. (0 < CJ │                                                │
│           │ < 6; blank or zero if Gi is a scalar or extra     │                                                │
│           │ point.)                                           │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ Ai, Bi    │ Real and imaginary (or amplitude and phase) parts │                                                │
│           │ of a matrix element. If the matrix is real        │                                                │
│           │ (TIN = 1 or 2), then Bi must be blank. See        │                                                │
│           │ Remarks 11. (Real)                                │                                                │
└───────────┴───────────────────────────────────────────────────┴────────────────────────────────────────────────┘
```

#### Remarks:

1. Matrices defined on this entry may be used in dynamics by selection in the Case Control with K2PP    = NAME, B2PP    =    NAME, M2PP =    NAME for  ![bulkde03242.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03242.jpg?_LANG=enus) ,  ![bulkde03244.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03244.jpg?_LANG=enus) , or  ![bulkde03246.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03246.jpg?_LANG=enus) , respectively.  Matrices may also be selected for all solution sequences by K2GG = NAME, B2GG = NAME, and M2GG = NAME.  The g-set matrices are added to the structural matrices before constraints are applied, while p-set matrices are added in dynamics after constraints are applied.  Load matrices may be selected by P2G = NAME for dynamic and superelement analyses.
2. The header entry containing IFO, TIN and TOUT is required. Each nonnull column is started with a GJ, CJ pair.  The entries for each row of that column follows.  Only nonzero terms need be entered.  The terms may be input in arbitrary order. A GJ, CJ pair may be entered more than once, but input of an element of the matrix more than once will produce a fatal message.
3. Field 3 of the header entry must contain an integer 0.
4. For symmetric matrices (IFO    =    6), a given off-diagonal element may be input either below or above the diagonal. While upper and lower triangle terms may be mixed, a fatal message will be issued if an element is input both below and above the diagonal.
5. The recommended format for rectangular matrices requires the use of NCOL and IFO    =    9. The number of columns in the matrix is NCOL. (The number of rows in all DMIG matrices is always either p-set or g-set size, depending on the context.) The GJ term is used for the column index. The CJ term is ignored.
6. If NCOL is not used for rectangular matrices, two different conventions are available:
     - If IFO    =    9, GJ and CJ will determine the sorted sequence, but will otherwise be ignored; a rectangular matrix will be generated with the columns submitted being in the 1 to N positions, where N is the number of logical entries submitted (not counting the header entry).
     - If IFO    =    2, the number of columns of the rectangular matrix will be equal to the index of the highest numbered non-null column (in internal sort). Trailing null columns of the g- or p-size matrix will be truncated.
7. The matrix names must be unique among all DMIGs.
8. TIN should be set consistent with the number of decimal digits required to read the input data adequately. For a single-precision specification on a short-word machine, the input will be truncated after about eight decimal digits, even when more digits are present in a double-field format. If more digits are needed, a double precision specification should be used instead. However, note that a double precision specification requires a “D” type exponent even for terms that do not need an exponent. For example, unity may be input as 1.0 in single precision, but the longer form 1.0D0 is required for double precision.
9. On long-word machines, almost all matrix calculations are performed in single precision and on short-word machines, in double precision. It is recommended that DMIG matrices also follow these conventions for a balance of efficiency and reliability. The recommended value for TOUT is 0, which instructs the program to inspect the system cell that measures the machine precision at run time and sets the precision of the matrix to the same value. TOUT = 0 allows the same DMIG input to be used on any machine. If TOUT is contrary to the machine type specified (for example, a TOUT of 1 on a short-word machine), unreliable results may occur.
10. If any DMIG entry is changed or added on restart then a complete re-analysis is performed. Therefore, DMIG entry changes or additions are not recommended on restart.
11. The matrix at points is defined under the global coordinate system, which is the CD coordinate system defined on the grid point entries
