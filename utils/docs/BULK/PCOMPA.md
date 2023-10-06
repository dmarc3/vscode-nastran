## [PCOMPA](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PCOMPA.xhtml) - Additional Data for Layered Composite Element Property - SOL 700

Defines additional properties of a multi-ply laminate composite material. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCOMPA  PID     FORM    SHFACT  REF     STRDEF  DT1D    STRNOUT CLT     +       
+       SPINCOR                                                                 
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCOMPA  1       BLT                                             1       +       
+       YES                                                                     
```

```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PID       │ Unique property number referring to a PCOMP       │                                                   │
│           │ property number. (Integer > 0; Required)          │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ FORM      │ Element formulation. (Character; See Remark 1.)   │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SHFACT    │ Shear correction factor, see Remark 4. (Real ≥    │                                                   │
│           │ 0.0; default=0.83333)                             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ REF       │ Reference surface. (Character; default=MID)       │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ TOP                                               │ Reference surface is the top of the surface.      │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ MID                                               │ Reference surface is the central surface.         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ BOT                                               │ Reference surface is the bottom surface.          │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ STRDEF    │ Definition in stress-strain output. (Character;   │                                                   │
│           │ default=FIBER)                                    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ FIBER                                             │ Stresses defined in the fiber and matrix          │
│           │                                                   │ directions.                                       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ ELEM                                              │ Stresses defined in the element coordinate system │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ DT1D      │ Time step skip for one-dimensional failure modes. │                                                   │
│           │ See Remark 2. (Character; default=NO)             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ YES                                               │ Skip one-dimensional failure modes.               │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ NO                                                │ Normal time-step calculation.                     │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ STRNOUT   │ Strain output option. See Remarks 3. and 4.       │                                                   │
│           │ (Character; default=YES)                          │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ YES                                               │ Total strain is calculated.                       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ NO                                                │ No strain is stored in memory.                    │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ ICLT      │ Option to use Classical Lamination Theory. See    │                                                   │
│           │ Remark 4. (Integer > 0; default=0)                │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 1                                                 │ Use the Classical Lamination Theory.              │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 0                                                 │ Use the integration technique.                    │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SPINCOR   │ Spin correction. See Remark 4. (Character;        │                                                   │
│           │ default=NO)                                       │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ NO                                                │ No SPINCOR applied                                │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ YES                                               │ SPINCOR applied                                   │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. For CQUAD4 elements, the default formulation is Key-Hoff. For CTRIA3 elements, the default formulation is C0-TRIA.
2. If the failure mode is such that fiber and shear strength or matrix and shear strength are lost in all layers, the element is not included in the time-step calculation. If the element fails completely, the element is omitted from the time-step calculations, irrespective of the value entered in this field.
3. If the STRNOUT field is NO, the strain cannot be output.
4. If ICLT is set to 1, the analysis is performed with classical lamination theory. In this case, it is not possible to request the total strain output. The (transverse) shear correction factor input is ignored since it is calculated inside Nastran. There is no update of the cross-sectional properties due to failure. The failure flag only indicates that the failure condition is satisfied. Additional output for element variables is available, namely the stress resultants (NXX, NYY, NXY, MXX, MYY, MXY, QYZ, and QZX). Also the ABD-Q matrices of each element can be requested for output. These data are only stored in the first layer. The variable names are AijM, BijM, DijM, and QsijM for the components of the A-, B-, D- and Q-matrices, respectively. For example, to request the A11 of the A-matrix, the variable name is A11M01.
5. The options for SPINCOR are:

     ```text
     ┌─────┬───────────────────────────────────┐
     │ NO  │ No SPINCOR correction is applied. │
     ├─────┼───────────────────────────────────┤
     │ YES │ A SPINCOR correction is applied.  │
     └─────┴───────────────────────────────────┘
     ```

     When SPINCOR = NO, slight asymmetric forces are applied to the shell element’s grid points. This approach is, in general, acceptable up to about 10° in plane shear angle.

     The SPINCOR option is required for fabric models and is turned on by default to accurately keep track of the fiber directions.

