## [BCSURF](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCSURF.xhtml) - Contact entry by element faces

Define a contact region by element faces for SOLs 101, 103, 105, 107, 108, 109, 110, 111, 112, 200 and 400. This has three forms based the FORM (the 6th) field. “FACE” (default) is to define contact face by element face IDs, “GRID” is to define the same by grid point ids, and “RIGID” is to define a rigid face.

#### Format 1: FORM="FACE" (default)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCSURF  BID     BPID    DIM             FORM    INCTHK  EDGCNT          +       
+       ESID1   FACEID1 IDTYPE1         ESID2   FACEID2 IDTYPE2         +       
+       ESID3   FACEID3 IDTYPE3         ...                             +       
+       ...                                                                     
```

#### Format 2: FORM="GRID"

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCSURF  BID     BPID    DIM             “GRID”  INCTHK  EDGCNT          +       
+       EID1    G11     G12     G13     EID2    G21     G22     G23     +       
+       EID3    G31     G32     G33     ...                             +       
+       ...                                                                     
```

#### Format 3: FORM="RIGID"

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCSURF  BID     BPID    DIM             “RIGID”                         +       
+       BSID    BCRGID                                                          
```

#### Example:

##### FACE form (default)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCSURF  2       3       3D                      NO                      +       
+       12      S2                      4       S4      SET                     
```

##### GRID form

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCSURF  3       3       3D              GRID    YES                     +       
+       11      1       3       6       16      31      14      15              
```

##### RIGID form

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCSURF  4               3D              RIGID                           +       
+       101     201                                                             
```

```text
┌───────────┬───────────────────────────────────────────────────┬─────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ BID       │ Unique contact face identification number         │                                                 │
│           │ referenced by BCONECT (Integer > 0; Required).    │                                                 │
│           │ See remark 1.                                     │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ BPID      │ Parameter identification number of a BCBDPRP      │                                                 │
│           │ entry. (Integer > 0 or blank).                    │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ DIM       │ Dimension of body. (Character; Default= “3D”),    │                                                 │
│           │ “3D” or “2D”.                                     │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ FORM      │ Select a type of the entry. (Character; Default   │                                                 │
│           │ =”FACE”).                                         │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ FACE      │ define the contact surface by element face IDs    │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ GRID      │ define the contact surface by grid points on an   │                                                 │
│           │ element face                                      │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ RIGID     │ define the contact surface by rigid surface       │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ INCTHK    │ Option to include shell thickness offset.         │                                                 │
│           │ (Character; Default =”YES”), “YES” or “NO”.       │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ EDGCNT    │ Option for edge contact. (Integer, default=1),    │                                                 │
│           │ below three values can be specified.              │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ 1:                                                │ only the beam/bar edges are included in the     │
│           │                                                   │ contact description (Default).                  │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ 10:                                               │ only the free and hard shell edges are included │
│           │                                                   │ in the contact description.                     │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ 11:                                               │ both the beam/bar edges and the free and hard   │
│           │                                                   │ shell edges are included in the contact         │
│           │                                                   │ description.                                    │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ ESIDi     │ Element id or set id. (Integer, no default). If   │                                                 │
│           │ IDTYPEi is “SET”, it is a set id defined by a     │                                                 │
│           │ SET3, and the SET3 must be element type. If       │                                                 │
│           │ IDTYPEi is “ELEM” (default), it is an element id. │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ FACEIDi   │ Element face ID. (Character, blank can be used to │                                                 │
│           │ express BOTH for shell elements and the whole     │                                                 │
│           │ bodies of beam or bar elements). See remarks 6.,  │                                                 │
│           │ 7., 8. and 9.                                     │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ IDTYPEi   │ Type of ESIDi. (Character, “ELEM”).               │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ ELEM      │ ESIDi is an element id.                           │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ SET       │ ESIDi is a SET3 id.                               │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ EIDi      │ Element id. (Integer > 0)                         │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ GIDij     │ Three corner grid point ids of the element face.  │                                                 │
│           │ (Integer, no default). All the three fields of    │                                                 │
│           │ for an EIDi are blanks or zeros mean BOTH for     │                                                 │
│           │ shell elements and the whole bodies of bar or     │                                                 │
│           │ beam elements. See remark 2.                      │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ BSID      │ Identification number of a BCRGSRF,               │                                                 │
│           │ BCPATCH,BCBZIER, BCNURB2, or BCNURBS. (Integer >  │                                                 │
│           │ 0).                                               │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ BCRGID    │ Identification number of a BCRIGID entry.         │                                                 │
│           │ (Integer > 0).                                    │                                                 │
└───────────┴───────────────────────────────────────────────────┴─────────────────────────────────────────────────┘
```

#### Remarks:

