## [MICRO](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.MICRO.xhtml)

Default = 10, SOL 700 only

Defines the accuracy of the initial conditions in Eulerian elements, when using the geometrical shape definition.

#### Format:

```nastran
PARAM,MICRO,VALUE
```

#### Example:

```nastran
PARAM,MICRO,15
```

```text
┌───────┬───────────────────────────────────────┐
│ VALUE │ Micro-zoning parameter. (Integer > 0) │
└───────┴───────────────────────────────────────┘
```
#### Remarks:

1. MICRO is the number of micro zones into which an element is subdivided during initial condition generation.

2. The default MICRO = 10 results in material fractions as accurate as 0.001. If a higher accuracy is required, a greater value for MICRO can be used, but the CPU time for the generation increases rapidly.

3. Micro zoning is only used when the initial conditions of the Eulerian material are specified on a TICEUL1 entry.

