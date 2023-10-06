## [PANEL](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PANEL.xhtml) - Panel Definition for Coupled Fluid-Structural Analysis

Defines one or more panels by referencing sets of grid points, elements or properties.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PANEL   NAME1   SETID1  NAME2   SETID2  NAME3   SETID3  NAME4   SETID4          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PANEL   BKDOOR  103                                                             
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NAMEi     │ Panel label. (Character)                                                                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SETIDi    │ Identification number of a SET1 or SET3 entry that lists the grid points, elements or properties │
│           │ of the panel. On this entry, the SET1 should only be used for grid definition. (Integer > 0)     │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If a set of grid points is referenced, the set must list only structural grid points.
2. If an element is assigned to a panel, it is recommended that all of its connections points belong to the same panel.
3. If a set of elements is referenced, the set must list only structural elements. The panel will consist of all grid points that are connection points of these elements.
4. If a set of property identifiers is referenced, the properties must be referenced by structural elements. The panel will consist of all grid points that are connection points of elements referencing one of the properties contained in the set.
5. NAMEi is used only for labeling the output of the panel participation factors (cf. the description of the PFMODE and PFPANEL Case Control commands).
