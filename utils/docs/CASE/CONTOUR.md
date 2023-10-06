## [CONTOUR](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/TOC.CONTOUR.xhtml) - Contour Plot Options

Specifies contour plot options for stress, displacement, or temperature.

#### Format:

![casecontrol4b01517.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/../../../assets/casecontrol4b01517.jpg?_LANG=enus)  

#### Example:

```nastran
CONTOUR  MAGNIT  LIST  2., 4., 6., 8., 10.
```

```text
┌────────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describers │ Meaning                                           │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ component  │ Name of stress, displacement or temperature       │                                                   │
│            │ component (Character, Default = “MAJPRIN”).       │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ MAJPRIN                                           │ Major principal stress. Not available for         │
│            │                                                   │ nonlinear elements (Default).                     │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ MINPRIN                                           │ Minor principal stress. Not available for         │
│            │                                                   │ nonlinear elements.                               │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ EQUIVAL                                           │ von Mises stress. When STRESS(MAXS) is requested  │
│            │                                                   │ in the Case Control Section, von Mises stress is  │
│            │                                                   │ used for plotting. For nonlinear analysis, Mohr-  │
│            │                                                   │ Coulomb or Drucker-Prager stress may also be      │
│            │                                                   │ plotted in conjunction with the MATS1 command.    │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ XNORMAL                                           │ X component of normal stress.                     │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ YNORMAL                                           │ Y component of normal stress.                     │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ ZNORMAL                                           │ Z component of normal stress.                     │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ XYSHEAR                                           │ XY component of shear stress.                     │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ XZSHEAR                                           │ XZ component of shear stress.                     │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ YZSHEAR                                           │ YZ component of shear stress.                     │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ XDISP                                             │ T1 component of displacement in global coordinate │
│            │                                                   │ system.                                           │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ YDISP                                             │ T2 component of displacement in global coordinate │
│            │                                                   │ system.                                           │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ ZDISP                                             │ T3 component of displacement in global coordinate │
│            │                                                   │ system.                                           │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ MAGNIT                                            │ Magnitude of displacement or temperature.         │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ EVEN n     │ Number of contours (50  >  Integer >  0, Default  │                                                   │
│            │ is EVEN 10).                                      │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ LIST a, b, │ List of stresses, displacements or temperatures   │                                                   │
│ ...        │ which define the contours (Real).                 │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Z1         │ Stresses at Z1 from neutral plane (Default).      │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Z2         │ Stresses at Z2 from neutral plane.                │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MAX        │ Maximum of stress at Z1 and Z2.                   │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MID        │ Average of stress (membrane stress) at Z1 and Z2. │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ COMMON     │ Plot stress contours in basic coordinate system   │                                                   │
│            │ (Default).                                        │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ LOCAL      │ Plot stress contours in element coordinate        │                                                   │
│            │ system. This is the coordinate system used in     │                                                   │
│            │ printed output.                                   │                                                   │
└────────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. The CONTOUR command should be specified immediately before its associated PLOT command.

2. A STRESS command must appear in the Case Control Section for all elements included in a CONTOUR request. If printed output is not desired, then STRESS(PLOT)=sid should be specified.

3. In linear analysis, stress contour plots are available for the following elements: CTRIA3, CQUAD4, CSHEAR, and CTRlAX6. In nonlinear analysis, stress contour plots are available for CQUAD4 and CTRlA3 elements. The Bulk Data element connection entries for all elements must list the grid points in either clockwise or counterclockwise order. Mixing the order will result in meaningless or confusing plots.

4. When selecting contour options, note that

     • MAJPRIN, MINPRIN, EQUIVAL are the same in COMMON and LOCAL.

     • ZNORMAL, XZSHEAR, YZSHEAR, if selected in LOCAL, will be changed to COMMON.

     • CSHEAR elements only have the MAXSHEAR value.

5. The CTRIAX6 element stress contour plots are different in that they must be selected as COMMON. Also, the following equivalences apply:

     • XNORMAL is radial

     • YNORMAL is azimuthal

     • ZNORMAL is axial

     • XYSHEAR is shear

     • XZSHEAR is maximum principal

     • YZSHEAR is von Mises

     • EQUIVAL is octahedral

