## [SETREE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SETREE.xhtml) - Superelement Tree Definition (Alternate Form of DTI,SETREE)

Specifies superelement reduction order.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SETREE  SEID    SEUP1   SEUP2   SEUP3   SEUP4   SEUP5   SEUP6   SEUP7   +       
+       SEUP8   SEUP9   -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SETREE  400     10      20      30      40                                      
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEID      │ Partitioned superelement identification number of a downstream superelement.  (Integer > 0) │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEUPi     │ Identification number of superelements that are upstream of SEID.  (Integer > 0)            │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────┘
```

![bulkqrs07628.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07628.jpg?_LANG=enus)
