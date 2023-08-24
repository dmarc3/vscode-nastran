## [FBLEND ](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.FBLEND.xhtml)

Default = 0.6667, SOL 700 only

Eulerian elements with uncovered fractions smaller than FBLEND are blended with adjacent elements to form a clump so that they do not control the time step.

#### Format:

```nastran
PARAM,FBLEND,VALUE
```

#### Example:

```nastran
PARAM,FBLEND,0.5
```

```text
┌───────┬────────────────────────────────────────────────────────────────────────┐
│ VALUE │ The uncovered fraction below which blending occurs. (0.0 < Real < 1.0) │
└───────┴────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The default value is satisfactory for virtually all calculations.

2. Elements are blended only if they would have controlled the time step otherwise.

3. Elements with uncovered fractions greater than FBLEND are not blended and are allowed to control the time step.

4. Large values of FBLEND produce a larger time step but many blends. Small values produce a smaller time step and fewer blends.

5. In a calculation with a coupling surface, STEPFCT is smaller or equal FBLEND to avoid instabilities (see PARAM,STEPFCT).

