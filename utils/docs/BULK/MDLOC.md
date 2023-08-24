## [MDLOC](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDLOC.xhtml) - Module Reposition by Translation and/or Rotation

Defines reposition of a Module by listing three non-collinear points in the Module and three corresponding points in Module 0.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDLOC   MODID   PA1     PA2     PA3     PB1     PB2     PB3                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDLOC   110     10      100     111     1010    112     30                      
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODID     │ Module identification number of primary, repeated, or mirrored module (Integer>0).             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PAi       │ GRID or POINT identification numbers of three non-collinear points in (Integer>0): ◾"RMODID's │
│           │ Bulk Data section. RMODID is referenced on MDBULK if this MODID is a secondary (copied) Module │
│           │ ◾"Module MODID's Bulk Data section if this is a primary Module.                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PBi       │ GRID or POINT identification numbers of three non-collinear points in Module 0 (main Bulk Data │
│           │ section). Must have the same relative locations as PAi. (Integer>0).                           │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. MDLOC can only be specified in the main Bulk Data Section and will cause a fatal error message if it appears after the BEGIN MODULE=n command.
2. The Module will be rotated and translated for alignment of the PAi and PBi locations.
3. The PAi and PBi can be either GRIDs or POINTs.
4. PA1, PA2, and PA3 must be contained in the BEGIN Module=MODID Bulk Data section.
5. PB1, PB2, and PB3 must be specified in the main Bulk Data Section (Module 0).
6. PB1, PB2, and PB3 must have the same relative locations as PA1, PA2, and PA3.
7. Three GRIDs or POINTs are required even if the Module connects to only one or two boundary grids.
8. Coordinate systems, global displacement directions, and element coordinate systems for the Module will rotated and translated.
9. The global coordinate directions of the grid points in the Module will be transformed internally to the global coordinate directions of the grid points in the Module 0. For displacement data recovery, the output will be in the original global coordinate system.
10. The translation and rotation of the Module to the new position is accomplished by defining local rectangular coordinate systems based on the specified grid locations:
    - The local systems have their origin at PX1 and the x-axis points from PX1 to PX2.
    - The y-axis lies in the plane containing PX1, PX2, and PX3, is perpendicular to the x-axis, and points toward PX3.
    - The z-axis is defined by the cross product of the x-axis into the y-axis.
    - The rotation and translation transformation aligns the local system defined by the Module grids with the local system defined by the main Bulk Data Section grids
11. This entry will only work if Modules (BEGIN MODULE) exist.
