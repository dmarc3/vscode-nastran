## [TRMCPL](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TRMCPL1.xhtml) - Trim Component Interface Coupling Parameters

Defines the interface coupling parameters for computing interface coupling matrices.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TRMCPL  TID     CTYPE   PLTOL   GAPTOL1 GAPTOL2 GAPTOL3 GAPTOL4 RID             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TRMCPL  1       SGLUED  0.12    5                                               
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TID       │ Identification number of trim component. (Integer>0; Required)                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CTYPE     │ Interface coupling type; see Remarks 2, 3 and 8. (Character, "SGLUED", "SSLIDE", "SOPEN",      │
│           │ "SIMPER", "SAIRGAP", "TRMSUR" and "INTERF"; Required)                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLTOL     │ Relative tolerance for in-plane/in-element/normal acceptance with respect to CTYPE. (Real>0.0; │
│           │ Default=0.1)                                                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GAPTOLx   │ ◾GAPTOL1 Absolute tolerance for extrusion with respect to CTYPE. (Real>0.0; Default=0.01)     │
│           │ ◾GAPTOL2 Second absolute tolerance for extrusion with respect to CTYPE. (Real>0.0;            │
│           │ Default=GAPTOL1) ◾GAPTOL3 Third absolute tolerance for extrusion with respect to CTYPE.       │
│           │ (Real>0.0; Default=GAPTOL2) ◾GAPTOL4 Fourth tolerance for extrusion with respect to CTYPE.    │
│           │ (Real>0.0; Default=GAPTOL3)                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RID       │ ID of a region of a TRMC. (Blank or Integer≥0, default=0)                                      │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```
