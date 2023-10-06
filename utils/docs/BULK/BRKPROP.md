## [BRKPROP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BRKPROP.xhtml) - Specifies Property of Brake System for Brake Squeal Analysis Using SOL 400

Defines property of brake system for brake squeal calculations.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BRKPROP ID              Param_i Value   Param_i Value   Param_i Value   +       
+       Param_i Value   Param_i Value                                           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BRKPROP 28              AVSTIF  1.0E7   FRICT   0.25                            
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Identification ID of the Brake Property referred by the entry card BRKSYS                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AVSTIF    │ Approximate average stiffness per unit area between the two surfaces. AVSTIF is used as penalty    │
│           │ contact stiffness, it needs to be a large value but not so large that numerical instabilities      │
│           │ result. If AVSTIF is large enough, increasing it by a few orders of magnitude will not appreciably │
│           │ affect the squeal modes. (Real; Required if TAVSTIF=0).                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TAVSTIF   │ Table ID of a TABL3Di providing temperature or spatial variation of the average stiffness          │
│           │ (Integer; Default = 0 which means AVSTIF should be defined).                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FRICT     │ Enter the friction coefficient. If 0, the friction coefficient is obtained from the CONTACT TABLE  │
│           │ option.                                                                                            │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. When TAVSTIF is 0, AVSTIF should be defined. Otherwise, Nastran will issue a fatal message and stop.
