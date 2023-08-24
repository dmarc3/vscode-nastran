## [ROMULTI](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ROMULTI.xhtml)

Default = Remark  3. , SOL 700 only

Defines the minimum density for multimaterial Eulerian elements.

#### Format:

```nastran
PARAM,ROMULTI,VALUE
```

#### Example:

```nastran
PARAM,ROMULTI,1.E-6
````

```text
┌───────┬──────────────────────────────┐
│ VALUE │ Density cutoff. (Real > 0.0) │
└───────┴──────────────────────────────┘
```
#### Remarks:

1. Multimaterial Eulerian elements with a density less than ROMULTI are considered to be empty. All of the variables are set to zero, and the equation of state is bypassed.

2. In the Eulerian transport calculation, if the material is flowing from element A to element B, and

a. If the density of a specific material in element B after transport is less than ROMULTI, no transport is done.

b. If the density of a specific material in element A after transport is less than ROMULTI, all of the mass of that material is transported to element B.

3. By default, the cut-off density is set for each material separately as 1.E–5 times the material reference density.

