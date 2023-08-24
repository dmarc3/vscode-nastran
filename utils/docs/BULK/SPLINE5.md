## [SPLINE5](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SPLINE5.xhtml) - Linear Spline

Defines a 1D beam spline for interpolating motion and/or forces for aeroelastic problems on aerodynamic geometries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPLINE5 SID     CAERO   AELIST          SETG    DZ      DTOR    CID     +       
+       DTHX    DTHY            USAGE   METH            FTYPE   RCORE           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPLINE5 5       8       12              60                      3               
        1.                      BOTH                                            
```

```text
┌────────────┬───────────────────────────────────────────────────┬────────────────────────────────────────────┐
│ Describer  │ Meaning                                           │                                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│ SID        │ Unique spline identification number (Integer > 0) │                                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│ CAERO      │ Identification number of aerodynamic component    │                                            │
│            │ that defines the interpolation surface. (Integer  │                                            │
│            │ > 0)                                              │                                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│ AELIST     │ Identification of an AELIST entry listing the     │                                            │
│            │ boxes or aerodynamic grid points to be            │                                            │
│            │ interpolated using this spline. See Remark        │                                            │
│            │ 6. (Integer > 0)                                  │                                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│ SETG       │ Refers to an SETi entry that lists the structural │                                            │
│            │ grid points to which the spline is attached.      │                                            │
│            │ (Integer > 0)                                     │                                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│ DZ         │ Linear attachment flexibility. (Real > 0.0;       │                                            │
│            │ Default = 0.0)                                    │                                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│ DTOR       │ Torsional flexibility ratio (EI/GJ) for the       │                                            │
│            │ bending in the zy-plane. This value is ignored    │                                            │
│            │ for slender bodies since they have no torsion;    │                                            │
│            │ see Remark 7. (Real > 0.0; Default = 1.0; ignored │                                            │
│            │ for CAERO2 bodies.)                               │                                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│ CID        │ Rectangular coordinate system that defines the    │                                            │
│            │ y-axis of the spline and the xy- and yz-planes    │                                            │
│            │ for bending. Not used for bodies, CAERO2.         │                                            │
│            │ (Integer > 0)                                     │                                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│ DTHX, DTHY │ Rotational attachment flexibility. DTHX is for    │                                            │
│            │ rotation about the spline’s x-axis (the bending   │                                            │
│            │ rotations). DTHY is for rotation about the        │                                            │
│            │ spline’s y-axis (torsion); however, it is used    │                                            │
│            │ for bending of bodies. (Real)                     │                                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│ USAGE      │ Spline usage flag to determine whether this       │                                            │
│            │ spline applies to the force transformation,       │                                            │
│            │ displacement transformation or both. FORCE, DISP  │                                            │
│            │ or BOTH. See Remark 8. (Character; Default =      │                                            │
│            │ BOTH)                                             │                                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│ METH       │ Spline method:                                    │                                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│            │ BEAM                                              │ Beam Spline (Default)                      │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│            │ RIS                                               │ Radial Interpolation Spline                │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│ FTYPE      │ Selects the radial interpolation function to be   │                                            │
│            │ used with the RIS option:                         │                                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│            │ WF0                                               │ C0 continuous Wendland function            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│            │ WF2                                               │ C2 continuous Wendland function. (Default) │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│ RCORE      │ Radius of support of radial interpolation         │                                            │
│            │ function. (Real > 0.0; no Default)                │                                            │
└────────────┴───────────────────────────────────────────────────┴────────────────────────────────────────────┘
```
