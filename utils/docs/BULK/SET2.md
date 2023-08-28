## [SET2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SET2.xhtml) - Grid Point List

Defines a list of structural grid points in terms of aerodynamic macro elements.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SET2    SID     MACRO   SP1     SP2     CH1     CH2     ZMAX    ZMIN            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SET2    3       111     0.0     0.75    0.0     0.667   3.51                    
```

```text
┌────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                           │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID        │ Unique identification number.  (Integer  >  0)                                                    │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MACRO      │ Element identification number of an aerodynamic macro element.  (Integer > 0)                     │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SP1, SP2   │ Lower and higher span division points defining the prism containing the set.  (Real)              │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CH1, CH2   │ Lower and higher chord division points defining the prism containing the set.  (Real)             │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ZMAX, ZMIN │ Z-coordinates of top and bottom (using right-hand rule with the order of the corners as listed on │
│            │ a CAEROi entry) of the prism containing set.  (Real)                                              │
└────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
