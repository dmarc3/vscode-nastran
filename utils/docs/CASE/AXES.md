## [AXES](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/TOC.AXES.xhtml) - Orientation of Observer’s Coordinate System

Assigns axes of the basic coordinate system to the observer’s coordinate system.

#### Format:

![casecontrol4b01513.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/../../../assets/casecontrol4b01513.jpg?_LANG=enus)  

#### Example 1: View toward negative x-axis of model.

```nastran
AXES MX, Y, MZ
```

#### Example 2:  Mirror image of model.

```nastran
AXES Y X Z
```

```text
┌──────────────┬──────────────────────────────────────────────────┬──────────────────────────────────────────────────┐
│ Describers   │ Meaning                                          │                                                  │
├──────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ r,s,t        │ Assigns axes of basic coordinate system to axes  │                                                  │
│              │ of observer’s coordinate system (Default = X, Y, │                                                  │
│              │ Z).                                              │                                                  │
├──────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│              │ X                                                │ X-direction of basic coordinate system (Default  │
│              │                                                  │ for r).                                          │
├──────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│              │ Y                                                │ Y-direction of basic coordinate system (Default  │
│              │                                                  │ for s).                                          │
├──────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│              │ Z                                                │ Z-direction of basic coordinate system (Default  │
│              │                                                  │ for t).                                          │
├──────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│              │ MX                                               │ Negative X-direction of basic coordinate system. │
├──────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│              │ MY                                               │ Negative Y-direction of basic coordinate system. │
├──────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│              │ MZ                                               │ Negative Z-direction of basic coordinate system. │
├──────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ SYMMETRIC    │ Specifies a symmetric orientation of the view.   │                                                  │
│              │ See Remark 5. (Default).                         │                                                  │
├──────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ ANTISYMMETRI │ Specifies an antisymmetric orientation of the    │                                                  │
│ C            │ view. See Remark 5.                              │                                                  │
└──────────────┴──────────────────────────────────────────────────┴──────────────────────────────────────────────────┘
```

#### Remarks:

1. If no AXES command is specified, then AXES X, Y, Z is the default.

2. The direction of view is in the negative r-direction; i.e., the projection plane is parallel to the s-t plane.

3. The VIEW command depends on the AXES command specification and defines the angular relationship between observer’s coordinate system and the basic coordinate system.

4. The AXES command can be used to preposition the object in 90 °  increments in such a manner that only rotations less than 90 °  are required by the VIEW command to obtain the desired orientation. MX, MY, MZ can be used to define left-handed coordinate systems. Note that the default system is right-handed.

5. An undeformed or deformed plot of the symmetric portion of an object can be obtained by reversing the sign of the axis that is normal to the plane of symmetry. In the case of multiple planes of symmetry, the signs of all associated planes should be reversed. The ANTISYMMETRIC option should be specified when a symmetric model is loaded in an unsymmetric manner. This will cause the deformations to be plotted antisymmetrically with respect to the specified plane or planes. Since the AXES command applies to all parts (SETs) of a single frame, symmetric and antisymmetric combinations cannot be made with this command (see the symmetry option on the   command in this section).

6. To avoid a mirror image, ensure that the r, s, and t axes obey the right-hand rule.

