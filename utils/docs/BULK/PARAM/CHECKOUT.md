## [CHECKOUT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.CHECKOUT.xhtml)

Default    = NO

CHECKOUT=YES requests a model checkout in SOLs 101 through 200.  See   Geometry Processing in SubDMAP PHASE0   in the MSC Nastran Reference Guide.  The run will terminate prior to phase 1 of superelement analysis.  The PARAM,POST options are also available with PARAM,CHECKOUT,YES.  The following options and their user parameters are also available with PARAM,CHECKOUT,YES:

1. PARAM,PRTGPL,YES

     Prints a list of external grid and scalar point numbers in internal sort.  It also lists external grid and scalar point numbers along with the corresponding sequence numbers in internal sort.  The sequence numbers are defined as (1000*external number) and will reflect any user-requested resequencing.

2. PARAM,PRTEQXIN,YES

     Prints a list of external and internal grid and scalar numbers in external sort.  It also lists external grid and scalar numbers with the corresponding coded SIL number in external sort.  The coded SIL numbers are defined as:

(1)     ![parameters01609.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01609.jpg?_LANG=enus)

     The SIL numbers correspond to degrees-of-freedom, i.e., one SIL number for scalar point and six SIL numbers for a grid point.

3. PARAM,PRTGPDT,YES

     Prints, for each grid and scalar point, the following information in internal sort:

     • Coordinate system ID in which grid point geometry is defined (ID=-1 for scalar points).

     • Spatial location of grid points in the “CP” coordinate system.  For scalar points, all entries are zero.

     • Coordinate system ID for grid point displacements, forces, and constraints (ID=0 for scalar points).

     • Permanent single-point constraints defined on GRID Bulk Data entries.  A zero is entered for scalar points.

4. PARAM,PRTCSTM,YES

     Prints for each coordinate system type the transformation matrix from the global to the basic coordinate system, and the origin of the indicated coordinate system in the basic coordinate system.  Coordinate system types are:  1 = rectangular; 2 = cylindrical; 3 = spherical.

5. PARAM,PRTBGPDT,YES

     Prints all grid and scalar points listed in internal sort with their x, y, and z coordinates in the basic coordinate system.  In addition, the coordinate system ID for grid point displacements, forces, and constraints is indicated for each grid point (ID=-1 for scalar points).  The x, y, and z coordinates of scalar points are zero.

6. PARAM,PRTGPTT,YES

     Prints, for each temperature load set, information on element and grid point temperatures.

7. PARAM,PRTMGG,YES

     Prints the g-size mass matrix labeled by grid point/degree-of-freedom.

8. PARAM,PRTPG,YES

     Prints the g-size load vectors labeled by grid point/degree-of-freedom.

9. The summation of forces and moments of applied loads in the basic coordinate system is automatically output for each loading condition requested in the Case Control Section.  Related to parameters GPECT and PROUT, and Case Control command ELSUM.

