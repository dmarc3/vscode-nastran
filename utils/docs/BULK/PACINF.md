## [PACINF](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PACINF.xhtml) - Acoustic Conjugate Infinite Element Property

Defines the properties of acoustic conjugate infinite elements.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PACINF  PID     MID     RIO     XP      YP      ZP                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PACINF  100     10      5       0.      1.      2.                              
```

```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ PID        │ Property Identification Number of PACINF entry. (Integer > 0)                      │
├────────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ MID        │ Material Identification Number of a MAT10 entry. (Integer > 0)                     │
├────────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ RIO        │ Radial Interpolation Order. (Integer > 0; no Default)                              │
├────────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ XP, YP, ZP │ Coordinates of the Pole of the Infinite Elements (in the Basic Coordinate System). │
└────────────┴────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remark:

1. The location of the pole together with the connecting grid points of the element, define the geometry of the element, see  .

    ![bulkp06308.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06308.jpg?_LANG=enus)

    Figure 0-66 Geometry of Infinite Element

2. The radial interpolation order required depends on the directivity of the pressure field.
