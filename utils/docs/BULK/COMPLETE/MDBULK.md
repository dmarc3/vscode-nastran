## [MDBULK](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDBULK.xhtml) - Module Type Definitions

Defines module search options and typing such as repeated or mirrored.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDBULK  MODID   TYPE    RMODID  METHOD  TOL             UNITNO                  
```

#### Example: 

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDBULK  14                      AUTO    1.0e-3                                  
```

```text
┌───────────┬──────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                          │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MODID     │ Module identification number. (Integer > 0 or    │                                                   │
│           │ Character = “ALL”)                               │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TYPE      │ Module type (Character; default = ”PRIMARY”)     │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ PRIMARY                                          │ Module with at least one GRID entry in its BEGIN  │
│           │                                                  │ MODULE section.                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ REPEAT                                           │ Copied Module via reposition or mirroring of a    │
│           │                                                  │ primary Module. See Remarks 9 and 10.             │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ MIRROR                                           │ Copied Module via mirroring of a primary Module.  │
│           │                                                  │ See Remarks 9 and 10.                             │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ MOVE                                             │ Copied or primary Module repositioning via MDMOVE │
│           │                                                  │ entry. See Remarks 8 and 10.                      │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ EXTERNAL                                         │ External. See Remarks 11 and 12.                  │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ EXTOP2                                           │ External using an OUTPUT2 file created in an      │
│           │                                                  │ earlier run. See Remarks 11 and 12.               │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ EXTOP4                                           │ External using an OUTPUT4 file created in an      │
│           │                                                  │ earlier run. See Remarks 11 and 12.               │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ RMODID    │ Identification number of the reference Module,   │                                                   │
│           │ used only if making a copy; i.e., RMODID>0 and   │                                                   │
│           │ RMODID ≠ MODID and TYPE= “REPEAT”, “MIRROR” or   │                                                   │
│           │ “MOVE”. (Integer ≥ 0; Default=0). See Remarks    │                                                   │
│           │ 9 and 10.                                        │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ METHOD    │ Method to be used when searching for boundary    │                                                   │
│           │ grid points. (Character = “AUTO” or “MANUAL”;    │                                                   │
│           │ Default= ”MANUAL”)                               │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TOL       │ Location tolerance to be used when search for    │                                                   │
│           │ boundary grid points. (Real; Default = 1.0e-5)   │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ UNITNO    │ FORTRAN unit number for the OUTPUT2 or OUTPUT4   │                                                   │
│           │ file (applicable and meaningful only when TYPE = │                                                   │
│           │ "EXTOP2" or "EXTOP4"). See Remarks 11 and 12.    │                                                   │
└───────────┴──────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. METHOD=”MANUAL” requires MDCONCT entries. MDBNDRY and MDEXCLD, that reference MODID, will produce fatal messages.
2. MDCONCT, MDBNDRY and MDEXCLD entries can be used to augment the search procedure and/or override the global tolerance.
3. For combined automatic and manual boundary search, the METHOD=”AUTO” should be specified and connections should be specified on a MDCONCT entry.
4. TOL is the default value that can be modified between two Modules by providing the required tolerance on the MDCONCT entry.
5. MDBULK may only be specified in the Main Bulk Data Section and cannot be placed in other BEGIN MODULE sections. MDBULK is meaningful only if modules (using BEGIN MODULE ) or external modules created by employing the EXTMDOUT Case Control command exist in the data.
6. This entry is only valid if Modules exist.
7. With MDBULK,ALL the TYPE and RMODID fields must be blank and MDBULK,ALL means that the MDBULK options METHOD and TOL will be applied to all Modules which are not already defined on an MDBULK entry.
8. TYPE="MOVE" refers to the enhanced interface.  If TYPE="MOVE" then an MDMOVE Bulk Data entry must be defined.  The MDMOVE entry references MDTRAN, MDROTi, and MDMIRi entries.
    - If TYPE="MOVE" is specified for a given Module, then MDLOC and MDMPLN cannot be specified and vice-versa.
    - If MDMIRi is referenced by MDMOVE then it must be the first MVID and cannot be specified as the second or subsequent MVIDs.
    - If MODID defines a secondary Module (RMODID>0) then it will automatically inherit all of the Primary Module's Bulk Data. The inheritance of a particular entry may be overridden by specifying new Bulk Data entries or ignored via the EXCLUDE Bulk Data entry in the secondary Module's Bulk Data section.
    - A primary Module (RMODID=0) may be re-positioned as indicated in Remark 10.
9. TYPE=”REPEAT” and “MIRROR” refer to the classic interface. These types have many common features, but they also have some important differences. These are described below:
    - The following comments apply to both TYPE=”REPEAT” and “MIRROR”:
        - A Module (MODID) whose TYPE is “REPEAT” or “MIRROR” and RMODID is greater than 0 is referred to as a secondary Module. The RMODID specified in this case is regarded as the primary Module.
        - The module must be either a primary module or an external module created by employing the EXTMDOUT Case Control command in an earlier job. It must be defined via its own MDBULK entry wherein TYPE must be either “PRIMARY, “EXTERNAL”, “EXTOP2”, or “EXTOP4”.
        - The primary Module may be re-positioned as indicated in Remark 10.
        - If MODID defines a secondary Module then it will automatically inherit all of the Primary Module's Bulk Data. The inheritance of a particular entry may be overridden by specifying new Bulk Data entries or ignored via the EXCLUDE Bulk Data entry in the secondary Module's Bulk Data section.
        - If both an MDLOC and MDMPLN entry are specified for a secondary Module, then a mirror image copy of the primary Module will be created by first using the plane defined by the MDMPLN entry and then repositioned at the location implied by the MDLOC entry.
        - If the primary module specified by RSEID is an external module resulting from the use of the EXTMDOUT Case Control command in an earlier job, then the copied external module will be an “a-set” copy of the “primary” external module. In this case, the boundary, loads, constraints and reduction procedure of the copied external module are set and are the same as those of its “primary” external module.
    - The following comments apply only to TYPE= “REPEAT”:
        - The secondary Module in this case may reference an MDLOC entry, an MDMPLN entry or both or none.
        - If it references an MDLOC entry, then an identical copy of its primary Module will be positioned at the location implied by the MDLOC entry.
        - If it references an MDMPLN entry, then a mirror image copy of the primary Module will be positioned using the plane defined by the MDMPLN entry.
        - If it references neither an MDLOC entry nor an MDMPLN entry, then the secondary Module will merely be a duplicate of the primary Module positioned at the same location as the primary Module. This usage is extremely uncommon. Hence the program cautions the user about this usage by issuing a user warning message
    - The following comments apply only to TYPE= “MIRROR”:
        - The secondary Module in this case must reference an MDMPLN. (Otherwise, the program will terminate the execution with an appropriate user fatal message.)
        - If the secondary Module references only an MDMPLN entry, then a mirror image copy of the primary Module will be positioned using the plane defined by the MDMPLN entry.
10. A Module whose TYPE is “PRIMARY” (or TYPE=”MOVE” and RMODID=0) may itself be repositioned by the use of MDLOC or MDMPLN entry or both (or MDTRAN, MDROTi or MDIRi or any combination).
    - If it references an MDLOC (or MDTRAN, MDROTi) entry, then the primary Module will be positioned at the location implied by the MDLOC (or MDTRAN, MDROTi) entry.
    - If it references an MDMPLN (or MDMIRi) entry, then a mirror image of the primary Module will be repositioned using the plane defined by the MDMPLN (or MDMIRi) entry.
    - If it references both an MDLOC (or MDTRAN, MDROTi) entry and an MDMPLN (or MDMIRi) entry, then a mirror image of the primary Module will first be created using the plane defined by the MDMPLN (or MDMIRi) entry and then repositioned at the location specified by the MDLOC (or MDTRAN, MDROTi) entry.
11. TYPE = “EXTERNAL”, “EXTOP2” or “EXTOP4” indicates an external module created by employing the EXTMDOUT Case Control command in an earlier job. See discussion under the description of the EXTMDOUT Case Control command. (For employing external modules using the three-step procedure for data recovery described in the description of the EXTDRIN Case Control command.
12. A module whose TYPE is “PRIMARY, “EXTERNAL”, “EXTOP2”, or “EXTOP4” may itself be repositioned by the use of an MDLOC or an MDMPLN entry or both.
    - If it references an MDLOC entry, then the primary module will be positioned at the location implied by the MDLOC entry.
    - If it references an MDMPLN entry, then a mirror image of the primary module will be positioned using the plane defined by the MDMPLN entry.
    - If it references both an MDLOC entry and an MDMPLN entry, then a mirror image of the primary module will first be created using the plane defined by the MDMPLN entry and then it will be positioned at the location implied by the MDLOC entry.
