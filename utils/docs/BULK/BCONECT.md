## [BCONECT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCONECT.xhtml) - Defines a Contact Pair

Defines a contact pair used in SOLs 101, 103, 105, 107, 108, 109, 110, 111, 112, 200, 400 and 700. Only SOL 101, 400 and 700 can support all contact types: touching contact, glued, step glue and permanent glue (see   Chapter 7: Contact Types   of  Nastran SOL 400 Getting Started Guide ). Note that SOL 700 calls it “tie” contact to glue (also step glue or permanent glue). SOL 103~112 and standard 200 (without calling SOL 400) can only support permanent glue. When SOL 200 calls SOL 400 (or say SOL 400 optimization), it can support all contact types.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCONECT ID      BCGPID  BCPPID  IDSCND  IDPRIM                          +       
+       “SECN...IDSEC1  IDSEC2  IDSEC3  IDSEC4  IDSEC5  IDSEC6  IDSEC7  +       
+               IDSEC8  IDSEC9  -etc.-                                  +       
+       “PRIM...IDPRIM1 IDPRIM2 IDPRIM3 IDPRIM4 IDPRIM5 IDPRIM6 IDPRIM7 +       
+               IDPRIM8 IDPRIM9 -etc.-                                          
```
#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCONECT 57      306             2       1002                                    
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCONECT 9               108                                             +       
+       SECNDRY 30      26                                              +       
+       PRIMARY 294     135     528                                             
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Unique identification number referenced by a BCTABL1 entry (Integer ≥ 0). See Remark 1.           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BCGPID    │ Parameter identification number of a BCONPRG entry (Integer ≥ 0 or blank). See Remark 2.          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BCPPID    │ Parameter identification number of a BCONPRP entry (Integer ≥ 0 or blank). See Remark 2.          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDSCND    │ Identification number of BCBODY1, BCSURF and BCGRID entry defining the touching body (Integer ≥ 0 │
│           │ or blank). See Remarks 3. and 4.                                                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDPRIM    │ Identification number of BCBODY1 and BCSURF entry defining the touched body (Integer ≥ 0 or       │
│           │ blank). See Remarks 5. and 6.                                                                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “SECNDRY” │ Indicates the start of the list of the touching bodies. See Remark 4.                             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDSECi    │ Identification number of BCBODY1 entry defining the touching bodies (Integer ≥ 0 or blank). For   │
│           │ SOL 700, leaving IDSEC1 blank will result in contact for all elements in the model. In this case, │
│           │ you are allowed to use ADAPT=YES.                                                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “PRIMARY” │ Indicates the start of the list of bodies touched by touching bodies. See Remark 6.               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDPRIMi   │ Identification number of BCBODY1 entry defining touched bodies (Integer ≥ 0 or blank).            │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. BCONECT can be selected by the Case Control command BCONTACT=ID to define surface contact if BCTABL1 entry does not exist. See Remarks  . and  .  of BCTABL1 entry.
2. If BCGPID or BCPPID field is blank, then default values are set for the parameters of touching bodies.
3. A short input to define a single touching body exists if the user provides IDSCND. On the other hand, if the user leaves IDSCND blank, then “SECNDRY” descriptor is required and IDSEC1 must be specified. Exceptions are for SOL 700 self-contact, which may use a secondary IDSEC1 of zero and no “PRIMARY” entry.
4. “SECNDRY” and IDSECi fields will be ignored if IDSCND exists. If IDSCND field is blank, then “SECNDRY” and IDSECi must be specified. In this case, each IDSECi will be processed separately.
5. A short input to define a single touched body exists if the user provides IDPRIM. On the other hand, if the user leaves IDPRIM blank, then “PRIMARY” descriptor is required and IDPRIM1 must be specified.
6. “PRIMARY” and IDPRIMi fields will be ignored if IDPRIM exists. If IDPRIM field is blank, then “PRIMARY” and IDPRIMi must be specified.
7. The concept of Secondary and Primary relation is important to the node-to-segment contact but not relevant for segment-to-segment contact. In segment-to-segment contact, they are mainly used to define the contact pair(s).
8. If all the BCONPRG that are referenced by a BCONECT (which is referenced by BCTABL1) have a value of IGLUE > 0, and this BCONECT is referenced in the 1st Loadcase SOL 101 to 112 and SOL 200 or the 1st Step (SOL 400) then the connections are considered to be permanent and do not change (unless a BCPARA  is used to deactivate the permanent glue).
