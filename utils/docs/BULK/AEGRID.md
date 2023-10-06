## [AEGRID](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AEGRID.xhtml) - Aerodynamic Grid Point

Defines the location of an aerodynamic grid point.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AEGRID  GID     CP      X1      X2      X3      CD      ASID                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AEGRID  1       1       2.1     3.2     2.0     3       4                       
```

```text
┌────────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                          │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GID        │ Grid Point Identification Number (0 < Integer < 100,000,000)                                     │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CP         │ Identification number of a coordinate system in which the location of the grid point is defined. │
│            │ (Integer > 0 or blank)                                                                           │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X1, X2, X3 │ Location of the grid point in the coordinate system CP.                                          │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CD         │ Identification number of coordinate system in which the degrees-of-freedom of the grid point are │
│            │ defined. (Integer > 0 or blank)                                                                  │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ASID       │ Identification number of an AESCALE Bulk Data entry. (Integer > 0 or blank)                      │
└────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. All grid point identification numbers must be unique with respect to all other aerodynamic grid point identification numbers.
2. If both CP and ASID are defined, coordinates are first scaled and subsequently transformed to the basic coordinate system.
3. The meaning of X1, X2 and X3 depends on the type of coordinate system CP. (See Remark 2 of the GRID entry).
4. A zero or blank in the CP and CD fields refers to the basic coordinate system.
5. The AEGRID, AETRIA3, AEQUAD4, and AESCALE entries provide an aerodynamic mesh in a readable, portable format. There are no internal aerodynamics created on this mesh.
