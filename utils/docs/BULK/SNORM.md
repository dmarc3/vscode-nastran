## [SNORM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SNORM1.xhtml) - Surface Normal Vector at Grid Point

Defines a surface normal vector at a grid point for CQUAD4, CQUADR, CTRIA3, and CTRIAR shell elements.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SNORM   GID     CID     N1      N2      N3                                      
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SNORM   3       2       0.      -1.     0.                                      
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GID       │ Unique grid point identification number.  (Integer > 0)                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID       │ Identification number of coordinate system in which the components of the normal vector are    │
│           │ defined. See Remark 3. (Integer > 0; Default = 0 for the basic coordinate system)              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ni        │ Components of normal vector. The three components of the normal need not define a unit vector. │
│           │  (Real; Default = 0.0)                                                                         │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```
