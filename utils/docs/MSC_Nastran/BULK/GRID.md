## [GRID](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.GRID.xhtml) - Grid Point

Defines the location of a geometric grid point, the directions of its displacement, and its permanent single-point constraints.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GRID    ID      CP      X1      X2      X3      CD      PS      SEID            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GRID    2       3       1.0     -2.0    3.0             316                     
```

#### Free Field Large Format Example:

```nastran
GRID*, 2, , 1.0, -2.0,
*, 3.0, , 136
```

##### Translates to:

```nastran
$---1---$-------2-------$-------3-------$-------4-------$-------5-------$---6---$
GRID*   2                               1.0             -2.0            +       
*+      3.0                             136                                     
```

The comma immediately following the -2.0 is required if NASTRAN IFPSTAR=NO is used. The comma is always recommended even if NASTRAN IFPSTAR=YES (Default) is used.

```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID         │ Grid point identification number.  (0 < Integer < 100,000,000, see Remark 6.)                      │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CP         │ Identification number of coordinate system in which the location of the grid point is defined.     │
│            │  (Integer > 0 or blank*)                                                                           │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X1, X2, X3 │ Location of the grid point in coordinate system CP.  (Real; Default = 0.0)                         │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CD         │ Identification number of coordinate system in which the displacements, degrees-of-freedom,         │
│            │ constraints, and solution vectors are defined at the grid point. (Integer > -1 or blank, see       │
│            │ Remark 3.)*                                                                                        │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PS         │ Permanent single-point constraints associated with the grid point.  (Any of the Integers 1 through │
│            │ 6 with no embedded blanks, or blank*.)                                                             │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEID       │ Superelement identification number.  (Integer > 0; Default = 0)                                    │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

* See the GRDSET entry for default options for the CP, CD, PS, and SEID fields.

#### Remarks:

1. All grid point identification numbers must be unique with respect to all other structural, scalar, fluid and extra (EPOINT) points.
2. The meaning of X1, X2, and X3 depends on the type of coordinate system CP as follows (see the CORDij entry descriptions):

```text
┌─────────────┬────┬────────────┬────────────┐
│ Type        │ X1 │ X2         │ X3         │
├─────────────┼────┼────────────┼────────────┤
│ Rectangular │ X  │ Y          │ Z          │
├─────────────┼────┼────────────┼────────────┤
│ Cylindrical │ R  │ θ(degrees) │ Z          │
├─────────────┼────┼────────────┼────────────┤
│ Spherical   │ R  │ θ(degrees) │ φ(degrees) │
└─────────────┴────┴────────────┴────────────┘
```

See  Grid Point and Coordinate System Definition  in the  MSC Nastran Reference Guide , for a definition of coordinate system terminology.

3. The collection of all CD coordinate systems defined on all   GRID entries is called the global coordinate system. All degrees-of-freedom, constraints, and solution vectors are expressed in the global coordinate system. It is recommended that points on the z-axis not have their displacement directions defined with cylindrical or spherical coordinates. (See further remarks on the CORD1S, CORD2S, CORD1C, and CORD2C.)
4. The SEID   field can be overridden by use of the SESET entry.
5. If CD = -1, then this defines a fluid grid point in coupled fluid-structural analysis. This type   of point may   only connect the CAABSF, CHACBR, CHACAB, CHEXA, CPENTA, CPYRAM, and CTETRA   elements to define fluid elements.
6. A zero (or blank if the GRDSET entry is not specified) in the CP and CD fields refers to the basic coordinate system.
