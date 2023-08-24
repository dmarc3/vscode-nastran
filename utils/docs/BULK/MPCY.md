## [MPCY](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MPCY.xhtml) - Non Homogenous Multipoint Constraint

Defines a multipoint constraint equation of the form

![bulkno06058.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06058.jpg?_LANG=enus)  

where  ![bulkno06060.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06060.jpg?_LANG=enus)  represents degree-of-freedom  ![bulkno06062.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06062.jpg?_LANG=enus)  at grid or scalar point  ![bulkno06064.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06064.jpg?_LANG=enus)  defined to be the dependent degree-of-freedom.  ![bulkno06066.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06066.jpg?_LANG=enus)  represents degree-of-freedom  ![bulkno06068.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06068.jpg?_LANG=enus)  at grid or scalar point  ![bulkno06070.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06070.jpg?_LANG=enus)  defined to be the independent degree-of-freedom.  ![bulkno06072.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06072.jpg?_LANG=enus)  is a value for the equation.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MPCY    SID     GM      CM      AM      YM                              +       
+               G1      C1      A1      G2      C2      A2              +       
+               G3      C3      A3      ...                              

```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MPCY    70      205     1       1.0     .02-3                                   

                1608    1       1.2                                             
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Set identification number of a multi-point constraint set.  (Integer > 0)                       │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GM        │ Identification number of grid or scalar point. (Integer > 0)                                    │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Cj        │ Component number. (Any one of the Integers 1 through 6 for grid points; blank, zero or 1 for    │
│           │ scalar points.)                                                                                 │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AM        │ Coefficient. (Real nonzero value)                                                               │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ YM        │ Right hand side value. (Real; Default = 0.0)                                                    │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Identification number of grid or scalar point. (Integer > 0)                                    │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component number. (Any one of the Integers 1 through 6 for grid point; blank or zero for scalar │
│           │ points.)                                                                                        │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ai        │ Coefficient. (Real; Default = 0.0)                                                              │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Multipoint constraint sets must be selected with Case Control command, MPC=SID.
2. The m-set degree-of-freedom specified on this entry may not be specified on other entries that define mutually exclusive sets. The GM term is an equation marker. If PARAM,AUTOMSET,YES is on Nastran may choose internally another Gi as the actual dependent degree-of-freedom.
3. MPCY is not supported in SOL 400
