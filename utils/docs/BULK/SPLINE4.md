## [SPLINE4](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SPLINE4.xhtml) - Surface Spline Methods

Defines a curved surface spline for interpolating motion or forces for aeroelastic problems on general aerodynamic geometries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPLINE4 EID     CAERO   AELIST          SETG    DZ      METH    USAGE           
        NELEM   MELEM   FTYPE   RCORE                                           
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPLINE4 3       111     115             14      0.      IPS                     
```
```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────┤
│ SID       │ Unique spline identification number. (Integer >   │                                           │
│           │ 0)                                                │                                           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────┤
│ CAERO     │ Identification number of aerodynamic component    │                                           │
│           │ that defines the interpolation surface. (Integer  │                                           │
│           │ > 0)                                              │                                           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────┤
│ AELIST    │ Identification of an AELIST entry listing the     │                                           │
│           │ boxes or aerodynamic grid points to be            │                                           │
│           │ interpolated using this spline. See Remark        │                                           │
│           │ 2. (Integer > 0)                                  │                                           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────┤
│ SETG      │ Identification number of a SET1 entry that lists  │                                           │
│           │ the structural grid points to which the spline is │                                           │
│           │ attached.  (Integer > 0)                          │                                           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────┤
│ DZ        │ Linear attachment flexibility.  (Real > 0.0;      │                                           │
│           │ Default = 0.0)                                    │                                           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────┤
│ METH      │ Spline method:                                    │                                           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────┤
│           │ IPS                                               │ Infinite Plate Spline (Default)           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────┤
│           │ TPS                                               │ Thin Plate Spline                         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────┤
│           │ FPS                                               │ Finite Plate Spline                       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────┤
│           │ RIS                                               │ Radial Interpolation Spline               │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────┤
│ USAGE     │ Spline usage flag to determine whether this       │                                           │
│           │ spline applies to the force transformation,       │                                           │
│           │ displacement transformation or both.  Legal       │                                           │
│           │ values are FORCE, DISP or BOTH. See Remark 3.     │                                           │
│           │ (Character, Default = BOTH)                       │                                           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────┤
│ NELEM     │ The number of FE elements along the local x-axis  │                                           │
│           │ if using the FPS option. (Integer > 0; Default =  │                                           │
│           │ 10)                                               │                                           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────┤
│ MELEM     │ The number of FE elements along the local y-axis  │                                           │
│           │ if using the FPS option. (Integer > 0; Default =  │                                           │
│           │ 10)                                               │                                           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────┤
│ FTYPE     │ Selects the radial interpolation function to be   │                                           │
│           │ used with the RIS option:                         │                                           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────┤
│           │ WF0                                               │ C0 continuous Wendland function           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────┤
│           │ WF2                                               │ C2 continuous Wendland function (Default) │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────┤
│ RCORE     │ Radius of support of radial interpolation         │                                           │
│           │ function. (Real > 0.0; no Default)                │                                           │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────┘
```
