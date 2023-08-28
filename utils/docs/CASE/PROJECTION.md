## [PROJECTION](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/TOC.PROJECTION.xhtml) - Separation Between Projection Plane and Observer

Defines the separation along the r-axis, and between the observer and the projection plane, if not already specified on the VANTAGE POINT command. Used by stereoscopic projections only.

#### Format:

```nastran
PROJECTION PLANE SEPARATION  do
```

#### Example:

```nastran
PROJ PLAN SEPA  1.5
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ do        │ Separation of the observer and the projection plane on the r-axis in model units. The VANTAGE │
│           │ POINT command may also specify the separation (Real, Default  =  2.0).                        │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The PROJECTION PLANE SEPARATION command is not recommended. The FIND command is recommended because it automatically calculates the optimum separation.

2. A theoretical description of projection plane separation is contained in   in the  MSC Nastran Reference Guide .

