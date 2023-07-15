## [SPLINE2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SPLINE2.xhtml) - Linear Spline

Defines a beam spline for interpolating motion and/or forces for aeroelastic problems on aerodynamic geometries defined by regular arrays of aerodynamic points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPLINE2 EID     CAERO   ID1     ID2     SETG    DZ      DTOR    CID             
        DTHX    DTHY            USAGE                                           
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPLINE2 5       8       12      24      60      0.      1.0     3               
        1.                                                                      
```
```text
┌────────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                          │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID        │ Unique spline identification number.  (Integer > 0)                                              │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CAERO      │ Aero panel or body (CAEROi entry ID) that is to be interpolated.  (Integer > 0)                  │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID1, ID2   │ First and last box or body element whose motions are interpolated using this spline.  See Remark │
│            │ 6. when using the Mach Box method.  (Integer > 0; ID2 > ID1)                                     │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SETG       │ Refers to an SETi entry that lists the structural grid points to which the spline is attached.   │
│            │  (Integer > 0)                                                                                   │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DZ         │ Linear attachment flexibility.  (Real > 0.0; Default = 0.0)                                      │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DTOR       │ Torsional flexibility ratio (EI/GJ).  (Real > 0.0; Default = 1.0; use 1.0 for bodies.)           │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID        │ Rectangular coordinate system for which the y-axis defines the axis of the spline.  Not used for │
│            │ bodies, CAERO2.  (Integer > 0)                                                                   │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DTHX, DTHY │ Rotational attachment flexibility.  DTHX is for rotation about the spline’s x-axis (in-plane     │
│            │ bending rotations); however, it is not used for bodies.  DTHY is for rotation about the spline’s │
│            │ y-axis (torsion); however, it is used for slope of bodies.  (Real)                               │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ USAGE      │ Spline usage flag to determine whether this spline applies to the force transformation,          │
│            │ displacement transformation or both.  FORCE, DISP or BOTH. See Remark 9. (Character; Default =   │
│            │ BOTH)                                                                                            │
└────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
