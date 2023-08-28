## [VANTAGE POINT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/TOC.VANTAGE.POINT.xhtml) - Location of the Observer

Defines the location of the observer with respect to the model in the (r, s, t) coordinate system defined on the AXES command for perspective and stereoscopic projections only.

#### Format:

```nastran
VANTAGE POINT  ro  so  to  do  sor
```

#### Example:

```nastran
VANT 100.
```

```text
┌────────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describers │ Meaning                                                                                          │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ro         │ Location of the observer on the r-axis in model units (Real).                                    │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ so         │ Location of the observer and left eye of the observer on the s-axis, in model units, for         │
│            │ perspective and stereoscopic projections, respectively (Real).                                   │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ to         │ Location of the observer on the t-axis in model units (Real).                                    │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ do         │ Separation of the observer and the projection plane on the r-axis in model units. The PROJECTION │
│            │ PLANE SEPARATION command may also specify the separation (Real).                                 │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ sor        │ Location of the of the observer’s right eye for stereoscopic projections in model units (Real).  │
└────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. VANTAGE POINT or the FIND command must be specified if the PERSPECTIVE or STEREOSCOPIC command is also specified.

2. The VANTAGE POINT command is not recommended. The FIND command is recommended because it automatically calculates the optimum vantage point.

3. A theoretical description of the vantage point is contained in   in the  MSC Nastran Reference Guide .

