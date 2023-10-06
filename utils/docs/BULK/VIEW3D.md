## [VIEW3D](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.VIEW3D.xhtml) - View Factor Definition - Gaussian Integration Method

Defines parameters to control and/or request the Gaussian Integration method of view factor calculation for a specified cavity.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
VIEW3D  ICAVITY GITB    GIPS    CIER    ETOL    ZTOL    WTOL    RADCHK          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
VIEW3D  1       2       2       4               1.0E-6                          
```

```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ ICAVITY   │ Radiant cavity identification number on RADCAV    │                                                   │
│           │ entry.  (Integer > 0)                             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ GITB      │ Gaussian integration order to be implemented in   │                                                   │
│           │ calculating net effective view factors in the     │                                                   │
│           │ presence of third-body shadowing.  (Integer 2, 3, │                                                   │
│           │ 4, 5, 6 or 10; Default = 4)                       │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ GIPS      │ Gaussian integration order to be implemented in   │                                                   │
│           │ calculating net effective view factors in the     │                                                   │
│           │ presence of self-shadowing.  (Integer 2, 3, 4, 5, │                                                   │
│           │ 6 or 10; Default = 4)                             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ CIER      │ Discretization level used in the semi-analytic    │                                                   │
│           │ contour integration method.  (1 < Integer < 20;   │                                                   │
│           │ Default = 4)                                      │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ ETOL      │ Error estimate above which a corrected view       │                                                   │
│           │ factor is calculated using the semi-analytic      │                                                   │
│           │ contour integration method.  (Real > 0.0; Default │                                                   │
│           │ = 0.1)                                            │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ ZTOL      │ Assumed level of calculation below which the      │                                                   │
│           │ numbers are considered to be zero.  (Real > 0.0;  │                                                   │
│           │ Default = 1.E-10)                                 │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ WTOL      │ Assumed degree of warpage above which the actual  │                                                   │
│           │ value of  will be calculated.  (0.0 < Real < 1.0; │                                                   │
│           │ Default = 0.01)                                   │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ RADCHK    │ Type of diagnostic output desired for the         │                                                   │
│           │ radiation exchange surfaces.  (Integer; Default = │                                                   │
│           │ 3)                                                │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ -1                                                │ No diagnostic output requested                    │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 1                                                 │ Grid table and element connectivity               │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 2                                                 │ Surface Diagnostics - Surface type, area,         │
│           │                                                   │ skewness, taper, warpage, grid point sequencing,  │
│           │                                                   │ aspect ratio, and shading flags.                  │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 3                                                 │ Area, view factor, area-view factor product with  │
│           │                                                   │ error estimate, existence flags for partial self- │
│           │                                                   │ shadowing, third-body shadowing with error        │
│           │                                                   │ estimate, and enclosure summations for view       │
│           │                                                   │ factor.  (Default)                                │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 0                                                 │ Same as RADCHK = 1, 2, and 3                      │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 12                                                │ Same as RADCHK = 1 and 2                          │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 13                                                │ Same as RADCHK = 1 and 3                          │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 23                                                │ Same as RADCHK = 2 and 3                          │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```
