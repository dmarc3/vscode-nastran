## [FORCUDS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FORCUDS.xhtml) - User-defined Enforced Motion at Grid Points

Defines enforced motion at grid points specified by a user subroutine. Used in SOL700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FORCUDS LID     GROUP   UNAME                                           +       
+       G1      G2      THRU    G3                                              
```

#### Example:

In FMS Section of the MSC Nastran input stream:

CONNECT SERVICE extvel  ![bulkfgil03720.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03720.jpg?_LANG=enus) SCA.MDSolver.Obj.Uds.Dytran.Loads ![bulkfgil03722.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03722.jpg?_LANG=enus)

In Bulk Data:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FORCUD  1       EXTVEL                                                  +
+       1       2       3       5 
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LID       │ Number of a set of loads.(Integer>0;required)                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GROUP     │ The group name used for the FMS section CONNECT SERVICE statement. (Character; required)           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNAME     │ User subroutine name associated with the entry. (Character; default=EXTVEL)                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Numbers of the grid points that are constrained. If the word THRU appears between two numbers, all │
│           │ the numbers in the range are included in the list. BY indicates the increment to be used within    │
│           │ this range. (Integer or character; required.)                                                      │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. LID must be referenced by a TLOAD1 entry.
2. FORCUDS can only be used to specify enforced velocities for grid points. The TYPE field on the TLOAD1 entry must be set to two. The TID on the TLOAD1 entry must be set to zero or blank (no time variation).
3. The GROUP name must be unique from all other GROUP names if more than one FORCUDS is used. Therefore each FORCUDS must have its own group name in a FMS section CONNECT SERVICE statement.
4. The constraint name is passed to the subroutine and can be used to identify the constraint.
5. A THRU specification, including the start and finish points in the range, must be on one line.
6. If the THRU specification is used, all the points in the sequence do not have to exist. Those that do not exist are ignored. The first point in the THRU specification must be a valid grid point. BY can be used to exclude grid points.
7. None of the fields in the list of grid points can be blank or zero, since this designation marks the end of the list.
8. Any number of continuation lines can be used to define the list of grid points.
9. UNAME can be:
