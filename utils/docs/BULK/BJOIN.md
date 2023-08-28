## [BJOIN](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BJOIN.xhtml)

Defines (multiple) pairs of grid points of one-dimensional and/or shell elements to be joined during the analysis in SOL 700. When the failure criterion for a grid-point pair is satisfied, the grid-point pair is removed from the join and the grid-point motion is computed for the separate grid points. The join ceases to exist when all pairs of the join have failed, after which all of the grid points of the join are treated as separate grid points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BJOIN   BID     SID     TOL     TYPE            SN              SS      +       
+                                       MULTI                           +       
+               TF                                                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BJOIN   1       2               SPOTWELD        1.E3            1.E3            
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────┬─────────────┬─────────────┐
│ Describer │ Meaning                                                               │ Type        │ Default     │
├───────────┼───────────────────────────────────────────────────────────────────────┼─────────────┼─────────────┤
│ BID       │ BJOIN number.                                                         │ Integer > 0 │ Required    │
├───────────┼───────────────────────────────────────────────────────────────────────┼─────────────┼─────────────┤
│ SID       │ BCGRID ID of set of grid points.                                      │ Integer > 0 │ Required    │
├───────────┼───────────────────────────────────────────────────────────────────────┼─────────────┼─────────────┤
│ TOL       │ Tolerance used in matching grid point pairs.                          │ Real > 0.0  │ 1.E-4       │
├───────────┼───────────────────────────────────────────────────────────────────────┼─────────────┼─────────────┤
│ TYPE      │ Type of failure criterion.                                            │ C           │ SPOTWELD    │
├───────────┼───────────────────────────────────────────────────────────────────────┼─────────────┼─────────────┤
│           │ SPOTWELD  Spotweld-type failure.                                      │             │             │
├───────────┼───────────────────────────────────────────────────────────────────────┼─────────────┼─────────────┤
│ SN        │ Failure force in tension.                                             │ Real > 0.0  │ No failure  │
├───────────┼───────────────────────────────────────────────────────────────────────┼─────────────┼─────────────┤
│ SS        │ Failure force in shear.                                               │ Real > 0.0  │ No failure  │
├───────────┼───────────────────────────────────────────────────────────────────────┼─────────────┼─────────────┤
│ MULTI     │ Multiple breakable joins, where the grid points must be entered as a  │ C           │ YES         │
│           │ sequence of BJOIN pairs.                                              │             │             │
├───────────┼───────────────────────────────────────────────────────────────────────┼─────────────┼─────────────┤
│           │ YES  The grid points are entered on the BCGRID entry as a sequence of │ Type        │ Default     │
│           │ BJOIN pairs.                                                          │             │             │
├───────────┼───────────────────────────────────────────────────────────────────────┼─────────────┼─────────────┤
│           │ NO  The code creates BJOIN pairs for every two grid points entered on │ Type        │ Default     │
│           │ the BCGRID entry when the grid point positions fall within the        │             │             │
│           │ tolerance (TOL).                                                      │             │             │
├───────────┼───────────────────────────────────────────────────────────────────────┼─────────────┼─────────────┤
│ TF        │ Failure time for nodal constraint set.                                │ Real        │ 1.0E20      │
└───────────┴───────────────────────────────────────────────────────────────────────┴─────────────┴─────────────┘
```

#### Remarks:

1. Nodes connected by a spot weld cannot be members of another constraint set that constrain the same degrees-of-freedom, a tied interface, or a rigid body, i.e., nodes cannot be subjected to multiple, independent, and possibly conflicting constraints.  Also, care must be taken to ensure that single point constraints applied to nodes in a constraint set do not conflict with the constraint sets constrained degrees-of-freedom.
2. When the failure time,  TF , is reached the spot weld becomes inactive and the constrained nodes may move freely.
3. Note that the shell elements do not have rotary stiffness in the normal direction and, therefore, this component cannot be transmitted.
4. For MULTI=YES, a spotweld or rivet will always be created, regardless if their distance is larger than the value of TOL. TOL will only be used for MULTI=NO.
