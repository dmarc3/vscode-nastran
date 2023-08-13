## [DESMOD (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.DESMOD.Case.xhtml) - Design Model Name

Assigns the design model parameter used to locate the associated datablocks for merging of two or more SOL 200 models using the MultiOpt application.

#### Format:

```nastran
DESMOD=name
```

#### Examples:

```nastran
DESMOD=FLUTTER
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────┤
│ Name      │ User-specified name to designate the model. (The first 8 characters must be unique) │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The name is an attribute of the datablocks that require merging across models in order to perform a simultaneous design.
2. The parameter is only used with MultiOpt, that merges simultaneous models.
3. A unique value of DESMOD is needed for each model invoked by MultiOpt.
4. If DESMOD is used in a SOL 200 input file that is not being used in MultiOpt, it will result in a fatal error.
5. MultiOpt supports Multi Model Optimization (MMO) and Global Optimization (GO), see  Design Sensitivity and Optimization User’s Guide  
