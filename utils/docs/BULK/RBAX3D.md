## [RBAX3D](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RBAX3D.xhtml) - Axisymmetric Harmonic Element Rigid Connection

Defines a rigid connection between a point on an axisymmetric harmonic element (CQUADX or CTRIAX) and a point on the axis of symmetry of that element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RBAX3D  EID     G3D     GAX                                                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RBAX3D  100     10      20                                                      
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000). See Remark 1..                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G3D       │ Identification number of a grid point on the axis of symmetry (Integer > 100,000,000). See Remarks │
│           │ 2. and 4. through 7.                                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GAX       │ Identification number of a grid point referenced on an axisymmetric harmonic element (CQUADX or    │
│           │ CTRIAX). (0 < Integer < 100,000,000). See Remarks 3. through 7.                                    │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The EID should be unique with respect to all other elements.
2. The G3D point may not be referenced on an axisymmetric harmonic element. If it is, the program terminates the execution with an appropriate user fatal message.
3. The GAX point must be referenced on an axisymmetric harmonic element. If it is not, the program terminates the execution with an appropriate user fatal message. Further, the axisymmetric harmonic element (or elements) that reference GAX must have harmonic index 1 specified on the associated PAXSYMH entry. If this condition is not satisfied, the program terminates the execution with an appropriate user fatal message.
4. The G3D point must be on the axis of symmetry. The GAX point need not be on the axis of symmetry.
5. The G3D and GAX points must both have the same axial coordinate along the axis of symmetry.
6. The G3D point is regarded as the independent point and the GAX point is regarded as the dependent point. The dependent degrees of freedom of GAX will be selected from the axisymmetric harmonic degrees of freedom.
7. If the GAX point is on the axis of symmetry, the connection is made only to the G3D displacement components perpendicular to the axis. However, if the GAX point is not on the axis of symmetry, then connection is made not only to the G3D displacement components perpendicular to the axis, but also to the slopes. The tolerance to determine if the GAX point is on the axis of symmetry is 1.0E-6.
