## [RADSET](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RADSET.xhtml) - Identifies a Set of Radiation Cavities

Specifies which radiation cavities are to be included for radiation enclosure analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RADSET  ICAVITY1ICAVITY2ICAVITY3ICAVITY4ICAVITY5ICAVITY6ICAVITY7ICAVITY8+       
+       ICAVITY9-etc.-                                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RADSET  1       2       3       4                                               
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ ICAVITYi  │ Unique identification number for a cavity to be considered for enclosure radiation analysis. │
│           │  (Integer > 0)                                                                               │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remark:

1. For multiple radiation cavities, RADSET specifies which cavities are to be included in the analysis.
