## [ATBJNT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ATBJNT.xhtml) - Interface to ATB Joints- SOL 700

This entry can only be used together with the ATBSEG entries that this joint connects. The ATBSEG entries overwrite the position and orientation of the ATB segments as specified in the ATB input file. The ATBJNT entry can be used to create a Bulk Data file containing elements and grid points to visualize the ATB segment together with its joints. This visualization of the joints makes it possible to position the ATB model in any available preprocessor. Used in SOL700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ATBJNT  ID      NAME                                                    +       
+       G0      G1      G2      G3      EID1    EID2    EID3            +       
+       G4      G5      G6      G7      EID4    EID5    EID6                    
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ATBJNT  1       HN                                                      +       
+       1010    1011    1012    1013    1004    1005    1006            +       
+       2010    2011    2012    2013    2004    2005    2006                    
```

```text
┌────────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                       │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID         │ Unique ATBJNT number. (Integer > 0; required)                                                 │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ NAME       │ Name of an ATB joint as given in the first field of a B.3 entry in the ATB input file.        │
│            │ (Character; required)                                                                         │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ G0~G7      │ An ATB joint connects two segments. A local joint coordinate system is attached to each of    │
│            │ these two segments. The position and orientation of these two coordinate systems relative to  │
│            │ the segment coordinate systems is given on entry B.3 in the ATB input file. For each joint    │
│            │ (J = 1, NJNT) a B.3 entry is defined in the ATB input file. The joint J connects the segment  │
│            │ JNT(J) as given on the B.3 entry and the segment J + 1. SOL700 finds the two segments that    │
│            │ are connected by the joint with name = NAME. The grid points G0-G3 and G4-G7 define the joint │
│            │ coordinate systems for the segments JNT(J) and J + 1, respectively. (Integer > 0; required)   │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ G0         │ Located at the origin of the joint coordinate system for the ATB segment JNT (J)              │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ G1         │ Located on the local x-axis.                                                                  │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ G2         │ Located on the local y-axis.                                                                  │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ G3         │ Located on the local z-axis.                                                                  │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ G4         │ Located at the origin of the joint coordinate system for the ATB segment J + 1.               │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ G5         │ Located on the local x-axis.                                                                  │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ G6         │ Located on the local y-axis.                                                                  │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ G7         │ Located on the local z-axis.                                                                  │
└────────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. All elements related to an ATB segment refer to the same material number. This material number is defined on the ATBSEG entry. If the material is defined to be rigid by means of a MATRIG entry, all elements can be easily connected to the contact ellipsoid of the ATB segment by means of METHOD=RELLIPS in BCTABLE or BCONPRG entry referencing the MATRIG entry. In this way, all elements related to an ATB segment move together with the ATB segment during the analyses and can be postprocessed.
