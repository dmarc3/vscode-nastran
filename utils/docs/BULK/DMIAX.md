## [DMIAX](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DMIAX.xhtml) - Direct Matrix Input for Axisymmetric Analysis

Defines axisymmetric (fluid or structure) related direct input matrix terms.

The matrix is defined by a single header entry and one or more column entries. Only one header entry is required.  A column entry is required for each column with nonzero elements.

#### Header Entry Format:

```text
┌───────┬──────┬─────┬─────┬─────┬──────┬───┬───┬───┬────┐
│ 1     │ 2    │ 3   │ 4   │ 5   │ 6    │ 7 │ 8 │ 9 │ 10 │
├───────┼──────┼─────┼─────┼─────┼──────┼───┼───┼───┼────┤
│ DMlAX │ NAME │ “0" │ IFO │ TIN │ TOUT │   │   │   │    │
└───────┴──────┴─────┴─────┴─────┴──────┴───┴───┴───┴────┘
```
#### Column Entry Format:

```text
┌───────┬──────┬────┬────┬────────┬────┐
│ DMlAX │ NAME │ GJ │ CJ │ NJ     │    │
├───────┼──────┼────┼────┼────────┼────┤
│       │ G1   │ C1 │ N1 │ A1     │ B1 │
├───────┼──────┼────┼────┼────────┼────┤
│       │ G2   │ C2 │    │ -etc.- │    │
└───────┴──────┴────┴────┴────────┴────┘
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DMIAX   B2PP    0       1       3       4                                       
DMIAX   B2PP    32                                                              
        1027    3               4.25+6  2.27+3                                  
```
```text
┌───────────┬───────────────────────────────────────────────────┬────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ NAME      │ Name of the matrix. See Remark 2. (One to eight   │                                                │
│           │ alphanumeric characters, the first of which is    │                                                │
│           │ alphabetic.)                                      │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ IFO       │ Form of matrix: (Integer)                         │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 1                                                 │ Square matrix                                  │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 2                                                 │ General rectangular matrix                     │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 6                                                 │ Symmetric matrix                               │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ TIN       │ Type of matrix being input: (Integer)             │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 1                                                 │ Real, single precision (One field is used per  │
│           │                                                   │ element.)                                      │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 3                                                 │ Complex, single precision (Two fields are used │
│           │                                                   │ per element.)                                  │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ TOUT      │ Type of matrix that will be created:  (Integer)   │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 1                                                 │ Real, single precision                         │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 2                                                 │ Real, double precision                         │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 3                                                 │ Complex, single precision                      │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ 4                                                 │ Complex, double precision                      │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ GJ, Gi    │ Grid, scalar, RINGFL fluid point, PRESPT pressure │                                                │
│           │ point, FREEPT free surface displacement, or extra │                                                │
│           │ point identification number.  (Integer > 0)       │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ CJ, Ci    │ Component number for GJ or Gi grid point          │                                                │
│           │ (0 < Integer < 6; Blank or zero if GJ or Gi is a  │                                                │
│           │ scalar, fluid, or extra point.)                   │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ NJ, Ni    │ Harmonic number of RINGFL point.  Must be blank   │                                                │
│           │ if a point type other than RINGFL is used.  A     │                                                │
│           │ negative number implies the “sine” series; a      │                                                │
│           │ positive number implies the “cosine” series.      │                                                │
│           │  (Integer)                                        │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ Ai, Bi    │ Real and imaginary parts of matrix element; row   │                                                │
│           │ (Gi, Ci, Ni) column (GJ, CJ, NJ).  If the matrix  │                                                │
│           │ is real (TIN = 1), then Bi must be blank.         │                                                │
└───────────┴───────────────────────────────────────────────────┴────────────────────────────────────────────────┘
```
Remarks:

1. This entry is allowed only if an AXIF entry is also present.

2. Matrices defined on this entry may be used in dynamics by selection with the Case Control commands K2PP = NAME, B2PP = NAME, or M2PP = NAME for  ![bulkde03236.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03236.jpg?_LANG=enus) ,  ![bulkde03238.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03238.jpg?_LANG=enus) , or  ![bulkde03240.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03240.jpg?_LANG=enus) , respectively. See   in the  MSC Nastran Reference Guide .

3. Field 3 or the header entry must contain an integer 0.

4. For symmetric matrices, either the upper or the lower triangle terms may be specified, but not both.

5. Only nonzero terms need be entered.

6. If any DMIAX entry is changed or added on restart then a complete re-analysis may be performed. Therefore, DMIAX entry changes or additions are not recommended on restart.

