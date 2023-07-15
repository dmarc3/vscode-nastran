## [BCONTACT (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.BCONTACT.Case.xhtml) - Selects 3D Contact Surfaces

This entry activates contact analysis and selects contact definition tables.

#### Overview of contact type definition:

General Contact  - two bodies may come into contact and separate at any point in the simulation and the bodies may slide alone each other's surface with or without friction. The fundamental constraint is no relative normal displacement when bodies are in contact. General contact is available in SOL 101, SOL 400 or SOL 700 only. For SOL 101, contact is the only source of nonlinearity, no large displacements, large rotations or material nonlinearity is available.

Glued Contact  - two bodies may come into contact and separate at any point in the simulation, but when in contact there is no relative sliding. The fundamental constraint is no relative normal displacement or tangential displacement when bodies are in contact. One can consider this equivalent to two surfaces that have infinite friction. Note that the word glued, only refers to the constraint on the tangential behavior. Bodies that are in glued contact may lose contact if the separation (force or stress based) separation criteria is exceeded, due to Unglue or Breaking Glue.

Step Glued Contact  - this is available for SOL 400 only. Step Glued contact is activated using a value a negative value of IGLUE for each contact pair. It is similar to Glued Contact, there are two conditions.

1. The contact status will be checked at the beginning of the step, and those nodes or segments that are in contact will remain in glued contact for the entire step. The constraints will change due to large rotations. Furthermore if a large tensile force or stress developed over the interface in the current loadcase, no separation would occur for these regions which are initially in contact. . Performing an Unglue of Breaking glue would also not be enforced during the step for these regions. This may be successfully used to model the union of dissimilar meshes, where at a later time one wanted to separate the bodies (like opening of a door).

2. When using Step Glue conventional contact occurs for the nodes/segments of the body which are not in contact at the beginning of the step. That means when they come into contact, they will glue, but they may separate within the same step.

Permanently Glued Contact  -this is a special case of contact, where the initial configuration is used to determine the contact constraint, and these contact changes due not change throughout the analysis. Nodes or segments which are not initially in contact do not come into contact, and in fact may penetrate the model. The constraint is a glue type, meaning there will be no relative normal or tangential displacement. Permanent glued may be used to connect dissimilar meshes or for simple assembly modeling when no other contact occurs. The bodies will never separate. Permanent glue should not be used in models that experience large rotations. It is applicable to SOL 101, 103, 105, 107, 108, 109, 110, 111, 112, SOL 200 and SOL 400. Permanent Glued contact is activated if the BCTABLE or BCTABL1 that is referenced in the first Loadcase (SOL 100*) or in the first Step (SOL 200) has a value of IGLUE greater than zero for all contact body pairs.

If the user requires conventional (general) contact for the complete simulation, but Permanent Glued contact is invoked, i.e., all the IGLUE > 0 in the first load case, enter bulk data “BCPARA,0,NLGLUE,1” to deactivate the Permanent Glue in the contact analysis. Please note that if any IGLUE <0 in the first load case of the first load step or first subcase, Permanent Glued Contact is not invoked, no matter what NLGLUE is defined in BCPARA. i.e., NLGLUE is ignored

If the user requires conventional (general) contact for the complete simulation, but Permanent Glued contact is invoked, enter bulk data BCPARA,0,NLGLUE,1 to deactivate the Permanent Glue in a subsequent step.

If large rotation/deformation effect present, turn on SYSTEM(758)=2 will switch Permanently Glued Contact to Step Glued Contact automatically in SOL 400.

Because glued contact is very useful in assembly modeling problems encountered in engineering practice, several special cases are considered as well.

Moment Carrying Glue  - For General Contact - when a node or surface comes into contact the default condition is that constraints are only placed on the translational degrees of freedom. When Moment Carrying Glue is activated the rotational degrees of freedom are also constrained to ensure moment carrying behavior. This may be used with either beam elements or shell elements.

Symmetry Contact  - Deformable contact with a rigid Symmetry surface. In this case no friction is allowed. Furthermore no separation is allowed, and finally if the rigid surface is contacted by beams or shells - the rotations are automatically constrained to satisfy the symmetry constraints. You do not need to specify any additional input, other than specifying that the rigid surface is a SYMM body.

#### Format:

![casecontrol4a00828.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00828.jpg?_LANG=enus)

or AUTO(,ctype)

#### Examples:

```nastran
BCONTACT = 5
BCONTACT=ALLBODY
BCONTACT=AUTO,PGLUE
```

