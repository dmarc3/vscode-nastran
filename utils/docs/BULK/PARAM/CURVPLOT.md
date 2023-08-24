## [CURVPLOT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.CURVPLOT.xhtml)

Default    =    -1

PARAM,CURVPLOT,1 requests that x-y (or curve) plots whose abscissas are a sequence of grid points and whose ordinates may be displacements, loads, SPC forces, or grid point stresses.  To obtain stress plots, set the CURV parameter to +1.  The default for DOPT is the length between grid points.

Specify the XYOUTPUT Case Control command in the usual manner, replacing the point ID with the SID of SET1 Bulk Data entries.

The SET1 Bulk Data entries must contain unique SIDs for each set of grid points to be plotted.

User requests for xy-plots of output quantities appear in the Case Control Section in the standard form.  For example,

```nastran
.
.
.
OUTPUT(XYOUT)
.
.
XYPLOT DISP 1/4(T3)
.
.
XYPLOT SPCF 2/5(T1)
.
.
BEGIN BULK
```

The first XYPLOT command will   produce an xy-plot from the displacement output of subcase 1.  The abscissa of the curve will   reflect the grid point IDs listed on the SET1 entry with an SID of 4, and the ordinate will reflect the T3 component of displacement at these grid points.  The second XYPLOT command will produce an xy-plot whose ordinates are the T1 components of the forces of constraint in subcase 2 at the grid points listed on the SET1 entry with an SlD of 5.

The user has some degree of control over the scaling of the abscissas on these xy-plots.  This control is exercised through the parameter DOPT on a PARAM Bulk Data entry.  The legal values of this parameter provide the following scaling options for the abscissas.

    See link for table.

Thus, the default value of DOPT will place the first grid point listed on the referenced SET1 entry at the origin, and subsequent grid points will be located along the abscissa at intervals proportional to the distance between that grid point and its predecessor.  Values of DOPT equal to 1, 2, or 3 will   scale the abscissa so that the interval between adjacent grid points is proportional to the difference in the X, the Y, and the Z components of the subject grid points respectively.  DOPT=4 will space the grid points equally along the abscissa.