1. BID must be unique among all BCSURF, BCBODY1 and BCGRID entries.
2. BCSURF entries are able to coexist with BCBODY1 entries. A BCSURF can be used with a BCGRID, another BCSURF or a BCBODY1 entry to construct a contact pair.
3. BCSURF cannot be specified in the continuations of a BCONECT.
4. If a BCSURF is referenced by a BCONECT, COPTS and COPTM in the BCONPRG referenced by the BCONECT will be used, and FACEIDs and INCTHK fields of BCSURF are ignored.
5. For GRID form, three corner grid point IDs are required to specify a 3D element face, two corner grid point ids are required to specify a 2D element edge. For shell faces, the sequence of G1,G2,G3 of the element definition means TOP(top) and the reverse order means BTM(bottom), blanks or zeros means BOTH(both).
6. FACEIDi varies depending on element type and DIM. Refer to remark 9 for the list of FACEIDs.
7. For shell elements, TOP, BTM and BOTH are to define the contact face on top, bottom and both sides of the element. A blank is the same as BOTH. It is possible to have TOP and BTM in the same BCSURF entry but not allowed to combine BTM with BOTH or TOP with BOTH.
8. For beam elements, ENDA and ENDB express beam or bar enda and endb points respectively. A blank means the whole beam or bar body.
9. List of face ID.

     Refer to following pages

#### CHEXA

```text
┌────┬────────────────┬─────────────────────┐
│    │ Linear Element │ Quadratic Element   │
├────┼────────────────┼─────────────────────┤
│ S1 │ 4-3-2-1        │ 4-3-2-1-11-10-9-12  │
├────┼────────────────┼─────────────────────┤
│ S2 │ 5-6-7-8        │ 5-6-7-8-17-18-19-20 │
├────┼────────────────┼─────────────────────┤
│ S3 │ 1-2-6-5        │ 1-2-6-5-9-14-17-13  │
├────┼────────────────┼─────────────────────┤
│ S4 │ 2-3-7-6        │ 2-3-7-6-10-15-18-14 │
├────┼────────────────┼─────────────────────┤
│ S5 │ 3-4-8-7        │ 3-4-8-7-11-16-19-15 │
├────┼────────────────┼─────────────────────┤
│ S6 │ 4-1-5-8        │ 4-1-5-8-12-13-20-16 │
└────┴────────────────┴─────────────────────┘
```

![bulkab02186.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02186.jpg?_LANG=enus)

#### CPENTA

```text
┌────┬────────────────┬────────────────────┐
│    │ Linear Element │ Quadratic Element  │
├────┼────────────────┼────────────────────┤
│ S1 │ 3-2-1          │ 3-2-1-8-7-9        │
├────┼────────────────┼────────────────────┤
│ S2 │ 4-5-6          │ 4-5-6-13-14-15     │
├────┼────────────────┼────────────────────┤
│ S3 │ 1-2-5-4        │ 1-2-5-4-7-11-13-10 │
├────┼────────────────┼────────────────────┤
│ S4 │ 2-3-6-5        │ 2-3-6-5-8-12-14-11 │
├────┼────────────────┼────────────────────┤
│ S5 │ 3-1-4-6        │ 3-1-4-6-9-10-15-12 │
└────┴────────────────┴────────────────────┘
```
![bulkab02188.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02188.jpg?_LANG=enus)

#### CPYRAM

```text
┌────┬────────────────┬───────────────────┐
│    │ Linear Element │ Quadratic Element │
├────┼────────────────┼───────────────────┤
│ S1 │ 4-3-2-1        │ 4-3-2-1-8-7-6-9   │
├────┼────────────────┼───────────────────┤
│ S2 │ 1-2-5          │ 1-2-5-6-11-10     │
├────┼────────────────┼───────────────────┤
│ S3 │ 2-3-5          │ 2-3-5-7-12-11     │
├────┼────────────────┼───────────────────┤
│ S4 │ 3-4-5          │ 3-4-5-8-13-12     │
├────┼────────────────┼───────────────────┤
│ S5 │ 4-1-5          │ 4-1-5-9-10-13     │
└────┴────────────────┴───────────────────┘
```
![bulkab02190.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02190.jpg?_LANG=enus)

#### CTETRA

```text
┌────┬────────────────┬───────────────────┐
│    │ Linear Element │ Quadratic Element │
├────┼────────────────┼───────────────────┤
│ S1 │ 3-2-1          │ 3-2-1-6-5-7       │
├────┼────────────────┼───────────────────┤
│ S2 │ 1-2-4          │ 1-2-4-5-9-8       │
├────┼────────────────┼───────────────────┤
│ S3 │ 2-3-4          │ 2-3-4-6-10-9      │
├────┼────────────────┼───────────────────┤
│ S4 │ 3-1-4          │ 3-1-4-7-8-10      │
└────┴────────────────┴───────────────────┘
```

