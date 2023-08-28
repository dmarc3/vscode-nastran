## [DISTORTION](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/TOC.DISTORTION.xhtml) - Distortion Scale Factors

Specifies the distortion scale factors of the axes in the basic coordinate system.

#### Format:

```nastran
DISTORTION  dx dy dz
```

#### Example:

```nastran
DIST 0.5 1.0 1.0
```

```text
┌────────────┬──────────────────────────────────────────────────────────────────────────────────┐
│ Describers │ Meaning                                                                          │
├────────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ dx         │ Distortion scale factor of the basic coordinate system’s x-axis (Default = 1.0). │
├────────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ dy         │ Distortion scale factor of the basic coordinate system’s y-axis (Default = 1.0). │
├────────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ dz         │ Distortion scale factor of the basic coordinate system’s z-axis (Default = 1.0). │
└────────────┴──────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If no DISTORTION command is specified, then no distortion is applied.

2. If DISTORTION is specified, then all three values for dx, dy, and dz must be specified even though one or two will use the default.

3. The distortion factors are applied prior to any other scaling commands: SCALE, MAXIMUM DEFORMATION, CSCALE, etc.
