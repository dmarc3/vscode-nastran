## [RBJOINT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RBJOINT.xhtml) - Defines a Joint Between Two Rigid Bodies

Defines a joint between two rigid bodies. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RBJOINT ID      TYPE    N1      N2      N3      N4      N5      N6      +       
+               RPS                                                             
```

#### Examples:

#### Example 1 - Cylindrical Joint

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RBJOINT 1       CYLIND  101     201     103     204                             
```

    See link for table and images.
