## [EXCLUDE](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.EXCLUDE.xhtml)

Default = 0.

PARAM, EXCLUDE, Integer. Add PARAM, EXCLUDE, n in the buckling subcase(s) to activate linear buckling with local exclusion of differential stiffness. If n is positive, it selects the SET1 entry ID in the bulk data that defines the list of GRID points for which differential stiffness will be ignored. If n is negative, the absolute value selects the SET1 entry ID in the bulk data that defines the list of GRID points for which differential stiffness will be retained.

To select the GRID points care must be exercised by the user which follow natural mesh lines as much as possible, otherwise an element may be connected to some GRID points that have differential stiffness and some GRID points that do not. Sometimes this is impossible to ensure, and so the transition zone between retained-excluded differential stiffness should not be in, or close to, a region of interest. Selecting stiff (unlikely to buckle) zones for the transition zones is also advised.

While, EXCLUDE, can occur in either Case Control or Bulk Data, for multiple buckling subcases, it must occur in Case Control.

SOL105, is a linearization of a nonlinear behavior, therefore it is recommended that parts of the structure, for which buckling is important, are in the residual or SE=0. However, if the user puts the parts of the structure for which buckling is to be considered in a BEGIN BULK SUPER=n; then the sets must be in the Part superelement or Module.

Multiple buckling subcases with different exclude values are allowed. For example:

```nastran
DISPLACEMENT(PLOT,SORT1,REAL)=ALL
SUBCASE 1
  SUBTITLE=Static Load
  SPC = 2
  LOAD = 2
  analysis=statics
subcase 2
  SUBTITLE = Buckling Subcase
  SPC=2
  statsub=1
  analysis=buck
  METHOD=105
   param,exclude,-1   
subcase 3
  SUBTITLE = Buckling Subcase
  SPC=2
  analysis=buck
  statsub=1
  METHOD=105
   param,exclude,-2   
BEGIN BULK
```
