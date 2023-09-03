## [BSURF](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BSURF.xhtml) - Contact Body or Surface

Defines a contact body or surface by Element IDs.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BSURF   ID      ELID1   ELID2   ELID3   ELID4   ELID5   ELID6   ELID7   +
+       ELID8   ELID9   etc.
```

#### Alternate Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BSURF   ID      ELID1   THRU    ELID2   BY      INC                     +
+       ELID3   THRU    ELID4   BY      INC2
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BSURF   15      5       THRU    21      BY      4                       +
+       27      30      32      33                                      +
+       35      THRU    44                                              +
+       67      68      72      75      84      93                      
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Identification of a deformable surface corresponding to a BSID value on the BCBODY entry. See    │
│           │ Remark 2. (Integer > 0)                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ELIDi     │ Element identification numbers. If the curve or surface is defined with element ids only, the    │
│           │ direction of the normal depends on the grid point numbering. Keywords THRU and BY can be used to │
│           │ assist the listing. For SOL 700 the Alternate Format must be used with Remarks 6. and 7.         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INC       │ Identification number increment. See Remark 3. (Integer or blank)                                │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. BSURF can be used in SOL101, 103, 105, 107, 108, 109, 110, 111, 112, 400 and 700.
2. ID must be unique with respect to all other BSURF, BCBOX, BCPROP, and BCMATL entries.
3. For automatic generation of element IDs, the default increment value is 1 if element numbers are increasing or -1 if element numbers are decreasing (i.e., the user need not specify BY and the increment value).
4. The deformable surface may alternately be defined using BCBOX, BCPROP, or BCMATL entries.
5. Only one kind of entry (BSURF, BCBOX, BCPROP, or BCMATL) may be used to define a particular deformable surface.
6. For SOL 700, Format 1 and the Alternate Format cannot be mixed for a particular BSURF entry.
7. For SOL 700 if the Alternate Format is used, THRU must be in column 4 for entries with the BSURF header and in column 3 for continuation entries. If BY is not used, columns 6-9 of the BSURF entry and columns 5-9 of continuation entries must be blank.
