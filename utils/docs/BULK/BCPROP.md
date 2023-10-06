## [BCPROP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCPROP.xhtml) - 3D Contact Region by Element Properties

Defines a 3D contact region by element properties. All elements with the specified properties define a contact body.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCPROP  ID      IP1     IP2     IP3     IP4     IP5     IP6     IP7     +       
+       IP8     IP9     etc.                                                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCPROP  1       101     201     301                                             
```

#### Alternate Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCPROP  ID      IP1     THRU    IP2     IP3     IP4     IP5     IP6     +       
+       IP7     IP8     IP9     etc.                                            
```

#### Alternate Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCPROP  1       101     THRU    102     105     THRU    109     110             
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Identification number of a deformable surface corresponding to a BSID value on the BCBODY entry. │
│           │ All elements corresponding to the property IDs specified that may potentially come into contact. │
│           │ Do not specify mixed property types (use all shell, all solid or all beam properties only). See  │
│           │ Remark 1. (Integer > 0)                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IPi       │ Property ID. A minimum of one entry is required. (Integer; no Default)                           │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. ID must be unique with respect to all other BSURF, BCBOX, BCPROP, and BCMATL entries.
2. The deformable surface may alternately be defined using BSURF, BCBOX, or BCMATL entries.
3. Only one kind of entry (BSURF, BCBOX, BCPROP, or BCMATL) may be used to define a particular deformable surface.
4. All elements corresponding to the IDs entered will be used to define the deformable surface.
5. As many continuation lines as necessary may be used to define all property IDs associated with a particular deformable body.
6. The alternate format is triggered if field 4 contains THRU. The THRU keyword may appear in fields 4 thru 8.
7. BCBOX and BCMATL are not available for SOL 101 or SOL 400