![bulkab02192.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02192.jpg?_LANG=enus)

#### CQUAD4/CQUAD/CQUAD8/CQUADR when DIM is 3D

```text
┌─────┬────────────────┬───────────────────┐
│     │ Linear Element │ Quadratic Element │
├─────┼────────────────┼───────────────────┤
│ E1  │ 1- 2           │ 1-2-5             │
├─────┼────────────────┼───────────────────┤
│ E2  │ 2-3            │ 2-3-6             │
├─────┼────────────────┼───────────────────┤
│ E3  │ 3-4            │ 3-4-7             │
├─────┼────────────────┼───────────────────┤
│ E4  │ 4-1            │ 4-1-8             │
├─────┼────────────────┼───────────────────┤
│ TOP │ 1-2-3-4        │ 1-2-3-4-5-6-7-8   │
├─────┼────────────────┼───────────────────┤
│ BTM │ 4-3-2-1        │ 4-3-2-1-7-6-5-8   │
└─────┴────────────────┴───────────────────┘
```

![bulkab02194.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02194.jpg?_LANG=enus)

#### CTRIA3/ CTRIA6/CTRIAR when DIM is 3D

```text
┌─────┬────────────────┬───────────────────┐
│     │ Linear Element │ Quadratic Element │
├─────┼────────────────┼───────────────────┤
│ E1  │ 1- 2           │ 1-2-4             │
├─────┼────────────────┼───────────────────┤
│ E2  │ 2-3            │ 2-3-5             │
├─────┼────────────────┼───────────────────┤
│ E3  │ 3-1            │ 3-1-6             │
├─────┼────────────────┼───────────────────┤
│ TOP │ -2-3           │ 1-2-3-4-5-6       │
├─────┼────────────────┼───────────────────┤
│ BTM │ 3-2-1          │ 3-2-1-5-4-6       │
└─────┴────────────────┴───────────────────┘
```

![bulkab02196.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02196.jpg?_LANG=enus)

#### CQUAD4, CQUAD8 and CQUADX when DIM is 2D

```text
┌───────┬────────────────┬───────────────────┐
│       │ Linear Element │ Quadratic Element │
├───────┼────────────────┼───────────────────┤
│ S1/E1 │ 1- 2           │ 1-2-5             │
├───────┼────────────────┼───────────────────┤
│ S2/E2 │ 2-3            │ 2-3-6             │
├───────┼────────────────┼───────────────────┤
│ S3/E3 │ 3-4            │ 3-4-7             │
├───────┼────────────────┼───────────────────┤
│ S4/E4 │ 4-1            │ 4-1-8             │
└───────┴────────────────┴───────────────────┘
```

![bulkab02198.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02198.jpg?_LANG=enus)

#### CTRIA3, CTRIA6, CTRIAX, CTRIAX6 when DIM is 2D

```text
┌───────┬────────────────┬───────────────────┐
│       │ Linear Element │ Quadratic Element │
├───────┼────────────────┼───────────────────┤
│ S1/E1 │ 1- 2           │ 1-2-4             │
├───────┼────────────────┼───────────────────┤
│ S2/E2 │ 2-3            │ 2-3-5             │
├───────┼────────────────┼───────────────────┤
│ S3/E3 │ 3-1            │ 3-1-6             │
└───────┴────────────────┴───────────────────┘
```

![bulkab02200.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02200.jpg?_LANG=enus)

#### CAXISYM

```text
┌─────┬────────────────┬───────────────────┐
│     │ Linear Element │ Quadratic Element │
├─────┼────────────────┼───────────────────┤
│ S1  │ 1              │ 1                 │
├─────┼────────────────┼───────────────────┤
│ S2  │ 2              │ 2                 │
├─────┼────────────────┼───────────────────┤
│ TOP │ 1-2            │ 1-2-3             │
├─────┼────────────────┼───────────────────┤
│ BTM │ 2-1            │ 2-1-3             │
└─────┴────────────────┴───────────────────┘
```

![bulkab02202.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02202.jpg?_LANG=enus)

#### CBAR, CBEAM 

```text
┌─────────┬────────────────┬───────────────────┐
│         │ Linear Element │ Quadratic Element │
├─────────┼────────────────┼───────────────────┤
│ ENDA    │ 1              │ 1                 │
├─────────┼────────────────┼───────────────────┤
│ ENDB    │ 2              │ 2                 │
├─────────┼────────────────┼───────────────────┤
│ (BLANK) │ 1-2            │ 1-2-3             │
└─────────┴────────────────┴───────────────────┘
```

#### CBEAM3

![BCSURF_CBAR_CBEAM.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/BCSURF_CBAR_CBEAM.png?_LANG=enus)
