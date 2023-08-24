## [AESURFS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AESURFS.xhtml) - Structural Grids on an Aerodynamic Control Surface

Optional specification of the structural nodes associated with an aerodynamic control surface that has been defined on an AESURF entry. The mass associated with these structural nodes define the control surface moment(s) of inertia about the hinge line(s).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AESURFS ID      LABEL           LIST1           LIST2                           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AESURFS 6001    ELEV            6002            6003                            
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Controller identification number, see Remark 1. (Integer > 0)                                   │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABEL     │ Controller name, see Remark 1. (Character)                                                      │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LISTi     │ Identification number of a SET1 entry that lists the structural grid points that are associated │
│           │ with this component of this control surface. (Integer > 0)                                      │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The LABEL on the AESURFS entry must match one on an AESURF entry. The ID is ignored.
2. The mass of the GRID points listed on the SETi entries is used to compute the mass moment of inertia of the control surface about its i-th hinge line. The presence of these data will allow the hinge moments to include the inertial forces in the computations. These data are optional, and, if omitted, result in hinge moments which include only the applied, aeroelastically corrected, forces.
3. These data will be associated to a structural superelement by grid list or partitioned SUPER=<seid> if the AESURFS is defined in the main bulk data section.
