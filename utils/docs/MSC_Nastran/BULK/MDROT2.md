## [MDROT2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDROT2.xhtml) - Module Reposition by Rotation - Option 2

Defines a Module rotation by specifying a coordinate system axis for the rotation vector.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDROT2  MVID    CID     RIDS    AXIS    MAG                                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDROT2  40              45      Y       90.                                     
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MVID      │ Move identification number to be referenced on an MDMOVE entry. (Integer>0).                     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID       │ Coordinate system identification number of a CORDij entry. Blank or zero means basic coordinate  │
│           │ system. Module will be rotated about CID's origin if RID is blank. (Integer ≥ 0, default=0).     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RID       │ GRID or POINT identification number of a reference point at which rotation will occur. If RID is │
│           │ blank or 0 then the origin of CID will be used. (Integer ≥ 0, Default=0)                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AXIS      │ Coordinate system axis: “X”, “Y”, “Z”, “MX”, “MY”, or “MZ”. The latter three values indicate the │
│           │ negative side of the axis. (Character)                                                           │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAG       │ Magnitude of rotation in degrees. (Real ≠ 0.0).                                                  │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. MDROT2 can only be specified in the main Bulk Data Section (Module 0) and will cause a fatal error message if it appears after the BEGIN MODULE = n command.
2. MDROT2 must be referenced by an MDMOVE entry in order to reposition a Module.
3. CORDij, GRID or POINT entries referenced on this entry must be defined in the main Bulk Data Section (Module 0).
