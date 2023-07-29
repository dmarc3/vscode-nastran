## [FBODYLD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FBODYLD.xhtml) - Equilibrated Free-Body Applied Load Case Definition

Defines an equilibrated free-body applied load case.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FBODYLD NAMEL   FBODYSB                                                 +       
+       LABEL           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FBODYLD WINGLD  WINGSB                                                  +       
+       LOAD ON         
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NAMEL     │ User defined name identifying the load case. (Character; Required)                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FBODYSB   │ Name of a FBODYSB Bulk Data entry that defines the subsystem for this load. (Character; Required)  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABEL     │ A string comprising no more than 64 characters (fields 2 through 9) that identifies and labels the │
│           │ load case. (Character; optional)                                                                   │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. NAMEL must be unique.
2. The Label is optional.
