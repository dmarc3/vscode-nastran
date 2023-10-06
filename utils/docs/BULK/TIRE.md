## [TIRE](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TIRE.xhtml) - Selection of Tires used in the Analysis

The TIRE bulk data entry facilitates the selection of all the CDTire/NVH tires to be used in the simulation. This is done by specifying the name of each CDTire/NVH tire that is to be included in the simulation on the tire bulk data entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TIRE    ID                                                              +     
+       “CDTIRE”TNAME1  TNAME2  TNAME3  TNAME4  TNAME5  TNAME6  ...     +     
+       ...     ...     ...     TNAMEn                                   

```
where, n is the number of CDTire/NVH tires to be used in the simulation.

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TIRE    100                                                             +       
+       CDTIRE  TIRFL   TIRFR   TIRRL   TIRRR                                   
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Set identification number referenced by TIRE case control command. (Integer > 0; Required).     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “CDTIRE”  │ Keyword for indicating that CDTire/NVH tires are used in the model.                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TNAMEi    │ The name of the ith CDTire/NVH tire. This name is specified in the DTI entry exported by CDTire │
│           │ while generating the tire model.                                                                │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
