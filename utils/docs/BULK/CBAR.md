## [CBAR](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CBAR.xhtml) - Simple Beam Element Connection

Defines a simple beam element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBAR    EID     PID     GA      GB      X1      X2      X3      OFFT    +       
+       PA      PB      W1A     W2A     W3A     W1B     W2B     W3B             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBAR    2       39      7       3       0.6     18.     26.     GOG     +       
+               513                                                             
```

#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBAR    EID     PID     GA      GB      G0                      OFFT    +       
+       PA      PB      W1A     W2A     W3A     W1B     W2B     W3B             
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBAR    2       39      7       6       105                     GOG     +       
+               513                                                             
```

```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID        │ Unique element identification number.  (0 < Integer < 100,000,000)                                 │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID        │ Property identification number of a PBAR, PBARL or PBRSECT entry.  (Integer > 0 or blank*;         │
│            │ Default = EID unless BAROR entry has nonzero entry in field 3.)                                    │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GA, GB     │ Grid point identification numbers of connection points.  (Integer > 0; )                           │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X1, X2, X3 │ Components of orientation vector , from GA, in the displacement coordinate system at GA (Default), │
│            │ or in the basic coordinate system. See Remark 8. (Real)                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G0         │ Alternate method to supply the orientation vector  using grid point G0.  The direction of  is from │
│            │ GA to G0.  is then translated to End A.  (Integer > 0;  or GB)                                     │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OFFT       │ Offset vector interpretation flag. (character or blank) See Remark 8.                              │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PA, PB     │ Pin flags for bar ends A and B, respectively.  Used to remove connections between the grid point   │
│            │ and selected degrees-of-freedom of the bar.  The degrees-of-freedom are defined in the element’s   │
│            │ coordinate system (see Figure 9-10).  The bar must have stiffness associated with the PA and PB    │
│            │ degrees-of-freedom to be released by the pin flags.  For example, if PA = 4 is specified, the PBAR │
│            │ entry must have a value for J, the torsional stiffness.  (Up to 5 of the unique Integers 1 through │
│            │ 6 anywhere in the field with no embedded blanks; Integer > 0.) Pin flags are not allowed in SOL    │
│            │ 700.                                                                                               │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│            │ Components of offset vectors  and , respectively (see Figure 9-10) in displacement coordinate      │
│            │ systems (or in element system depending upon the content of the OFFT field), at points GA and GB,  │
│            │ respectively.  See Remark 7. and 8. (Real; Default = 0.0) Offsets are not allowed in SOL 700.      │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ *See the BAROR entry for default options for field 3 and fields 6 through 9. │
└──────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Element identification numbers should be unique with respect to all   other element identification numbers.
2.  and   define bar element geometry with and without offsets:

![bulkc102396.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102396.jpg?_LANG=enus)

Figure 9-10 CBAR Element Geometry with Offsets

![bulkc102398.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102398.jpg?_LANG=enus)

Figure 9-11 CBAR Element Geometry without Offsets

3.  and   define the elemental force and moment sign convention.

![bulkc102400.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102400.jpg?_LANG=enus)

Figure 9-12 CBAR Element Internal Forces and Moments (x-y Plane)

![bulkc102402.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102402.jpg?_LANG=enus)

Figure 9-13 CBAR Element Internal Forces and Moments (x-z Plane)

4. The continuation may be omitted if there are no pin flags or offsets.
5. For the case where field 9 is blank and not provided by the BAROR entry, if an integer is specified in field 6, then G0 is used; if field 6 is blank or real, then X1, X2, X3 is used.
6. See   in the  MSC Nastran Reference Guide  for a definition of coordinate system terminology.
7. Offset vectors are treated internally like rigid elements. For solution sequences that require differential stiffness such as SOL103 (with preloading), SOL105, and SOL400, the user is required to use MDLPRM, OFFDEF, LROFF.
     - Two methods are available for the computation of offsets: original and enhanced. The default method is the original method. The enhanced method is requested by the Bulk Data entry MDLPRM,OFFDEF,LROFF. For options of offsets, please refer to the Bulk Data entry MDLPRM,OFFDEF,option.
     - The length of offset vectors is not affected by thermal loads. But the thermal load changes due to location changes by offsets are correctly computed if the enhanced method is used.
     - BAR elements with offsets will give correct buckling results if the enhanced method is used.
     - Masses are correctly transformed for offset effects if MDLPRM, OFFDEF, LROFF is used. In SOL103, if the case control ADAMSMNF FLEXBODY=YES or AVLEXB EXBBODY=YES is present, then MDLPRM, OFFDEF, LROFF must be replaced by MDLPRM, OFFDEF, NOMASS.
     - In nonlinear solution sequences, such as SOL 106 or SOL 400, BAR is treated as linear element. If geometric nonlinear effects are required, please use Bulk Data entry MDLPRM,BRTOBM,1 to convert BAR to BEAM.
8. OFFT is a character string code that describes how the offset and orientation vector components are to be interpreted. By default (string input is GGG or blank), the offset vectors are measured in the displacement coordinate systems at grid points A and B and the orientation vector is measured in the displacement coordinate system of grid point A. At user option, the offset vectors can be measured in an offset coordinate system relative to grid points A and B, and the orientation vector can be measured in the basic system as indicated in the following table:

        See link for table.

9. For SOL 700, the OFFT field is ignored and a warning is issued.
