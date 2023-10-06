## [TF](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TF.xhtml) - Dynamic Transfer Function

Defines a dynamic transfer function of the form

(0-28) ![bulktuv08027.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/../../../assets/bulktuv08027.jpg?_LANG=enus)

Where:

```text
┌────┬───┬───────────────────────────────┐
│ Ud │ = │ dependent coordinate          │
├────┼───┼───────────────────────────────┤
│ Ui │ = │ independent degree of freedon │
├────┼───┼───────────────────────────────┤
│ p  │ = │ differential operator (p=d/dt │
└────┴───┴───────────────────────────────┘
```

Can also be used as a means of direct matrix input.  See Remark  4.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TF      SID     GD      CD      B0      B1      B2                      +       
+       G(1)    C(1)    A0(1)   A1(1)   A2(1)   -etc.-                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TF      1       2       3       4.0     5.0     6.0                             
        3       4       5.0     6.0     7.0                                     
```

```text
┌──────────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                          │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID          │ Set identification number.  (Integer > 0)                                                        │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GD, G(i)     │ Grid, scalar, or extra point identification numbers.  (Integer > 0)                              │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CD, C(i)     │ Component numbers.  (Integer zero or blank for scalar or extra points, any one of the Integers 1 │
│              │ through 6 for a grid point.)                                                                     │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ B0, B1, B2   │ Transfer function coefficients.  (Real)                                                          │
│ A0(i),       │                                                                                                  │
│ A1(i), A2(i) │                                                                                                  │
└──────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
