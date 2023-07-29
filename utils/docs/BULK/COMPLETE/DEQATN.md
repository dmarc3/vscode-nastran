## [DEQATN](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DEQATN.xhtml) - Equation Definition

Defines one or more equations for use in analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DEQATN  EQID    EQUATION                                                +
+       EQUAT...        
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DEQATN  14                      
```

```text
┌───────────┬──────────────────────────────────────────────────────┐
│ Describer │ Meaning                                              │
├───────────┼──────────────────────────────────────────────────────┤
│ EQID      │ Unique equation identification number. (Integer > 0) │
├───────────┼──────────────────────────────────────────────────────┤
│ EQUATION  │ Equation(s). See Remarks. (Character)                │
└───────────┴──────────────────────────────────────────────────────┘
```
