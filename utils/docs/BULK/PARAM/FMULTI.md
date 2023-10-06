## [FMULTI ](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.FMULTI.xhtml)

Default = .10, SOL 700 only

Defines the dimension of the multimaterial element array.

#### Format:

```nastran
PARAM,FMULTI,VALUE
```

#### Example:

```nastran
PARAM,FMULTI,.25
```

```text
┌───────┬───────────────────────────────────────────────────────────────────┐
│ VALUE │ The relative amount of multimaterial elements. (0.0 < Real < 1.0) │
└───────┴───────────────────────────────────────────────────────────────────┘
```
#### Remark:

The multimaterial Eulerian elements use an overflow array in which to store material data. This array can hold FMULTI times the total number of Eulerian elements. In a problem where more than 10% of the elements have more than one material, the default value of FMULTI must be increased.

