## [SPRELAX](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SPRELAX.xhtml) - Spline Relaxation

Defines relaxation of a spline based on an adjacent spline.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPRELAX SID1    SID2    LIST2   DREF    LIST1                                   
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPRELAX 140     130     50      5.0                                             
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID1      │ Identification number of spline to be modified (may be a blended spline and need not be unique). │
│           │ (Integer > 0)                                                                                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID2      │ Identification number of adjacent spline (may be a blended spline). (Integer > 0)                │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LIST2     │ Identification of an AELIST entry listing aerodynamic grid points that define the curve used in  │
│           │ the relaxation . (Integer > 0) (See Remark 1.)                                                   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DREF      │ Reference Distance (Real > 0.) (See Remark 2.)                                                   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LIST1     │ Identification number of an AELIST entry listing aerodynamic grid points of the spline to be     │
│           │ modified (optional). (Integer > 0; Default = 0) (See Remark 3.)                                  │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
