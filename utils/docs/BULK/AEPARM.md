## [AEPARM](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AEPARM.xhtml) - General Controller for Use in Trim

Defines a general aerodynamic trim variable degree-of-freedom (aerodynamic extra point). The forces associated with this controller will be derived from AEDW, AEFORCE and AEPRESS input data.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AEPARM  ID      LABEL   UNITS                                                   
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AEPARM  5       THRUST  LBS                                                     
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────┤
│ ID        │ Controller identification number. (Integer > 0)                        │
├───────────┼────────────────────────────────────────────────────────────────────────┤
│ LABEL     │ Controller name. See Remark 1. (Character)                             │
├───────────┼────────────────────────────────────────────────────────────────────────┤
│ UNITS     │ Label used to describe the units of the controller values. (Character) │
└───────────┴────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Controller LABELs that comprise the unique set relative to all the AESURF, AESTAT and AEPARM entries will define the set of trim variable degrees-of-freedom for the aeroelastic model.
2. Unit labels are optional and are only used to label outputs. No units will be associated with the controller if left blank.
