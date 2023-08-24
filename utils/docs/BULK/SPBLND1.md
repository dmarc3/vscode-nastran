## [SPBLND1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SPBLND1.xhtml) - Strip Based Spline Blending

Defines a strip based blending of two splines.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPBLND1 SID     SID1    SID2    OPT     W1      GID     D1      D2      +       
+       X1      X2      X3      CID                                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPBLND1 130     110     120     CUB             227     4.05    4.05            
        1.0     0.0     0.0     110                                             
```

```text
┌────────────┬───────────────────────────────────────────────────┬────────────────────────────┐
│ Describer  │ Meaning                                           │                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────┤
│ SID        │ Identification number of blended spline.          │                            │
│            │  (Integer > 0)                                    │                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────┤
│ SID1       │ Identification number of first spline (may be a   │                            │
│            │ blended spline). (Integer > 0)                    │                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────┤
│ SID2       │ Identification number of second spline (may be a  │                            │
│            │ blended spline). (Integer > 0)                    │                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────┤
│ OPT        │ Blending Option:                                  │                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────┤
│            │ WAVG                                              │ Weighted Average (Default) │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────┤
│            │ LIN                                               │ Linear Blending Functions  │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────┤
│            │ CUB                                               │ Cubic Blending Functions   │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────┤
│ W1         │ Weight to be used with first spline. (0.0 < Real  │                            │
│            │ < 1.0; Default = 0.5) (Used only with option      │                            │
│            │ WAVG)                                             │                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────┤
│ GID        │ Identification number of an aerodynamic grid to   │                            │
│            │ be used as reference grid. (Integer>0)            │                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────┤
│ D1         │ Blending Depth of first spline. (Real > 0.0)      │                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────┤
│ D2         │ Blending Depth of second spline. (Real > 0.0)     │                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────┤
│ X1, X2, X3 │ Components of a direction vector v, in the        │                            │
│            │ coordinate system defined by CID, which is used   │                            │
│            │ to measure the distance from the reference grid.  │                            │
│            │ (See Remark 3.)                                   │                            │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────┤
│ CID        │ Identification number of a rectangular coordinate │                            │
│            │ system used to define the direction vector.       │                            │
│            │ (Integer > 0; Default = 0; indicating the basic   │                            │
│            │ coordinate system)                                │                            │
└────────────┴───────────────────────────────────────────────────┴────────────────────────────┘
```
