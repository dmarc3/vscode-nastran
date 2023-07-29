## [DMIJI](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DMIJI.xhtml) - Direct Matrix Input at js-Set of the Interference Body

Defines direct input matrices related to collation degrees-of-freedom (js-set) of aerodynamic mesh points for the interference elements of CAERO2. These include W2GJ, FA2J and input pressures and downwashes associated with AEPRESS and AEDW entries. The matrix is described by a single header entry and one or more column entries. A column entry is required for each column with nonzero elements. For entering data for the slender elements of a CAERO2, or a CAERO1, 3, 4 or 5 use DMIJ or DMI.

#### Header Entry Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DMIJI   NAME    “0”     IFO     TIN     TOUT    POLAR           NCOL            
```

#### Column Entry Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DMIJ    NAME    GJ      CJ              G1      C1      A1      B1      +
+       G2      C2      A2      B2      -etc.-                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DMIJI   ALPH1   0       9       2       0                       1               
DMIJI   ALPH1   1       1               1       1       .1                      
        2       1       .1                                                      
```

```text
┌───────────┬───────────────────────────────────────────────────┬────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ NAME      │ Name of the matrix. See Remark 1. (One to eight   │                                                │
│           │ alphanumeric characters, the first of which is    │                                                │
│           │ alphabetic.)                                      │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ IFO       │ Form of matrix being input. (Integer)             │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 1                                                 │ Square                                         │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 9 or 2                                            │ Rectangular                                    │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 6                                                 │ Symmetric                                      │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ TIN       │ Type of matrix being input: (Integer)             │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 1                                                 │ Real, single precision (One field is used per  │
│           │                                                   │ element)                                       │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 2                                                 │ Real, double precision (One field is used per  │
│           │                                                   │ element)                                       │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 3                                                 │ Complex, single precision (Two fields are used │
│           │                                                   │ per element)                                   │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 4                                                 │ Complex, double precision (Two fields are used │
│           │                                                   │ per element)                                   │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ TOUT      │ Type of matrix being created: (Integer)           │                                                │
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
│ POLAR     │ Input format of Ai, Bi. (Integer = blank or 0     │                                                │
│           │ indicates real, imaginary format. Integer > 0     │                                                │
│           │ indicated magnitude, phase format.)               │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ NCOL      │ Number of columns in a rectangular matrix. Used   │                                                │
│           │ only for IFO = 9. (Integer > 0)                   │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ GJ        │ Grid, scalar or extra point identification number │                                                │
│           │ for column index. (Integer > 0)                   │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ CJ        │ Component number for grid point GJ.               │                                                │
│           │ (0 < Integer < 6; blank or zero if GJ is a scalar │                                                │
│           │ or extra point.)                                  │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ Gi        │ Grid, scalar, or extra point identification       │                                                │
│           │ number for row index.  (Integer > 0)              │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ Ci        │ Component number for Gi for a grid point. (0 < CJ │                                                │
│           │ < 6; blank or zero if Gi is a scalar or extra     │                                                │
│           │ point.)                                           │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ Ai, Bi    │ Real and imaginary (or amplitude and phase) parts │                                                │
│           │ of a matrix element. If the matrix is real        │                                                │
│           │ (TIN = 1 or 2), then Bi must be blank. (Real)     │                                                │
└───────────┴───────────────────────────────────────────────────┴────────────────────────────────────────────────┘
```

#### Remarks:

1. Matrices defined on this entry are referenced in static aeroelastic analysis by reference on AEDW and/or AEPRESS entries. In that paradigm, a single column is required. DMI may NOT be used for AEDW and AEPRESS.
2. The js-set DOF’s for each aerodynamic theory are limited to the six-DOF paradigm (3 translations and 3 rotations). However, particular DOF’s are permanently SPC’d based on the theory’s ability to support those degrees-of-freedom. Unlike the DMIG entry, DMIJI data will be partitioned to the j-set, not reduced. No warnings are issued about truncated data. The j-set DOF’s for each aerodynamic element/grid are highly method dependent. The following data define the known set, but the j-set definition is somewhat arbitrary in the general (external aerodynamics) paradigm.

```text
┌────────────┬──────┬───┐
│ Entry Type │ COMP │   │
├────────────┼──────┼───┤
│ 1          │ 2    │ 3 │
├────────────┼──────┼───┤
│ CAERO2-Y   │      │ X │
├────────────┼──────┼───┤
│ CAERO2-Z   │      │   │
├────────────┼──────┼───┤
│ CAERO2-ZY  │      │ X │
└────────────┴──────┴───┘
```

3. The header entry containing IFO, TIN and TOUT is required. Each nonnull column is started with a GJ, CJ pair. The entries for each row of that column then follow. Only nonzero terms need be entered. The terms may be input in arbitrary order. A GJ, CJ pair may be entered more than once, but the input of an element of the matrix more than once results in a fatal message.
4. Field 3 of the header entry must contain an integer 0.
5. For symmetric matrices (very rare in the j-set!) (IFO=6), a given off-diagonal element may be input either below or above the diagonal. While upper and lower triangle terms may be mixed, a fatal message will be issued if an element is input both above and below the diagonal.
6. The recommended format for rectangular matrices requires the use of NCOL and IFO = 9. the number of columns in the matrix is NCOL. (The number of rows in all  DMIJI  matrices is always the js-set size--the union of the j-set and the permanently SPC’d partition). The GJ term is used for the column index. the CJ term is ignored.
7. If NCOL is not used for rectangular matrices, two different conventions are available:
     - If IFO = 9, GJ and CJ will determine the sorted sequence, but will otherwise be ignored; a rectangular matrix will be generated with the columns submitted being in the 1 to N positions, where N is the number of logical entries submitted (not counting the header entry).
     - If IFO = 2, the number of columns of the rectangular matrix will be equal to the index of the highest numbered nonnull column (in internal sort). Trailing null columns of the js-size matrix will be truncated.
8. The matrix names must be unique among all DMIJI.
9. TIN should be consistent with the number of decimal digits required to read the input data adequately. For a single precision specification on a short word machine, the input will be truncated after about eight decimal digits, even when more digits are present in a double field format. If more digits are needed, a double precision specification should be used instead. However, not that a double precision specification requires a “D” type exponent even for terms that do not need an exponent. For example, unity may be input as 1.0 in single precision, but the longer form 1.0D0 is required for double precision.
10. On long word machines, almost all matrix calculations are performed in single precision and, on short word machines, in double precision. It is recommended that DMIJ matrices also follow these conventions for a balance of efficiency and reliability. The recommended value for TOUT is 0, which instructs the program to inspect the system cell that measures the machine precision at run time and sets the precision of the matrix to the same value. TOUT = 0 allows the same  DMIJI  input to be used on any machine. If TOUT is contrary to the machine type specified, unreliable results may occur.
11. If any DMIJ entry is changed or added on restart then a complete reanalysis is performed. Therefore, DMIJ entry changes or additions are not recommended on restart.
