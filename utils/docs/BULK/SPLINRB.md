## [SPLINRB](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SPLINRB.xhtml) - Rigid Body Spline

Defines a rigid body spline for interpolating motion or forces for aeroelastic problems on general aerodynamic geometries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPLINRB SID     CAERO   AELIST  USAGE   G1      C1      G2      C2              
        G3      C3      G4      C4      G5      C5      G6      C6              
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPLINRB 110     20      2       BOTH    1093    123456                          
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Unique spline identification number. (Integer > 0)                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CAERO     │ Identification number of aerodynamic component that defines the interpolation surface. (Integer > │
│           │ 0 or blank)                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AELIST    │ Identification of an AELIST entry listing the boxes or aerodynamic grid points to be interpolated │
│           │ using this spline. See Remark 3. (Integer > 0)                                                    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ USAGE     │ Spline usage flag to determine whether this spline applies to the force transformation,           │
│           │ displacement transformation or both. Legal values are FORCE, DISP or BOTH. (Character; Default =  │
│           │ BOTH)                                                                                             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Identification number of a structural grid point. (Integer > 0)                                   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component numbers: Any unique combination of the Integers 1 through 6 with no embedded blanks.    │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
