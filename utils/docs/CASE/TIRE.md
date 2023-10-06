## [TIRE (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.TIRE.Case.xhtml) - Tire Set Selection

The TIRE case control entry defines the tires to be included in the analysis by selecting the TIRE bulk data entry. This case control command can be used in solutions sequences SOLs 103, 107-112, 200 and 400.

#### Format:

```nastran
TIRE = n
```

#### Example:

```nastran
TIRE = 100
```

```text
┌───────────┬─────────────────────────────────────────────────┐
│ Describer │ Meaning                                         │
├───────────┼─────────────────────────────────────────────────┤
│ n         │ Set ID of a TIRE bulk data entry (Integer > 0). │
└───────────┴─────────────────────────────────────────────────┘
```

#### Remarks:

1. The TIRE case control command must occur above subcase level.
2. Using a particular combination of tires in the analysis only requires selection of the tires by referencing the TIRE bulk data entry.
