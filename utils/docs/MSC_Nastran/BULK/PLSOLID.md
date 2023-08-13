## [PLSOLID](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PLSOLID.xhtml) - Fully Nonlinear Solid Element Properties

Defines a fully nonlinear (i.e., large strain and large rotation) hyperelastic solid element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PLSOLID PID     MID     STR                                                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PLSOLID 20      21                                                              
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Element property identification number. (Integer > 0)                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Identification number of a MATHP entry. (Integer > 0)                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ STR       │ Location of stress and strain output. (Character: “GAUS” or “GRID”, Default = “GRID”) │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. PLSOLID can be referenced by a CHEXA, CPENTA, or CTETRA entry.
2. Stress and strain are output in the basic coordinate system.
3. PLSOLID is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PLSOLID property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PSOLID, PLSOLID entries.
