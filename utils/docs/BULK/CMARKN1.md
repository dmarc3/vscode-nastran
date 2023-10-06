## [CMARKN1](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CMARKN1.xhtml) - One-Noded Marker Connectivity Definition

Defines a 1-noded marker element on a grid point. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CMARKN1 ID      PID     G1                                                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CMARKN1 7       1       9                                                       
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                           │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ ID        │ Unique element number. (Integer > 0; Required)                    │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ PID       │ Property ID referring to a PMARKER entry. (Integer > 0; Required) │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ G         │ Grid point number. (Integer > 0; Required)                        │
└───────────┴───────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. A CMARKB2 element may refer to two types of grid points:
    - Structural grid points, thus grid points that are part of the connectivity of an element
    - Free grid points in space. These grid points do not have mass associated with them. The motion of these grid points is specified by the PMARKER property
2. The ID must be unique in the model and may not be used as structural element ID.
