## [MDLPRM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDLPRM.xhtml) - Model Parameters

Specifies parameters which affect the solution of the structural model.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDLPRM  PARAM1  VAL1    PARAM2  VAL2    PARAM3  VAL3    -etc.-                  
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDLPRM  QR6ROT  2       QRSHEAR 1                                               
```
PARAMi

Name of the parameter. Allowable names are given in Table 18. (Character)

VALi

Value of the parameter. (Real or Integer; see Table 18)

--------------------

#### Remark:

1. Multiple entries of MDLPRM are allowed in the Bulk Data Section. However, multiple entries of a particular parameter PARAMi are illegal.

2. If Modules are present then this entry may only be specified in the main Bulk Data section.

Name

Description, Type, and Default Values

BOLTCNEL

Flag to control automatic mapping of BOLT1 elements to Advanced Nonlinear Elements using internally generated nonlinear property extensions.

0

Map BOLT1 elements as well as other elements that share same element properties with BOLT1 elements (Default).

1

Map all elements connected to BOLT1 elements as well as other elements that share same element properties.

BRTOBM

Flag to determine whether to convert a CBAR element to a CBEAM element for the nonlinear analysis.

0

Do not convert CBAR to CBEAM. (Default)

1

Convert CBAR to CBEAM.

-1

Same as 1, but print the converted Bulk Data entries on f06 file.

BUSHRT

Flag to control large rotation effects for CBUSH or CFAST elements in nonlinear analysis (SOL400). For CBUSH, this flag is overridden by the LRGR field on the element PBUSHT entry.

0

Large rotation effects are included. Element coordinate system is rotated with the rotation of grid A. (Default)

1

No large rotation effects. Small rotation is used.

2

Large rotation effects are included. A mid-increment method is used to rotate the element system. This is recommended for large rotation analysis. For the CBUSH element, CID must equal zero.

COMPN1

Control if stresses and strains of advanced composite elements use MSC Nastran conventional layer format

NO(default)

Don't use

YES

Use conventional layer format

DBCTOLE

Tolerance for DBC date conversion, real(default=1.e-4) >= 0.0

DCFLTEXP

Determines the exponent of the tolerance value used to filter out small entries from the coefficient matrix before a matrix decomposition. In each column, matrix entries which are DCFLTEXP orders of magnitude smaller than the diagonal entry of the column are filtered out. If DCFLTEXP=0, then the coefficient matrix is not altered. (Integer; Default = 0)

DELELAS

Randomly delete c*100% of CELASi elements in a job. (0.0 < c < 1.0; Default: c = 0.02). If entry is not present, all CELASi elements are retained. Default of .02 is used only if entry is written as: MDLPRM, DELELAS.

DELFAST

Randomly delete c*100% of CFAST elements in a job. (0.0 < c < 1.0; Default: c = 0.02). If entry is not present, all CFAST elements are retained. Default of .02 is used only if entry is written as: MDLPRM, DELFAST

The value on this entry will override the PARAM, CFRANDEL, value entry. PARAM, CFDIAGP, YES will give the ID of the CFAST elements deleted.

DELMASS

Randomly delete c*100% of CMASSi, CONM1, and CONM2 elements in a job. (0.0 < c < 1.0; Default: c = 0.02). If entry is not present, all CMASSi elements are retained. Default of .02 is used only if entry is written as: MDLPRM, DELMASS.

DELSEAM

Randomly delete c*100% of CSEAM elements in a job. (0.0 < c < 1.0; Default: c = 0.02). If entry is not present, all CSEAM elements are retained. Default of .02 is used only if entry is written as: MDLPRM, DELSEAM.

DELWELD

Randomly delete c*100% of CWELD elements in a job. (0.0 < c < 1.0; Default: c = 0.02). If entry is not present, all CWELD elements are retained. Default of .02 is used only if entry is written as: MDLPRM, DELWELD.

The value on this entry will override the PARAM, CWRANDEL, value entry. PARAM, CWDIAGP, YES will give the ID of the CWELD elements deleted.

GEV1417

See Remark 9 of PBUSH

0

Use GE default rules on PBUSH. (Default)

1

Use Nastran Version 2014-2017 incompatible rule for GE defaults.

GMOVR3

In SOL400, RIGID=LAGRANGE, for any RBE3 element with REFGRID grid coincident with all its connected Gi,j nodes, a small perturbation is applied to the Gi,j nodes.

The RBE3 element is a least square fit element, where a matrix, A=ST W S is formed. S is a skew-symmetric matrix of coordinate differences and W is a weighting matrix. For least squares, the A matrix must be inverted and for connections such as a cascading system (shown in figure), in SOL400 nonlinear analysis (RIGID=LAGRANGE required) where rotations are considered, the Collector RBE3 “Master REFGRID” grid should not be coincident with the coincident RBE3 weighted Gi,j nodes as a “small” length is necessary to provide rotation information. To correct this condition, a small perturbation is provided to ALL connected Gi,j nodes of (xk + Δv, yk + Δv, zk + Δv).

The Gi,j nodes are the preferred nodes to move, because, often they are just the spatial locations where FEM models from different groups join a common structural component and the REFGRID is often an actual structural mesh node.

This entry only affects RBE3 elements meeting the following criterion:

1.   Let xq, yq, zq be the coordinates of the REFGRID and xk, yk, zk the coordinates of one of the connected Gi,j nodes.

2.   If |xk - xq|, |yk -yq|, and |zk - zq| are all less than or equal to GMOVR3T (default=0.001) for ALL connected Gi,j nodes, the grids are considered coincident.

(Integer; Default = -1)

-1

Do not check coincidence

0

Check coincidence but do not perturb. The program issues a fatal message and aborts run while coincidence happens.

1

Perturbate all coincident coordinates of the connected Gi,j nodes.

2

Perturbate the coincident REFGRID grid.

3

GMOVR3 Perturbation is overwritten for the Gi,j nodes of specific RBE3 elements in SOL400, RIGID=LAGRANGE, for any RBE3 element with REFGRID grid coincident with all its connected Gi,j nodes. For elements not overwritten case, set GMOVR3 = 1. The elements to be overwritten are defined on a GMOVR3 Bulk Data entry.

4

GMOVR3 Perturbation is overwritten for the REFGRID grid of specific RBE3 elements in SOL400, RIGID=LAGRANGE, for any RBE3 element with REFGRID grid coincident with all its connected Gi,j nodes. For elements not overwritten case, set GMOVR3 = 2. The elements to be overwritten are defined on a GMOVR3 Bulk Data entry.

GMOVRD

The Grids defined by above GMOVR3 entry will be given a Δv = GMOVRD value. The user should avoid very small perturbation values as the point is to provide a finite rotation length. For large structural models, 0.01 ≤ GMOVRD ≤ 0.1 seem to have relatively small effect on displacement values and reasonable convergence times. (Real; Default=0.01)

GMOVR3T

Coincident grid zero tolerance. (Real ≥ 0.0; Default=0.001)

GNLSTN

Strain formulation flag for QUADR/TRIAR elements used in geometric nonlinear analysis. (Parameter LGDISP=1)

0

Small strain. (Default)

1

Green strain.

HDF5

Parameter to create NH5RDB database

-1

Do not create NH5RDB(default)

0

Create NH5RDB without compression

1

Create NH5RDB with compression

2

Create uncompressed NH5RDB database without input data.

3

Create compressed NH5RDB database without input data.

This parameter will be deprecated, please use parameters of PRCISION, CMPRMTHD and LEVEL in HDF5OUT entry instead.

H5GM34

Write GEOM3 and GEOM4 data in NH5RDB

1

Write GEOM3 and GEOM4 data in NH5RDB.

0

Do not write GEOM3 and GEOM4 data in NH5RDB.

-1

Use OP2GM34 setting for GEOM3 and GEOM4 output (Default).

This parameter will be deprecated, please use GM34 parameter in HDF5OUT entry instead.

H5INFO

Write job run information in NH5RDB or not.

1

Yes (Default)

0

No

This parameter will be deprecated, please use INFO parameter in HDF5OUT entry instead

H5MDL

Write model input data in separate file

2

Write model input data only

1

Write model input data into a separate file

0

Do not write model input data into a separate file (Default)

-1

Use OP2GM34 setting for GEOM3 and GEOM4 output

This parameter will be deprecated, please use MDL parameter in HDF5OUT entry instead.

H5MTX

Write matrix data in separate file

1

Write matrix data into a separate file

0

Do not write matrix data into a separate file (Default)

This parameter will be deprecated, please use MTX parameter in HDF5OUT entry instead.

H5NORDOF

Parameter to suppress output rotational components to NH5RDB database

0

Output both translational and rotational components to NH5RDB

database (Default).

1

Do not output rotational components to NH5DB database.

Only used when HDF5 is 0 or 1.

This parameter will be deprecated, please use ROTDOF parameter in HDF5OUT entry instead.

H5SGENL

Set compression factor for NLOUT output datasets

0 to 10

Scale factor with scaleoffset lossy compression (Default=3)

-1

Use lossless compression

This parameter will be deprecated, please use SGENL parameter in HDF5OUT entry  instead.

H5SSTRN

Set compression factor for NLOUT strain type output datasets

0 to 10

Scale factor with scaleoffset lossy compression (Default=6)

-1

Use lossless compression

This parameter will be deprecated, please use SSTRN parameter in HDF5OUT entry instead.

H5XHH

Write BHH, MHH and KHH matrices in NH5RDB

0

Do not write BHH, MHH and KHH in NH5RDB (Default)

1

Write BHH, MHH and KHH in NH5RDB

This parameter will be deprecated, please use XHH parameter in HDF5OUT entry instead.

IGNSHBDN

Check adjacent shell elements have opposite direction of normal vector, if found

0(default)

Issue a user fatal message

1

Issue a user warning message

INTOUT

Flag to control FORCE/STRESS/STRAIN OUTPUT location for QUADR/TRIAR elements

0

Corner output. (Default)

1

Integration point output.

LMT2MPC

Parameter to enable the use of elimination method to process Lagrange Multipliers.

0

Do not force the use of elimination method. (Default)

1

Use elimination method to process Lagrange Multipliers using unsymmetric method.

2

Use elimination method to process Lagrange Multipliers using symmetric method (may be faster).

LRGDHFLT

The threshold ratio to set small terms in displacement gradient matrix for Lagrange rigid elements to zero to overcome numerical difficulties.

Suppose HMAX is the maximum absolute element of the matrix, H is another element, if ABS(H)<=LRGDHFLT*HMAX, set H to zero. (Real, LRGDHFLT >= 0.0, Default: LRGDHFLT = 1.E-10)

MLTSPLIN

Parameter to specify whether an aerodynamic grid can be splined more than once.

0

References on separate splines to the same aero grid are not allowed. (Default)

1

Aero grids can be referenced on multiple spline entries.

MPCF129

Request the calculation of MPC forces in SOL129. The forces include only the contributions from linear elements.

0

Don not compute MPC Forces (default)

1

Compute MPC Forces

MXMNMEM

Working area memory size of MAXMIN command in machine words. (Integer, MXMNMEM > 0, Default: MXMNMEM = 9710).

NLDIFF

Flag to determine whether the differential stiffness matrix and follower force stiffness are to be computed for nonlinear elements with geometric nonlinear analysis (parameter LGDISP=1) in SOL 400. Options 3, 4, and 5 are available only for elements with PSHNL1, PSHNL2, PSLN1, or PSHEARN Bulk Data entry.

0

Compute. (Default except for CTRLDEF=SEVERELY of NLSTEP and not 3D contact analysis)

1

Do not compute

2

The differential stiffness matrix and follower force stiffness will not be computed if the tangential stiffness matrix is negative definite (Default for CTRLDEF=SEVERELY of NLSTEP and not 3D contact analysis).

3

Include only the deviatoric part of the differential (or initial stress or geometric) stiffness

4

Include only the tensile part of the differential (or initial stress or geometric) stiffness

5

Include the stress at the beginning of the increment for the differential (or initial stress or geometric) stiffness

NLRSTRTM

Flag to allocate extra necessary memory in a cold start run with Advanced Nonlinear Elements to allow subsequent NLRESTART to be used in a linear perturbation analysis when the cold start run itself is not a linear perturbation analysis.

0

Do not allocate extra memory in cold start run (Default)

1

Allocate extra memory in cold start run to allow NLRESTART to be used with Advanced Nonlinear Elements in a linear perturbation analysis.

NONUPIV

Parameter to select the numeric compute kernel and pivoting methods in MSCLDL and MSCLU sparse direct solvers.  

0

Use the native Bunch-Kauffman threshold pivoting in MSCLDL, and the native threshold partial pivoting in MSCLU (Default).

1

Use no numeric pivoting in MSCLDL and MSCLU.  BLAS3 TRSMs are called to compute the pivot column update to improve performance. Ill-conditioned models may die of “singular matrix” during sparse factorization.

2

Not documented.

3

LAPACK SYTRFs with Bunch-Kaufman pivoting and GETRFs with partial pivoting are called to perform factorizations, and BLAS3 TRSMs are called to compute pivot column update to improve performance.

NSGRDS4

Number of structural grids to be used in dividing a SPLINE4 using the RIS spline method. The spline will be divided into NGRIDS/NSGRDS4 regions, where NGRIDS is the number of grids listed on the associated SET1 entry. (Integer > 0, default=0. If NGRIDS < NSGRDS4, or NSGRDS4 is not specified, no divisions will occur.)

OFFDEF

Element offset definition. A flag to determine how shell elements and bar and beam elements behave when the user supplies ZOFF values on the shell connection entries (CQUAD4, CQUADR, CTRIA3, CTRIAR, CQUAD8, and CTRIA6) and WiA and WiB on CBAR, CBEAM, and CBEAM3 connection entries. (Character)

ELMOFF

Standard Nastran offset method. The ZOFF rotate with the shell element. The WiA and WiB offsets for beams are fixed. MD Nastran R3 and earlier. (Character, Default)

LROFF

Large rotation offsets. The shell normal directions are used to define the offset direction at each shell grid for CQUAD4, CTRIA3, CQUADR, CTRIA4, CQUAD8 and CQUAD8 elements. For beams, WiA and Wib defines the offset direction. This method allows for thermal load effects on ZOFF for shells and WiA and WiB for beams. Thermal load effect for offset is computed based on the grid point or element temperature, and thermal coefficient of the element (see NOTHRM). The mass moment of inertia is computed for the offset due to the grid point location change introduced by offset. Differential stiffness is computed for the offset using the same method as that of the Lagrange formulation of the RBAR. Not supported in SOL106, SOL129 and SOL 200. (Character)

NODIF

LROFF is used but the differential stiffness effect is turned off. (Character)

NOTHRM

LROFF is used but the thermal load effects are turned off.  The thermal load has two effects: 1) the location of thermal load changes due to offset and 2) the length of offset changes due to thermal load. Effect (1) is computed for all solution sequences and Effect (2) is computed for SOL 400 only. Both effects are turned off by NOTHRM. (Character)

NODT

LROFF is used but the differential stiffness and thermal load effect are turned off. (Character)

ELMZ

LROFF is used but the element z-direction is used for the offset direction. IF PARAM, SNORM, 0.0 or the computed value for SNORM is greater then the PARAM,SNORM,value, then the LROFF option will revert to this method for CQUAD4, CTRIA3, CQUADR, CTRIAR, CQUAD8 and CTRIA6. This option is not applicable for beams. (Character)

NOMASS

LROFF is used but the no mass effects are included. (Character)

NDMTZ

LROFF is used but the element z-direction is used for the offset direction and the differential stiffness, the thermal load effects, and the mass effects are turned off. For CQUAD4 and CTRIA3 elements this method should get similar results to the standard ELMOFF method. (Character)

Note: This entry only effects ZOFF calculations for ZOFF specified on the shell connection entries. For Z0 specified on the PCOMP or PCOMPG entries, the standard ELMOFF method will be used.

If the computed value for SNORM is greater then the PARAM,SNORM,value and the user wishes not to change the parameter value, the Bulk Data entry SNORM can be used to override the shell normal.

Solution sequences affected: For linear - all solution sequences. For nonlinear - SOL 400 only. The LROFF method is not implemented into SOLs 106 and 129.

PEXTS4

Used in conjunction with NSGRDS4. After partitioning the spline, each of the smaller splines will be extended by PEXTS4 in each direction (top,bottom, left and right). The value is expressed in percent so that PEXTS4=10.0 would extend the four boundaries by 10%. Real (0.0<PEXTS4<100.0, default=10.0)

PIVTHRSH

Parameter to set the threshold ‘uu’ for numeric pivot selection in the MSCLU and Intel MKL Paradiso solvers.

0 (Default)

uu is set to

◾MSCLU:  

◾MKL Pardiso:  for non-symmetric matrices and  for symmetric indefinite matrices. For more general information, see Intel MKL Pardiso iparm Parameter Table, iparm(10).

-i

uu is set to  for both MSCLU and MKL Pardiso (where i is between 1 and 20)

PRDIDPVT

Control of pivoting in Intel MKL Pardiso, when solving symmetric indefinite matrices. For more information, see Intel MKL Pardiso iparm Parameter Table, iparm(21).

0

1x1 diagonal pivoting

1

1x1 and 2x2 Bunch-Kaufman pivoting (Default)

2

1x1 diagonal pivoting without automatic iterative refinement

3

1x1 and 2x2 Bunch-Kaufman pivoting without automatic iterative refinement

PRDITRFN

Control of iterative refinement step for Intel MKL Pardiso. For more information, see Intel MKL Paridso iparm Parameter Table , iparm(8).

0

Solver automatically performs two steps of iterative refinement (Default)

>0

Maximum number of iterative refinement steps, up to a maximum of nine.

<0

Same as above, but residual is computed using extended precision. Maximum of nine steps.

PRDMTYPE

Control of matrix type for Intel MKL Pardiso. For more information, see Intel MKL Paridso documentation, Input Parameters.

1

real structurally symmetric

2

real symmetric positive definite (SOL 101 default)

-2

real symmetric indefinite (SOL 400 default)

3

complex structurally symmetric

4

complex Hermitian positive definite

-4

complex Hermitian indefinite

6

complex symmetric (SOL 108 & 111 default)

11

real unsymmetric

13

complex unsymmetric (SOL 107 default)

PRDOOC

Control of out-of-core (OOC) solution algorithm in Intel MKL Pardiso. For more information, see Intel MKL Paridso iparm Parameter Table, iparm(60).

0

In-core mode

1

Choose between in-core and OOC mode based on memory (opencore) size

2

Out-of-core mode

PRDWMTCH

Control of weighted matching algorithm in Intel MKL Pardiso. For more  information, see Intel MKL Paridso iparm Parameter Table, iparm(13).

0

Disable matching (SOL 101 default)

1

Enable matching (SOL 107, 108, 111, and SOL 400 default)

PRTELAS

Print list of ID’s of CELASi elements that are deleted.

NO
(or blank)

Turn off the print. (Default)

YES

Turn on the print.

PRTFAST

Print list of ID’s of CFAST elements that are deleted.

NO
(or blank)

Turn off the print. (Default)

YES

Turn on the print.

PRTMASS

Print list of ID’s of CMASSi, CONM1 and CONM2 elements that are deleted.

NO
(or blank)

Turn off the print. (Default)

YES

Turn on the print.

PRTSEAM

Print list of ID’s CSEAM elements that are deleted.

NO
(or blank)

Turn off the print. (Default)

YES

Turn on the print.

PRTWELD

Print list of ID’s of CWELD elements that are deleted.

NO
(or blank)

Turn off the print. (Default)

YES

Turn on the print.

QR6ROT

Parameter to determine whether the drilling degrees-of-freedom are to be deactivated for QUADR/TRIAR elements. If the drilling degrees-of-freedom are deactivated, the QUADR/TRIAR become elements similar to QUAD4/TRIA3. QR6ROT has the following values:

0

The drilling degrees-of-freedom are active. (Default)

1

The drilling degrees-of-freedom are deactivated for all QUADR/TRIAR element in the model.

2

The drilling degrees-of-freedom are deactivated for those QUADR/TRIAR which have membrane stiffness only (MID2 and MID3 are blank on the PSHELL entry)

QRSHEAR

Parameter to select the off-plane shear formulation for the QUADR element. There are two types of off-plane shear formulations: the stiffness method and the flexibility method. The stiffness method is a new method implemented in QUADR. The flexibility method was the method implemented in the QUAD4 element. Therefore, if the flexibility method is selected, the solution results of QUADR are closer to those of QUAD4. QRSHEAR has the following values:

0

Use stiffness method if MID30 on the PSHELL Bulk Data entry. Use the flexibility method if MID3 = 0. (Default)

1

Use flexibility method.

2

Use the stiffness method.

RDBOTH

Parameter to select Rayleigh damping approach for rotordynamics (compatibility with MSC Nastran 2005) implementation, Integer. A cumulative sum can be provided in case multiple features are desired in the analysis. The parameter is allowed to take values of 1, 2, 4, 8, 16, or any combination of them except both 4 and 8 are included, such as 12, 13, 14, etc. by checking binary bits. Default value for this parameter is 0.

0

Uses implementation for Rayleigh Damping as described in RSPINR/RSPINT entry description (Default)

1

Switch to V2005 implementation of Rayleigh damping where damping coefficients specified in the model through "PARAM, ALPHA1" and "PARAM, ALPHA2" are applied to the complete model and Rayleigh damping specified through "ALPHAR1" and "ALPHAR2" in RSPINR/RSPINT is set to 0.0.

2

Ignore circulation effects in rotordynamic analysis.

4

Include effect of stress stiffening using method = 1 (see RFORCE entry). Using RFORCE load step to include differential stiffness in SOL 400 since RDBOTH=4 is not supported in SOL 400.

8

Include effect of stress stiffening using method = 2 (see RFORCE entry). Using RFORCE load step to include differential stiffness in SOL 400 since RDBOTH=8 is not supported in SOL 400.

16

This option treats rotor structural damping with an imaginary stiffness matrix for complex eigenvalue analysis. See RSPINR remark 10. 

RELAXF

If there are SPRELAX entries, RELAXF=1 will result in the GI module outputting the GPGK datablock without relaxation while the GDGK datablock will include the relaxation effects.

=0 (Default) Relaxation is applied to all splines

=1 Relaxation is only applied to the splining of displacements.

REUPSE

Choose method for handling rigid elements in superelements when RIGID=LAGRAN or LGELIM

0

(Default) Automatic selection:

a.If ALPHA is zero for ALL r-elements in ALL superelements (SEID>0) then keep of these r-elements in the superelements with RIGID=LINEAR formulation.

b.If ALPHA is not zero for ANY r-element in ANY superelement (SEID>0) then transfer ALL r-elements in ALL superelements to the residual structure.

1

Transfer all r-elements in the superelements to the residual structure.

RMRBE3RT

Parameter to control if remove rotational dof from REFC of any RBE3 which reference grid point(REFG) is used by solid elements only and REFC has rotational dof..

0(default)

Don’t remove.

1

Remove rotational dof.

RSTIGNDP

A flag to determine if ignoring duplicate PARAM entries between a restart run and its initial run.

0(default)

Don’t ignore duplicating.

>0

Ignore duplicating.

SHEARP

Parameter to select the new HARDER shear panel over the classic GARVEY panel. The HARDER panel through testing appears to be superior to the GARVEY panel especially in cases of thermal loading. (Character-all required)

GARVEY

GARVEY SHEAR PANEL (Default)

HARDER

HARDER SHEAR PANEL - NEW

SHRTOQ4

Flag to determine whether to convert a CSHEAR element to a CQUAD4 element for nonlinear analysis. Cannot be used with the PSHEARN entry.

0

Do not convert CSHEAR to CQUAD4. (Default)

1

Convert CSHEAR to CQUAD4.

2

Do converting and print out converted Bulk Data entries on f06 file.

SOLCTLBC

Backward compatibility in SOL 400 with older Nastran versions. (Integer; Default = 0).

Each BIT of this flag can be turned on individually.

0

Updating the calculation of residual force with damping effect; releasing residual immediately in the beginning of subsequent load steps.

-1

Activate all of following flags (back to 2020 SP1).

1

Old logic which misses NDAMP effect in residual force calculation.

2

Ramping down residual gradually in subsequent load steps.

SPBLNDX

Factor to be applied to D1 and D2 blend depths on the SPBLND1 and SPBLND2 bulk data entries for determining the structural grids in the blended region. (Real, ≥ 1.0, default = 1.0)

STREQCNT

Flag to control calculation method for equivalent von Mises stress/strain at element center for advanced nonlinear solid elements in SOL 400.

0

Average integration point equivalent stress/strain (Default).

1

Average integration point stress/strain components then compute equivalent value at element center.

TWBRBML

Parameter to select method for computing properties of PBARL/PBEAML.

0

Select Finite Element Method. (Default)

1

Select Beam Library Equations.

BCSOL129

Controls the convergence parameter computation method, iteration information printing format, and divergence solution sequence checking for SOL 400.

0

The current format. (Default) Two formats are available: static and dynamic.

Static format will be used for static analysis.

Dynamic format will be used for dynamic analysis.

-1

Using the format and algorithm similar to SOL 129.

--------------------

