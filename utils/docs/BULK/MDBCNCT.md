## [MDBCNCT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDBCNCT.xhtml) - Defines the Touching and Touched Contact Bodies in Different Modules

Defines the touching and touched contact and used in SOLs 101, 103, 105, 107, 108, 109, 110, 111, 112 and 400 for general contact, glued, step glue or permanent glue between contact bodies residing in different Modules.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDBCNCT ID      BCGPID  BCPPID  MODS    IDSCND  MODP    IDPRIM          +       
+       “SECN...MODS1   IDSEC1  MODS2   IDSEC2  MODS3   IDSEC3          +       
+               MODS4   IDSEC4  -etc.-                                  +       
+       “PRIM...MODP1   IDPRIM1 MODP2   IDPRIM2 MODP3   IDPRIM3         +       
+               MODP4   IDPRIM4 -etc.-                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDBCNCT 57      306             101     2       201     1002                    
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDBCNCT 9               108                                             +       
+       SECNDRY 101     30      201     26                              +       
+       PRIMARY 101     294     201     135     301     528                     
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Unique identification number referenced by a MDBCTB1 entry (Integer ≥ 0). See Remark 5.       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ BCGPID    │ Parameter identification number of a BCONPRG entry (Integer ≥ 0 or blank). See Remark 6.      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ BCPPID    │ Parameter identification number of a BCONPRP entry (Integer ≥ 0 or blank). See Remark 6.      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODS      │ Identification number of a Module that defines IDSCND (Integer ≥ 0 or blank)                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDSCND    │ Identification number of BCBODY1 entry defining the touching body (Integer ≥ 0 or blank). See │
│           │ Remarks 7. and 8.                                                                             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODP      │ Identification number of a Module that defines IDPRIM (Integer ≥ 0 or blank)                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDPRIM    │ Identification number of BCBODY1 entry defining the touched body (Integer ≥ 0 or blank). See  │
│           │ Remarks 9. and 10.                                                                            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ “SECNDRY” │ Indicates the start of the list of the touching bodies. See Remark 8.                         │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODSi     │ Identification number of a Module that defines IDSECi (Integer ≥ 0 or blank)                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDSECi    │ Identification number of BCBODY1 entry defining touching bodies (Integer ≥ 0 or blank,). See  │
│           │ Remarks 7. and 8.                                                                             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ “PRIMARY” │ Indicates the start of the list of bodies touched by touching bodies. See Remark 10.          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODPi     │ Identification number of a Module that defines IDPRIMi (Integer ≥ 0 or blank)                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDPRIMi   │ Identification number of BCBODY1 entry defining touched bodies (Integer ≥ 0 or blank).        │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Both BCTABL1 and MDBCTB1 may only be specified in the main Bulk Data section.
2. BCTABL1 BCID must be unique with respect to all other BCTABL1 and MDBCTB1.
3. BCONTACT Case Control command may only select BCTABL1 or MDBCTB1 but not both.   If BCTABL1 is selected, then all bodies matching IDi in any and all Modules will be activated.
4. Only MDBCTB1 can select MDBCNCT.
5. MDBCNCT can be selected by the Case Control command BCONTACT=ID to define surface contact if MDBCTB1 entry does not exist. See Remarks 2 and 3 of MDBCTB1 entry.
6. If BCGPID or BCPPID field is blank, then default values are set for the parameters of touching bodies.
7. A short input to define a single touching body exists if the user provides IDSCND. On the other hand, if the user leaves IDSCND blank, then “SECNDRY” descriptor is required and IDSECi must be specified.
8. “SECNDRY” and IDSECi fields will be ignored if IDSCND exists. If IDSCND field is blank, then “SECNDRY” and IDSECi must be specified. In this case, each IDSECi will be processed separately.
9. A short input to define a single touched body exists if the user provides IDPRIM. On the other hand, if the user leaves IDPRIM blank, then “PRIMARY” descriptor is required and IDPRIM1 must be specified.
10. “PRIMARY” and IDPRIMi fields will be ignored if IDPRIM exists. If IDPRIM field is blank, then “PRIMARY” and IDPRIMi must be specified.
11. The concept of Secondary and Primary relation is important to the node-to-segment contact but not relevant for segment-to-segment contact. In segment-to-segment contact, they are mainly used to define the contact pair(s).
12. If all the BCONPRG that are referenced by a MDBCNCT (which is referenced by MDBCTB1) have a value of IGLUE > 0, and this MDBCNCT is referenced in the 1st Loadcase (SOL 100*) then the connections are considered to be permanent and do not change (unless a BCPARA  is used to deactivate the permanent glue).
