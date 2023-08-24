## [MDROT1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDROT1.xhtml) - Module Reposition by Rotation - Option 1

Defines a Module rotation by specifying a rotation vector and reference point in Module 0.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDROT1  MVID    RID     IDS     IDE     MAG                                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDROT1  110             45      72      90.                                     
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MVID      │ Move identification number to be referenced on an MDMOVE entry. (Integer>0).                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RID       │ GRID or POINT identification number of a reference point at which rotation will occur. If blank or │
│           │ 0 then Module will be rotated about rotation vector defined from IDS to IDE. (Integer ≥ 0,         │
│           │ Default=0).                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDS       │ GRID or POINT identification number of rotation vector's starting point. (Integer>0)               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDE       │ GRID or POINT identification number of rotation vector's end point. (Integer>0)                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAG       │ Magnitude of rotation in degrees. (Real ≠ 0.0).                                                    │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. MDROT1 can only be specified in the main Bulk Data Section (Module 0) and will cause a fatal error message if it appears after the BEGIN MODULE=n command.
2. MDROT1 must be referenced by an MDMOVE entry in order to reposition a Module.
3. GRID or POINT entries referenced on this entry must be defined in the main Bulk Data Section (Module 0).
