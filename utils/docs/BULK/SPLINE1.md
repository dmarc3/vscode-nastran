## [SPLINE1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SPLINE1.xhtml) - Surface Spline Methods

Defines a surface spline for interpolating motion and/or forces for aeroelastic problems on aerodynamic geometries defined by regular arrays of aerodynamic points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPLINE1 EID     CAERO   BOX1    BOX2    SETG    DZ      METH    USAGE   +       
+       NELEM   MELEM                                                           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPLINE1 3       111     115     122     14      0.                              
```

```text
┌────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                           │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID        │ Unique spline identification number.  (Integer > 0)                                               │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CAERO      │ Aero-element (CAEROi entry ID) that defines the plane of the spline.  (Integer > 0)               │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BOX1, BOX2 │ First and last box with motions that are interpolated using this spline; see Remark 3. when using │
│            │ Mach Box method.  (Integer > 0; BOX2 > BOX1)                                                      │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SETG       │ Refers to the SETi entry that lists the structural grid points to which the spline is attached.   │
│            │  (Integer > 0)                                                                                    │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DZ         │ Linear attachment flexibility.  (Real > 0.0; Default = 0.0)                                       │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ METH       │ Method for the spline fit.  IPS,TPS or FPS.  See Remark 1. (Character; Default = IPS)             │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ USAGE      │ Spline usage flag to determine whether this spline applies to the force transformation,           │
│            │ displacement transformation or both.  FORCE, DISP or BOTH. See Remark 5. (Character; Default =    │
│            │ BOTH)                                                                                             │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NELEM      │ The number of FE elements along the local spline x-axis if using the FPS option. (Integer > 0;    │
│            │ Default = 10)                                                                                     │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MELEM      │ The number of FE elements along the local spline y-axis if using the FPS option. (Integer > 0;    │
│            │ Default = 10)                                                                                     │
└────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
