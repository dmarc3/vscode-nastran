## [ROSTR](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ROSTR.xhtml)

Default = Remark  3. , SOL 700 only

Defines the minimum density for single-material Eulerian elements with shear strength.

#### Format:

```nastran
PARAM,ROSTR,VALUE
```

#### Example:

```nastran
PARAM,ROSTR,1.E-6
```

```text
┌───────┬──────────────────────────────┐
│ VALUE │ Density cutoff. (Real > 0.0) │
└───────┴──────────────────────────────┘
```
#### Remarks:

1. Single-material Eulerian elements with shear strength with a density less than ROSTR are considered to be empty. All of the variables are set to zero, and the equation of state is bypassed.

2. In the Eulerian transport calculation, if the material is flowing from element A to element B, and

a. If the density of element B after transport is less than ROSTR, then no transport is done.

b. If the density of element A after transport is less than ROSTR, then all of the mass is transported to element B.

3. By default the cut-off density for Eulerian elements with shear strength is set to 1.E–5 times the material reference density.

