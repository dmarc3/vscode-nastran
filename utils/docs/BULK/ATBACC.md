## [ATBACC](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ATBACC.xhtml) - Acceleration Field applied to ATB Segments- SOL 700

Defines an acceleration field that will be applied to ATB segments. Used in SOL700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ATBACC  LID             SCALE   NX      NY      NZ                      +       
+       NAME1   NAME2   NAME3   NAME4   NAME5   NAME6   NAME7   NAMEi           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ATBACC  32              386.088 1.0     0.0     0.0     0       0       +       
+       LT      MT      UT      N       H       RUL     RLL                     
```

```text
┌────────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                       │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ LID        │ Number of a set of loads. (Integer > 0; required)                                             │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ SCALE      │ ATBACC scale factor. (Real ≥ 0.0; default=1.0)                                                │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ NX, NY, NZ │ Components of gravity vector. At least one component must be nonzero. (Real; default=0.0)     │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ NAMEi      │ Name of an ATB segment as given in the first field of a B.2 entry in the ATB input file.      │
│            │ (Character; required)                                                                         │
└────────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The acceleration is defined as:

     ![bulkab02079.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02079.jpg?_LANG=enus)  

     where SCALE is the acceleration scale factor; is the vector defined by NX, NY, and NZ; is the value interpolated at time from the table referenced by the TLOADn entry.

2. LID must be referenced by a TLOADn entry.
3. The type field on the TLOADn entry must be set to zero.
4. More than one ATBACC acceleration field can be defined per problem.
5. This acceleration field is intended to apply a crash pulse to ATB segments that define a crash dummy. The acceleration is multiplied by the mass of the segment and the resulting force is added as an external force.
6. To compare the accelerations of the ATB segments to experiments, the crash pulse needs to be subtracted from the total acceleration. The acceleration of the segments as defined on the H1 entries in the ATB input file are automatically corrected.
