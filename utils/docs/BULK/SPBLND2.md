## [SPBLND2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SPBLND2.xhtml) - Curve Based Spline Blending

Defines a curve based blending of two splines.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPBLND2 SID     SID1    SID2    OPT     AELIST  D1      D2                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPBLND2 130     110     120     LIN     4       1.5     2.5                     
```

```text
┌───────────┬──────────────────────────────────────────────────┬─────────────────────────────────────┐
│ Describer │ Meaning                                          │                                     │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────┤
│ SID       │ Identification number of blended spline.         │                                     │
│           │  (Integer > 0)                                   │                                     │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────┤
│ SID1      │ Identification number of first spline (may be a  │                                     │
│           │ blended spline). (Integer > 0)                   │                                     │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────┤
│ SID2      │ Identification number of second spline (may be a │                                     │
│           │ blended spline). (Integer > 0)                   │                                     │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────┤
│ OPT       │ Blending Option:                                 │                                     │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────┤
│           │ LIN                                              │ Linear Blending Functions (Default) │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────┤
│           │ CUB                                              │ Cubic Blending Functions            │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────┤
│ AELIST    │ Identification number of an AELIST entry listing │                                     │
│           │ the aerodynamic grid points that define a        │                                     │
│           │ reference curve. (Integer > 0)                   │                                     │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────┤
│ D1        │ Blending Depth of first spline. (Real > 0.0)     │                                     │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────┤
│ D2        │ Blending Depth of second spline. (Real > 0.0)    │                                     │
└───────────┴──────────────────────────────────────────────────┴─────────────────────────────────────┘
```
