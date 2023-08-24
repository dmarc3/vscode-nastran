## [CSUPEXT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CSUPEXT.xhtml) - Superelement Exterior Point Definition

Assigns exterior points to a superelement.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CSUPEXT SEID    GP1     GP2     GP3     GP4     GP5     GP6     GP7             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CSUPEXT 2       147     562     937                                             
```

#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CSUPEXT SEID    GP1     “THRU”  GP2                                             
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CSUPEXT 5       12006   THRU    12050                                           
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEID      │ Identification number of a primary superelement. (Integer > 0)                                   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GPi       │ Grid or scalar point identification number in the downstream superelement or residual structure. │
│           │ (Integer > 0 or “THRU”; for “THRU” option, GP1 < GP2)                                            │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Grid or scalar points are connected (that is, are exterior) to a superelement only if they are connected by structural, rigid, or plot elements.  MPC entries are not regarded as elements. This entry is a means of providing connectivity for this purpose.
2. Open sets are allowed with the “THRU” option.
3. Scalar points may be interior to the residual structure (SEID = 0) only.
4. This entry may be applied only to the primary superelements. The CSUPER entry is used for secondary superelements (identical image, mirror image, and external superelements).
