## [MAXIMUM DEFORM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/TOC.MAXIMUM.DEFORM.xhtml) - Length of Maximum Displacement

Defines the magnification of the maximum displacement. All other displacements are scaled accordingly.

#### Format:

```nastran
MAXIMUM DEFORMATION  d
```

#### Example:

Magnify the displacements such that the maximum displacement is equal to two units of length of the model.

```nastran
MAXI DEFO 2.
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ d         │ Specifies the length, in units of the model and not of the plot frame, to which the maximum    │
│           │ displacement is scaled. (Default = 5% of the largest dimension of the model represented by the │
│           │ elements in the SET specification on the PLOT command.)                                        │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If no MAXIMUM DEFORMATION command is specified, then the previously described default is assumed.

2. If you wish the FIND command to use the d value, a MAXIMUM DEFORMATION command should precede the FIND command.

3. If you wish the plot deformation scaling to be different then the FIND scaling, a different MAXIMUM DEFORMATION command can appear first before the PLOT command.

4. For nonlinear plotting, MAXIMUM DEFORMATION d and the MAXIMUM DEFORMATION field on the PLOT command should have the same value.

