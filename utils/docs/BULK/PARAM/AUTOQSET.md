## [AUTOQSET](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.AUTOQSET.xhtml)

Default = NO

AUTOQSET=YES requests the automatic calculation of component modes without the need to define a q-set (generalized coordinates).

1. The calculation of component modes is attempted on all superelements including the residual structure.

2. All component modes are treated like SPOINTs which means that all component modes are “brought down” to and assigned to the q-set in the residual structure. In other words, component modes may not be assigned interior to a superelement.

3. Selected component modes may not be removed (constrained).

4. Since the generalized coordinates are automatically defined, the following entries may not be specified: QSETi, SEQSETi, SENQSET, or PARAM,NQSET.

5. This feature is not supported with:

    a. Design optimization (SOL 200)

    b. Aerodynamic analyses (SOLs 144, 145, 146)

    c. Cyclic symmetry analyses (SOLs 114, 115, 116, 118)

    d. SECSETi and SEBSETi Bulk Data entries that result in a fixed-free or free-free superelement. This restriction also applies to BSETi/BNDFIXi and CSETi/BNDFREE/BNDFRE1entries in part (BEGIN SUPER) superelements.

PARAM,SQSETID may be used to specify the starting identification number of the automatically generated q-set degrees-of-freedom except when the EXTSEOUT command is present (see Remark  17.  of the EXTSEOUT Case Control command). The default is 99000001.

