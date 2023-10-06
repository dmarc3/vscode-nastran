## [GRDPNT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.GRDPNT.xhtml)

Default =    -1

GRDPNT > -1 will cause the grid point weight generator to be executed. The default value (GRDPNT = -1) suppresses the computation and output of this data. GRDPNT specifies the identification number of the grid point to be used as a reference point. If GRDPNT = 0 or is not a defined grid point, the reference point is taken as the origin of the basic coordinate system. All   fluid-related masses and masses on scalar points are ignored. The following weight and balance information is automatically printed following the execution of the grid point weight generator.

* Reference point.

* Rigid body mass matrix   [MO] relative to the reference point in the basic coordinate system.

* Transformation matrix [S] from the basic coordinate system to principal mass axes.

* Principal masses (mass) and associated centers of gravity (X-C.G., Y-C.G., Z-C.G.).

* Inertia matrix I(S) about the center of gravity relative to the principal mass axes. Note: Change the signs of the off-diagonal terms to produce the “inertia tensor.”

* Principal inertias   I(Q)   about the center of gravity.

* Transformation matrix [Q] between S-axes and Q-axes. The columns of [Q] are the unit direction vectors for the corresponding principal inertias.

In superelement static or geometric nonlinear analysis, GRDPNT > -1 also specifies the grid point to be used in computing resultants, in the basic coordinate system, of external loads and single point constraint forces applied to each superelement.  If GRDPNT is not a grid point (including the default value of -1), then the resultants are computed about the origin of the basic coordinate system.  In superelement analysis, weights and resultants are computed for each superelement without the effects of its upstream superelements.

For axisymmetric elements, the GRDPNT output may be misleading as the algorithm is designed for 3D elements. For the TRIAX6 element, the mass is for the entire model and the center of gravity and inertias are for the cross section in the x-z plane. For the hyperelastic TRIAX and QUADX elements, the mass is for one radian and the center of gravity and inertias are for the cross section in the x-y plane. For the harmonic TRIAX and QUADX elements, the mass is for the entire model and the center of gravity and inertias are for the cross section in the element coordinate system x-y plane.

