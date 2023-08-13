## [CBUSH1D](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CBUSH1D.xhtml) - Rod Type Spring-and-Damper Connection

Defines the connectivity of a one-dimensional spring and viscous damper element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBUSH1D EID     PID     GA      GB      CID                                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBUSH1D 35      102     108     112                                             
```

```text
┌───────────┬─────────────────────────────────────────────┬────────────────┐
│ Describer │ Meaning                                     │ Default Values │
├───────────┼─────────────────────────────────────────────┼────────────────┤
│ EID       │ Element identification number.              │ Required       │
│           │ (0 < Integer < 100,000,000)                 │                │
├───────────┼─────────────────────────────────────────────┼────────────────┤
│ PID       │ Property identification number of a PBUSH1D │ EID            │
│           │ entry.  (Integer > 0)                       │                │
├───────────┼─────────────────────────────────────────────┼────────────────┤
│ GA        │ Grid point id of first grid.                │ Required       │
├───────────┼─────────────────────────────────────────────┼────────────────┤
│ GB        │ Grid point id of second grid                │ blank          │
├───────────┼─────────────────────────────────────────────┼────────────────┤
│ CID       │ Coordinate system id.  (Integer > 0)        │ blank          │
└───────────┴─────────────────────────────────────────────┴────────────────┘
```

#### Remarks:

1. For noncoincident grids  ![bulkc102508.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102508.jpg?_LANG=enus)  and if CID is blank, the line GA to GB is the element axis. In geometric nonlinear analysis, the element axis (line GA to GB) follows the deformation of grids GA and GB. See  .
2. If CID  >  0 is specified, the x-axis of the CID coordinate system is the element axis.  In geometric nonlinear analysis, the element axis (x-axis of CID) remains fixed.
3. If GA and GB are coincident or if GB is blank, then CID  >  0 must be specified and the element axis is the x-axis of CID.

![bulkc102510.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102510.jpg?_LANG=enus)

Figure 9-22 Spring and Damper Element
