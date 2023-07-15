## [SPHERE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SPHERE.xhtml) - Defines the Shape of a Sphere

Spherical shape used in the initial condition definition on the TICEUL1 entry. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPHERE  VID             X       Y       Z       RADIUS                          
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPHERE  100             1.      1.      1.      .5                              
```
```text
┌───────────┬────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                        │
├───────────┼────────────────────────────────────────────────────────────────┤
│ VID       │ Number of the sphere.  (Integer > 0; Required)                 │
├───────────┼────────────────────────────────────────────────────────────────┤
│ X, Y, Z   │ Coordinates of the center of the sphere. (Real; Default = 0.0) │
├───────────┼────────────────────────────────────────────────────────────────┤
│ RADIUS    │ Radius of the sphere. (Real > 0; Required)                     │
└───────────┴────────────────────────────────────────────────────────────────┘
```
