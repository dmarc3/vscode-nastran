## [BCGRID](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCGRID.xhtml) - Contact region by a list of grid points.

Define a contact region by a grid point list, for SOLs 101, 103, 105, 107, 108, 109, 110, 111, 112, 200 and 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCGRID  BID     BPID    DIM                                             +       
+       GID1    GID2    GID3    “THRU”  GID4    “BY”    GID5    GID6    +       
+       GID7                                                                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCGRID  2       3       3D                                              +       
+       12      21      THRU    101     3       6                               
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ BID       │ Unique contact face identification number referenced by BCONECT (Integer > 0; Required). See │
│           │ remark 1.                                                                                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ BPID      │ Parameter identification number of a BCBDPRP entry. (Integer > 0 or blank)                   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ DIM       │ Dimension of the contact entry. (Character; Default= “3D”), “3D” or “2D”.                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ GIDi      │ Grid point ids. (Integer > 0)                                                                │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. BID must be unique among all BCSURF, BCBODY1 and BCGRID entries.
2. BCGRID entries are able to coexist with BCBODY1 entries. A BCGRID entry can be used with a BCSURF or a BCBODY1 entry to construct a contact pair. The BCGRID entry must be a secondary, the BCSURF or BCBODY must be a primary.
3. This entry only works in node to segment method.
4. The identification of BCGRID cannot be specified in the continuations of a BCONECT entry.
5. If a BCRIGID is referenced by a BCONECT, COPTS and COPTM in the BCONPRG referenced by the BCONECT will be ignored.

## [BCGRID (SOL 700 only)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCGRID.SOL.700.only.xhtml) - Contact Node Region

Grids to be included in contact analyses in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCGRID  CID     GID1    GID2    GID3    GID4    GID5    GID6    GID7    +
+       GID8    GID9    GID10   GID11   GID12   GID13   -etc.-
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCGRID  100     12      14      17      121     234     235     270     +
+       309     1001    THRU    2000    BY      2
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID           │ Unique identification number of a “cloud” of grid points which can be used for contact or RCONN,   │
│              │ BJOIN or WALL. (Integer > 0; Required)                                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GID1, GID2,… │ Gridpoint ID. THRU indicates a range to be used. BY is the increment to be used within this range. │
│              │ (Integer > 0; Required)                                                                            │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. ID must be unique with respect to all other BSURF, BCBOX, BCPROP, BCMATL, or BCSEG entries.
2. BCGRID may only be used for SECNDRY body definitions on the BCTABLE entry.
3. As many continuation lines as necessary may be used to define all GRID points used in the definition.
