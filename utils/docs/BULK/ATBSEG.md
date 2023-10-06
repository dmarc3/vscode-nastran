## [ATBSEG](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ATBSEG.xhtml) - Interface to ATB Segments- SOL 700

Defines the position and orientation of the ATB segments. The position and orientation as specified on the G.2 and G.3 entries in the ATB input file will be overruled by the definitions given here.

This entry can be used to create a Bulk Data file containing elements and grid points to visualize the ATB segment, together with the contact ellipsoid and the joints it is connected by. See also ATBJNT and DYPARAM, ATBSEG. Used in SOL700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ATBSEG  ID      NAME    COVER   NUMELM  GSTART  ESTART  MID     PIDCOV  +       
+       G0      G1      G2      G3      EID1    EID2    EID3    PIDCG           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ATBSEG  1       HEAD    YES     100     1000    1000    1000            +       
+       1010    1011    1012    1013    1001    1002    1003    1001            
```

```text
┌────────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                       │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID         │ Unique ATBSEG number. (Integer > 0; required)                                                 │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ NAME       │ Name of an ATB segment as given in the first field of a B.2 entry in the ATB input file.      │
│            │ (Character; required)                                                                         │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ G0~G3      │ The grid points span the local coordinate system of the ATB segment. G0~G3 are used by SOL700 │
│            │ to overwrite the initial position and orientation of the segments as specified in the ATB     │
│            │ input file. EID1-EID3 are about how to generate the grid points for an existing ATB input     │
│            │ file. (Integer > 0; required)                                                                 │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ G0         │ Located at the origin of the ATB segment.                                                     │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ G1         │ Located on the local x-axis.                                                                  │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ G2         │ Located on the local y-axis.                                                                  │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ G3         │ Located on the local z-axis.                                                                  │
└────────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```
