## [VELCUT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.VELCUT.xhtml)

Default = 1.E-6, SOL 700 only

Defines the minimum velocity in Eulerian meshes.

#### Format:

```nastran
PARAM,VELCUT,VALUE
```

#### Example:

```nastran
PARAM,VELCUT,1.0E-6
```

```text
┌───────┬────────────────────────────────┐
│ VALUE │ Minimum velocity. (Real > 0.0) │
└───────┴────────────────────────────────┘
```
#### Remark:

Any velocity less than VELCUT is set to zero. It is mainly used to eliminate harmless but annoying small values of velocity caused by round-off error and numerical dispersion.

