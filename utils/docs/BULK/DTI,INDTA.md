## [DTI,INDTA](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DTI.INDTA.xhtml) - Stress, Strain and/or Force Sort/Filter Item Code Override

Specifies or overrides default item codes for the sorting and filtering of element stresses, strains, and forces.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DTI     INDTA   “0"
```

To specify/override items for a sort of stress quantities:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DTI     INDTA   “1"     B1      C1      B2      C2      “ENDREC”
```

To specify/override items for a sort of force quantities:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DTI     INDTA   “2"     B1      C1      B2      C2      “ENDREC”
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DTI     INDTA   0
```

To specify/override items for a sort of stress quantities:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DTI     INDTA   1       64      18      75      18      ENDREC
```

To specify/override items for a sort of force quantities:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DTI     INDTA   2       34      2       2       4       ENDREC
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Bi        │ Element type identification number.  See the table in Item Codes for allowable values.         │
│           │  (Integer > 0)                                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Item code identification number for the stress, strain, or force quantity on which the sort or │
│           │ filter is to be performed.  See the table in the Item Codes for allowable values.  (Integer)   │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This table is recognized only in SOLs 101, 103, 105, 106, 108, 109, 111, 112, 114, 115, 144, 153, and for stress, strain or force quantities only. One or more of the user parameters S1, S1G, or S1M must be specified with a value greater then or equal to zero in order to request sorting and/or filtering.  See user parameter S1 in  . In order to sort force or strain quantities, a DMAP Alter is required.
2. If the Ci value is -1, the element type will   be suppressed on the output file.  An example of this feature could be as follows:  If an element type is to be sorted on two different values and output twice, this can be accomplished by two calls to the STRSORT module with two unique DTI tables.  However, other element types will be printed   twice.  This additional print can be suppressed by setting their sort codes to -1.
3.  lists the elements currently that are sortable.  In addition, the element type identification number, the default stress output quantity, and the associated stress code identification numbers are provided.  If this entry is not specified, then the stresses are sorted based on the default quantity given in  .

     The following should be noted:
     - The element type identification   number is used internally by the program to differentiate element types.
     - The stress code identification number is merely the word number in the standard printed output for the stress quantity of interest.  For example, the thirteenth word of stress output for the CHEXA element is the octahedral shear stress.  For this element type,   the element identification number and the grid point ID each count as a separate word.  Stress codes for the elements are tabulated in  .
     - By default, stress sorting for the membrane and plate elements will be performed on the Hencky-von Mises stress.  For maximum shear stress, the STRESS (MAXS) Case Control command should be specified.


          See link for table.
