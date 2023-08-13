## [PSHEARN](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PSHEARN.xhtml) - Nonlinear Property Extensions for a PSHEAR Entry

Specifies nonlinear properties for elements that point to a PSHEAR entry in SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PSHEARN PID     MID                     ANAL                            +       
+       “C4”    BEH4    INT4                                                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PSHEARN 22      18                                                              
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of an existing PSHEAR entry. (Integer > 0)                         │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material identification number. Remark 9. (Integer > 0 or blank)                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ANAL      │ Analysis type. ANAL = ‘IS’ - Implicit structural elements are being referred to. (Character:      │
│           │ Default IS)                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C4        │ Keyword indicating that two items following apply to elements with four corner grids. (Character) │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BEH4      │ Element structural behavior. See Remark 5. (Character Default MB)                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INT4      │ Integration scheme. See Remarks 4. and 6. (Character Default L)                                   │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The PID must point to an existing PSHEAR Bulk Data entry and is honored only in SOL 400.
2. Only large membrane rotation is supported. Stringer effectiveness is ignored and only membrane action is considered.
3. MID if blank (or 0) use the MID value on the PSHEAR entry. If > 0 is will override the MID value on the PSHEAR.
4. The MID entry for nonlinear structures may point to the MAT entry. The following table shows associated nonlinear entries. The association is established through the material entries having the same values as the MID entry.

        Caution: The MATVE, MATVP, MATEP, MATF and MATSMA entries are only associated with a CSHEAR element if the CSHEAR element refers to a PSHEARN entry.

        See link for table.

5. BEH4 refers to the nonlinear structural behavior of the SHEAR element. An  underlined  item delineates default.

        See link for table.

6. Integration codes in Remark   are:

        See link for table.

7. For creep material defined through MATVP, VALC=0 must be set on NLMOPTS, for explicit formulation.
8. For shape memory materials defined through MATSMA, only the thermo-mechanical model is available.
9. The structural element damping coefficient, GE, is not supported on elements which reference PSHEARN.
