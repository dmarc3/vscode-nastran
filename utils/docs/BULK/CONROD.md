## [CONROD](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CONROD.xhtml) - Rod Element Property and Connection

Defines a rod element without reference to a property entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CONROD  EID     G1      G2      MID     A       J       C       NSM             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CONROD  2       16      17      4       2.69                                    
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                 │
├───────────┼─────────────────────────────────────────────────────────────────────────┤
│ EID       │ Unique element identification number. (0 < Integer < 100,000,000)       │
├───────────┼─────────────────────────────────────────────────────────────────────────┤
│ G1, G2    │ Grid point identification numbers of connection points. (Integer > 0; ) │
├───────────┼─────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material identification number. (Integer > 0)                           │
├───────────┼─────────────────────────────────────────────────────────────────────────┤
│ A         │ Area of the rod. (Real)                                                 │
├───────────┼─────────────────────────────────────────────────────────────────────────┤
│ J         │ Torsional constant. (Real)                                              │
├───────────┼─────────────────────────────────────────────────────────────────────────┤
│ C         │ Coefficient for torsional stress determination. (Real)                  │
├───────────┼─────────────────────────────────────────────────────────────────────────┤
│ NSM       │ Nonstructural mass per unit length. (Real)                              │
└───────────┴─────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Element identification numbers should be unique with respect to all other element identification numbers.
2. For structural problems, MID must reference a MAT1 material entry.
3. For heat transfer problems, MID must reference a MAT4 or MAT5 material entry.

![bulkc202650.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202650.jpg?_LANG=enus)

Figure 0-1 CONROD Element Forces and Moments
