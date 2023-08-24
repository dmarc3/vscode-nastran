## [MPC (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.MPC.Case.xhtml) - Multipoint Constraint Set Selection

Selects a multipoint constraint set.

#### Format:

```nastran
MPC = n
```

#### Example:

```nastran
MPC=17
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a multipoint constraint set. This set identification number must │
│           │ appear on at least one MPC or MPCADD Bulk Data entry (Integer > 0).                           │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. In cyclic symmetry analysis, this command must appear above the first subcase command.
2. Multiple boundary conditions (MPC sets) are not allowed in superelement analysis. If more than one MPC set is specified per superelement (including the residual), then the second and subsequent sets will be ignored.
3. In addition to select MPC/MPCADD bulk data entries, MPC=n can also be used to select a group of rigid elements for the analysis via SET3,n bulk data entry with RBEin or RBEex in DES field of SET3 bulk data entry.
4. SET3,n is not needed if ALL rigid elements in the model are to be utilized.
5. Rigid element set section is supported in SOL 400 if 'RIGID=LINEAR' is present in case control deck.
