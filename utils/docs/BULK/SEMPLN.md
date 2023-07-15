## [SEMPLN](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SEMPLN.xhtml) - Superelement Mirror Plane

Defines a mirror plane for mirroring a partitioned superelement.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEMPLN  SEID    “PLANE” P1      P2      P3                                      
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEMPLN  110     PLANE   12      45      1125                                    
```
```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                 │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────┤
│ SEID      │ Partitioned superelement identification number.  (Integer > 0).                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────┤
│ “PLANE”   │ Flag indicating that the plane is defined by three noncolinear points.                  │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────┤
│ Pi        │ GRID or POINT entry identification numbers of three noncolinear points.  (Integer > 0). │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────┘
```
