## [VINTENSITY (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.VINTENSITY.Case.xhtml) - Vibration Intensity, VI, Output Request

Request output of vibration intensity for structural elements in SOLs 108 and 111 only.

#### Format:

![casecontrol4a01434.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01434.jpg?_LANG=enus)  

#### Examples:

```nastran
VINTENSITY = ALL
```

```text
┌──────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT or     │                                                                                                   │
│ (blank)      │                                                                                                   │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH        │                                                                                                   │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLOT         │                                                                                                   │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ * The .op2 binary database file will be generated with “PARAM,POST, X” (or the POST Case Control command),       │
│ while the .h5 binary database file will be generated with “HDF5OUT” entry specified in Bulk Data Section.        │
│ Both .op2 and .h5 file can be created simultaneously. Note .xdb file is being deprecated.                        │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Vibration Intensities will be computed for all supported structural elements.                     │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of a previously defined set of structural elements. Vibration Intensities will │
│              │ be computed for the structural elements in this set only.                                         │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ Vibration intensity will not be processed.                                                        │
└──────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. VINTENSITY = NONE overrides an overall request.
2. This Case Control command can be used in SOL 108 and SOL 111 only
3. Structural element types covered for VI computations are BAR, BEAM, QUAD4, TRIA3, QUADR, TRIAR, QUAD8, TRIA6, HEXA, PENTA and TETRA.
4. For BAR/BEAM element types, VI is computed in element axial direction using following equation
![inset_0.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/inset_0.jpg?_LANG=enus)

```text
┌───────┬──────────────────────────────────────────────┐
│ Where │ Fx = axial force in element x direction,     │
├───────┼──────────────────────────────────────────────┤
│       │ V1 = shear force in element y direction,     │
├───────┼──────────────────────────────────────────────┤
│       │ V2 = shear force in element z direction,     │
├───────┼──────────────────────────────────────────────┤
│       │ T    = torsion about element x direction,    │
├───────┼──────────────────────────────────────────────┤
│       │ M2 = Bending moment in element y direction,  │
├───────┼──────────────────────────────────────────────┤
│       │ M1 = Bending moment in element z direction,  │
├───────┼──────────────────────────────────────────────┤
│       │ vi  = Translational velocity about element i │
│       │ direction,                                   │
├───────┼──────────────────────────────────────────────┤
│       │ i = Rotational velocity about element i      │
│       │ direction,                                   │
└───────┴──────────────────────────────────────────────┘
```

     '*' superscript denotes complex conjugate of the complex value. VI x  is computed at both end of BAR/BEAM element and the average of ends VI is presented as element VI x .

5. For 2D element types, such as QUAD4/TRIA3, VI is computed in element coordinate system using following equations
![casecontrol4a01441.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01441.jpg?_LANG=enus)  
![casecontrol4a01443.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01443.jpg?_LANG=enus)  

```text
┌───────┬──────────────────────────────────────────────────┐
│ Where │ Vx , Vy   = transverse shear forces,             │
├───────┼──────────────────────────────────────────────────┤
│       │ Mx , My= Bending moments,                        │
├───────┼──────────────────────────────────────────────────┤
│       │ Mxy = twisting moment,                           │
├───────┼──────────────────────────────────────────────────┤
│       │ Fx , Fy = Membrane forces,                       │
├───────┼──────────────────────────────────────────────────┤
│       │ Fxy, Fyx = Membrane shear,                       │
├───────┼──────────────────────────────────────────────────┤
│       │ Areax, Areay = Area in the corresponding element │
│       │ axes,                                            │
├───────┼──────────────────────────────────────────────────┤
│       │ vi  = Translational velocity about element i     │
│       │ direction,                                       │
├───────┼──────────────────────────────────────────────────┤
│       │ i = Rotational velocity about element i          │
│       │ direction,                                       │
└───────┴──────────────────────────────────────────────────┘
```

     '*' superscript denotes complex conjugate of the complex value. VI i , VI i  are computed in element coordinate system using average corner velocities and the element forces at the element center.
6. For 3D element types, VI is computed in basic coordinate system using following equations
     ![casecontrol4a01447.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01447.jpg?_LANG=enus)  
     ![casecontrol4a01449.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01449.jpg?_LANG=enus)  
     ![casecontrol4a01451.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01451.jpg?_LANG=enus)  

```text
┌───────┬───────────────────────────────────────────────────┐
│ Where │ VIx , VIy , VIx  = VI in basic coordinate system, │
├───────┼───────────────────────────────────────────────────┤
│       │ x, y , z = Normal stresses,                       │
├───────┼───────────────────────────────────────────────────┤
│       │ xy , yz , xz  = Shear stresses,                   │
├───────┼───────────────────────────────────────────────────┤
│       │ vi  = Translational velocity in basic i           │
│       │ direction,                                        │
└───────┴───────────────────────────────────────────────────┘
```

7. VI for all element types is presented in basic coordinate system in print and/or punch output.
