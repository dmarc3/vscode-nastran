## [BEGIN BULK (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.BEGIN.BULK.Case.xhtml) - Case Control and Bulk Data Delimiter

Designates the end of the Case Control Section and/or the beginning of a Bulk Data Section.

#### Format:

![casecontrol4a00830.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00830.jpg?_LANG=enus)  

#### Examples:

```nastran
BEGIN BULK
BEGIN AUXMODEL=22
BEGIN BULK TRMC=101
BEGIN TRMC=102
```

```text
┌──────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ AFPM         │ Indicates the beginning of an acoustic field point mesh Bulk Data Section.                        │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ afpmid       │ Acoustic field point mesh identification number (Integer > 0).                                    │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ARBMODEL     │ Indicates the beginning of a finite element model FEM for an arbitrary beam cross-section.        │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ arbmid       │ FEM identification number (Integer > 0).                                                          │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AUXMODEL     │ Indicates the beginning of an auxiliary model Bulk Data Section.                                  │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ auxmid       │ Auxiliary model identification number (Integer  >  0).                                            │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FLXBDY       │ Indicates the beginning of a Adams/Nastran MNF  flexbody Bulk Data Section for SOL400 analysis.   │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ flexbody     │ Flexbody MNF component identification number (Integer>0; Required). Component usually consists of │
│              │ ASET and QSET description for attachment points.                                                  │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MASSID       │ Indicates the beginning of the incremental mass case Bulk Data Section.                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ massid       │ Incremental mass case identification number (Integer>0; Required).                                │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABEL        │ Indicates a massid label.                                                                         │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODULE       │ Indicates the beginning of a Module Bulk Data section                                             │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ moduleid     │ Module identification number (Integer>0).See Remark 11.                                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ APPEND       │ Indicates append data to a module.                                                                │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABEL        │ Indicates a Module label. This option will be converted to an MDLABEL Bulk Data entry in the main │
│              │ Bulk Data section.                                                                                │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ modlabel     │ Module label.                                                                                     │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SUPER        │ Indicates the beginning of partitioned superelement Bulk Data Section.                            │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ seid         │ Superelement identification number (Integer  >  0).                                               │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TRMC         │ Indicates the beginning of Bulk Data Section for a trim component model. See Remark 9.            │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ trimid       │ Trim component identification number (Integer>0; Required).                                       │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UDS          │ Indicates the beginning of user defined subroutine section.                                       │
└──────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. BEGIN BULK is not required but it is highly recommended that the user supply it.  If not specified, then the program will automatically insert one, before the first unique bulk type entry. Parameters are not considered unique bulk type entries so automatic BEGIN BULK inclusion will come after any parameter that precedes entries unique to bulk.
2. For an auxiliary model, AUXMID is referenced by the AUXMODEL Case Control command.
3. Partitioned Bulk Data Sections defined by BEGIN SUPER are used to define only one superelement (Part Superelement). Bulk Data commands such as SESET, which define list superelements are ignored in partitioned Bulk Data Sections.
     Superelements specified by a BEGIN SUPER entry can be automatically attached to other superelements based on relative locations of grid points. For connection to the downstream superelement, the global coordinate directions of the attachment grid points of the upstream superelement will be internally transformed to the global coordinate directions of the grid points of the downstream superelement. For displacement data recovery, the output will be in the original global coordinate directions.
4. An acoustic field point mesh section defined by BEGIN AFPM is used to define one acoustic field point mesh. Acoustic field point meshes are used for postprocessing of acoustic results in the far field only; i.e., at locations within the acoustic infinite elements.
5. The BEGIN SUPER, BEGIN AUXMODEL, and BEGIN AFPM Bulk Data entries must lie between BEGIN BULK and ENDDATA.
6. When employing part superelements using the BEGIN BULK SUPER (or BEGIN SUPER) entry, it should be noted that any parameters that are specified in the main Bulk Data Section apply only to the residual and not to any of the part superelements. Accordingly, to apply certain parameters to all of the superelements, they must be specified in the Case Control Section, or explicitly in all of the BEGIN BULK SUPER (or BEGIN SUPER) portions of the Bulk Data. A common example of such a parameter specification is PARAM,POST, which is used to request postprocessing of results.
7. arbmid can be referenced under the OUTM keyword of the PBMSECT Bulk Data entry to define the geometry of the arbitrary beam cross-section.
8. For model using user defined subroutines, the subroutines can be put in the UDS section. Nastran can build user service from the subroutines using command line keyword uds=model. See the document User Defined Service User's Guide for detail.
9. The parameter WTMASS is supported for trim components with a PARAM, WTMASS, value in each BEGIN TRMC=n Bulk Data.
10. BEGIN MODULE command can only be specified after the BEGIN BULK or an ENDMODULE command has already been specified. In other words, a Module Bulk Data section cannot be nested inside another Module’s Bulk Data section.
11. The same module identification number can appear multiple times if APPEND is specified, otherwise a user fatal message will be issued.
