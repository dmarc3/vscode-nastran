## [DBALL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.DBALL.xhtml)

Default    =    DBALL

By default, all data to be stored on the database for restart purposes will be located on the DBALL database set DBset).  These parameters permit the storage of some data blocks on DBsets other than DBALL, which are defined by the user and specified on the INIT File Management statement.  Any or all of these parameters may be set to SCRATCH in order to reduce overall disk space usage; e.g., PARAM,DBUP,SCRATCH or PARAM,DBALL,SCRATCH.  However, automatic restarts will be less efficient because data normally assigned to a permanent DBset will have to be recomputed.

A unique value for each superelement may be specified in the Case Control Section for the parameters DBALL, DBDN, DBRCV, and DBUP.  Certain DBsets may be taken offline depending on which phase (see  Summary of Solution Sequence Operations  in  the MSC Nastran Reference Guide ) of superelement analysis is being performed.  PARAM,DBALL specifies the default value for parameters DBDN, DBUP, and DBRCV.

The DBDN DBset contains data blocks necessary for “downstream” processing.  For example, the stiffness, mass, damping, and static loads matrices that have been reduced to the boundary of the superelement are stored in this DBset.

The DBRCV DBset contains data blocks that must be online during the first pass through data recovery (Phase 3).  These data blocks are used to recover the total displacement vector u g  of the superelement.  This operation is performed by the SSG3 and SDR1 modules.  On subsequent data recovery restarts, this DBset may be taken offline.  Its default is determined from the value of DBUP.

The DBUP DBset contains data blocks necessary for “upstream” processing.  For example, the geometry and property tables along with the stiffness, mass, damping, and static loads matrices related to the interior grid points of the superelement are stored in this DBset.  These matrices and tables must be online during the reduction (Phase 1) and data recovery (Phase 3) of the superelement.

The IFP DBset contains data blocks that are required for all phases of the analysis.  These data blocks are related to the entire model; examples are Bulk Data, superelement map, IFP module outputs, and resequenced grid points.  This DBset must be online for all runs.

PARAM,DBALL also specifies the default value for PARAMs DBEXT and DSO described below.

