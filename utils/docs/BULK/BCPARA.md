## [BCPARA](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCPARA.xhtml) - Contact Parameters -SOLs 101 and 400

Defines contact parameters used in SOL 101 and SOL 400. This entry is not available in SOL 700.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCPARA  ID      Param1  Value1  Param2  Value2  Param3  Value3          +       
+       Param4  Value4  Param5  Value5  etc.                                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCPARA          ERROR   0.1     BIAS    0.5                                     
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Subcase to which the defined parameters belong. If ID is zero, the parameters belong to all │
│           │ subcases. (Integer > 0; no Default)                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ Param(i)  │ Name of a parameter. Allowable names are given in Table 9-7. (Character)                    │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ Value(i)  │ Value of the parameter. See Table 9-7. (Real or Integer)                                    │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────┘
```
