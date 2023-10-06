## [DVSHAP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DVSHAP.xhtml) - Design Variable to Basis Vector(s)

Defines a shape basis vector by relating a design variable identification number (DVID) to columns of a displacement matrix.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DVSHAP  DVID    COL1    SF1     COL2    SF2     COL3    SF3                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DVSHAP  2       1       2.0     4       1.0                                     
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DVID      │ Design variable identification number on the DESVAR entry. (Integer > 0)                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COLi      │ Column number of the displacement matrix. See Remark 2. (1 < Integer <  maximum column number in │
│           │ the displacement matrix.)                                                                        │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SFi       │ Scaling factor applied to the COLi-th column of the displacement matrix. (Real; Default = 1.0)   │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. DVID must be defined on a DESVAR entry.
2. COLi must be a valid column number in the displacement matrix.
3. Multiple references to the same DVID and/or COLi will result in a linear combination of displacement vectors. In the example above, the shape basis vector is a linear combination of the fourth column and twice the second column.
4. The displacement matrix must have been created by SOL 101 or 200 with analysis = statics and be available on a database, which is attached via the DBLOCATE FMS statement shown below:

```nastran
ASSIGN         DISPMAT=’ physical filename of MASTER DBset ’ 
DBLOCATE       DATABLK=(UG/UGD,GEOM1/GEOM1D,GEOM2/GEOM2D) ,
            LOGICAL=DISPMAT
```
