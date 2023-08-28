## [DENSITY](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.DENSITY.xhtml) - Microfilm Plotter Line Density

Selects the line density for microfilm plotters only.

#### Format

```nastran
DENSITY d
```

#### Example

```nastran
DENS 3
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ d         │ Specifies line density scale factor for microfilm plotters. A line density of d is d times heavier │
│           │ than a line density of 1 (Integer  >  0; Default  =  1).                                           │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