```text
┌──────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Identification number of a BCTABLE, BCTABL1, BCONECT, BCHANGE, and/or BCMOVE Bulk Data entry.     │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALLBODY      │ All bodies defined using all the BCBODY entries can potentially contact each other. This option   │
│              │ can only be used if it applies to all subcases. (all SOLs) In SOL 400, when BCONTACT=ALLBODY, in  │
│              │ any STEP, all BCBODY entries defined in the model can potentially contact each other. In this     │
│              │ case, no BCTABLE, BCTABL1, BCONECT is required. See also Remark 3.                                │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ All contact definitions (BCTABLE, BCTABL1, BCONECT, BCBODY, and BCBODY1) are ignored. For SOL 400 │
│              │ and SOL 101, if BCONTACT = NONE is entered in any subcase, it applies for all subcases. (Default  │
│              │ for SOLs 101 and 400.)                                                                            │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AUTO(,ctype) │ Automatic generate contact. ctype is optional. It may be TOUCH (default) -- general touching      │
│              │ contact; PGLUE -- Permanently glued contact; GGLUE -- General Glued Contact; and SGLUE -- Step    │
│              │ Glued Contact. It works with bulk data section entry BCAUTOP, BCAUTOP is optional. See remark     │
│              │ 5. and 6.                                                                                         │
└──────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. BCONTACT is recognized in SOLs 101, 400, and 700, and under the special condition of permanent glued contact in SOLs 103, 105, 107, 108, 109, 110, 111, 112 and 200. The standard SOL 200(without calling SOL 400) can only support permanent glue; but when SOL 200 calls SOL 400(or say SOL 400 optimization), it can support all contact types.

2. For SOLs 101 and 400, if the form BCONTACT=n is applied in any loadcase (subcase or step), Nastran looks into the Bulk Data file to get all BCTABLE, BCTABL1 or BCONECT (required), BCMOVE (optional) and BCHANGE (optional), in the same SID=n. The user can always specify Case Control commands, BCMOVE and/or BCHANGE, to select different SID.

     BCONTACT=0 can invoke initial preload contact conditions, such that the contact bodies will just touch each other before analysis begins, but it's not necessary. If presence of BCTABLE, 0, initial contact condition will also be processed, no matter if BCONTACT=0 is given or not. (please refer to BCTABLE, 0 for more information).

     The contact analysis during any loadcase is dominated by BCONTACT=n (n>0). Without presence of BCONTACT=n (n>0), no contact analysis works in that particular loadcase. 
 
 
In SOL 400 one can have multiple contact interaction types in the model meaning general contact, glued contact, step contact on a contact pair basis. These can change from step to step by activating a new BCTABLE or BCTABL1. 
 
 
SOL 700 allows only one BCONTACT Case Control command and only one subcase.

3. For SOLs 101 and 400, if the form BCONTACT=ALLBODY is applied in any loadcase (subcase or step), Nastran does not look into corresponding BCTABLE, BCTABL1 or BCONECT but uses the defaults for all entries on BCTABLE, BCONPRG or BCONPRP. If the user wants to specify BCMOVE and/or BCHANGE Bulk Data entries, the BCMOVE and/or BCHANGE Case Control commands must be given.

4. Permanent glued contact for small deformation and rotation is initiated by BCONTACT=n pointing to BCTABLE/BCONECT referring a valid positive IGLUE field.
If all secondary's for the BCTABLE or BCONPRG corresponding to the first loadcase (first subcase and first step) contain IGLUE >0, permanent glued contact with small rotation condition will be used for all SECNDRY entries in all subcases and all steps unless BCPARA,0,NLGLUE,1 is specified.
If IGLUE < 0 exists, step glue is activated to support large deformation and large rotation.

5. For glue contact (PGLUE, GGLUE, and SGLUE), default is to implement the moment carrying glue without node projection, i.e., Insures full moment carrying glue when shells contact. The node will not be projected onto the contact body and an existing initial gap or overlap between the node and the contacted body will not be removed, as the node will not be projected onto the contacted body. Unless IGLUE is defined in BCAUTOP.

6. CTYPE can be specified by bulk data section BCAUTOP also, the value of CTYPE in BCAUTOP will be used if it is specified.

7. When BCONTACT=AUTO is specified, acg file will be generated. An acg file is a file consists of all generated contact bodies, contact pairs and parameters. The name of acg file can be specified by ASSIGN FMS statement.

8. When BCONTACT=AUTO is specified, only elements in residual structure are used to construct contact bodies in superelement models.

9. BEAMB in bulk data entry BCPARA is set to 1 when BCONTACT=AUTO is specified.

10. When BCONTACT=AUTO is specified and modules are present, the contact generation is in two levels: individual module and across modules. For individual module, contact data generation is activated when an BCAUTOP bulk data section entry exists in the module. If there is no BCAUTOP, no contact data will be generated for the module, and user supplied contact data can be used. For across modules, contact pair generation is activated by MDBCPAR entry, and parameters are defined by MDBCATP entry.

