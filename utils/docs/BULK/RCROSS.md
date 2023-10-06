## [RCROSS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RCROSS.xhtml) - Cross-Power Spectral Density and Cross-Correlation Functions Output

Defines a pair of response quantities for computing the cross-power spectral density and cross-correlation functions in random analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RCROSS  SID     RTYPE1  ID1     COMP1   RTYPE2  ID2     COMP2   CURID           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RCROSS  10      DISP    100     3       STRESS  200     10      2               
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Case Control RCROSS identification number for cross-power spectral density function and cross-     │
│           │ correlation function.  (Integer > 0)                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RTYPEi    │ Type of response quantity. At lease one field must be selected. See Remark 2. (Character or blank) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Element, grid or scalar point identification number. (Integer > 0)                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COMPi     │ Component code (item) identification number. See Remark 3. (Integer > 0)                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CURID     │ Curve identification number. See Remark 4. ( or blank)                                             │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry is required for computing the cross-power spectral density function and cross-correlation function. SID must be selected with the Case Control command (RCROSS = SID). Fields RTYPE1, ID1, and COMP1 represent the first response quantity, and fields RTYPE2, ID2, and COMP2 the second in the correlation.
2. The keywords for field RTYPEi are listed as follows:

          See link for table.

     If anyone of RTYPE1 or RTYPE2 is blank, then the default is the one same as the other field.

3. For elements, the item code COMPi represents a component of the element stress, strain, and force and is described in Tables   and  . For an item having both a real and imaginary part, the code of the real part must be selected. This is required for computing both the cross-power spectral density function and cross-correlation function.

     For grid point, the item code is one of 1, 2, 3, 4, 5, and 6, which represent the mnemonics T1, T2, T3, R1, R2, and R3, respectively. For scalar point, always use 1.

4. Field CURID is optional. It is for the user’s convenience to identify the output by using a single index.
