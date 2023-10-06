## [DTI,SETREE](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DTI.SETREE.xhtml) - Superelement Tree Definition

Defines a superelement tree that determines the superelement processing order.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DTI     SETREE  “1”     SEUP1   SEDOWN1 SEUP2   SEDOWN2 SEUP3   SEDOWN3 + 
+       SEUP4   SEDOWN4 SEUP5   SEDOWN5 -etc.-                         
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DTI     SETREE   1       1      14      2       14      3       14
        4       14      14       0                                
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                 │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────┤
│ SEUPi     │ Identification number of the superelement upstream from SEDOWNi.  (Integer > 0)         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────┤
│ SEDOWNi   │ Identification number of the superelement into which SEUPi is assembled.  (Integer > 0) │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. SETREE entries or the DTI,SETREE entry are required for multi-level superelement configurations.
2. If an DTI,SETREE entry is provided, then SETREE entries are not required.
3. If both SETREE entries and a DTI,SETREE entry exist, then the DTI,SETREE entry will be ignored.
4. If a superelement is not referenced on the DTI,SETREE or SETREE entry, then the manner in which it is handled depends on the type of that superelement. If it is a PART superelement, then the residual will be regarded as its downstream superelement and the undefined superelement will therefore be placed immediately above the residual in the tree. If it is a Main Bulk Data superelement, then it will also be handled like an undefined PART superelement as above  if all of its exterior points belong to the residual . However, if one or more of its exterior points do not belong to the residual, then the program will terminate with a user fatal error complaining that one of more of the superelements are not in the same path.
5. If this entry is not present, the superelement tree and the processing order are determined automatically.
6. A superelement identification may appear only once in a SEUPi field.
7. On restart, if a superelement identification does not appear in a SEUPi field, its matrices will not be assembled, even though they may be present in the database.
8. See the  MSC Nastran Superelements and Modules User’s Guide  for a description of user-designated trees.
9. This entry is stored in the database automatically.  Once stored, the Bulk Data entry may be removed from the input file.
10. In the example above, the following superelement tree is defined:

![bulkde03338.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03338.jpg?_LANG=enus)

Figure 0-51 Sample Superelement Tree
