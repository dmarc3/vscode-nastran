## [ERPPNL](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.ERPPNL.xhtml) - Equivalent Radiated Power Definition

Defines one or more panels by referencing sets of elements or properties.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ERPPNL  NAME1   SETID1  NAME2   SETID2  NAME3   SETID3  NAME4   SETID4  +       
+       NAME5   SETID5                                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ERPPNL  ROOF    1       DOORLF  16                                              
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NAMEi     │ Panel label. (CHAR)                                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SETIDi    │ Identification number of a SET3 Bulk Data entry that lists the panel property entries or the panel │
│           │ elements. (Integer > 0)                                                                            │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The SET3 entries can only refer to 2D and/or 3D structural element types, such as QUAD4, TRIA3, QUADR, CTRIAR, QUAD8, TRIA6, HEXA, PENTA, PYRAM and TETRA, or PSHELL, PCOMP, PCOMPG and PSOLID entry associated with those element types.
2. NAMEi are used in a Case Control SET definition defining  setp  to select the panels in the Case Control command ERP.
3. Duplicate Element IDs are removed if they occur on the referencing SET3 entries prior to the ERP calculation.
4. User does not need to specify the outer face(s) of 3D elements. The outer face(s) or exposed face(s) of 3D elements will be determined automatically. Interior 3D element(s) which has no exposed face(s) will not be included for ERP computation.
