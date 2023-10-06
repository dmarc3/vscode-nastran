## [ORIGIN](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/TOC.ORIGIN.xhtml) - Origin of Plot Frame

Defines the origin of the plot frame with respect to the origin of the (r, s, t) coordinate system defined on the AXES command.

#### Format:

```nastran
ORIGIN  oid  u  v
```

#### Example:

```nastran
ORIG  3  -1. -2.
```

```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describers │ Meaning                                                                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ oid        │ Origin identification number which may be specified after the ORIGIN describer on the PLOT command │
│            │ (Integer  >  0).                                                                                   │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ u          │ Horizontal displacement of plot frame origin from the rst origin (Real, Default  =  0.0).          │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ v          │ Vertical displacement of paper origin from the rst origin (Real, Default  =  0.0).                 │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. In the transformation performed for any of the three projections, the origins of both the basic coordinate system and the observer’s coordinate system are coincident. The ORIGIN command may be used to locate the plot frame origin (lower left hand corner) from the rst origin. The units are inches, and are not subject to the scaling of the plotted object.

2. The ORIGIN command is not recommended for general use. See the   command to have the origin optimally located so as to place the plotted object in the center of the plot frame.

3. Ten origins may be specified at one time. However, any one can be redefined at any time. An eleventh origin is also provided if more than ten origins are erroneously defined; i.e., only the last of these surplus origins will be retained.

4. If a projection; e.g., ORTHOGRAPHIC, STEREOSCOPIC, or PERSPECTIVE, is changed in the plot packet, or the PLOTTER command is changed, then all previously defined origins are deleted.
