## [DMI](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DMI.xhtml) - Direct Matrix Input

Defines matrix data blocks.  Generates a matrix of the following form:

![bulkde03224.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03224.jpg?_LANG=enus)  

where the elements   ![bulkde03226.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03226.jpg?_LANG=enus)  may be real ![bulkde03228.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03228.jpg?_LANG=enus)  or complex  ![bulkde03230.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03230.jpg?_LANG=enus) . The matrix is defined by a single header entry and one or more column entries. Only one header entry is required. A column entry is required for each column with nonzero elements.

#### Header Entry Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DMI     NAME    “0”     FORM    TIN     TOUT            M       N               
```

#### Column Entry Format for Real Matrices:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DMI     NAME    J       I1      A(I1,J) A(I1+...        -etc.-  I2      +       
+       A(I2,J)         -etc.-                                                  
```

#### Column Entry Format for Complex Matrices:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DMI     NAME    J       I1      A(I1,J) B(I1,J) A(I1+...B(I1+...-etc.-  +       
+       I2      A(I2,J) B(I2,J) -etc.-                                          
```

#### Example of a Real Matrix:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DMI     BBB     0       2       1       1               4       2               
DMI     BBB     1       1       1.      3.      5.                              
DMI     BBB     2       2       6.      4       8.                              
```

![bulkde03232.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03232.jpg?_LANG=enus)  

#### Example of a Complex Matrix:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DMI     QQQ     0       2       3       3               4       2               
DMI     QQQ     1       1       1.0     2.0     3.0     0.0     3               
        5.0     6.0                                                             
DMI     QQQ     2       2       6.0     7.0     4       8.0     9.0             
```

![bulkde03234.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03234.jpg?_LANG=enus)

```text
┌──────────────┬───────────────────────────────────────────────────┬─────────────────────────────────────────────────┐
│ Describer    │ Meaning                                           │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ NAME         │ Name of the matrix. See Remark 1. Name is used to │                                                 │
│              │ reference the data block in the DMAP sequence.    │                                                 │
│              │ (One to eight alphanumeric characters, the first  │                                                 │
│              │ of which must be alphabetic.)                     │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ FORM         │ Form of matrix, as follows: (Integer)             │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│              │ 1                                                 │ Square matrix (not symmetric)                   │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│              │ 2                                                 │ General rectangular matrix                      │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│              │ 3                                                 │ Diagonal matrix (M=number of rows, N = 1)       │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│              │ 4                                                 │ Lower triangular factor                         │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│              │ 5                                                 │ Upper triangular factor                         │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│              │ 6                                                 │ Symmetric matrix                                │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│              │ 8                                                 │ Identity matrix (M=number of rows, N = M)       │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ TIN          │ Type of matrix being input, as follows: (Integer) │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│              │ 1                                                 │ Real, single precision (one field used/element) │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│              │ 2                                                 │ Real, double precision (one field used/element) │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│              │ 3                                                 │ Complex, single precision (two fields           │
│              │                                                   │ used/element)                                   │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│              │ 4                                                 │ Complex, double precision (two fields           │
│              │                                                   │ used/element)                                   │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ TOUT         │ Type of matrix being output, as follows:          │                                                 │
│              │  (Integer)                                        │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│              │ 0                                                 │ Set by precision cell                           │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│              │ 1                                                 │ Real, single precision                          │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│              │ 2                                                 │ Real, double precision                          │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│              │ 3                                                 │ Complex, single precision                       │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│              │ 4                                                 │ Complex, double precision                       │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ M            │ Number of rows in NAME. (Integer > 0)             │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ N            │ Number of columns in NAME. Except for FORM 3 and  │                                                 │
│              │ 8. (Integer > 0)                                  │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ "0"          │ Indicates the header entry.                       │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ J            │ Column number of NAME. (Integer > 0)              │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ I1, I2, etc. │ Row number of NAME, which indicates the beginning │                                                 │
│              │ of a group of nonzero elements in the column. See │                                                 │
│              │ Remark 13. (Integer > 0)                          │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ A(Ix,J)      │ Real part of element (see TIN). (Real)            │                                                 │
├──────────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ B(Ix,J)      │ Imaginary part of element (see TIN). (Real)       │                                                 │
└──────────────┴───────────────────────────────────────────────────┴─────────────────────────────────────────────────┘
```

#### Remarks:

1. In order to use the DMI feature, the user must write a DMAP, or make alterations to a solution sequence that includes the DMIIN module. See the  MSC Nastran DMAP Programmer’s Guide . All of the rules governing the use of data blocks in DMAP sequences apply.
2. The total number of DMIs and DTIs may not exceed 1000.
3. Field 3 of the header entry must contain an integer of zero (0).
4. For symmetric matrices, the entire matrix must be input.
5. Only nonzero terms need be entered.
6. Leading and trailing zeros in a column do not have to be entered. However, a blank field between nonzero fields on this entry is not equivalent to a zero. If a zero input is required, the appropriate type zero must be entered (i.e., 0.0 or 0.0D0).
7. Complex input must have both the real and imaginary parts entered if either part is nonzero; i.e., the zero component must be input explicitly.
8. If A(Ix,J) is followed by “THRU” in the next field and an integer row number “IX” after the THRU, then A(lx,J) will be repeated in each row through IX. The “THRU” must follow an element value.  For example, the entries for a real matrix RRR would appear as follows:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DMI     NAME    J       I1      A(I1,J)                 I1      A(I2,J)         
DMI     RRR     1       2       1.0     THRU    10      12      2.0             
```

These entries will cause the first column of the matrix RRR to have a zero in row 1, the values 1.0 in rows 2 through 10, a zero in row 11, and 2.0 in row 12.

9. Each column must be a single logical entry.  The terms in each column must be specified in increasing row number order.
10. The “FORM” options 4, 5, and 8 are nonstandard forms and may be used only in conjunction with the modules indicated in  .

        See link for table.

11. Form 3 matrices are converted to Form 6 matrices, which may be used by any module.
12. Form 7 matrices may not be defined on this entry.
13. I1 must be specified. I2, etc. are not required if their matrix elements follow the preceding element in the next row of the matrix. For example, in the column entry for column 1 of QQQ, neither I2 nor I3 is specified.
14. The DMIG entry is more convenient for matrices with rows and columns that are referenced by grid or scalar point degrees-of-freedom.
15. If Modules are present then this entry may only be specified in the main Bulk Data section.
