## [PROD](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PROD.xhtml) - Rod Property

Defines the properties of a rod element (CROD entry).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PROD    PID     MID     A       J       C       NSM                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PROD    17      23      42.6    17.92   4.2356  0.5                             
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                             │
├───────────┼─────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number. (Integer > 0)                       │
├───────────┼─────────────────────────────────────────────────────────────────────┤
│ MID       │ Material identification number. See Remarks 2. and 3. (Integer > 0) │
├───────────┼─────────────────────────────────────────────────────────────────────┤
│ A         │ Area of the rod. (Real)                                             │
├───────────┼─────────────────────────────────────────────────────────────────────┤
│ J         │ Torsional constant. (Real)                                          │
├───────────┼─────────────────────────────────────────────────────────────────────┤
│ C         │ Coefficient to determine torsional stress. (Real; Default = 0.0)    │
├───────────┼─────────────────────────────────────────────────────────────────────┤
│ NSM       │ Nonstructural mass per unit length. (Real)                          │
└───────────┴─────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. PROD is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PROD property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PROD entries.
2. For structural problems, MID must reference a MAT1 material entry.
3. For heat transfer problems, MID must reference a reference MAT4 or MAT5 entry.
4. The formula used to calculate torsional stress is

     ![bulkp07206.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07206.jpg?_LANG=enus)  

     where  ![bulkp07208.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07208.jpg?_LANG=enus)  is the torsional moment.
