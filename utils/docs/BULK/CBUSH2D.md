## [CBUSH2D](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CBUSH2D.xhtml) - 2-D Linear-Nonlinear Connection

Defines the connectivity of a two-dimensional Linear-Nonlinear element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBUSH2D EID     PID     GA      GB      CID     PLANE                           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBUSH2D 100     101     1001    2001    0       XY                              
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000; Required)            │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of a PBUSH2D. (Integer > 0; Required)            │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ GA        │ Inner grid. (Integer > 0; Required)                                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ GB        │ Outer grid. (Integer > 0; Required)                                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ CID       │ Coordinate system used to define 2-D plane. (Integer > 0; Default = 0)          │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ PLANE     │ Orientation plane in CID: XY, YZ, ZX, see Remark 1. (Character; Default = ‘XY’) │
└───────────┴─────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The XY, YZ, and ZX planes are relative to the displacements coordinates of GA and GB. The planes correspond to directions 1 and 2. GA and GB should be coincident grids with parallel displacement coordinate systems. The coordinate systems are not checked. Wrong answers will be produced if this rule is not followed.
2. The behavior is different if there is no rotor in the model and a CBUSH2D is used. When this happens, for most cases, if there is no rotor the nominal stiffness values from the PBUSH2D will be used, with no frequency-dependence. However, if an ELEMUDS is used, the CBUSH2D will be ignored if there is no rotor in the model. Also, an ELEMUDS with CBUSH2DA call will require to have a rotor in the model. A FATAL message will be used if there is no rotor, for ELEMUDS having CBUSH2DA call.
