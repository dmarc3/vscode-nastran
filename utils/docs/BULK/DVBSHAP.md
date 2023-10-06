## [DVBSHAP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DVBSHAP.xhtml) - Design Variable to Boundary Shapes

Associates a design variable identification number to a linear combination of boundary shape vectors from a particular auxiliary model.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DVBSHAP DVID    AUXMOD  COL1    SF1     COL2    SF2     COL3    SF3             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DVBSHAP 4       1       1       1.6                                             
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ DVID      │ Design variable identification number of a DESVAR entry.  (Integer > 0)                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ AUXMOD    │ Auxiliary model identification number.  (Integer > 0)                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ COLi      │ Load sequence identification number from AUXMODEL Case Control command.  (Integer > 0) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ SFi       │ Scaling factor for load sequence identification number.  (Real; Default = 1.0)         │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Design variable DVID must be defined on a DESVAR entry.
2. Multiple references to the same DVID and/or COLi will result in the vector addition of the referenced boundary shape vectors.
3. Multiple DVBSHAP entries may be specified.
