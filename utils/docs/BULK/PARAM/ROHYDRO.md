## [ROHYDRO](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ROHYDRO.xhtml)

Default = Remark  3. , SOL 700 only

Defines the minimum density for hydrodynamic, single-material Eulerian elements.

#### Format:

```nastran
PARAM,ROHYDRO,VALUE
```

#### Example:

```nastran
PARAM,ROHYDRO,1.E-6
```

```text
┌───────┬──────────────────────────────┐
│ VALUE │ Density cutoff. (Real > 0.0) │
└───────┴──────────────────────────────┘
```
#### Remarks:

1. Hydrodynamic, single-material Eulerian elements with a density less than ROHYDRO are considered to be empty. All of the variables are set to zero, and the equation of state is bypassed.

2. In the Eulerian transport calculation, if the material is flowing from element A to element B, and

    a. If the density of element B after transport is less than ROHYDRO, then no transport is done.

    b. If the density of element A after transport is less than ROHYDRO, then all of the mass is transported to element B.

3. By default, the cutoff density for hydrodynamic Eulerian elements is set to 1.E–5 times the material reference density. For the Riemann solution-based solvers, the default is set to 1.E-6 times the reference density.

4. Please note that this parameter has a different effect in the Riemann-solution based Euler solvers. The elements are never viewed as empty, but a small amount of mass (equal to the element’s volume times the cut-off density value) remains in the element. All other state variables (velocity, energy and pressure are reset to zero for these types of elements). For fluid flows where you wish to model cavitation, use Tait’s equation of state with a critical density at which the pressure remains constant and the fluid cavitates.

