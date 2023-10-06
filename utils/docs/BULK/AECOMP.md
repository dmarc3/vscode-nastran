## [AECOMP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AECOMP.xhtml) - Component for an Integrated Load Monitor Point

Defines a component for use in monitor point definition or external splines.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AECOMP  NAME    LISTTYPELISTID1 LISTID2 LISTID3 LISTID4 LISTID5 LISTID6 +       
+       LISTID7 -etc.-                                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AECOMP  WING    AELIST  1001    1002                                            
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NAME      │ A character string of up to eight characters identifying the component. (Character)               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LISTTYPE  │ One of CAERO, AELIST or CMPID for aerodynamic components and SET1 for structural components.      │
│           │ Aerodynamic components are defined on the aerodynamic ks-set mesh while the structural components │
│           │ are defined on the g-set mesh. See Remarks 2. and 4.                                              │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LISTIDi   │ The identification number of either SET1, AELIST or CAEROi entries that define the set of grid    │
│           │ points that comprise the component. See Remarks 2. and 4.                                         │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The Identification name must be unique among all AECOMP and AECOMPL entries.
2. If the component is defined on the structure, LISTIDs must refer to SET1 entry(ies) that define the list of associated GRID points. For the AELIST or CAERO option, the LISTIDs must refer to AELIST or CAERO i entries, respectively. Note that, for DLM models (CAERO1/2), the set of points defined by the AELIST are the box identification numbers. For example, if the control surface’s grids are desired, the same AELIST used for the AESURF can be referred to here. An AECOMP component must be defined as either an aerodynamic mesh component or a structural component. The two mesh classes cannot be combined into a single component.
3. The AECOMPL entry can be used to combine AECOMP entries into new components. When combining components, the structural and aerodynamic classes must be kept separate.
4. If LISTTYPE = CMPID, LISTID1 identifies the associated set of AEQUAD4, AETRIA3 elements that define the aero component.
