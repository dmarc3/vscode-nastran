## [GRDSET](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.GRDSET.xhtml) - GRID Entry Defaults

Defines default options for fields 3, 7, 8, and 9 of all GRID entries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GRDSET          CP                              CD      PS      SEID            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GRDSET          16                              32      3456                    
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CP        │ Identification number of coordinate system in which the location of the grid points are defined. │
│           │  (Integer > 0 or blank)                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CD        │ Identification number of coordinate system in which the displacements, degrees-of-freedom,       │
│           │ constraints, and solution vectors of the grid point are defined.   (Integer > -1 or blank)       │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PS        │ Permanent single-point constraints on the grid point.  (Any combination of Integers 1 through 6  │
│           │ with no embedded blanks, or blank.)                                                              │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEID      │ Superelement identification number.  (Integer > 0 or blank)                                      │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The contents of fields 3, 7, 8, or 9 of this entry are assumed for the corresponding fields of any GRID entry whose field 3, 7, 8, and 9 are blank.  If any of these fields on the GRID entry are blank, the default option defined by this entry occurs for that field.  If no permanent single-point constraints are desired, one of the coordinate systems is basic, or the grid is assigned to the residual structure then the default may be overridden on the GRID entry by making one of fields 3, 7, 8, or 9 zero (rather than blank).  Only one GRDSET entry may appear in the Bulk Data Section.
2. The primary purpose of this entry is to minimize the burden of preparing data for problems with a large amount of repetition (e.g., two-dimensional pinned-joint problems).
3. At least one of the fields CP, CD, PS, or SEID must be specified.
