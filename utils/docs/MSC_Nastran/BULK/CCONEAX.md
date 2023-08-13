## [CCONEAX](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CCONEAX.xhtml) - Axisymmetric Shell Element Connection

Defines a conical shell element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CCONEAX EID     PID     RA      RB                                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CCONEAX 1       2       3       4                                               
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Unique element identification number. (0 < Integer < 100,000,000)                │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of a PCONEAX entry.  (Integer > 0; Default = EID) │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ RA        │ Identification number of a RINGAX entry.  (Integer > 0; )                        │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ RB        │ Identification number of a RINGAX entry.  (Integer > 0; )                        │
└───────────┴──────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This element has limited capabilities. See the  MSC Nastran Reference Guide , Section 5.3.3.
2. This entry is allowed only if an AXIC entry is also present.
3. In order to reference this entry on a SET Case Control command, the ID must be modified by

![bulkc102516.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102516.jpg?_LANG=enus)  

where n is the harmonic number plus one and IDn is the value specified on the SET entry.
