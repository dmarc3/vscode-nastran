## [AECOMPL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AECOMPL.xhtml) - Component for an Integrated Load Monitor Point

Defines a component for use in aeroelastic monitor point definition or external splines as a union of other components.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AECOMPL NAME    LABEL1  LABEL2  LABEL3  LABEL4  LABEL5  LABEL6  LABEL7  +       
+       LABEL8  -etc.-                                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AECOMPL HORIZ   STAB    ELEV    BALANCE                                         
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NAME      │ A character string of up to eight characters Identifying the component. (Character)             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABELi    │ A string of 8 characters referring to the names of other components defined by either AECOMP or │
│           │ other AECOMPL entries.                                                                          │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The Identification name must be unique among all AECOMP and AECOMPL entries.
2. The AECOMPL entry can be used to combine AECOMP entries into new components. When combining components, the structural and aerodynamic classes must be kept separate.
