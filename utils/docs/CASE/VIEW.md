## [VIEW](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/TOC.VIEW.xhtml) - Angular Relationship of Observer’s Coordinate System

Defines the angular relationship between observer’s coordinate system (r, s, and t axes specified on the AXES command) and basic coordinate system.

#### Format:

```nastran
VIEW  gamma beta alpha
```

#### Example 1:

View the model from the r-axis.

```nastran
VIEW  0. 0. 0.
```

#### Example 2:

View the model midway between the r- and s-axes.

```nastran
VIEW  45. 0. 0.
```

```text
┌────────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describers │ Meaning                                                                                         │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ gamma      │ Angle of rotation, in degrees, of t axis specified on AXES command (Default  =  34.27).         │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ beta       │ Angle of rotation, in degrees, of s axis specified on AXES command (Default  =  23.17 if        │
│            │ ORTHOGRAPHIC or STEREOSCOPIC command is specified and 0.0 if PERSPECTIVE command is specified). │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ alpha      │ Angle of rotation, in degrees, of r axis specified on AXES command (Default  =  0.0).           │
└────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. If no VIEW command is specified, then VIEW 34.27 23.17 0.0 is assumed for orthographic and stereoscopic projections; and VIEW 34.27 0.0 0.0 is assumed for perspective projections. The default values produce a plot in which unit vectors on the axes of the basic coordinate system have equal lengths.

2. The angles are rotated in sequence: gamma rotates the t-axes, followed by beta which rotates the s-axes, followed by alpha which rotates the r-axes.

![casecontrol4b01561.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/../../../assets/casecontrol4b01561.jpg?_LANG=enus)

3. The VIEW command specifies the position of the model with respect to the s-t plane. Gamma and beta represent the angles of turn and tilt. Alpha is normally not used since it does not affect the orientation of the s-t plane, but only it’s orientation on the plot frame.

