## [GENEL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.GENEL.xhtml) - General Element

Defines a general element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GENEL   EID             UI1     CI1     UI2     CI2     UI3     CI3     +       
+       UI4     CI4     UI5     CI5     -etc.-                                  
```

UIm -- The last item in the UI list will appear in one of fields 2, 4, 6, or 8.

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
“UD”    UD1     CD1     UD2     CD2     -etc.-
```

UDn -- The last item in the UD list will appear in one of fields 2, 4, 6, or 8.

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
“K”...  KZ11    KZ21    KZ31    -etc.-  KZ22    KZ32
-etc.-          KZ33    KZ43    -etc.-              
```

KZmm -- The last item in the K or Z matrix will appear in one of fields 2 through 9.

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
“S”     S11     S12     -etc.-  S21     -etc.-
```

Smn -- The last item in the S matrix will appear in one of fields 2 through 9.

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GENEL   629             1       1       13      4       42      0       +       
+       24      2                                                       +       
+       UD              6       2       33      0                       +       
+       Z       1.0     2.0     3.0     4.0     5.0     6.0     7.0     +       
+       8.0     9.0     10.0                                            +       
+       S       1.5     2.5     3.5     4.5     5.5     6.5     7.5     +       
+       8.5                                                                     
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Unique element identification number.  (Integer > 0)                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Uli, Cli  │ Identification numbers of degrees-of-freedom in the UI or UD list, in sequence corresponding to    │
│ UDj, CDj  │ the [K], [Z], and [S] matrices.  UIi and UDi are grid point numbers, and CIi and CDj are the       │
│           │ component numbers.  If a scalar point is given, the component number is zero.  (Integer > 0)       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ KZij      │ Values of the [K] or [Z] matrix ordered by columns from the diagonal, according to the UI list.    │
│           │  (Real)                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Sij       │ Values of the [S] matrix ordered by rows according to the UD list.  (Real)                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ Character strings that indicate the start of data belonging to the UD list or the [K], [Z], or [S] │
│           │ matrices.                                                                                          │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The stiffness approach:

     ![bulkfgil03874.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03874.jpg?_LANG=enus)  

     The flexibility approach:

     ![bulkfgil03876.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03876.jpg?_LANG=enus)  

     where

          See link for table

     The required input is the  ![bulkfgil03894.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03894.jpg?_LANG=enus)  list and the lower triangular portion of [ K ] or [ Z ].  Additional input may include the  ![bulkfgil03896.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03896.jpg?_LANG=enus)  list and [ S ].  If [ S ] is input,  ![bulkfgil03898.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03898.jpg?_LANG=enus)  must also be input.  If  ![bulkfgil03900.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03900.jpg?_LANG=enus)  is input but [ S ] is omitted, [ S ] is internally calculated.  In this case,  ![bulkfgil03902.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03902.jpg?_LANG=enus)  must contain six and only six degrees-of-freedom.

     The forms shown above for both the stiffness and flexibility approaches assume that the element is a free body with rigid body motions that are defined by  ![bulkfgil03904.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03904.jpg?_LANG=enus) .  See  General Element Capability (GENEL)  (Ch. 3) in the   MSC Nastran Reference Guide  for further discussion.

2. When the stiffness matrix K is input, the number of significant digits should be the same for all terms.

3. Double-field format may be used for input of K or Z.

4. The DMIG entry or the INPUTT4 module offer alternative methods for inputting large matrices.

5. The general element entry in the example above defines the following:

     ![bulkfgil03906.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03906.jpg?_LANG=enus)  

     ![bulkfgil03908.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03908.jpg?_LANG=enus)  

     where i-j means the j-th component of grid point i.  Points 42 and 33 are scalar points.

     ![bulkfgil03910.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03910.jpg?_LANG=enus)       ![bulkfgil03912.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03912.jpg?_LANG=enus)

