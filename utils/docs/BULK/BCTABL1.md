## [BCTABL1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCTABL1.xhtml) - Defines a Contact Table

BCTABL1 specifies a list of contact pairs through the BCONECT option for SOLs 101, 103, 105, 107, 108, 109, 110, 111, 112, 144, 145, 146, 200, 400 and 700. Only SOL 101, 400 and 700 can support all contact types: touching contact, glued, step glue and permanent glue (see   Chapter 7: Contact Types   of  Nastran SOL 400 Getting Started Guide ). Note that SOL 700 calls it  “ tie ”  contact to glue (also step glue or permanent glue). SOL 103, 105, 107 - 112, 144, 145, 146 and standard 200 can only support permanent glue. When SOL 400 optimization, it can support all contact types. This contact table is activated in the BCONTACT Case Control command.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCTABL1 BCID    ID1     ID2     ID3     ID4     ID5     ID6     ID7     +       
+       ID8     ID9     -etc.-                                                  
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCTABL1 2       198     62      75      8       159     31      82      +       
+       17                                                                      
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCTABL1 0       23      56                                                      
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCTABL1 5       31      35      THRU    40      163     THRU    169     +       
+       1077    1088                                                            
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BCID      │ Unique identification number referenced by a BCONTACT Case Control command. See Remark 3. (Integer │
│           │ ≥ 0; default=0)                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Identification number of BCONECT entry (Integer > 0 or “THRU”; ID1 is required). See Remark 4. and │
│           │ 5.                                                                                                 │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. BCTABL1 defines surface contact. If BCTABL1 does not exist, the Case Control command BCONTACT=BCID may refer to the BCONECT Bulk Data entry directly.
2. If neither BCTABL1 nor BCONECT is given, the default for contact analysis is assumed, every body detects the possibility of contact relative to all other bodies and itself if it is a deformable body. If BCTABL1 or BCONECT is given, the default for every body is overwritten. The touching body does not contact itself unless requested. When the touched body is deformable, double-sided contact is applied by default. BCTABL1 or BCONECT is useful for deactivating or activating bodies to reduce computational effort and to change contact conditions between subcases.
3. For SOLs 101 and 400, the BCTABL1 or BCONECT with ID=0 will be used in loadcase 0 automatically that does not need a corresponding Case Control command BCONTACT=0. The loadcase 0 is purely elastic and it can also be used to (1) move rigid contact bodies so that they just touch flexible contact bodies, and/or (2) remove any prestressed condition by adjusting the coordinates of the active nodes, which are the Grid Points on the surface of all deformable BCBODY1’s. To place an entry in any physical loadcase (SUBCASE or STEP), the BCID must be selected by the Case Control command BCONTACT=BCID or BCONECT=BCID. When BCONTACT=ALLBODY, there is no BCID of BCTABL1 or BCONECT specified; therefore, the default values of all entries of BCONPRG and BCONPRP are assumed. Case Control command BCONTACT=ALLBODY cannot be used for permanently glued contact.
4. When the “THRU” option is used, all BCONECT entries associated with intermediate BCONECT IDs must exist. The word “THRU” may not appear in field 3 or 9 (2 or 9 for continuations).
5. If Modules are present then this entry may only be specified in the main Bulk Data section.
