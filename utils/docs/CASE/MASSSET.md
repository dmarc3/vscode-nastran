## [MASSSET (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.MASSSET.Case.xhtml) - Mass Combination Selection

Selection of a mass combination in multiple mass combination analysis (MMC). This case control command can be used in various solutions sequences SOLs 101, 103, 107-112, 144-146, 200 and 400.

#### Format:

```nastran
MASSSET = n
```

#### Example:

```nastran
MASSSET = 11 
```

```text
┌───────────┬────────────────────────────────────────────────────┐
│ Describer │ Meaning                                            │
├───────────┼────────────────────────────────────────────────────┤
│ n         │ Set ID of a MASSSET bulk data entry (Integer > 0). │
└───────────┴────────────────────────────────────────────────────┘
```

#### Remarks:

1. Using a particular mass combination in analysis only requires referencing the mass combinations ID in MASSSET case control at the subcase level (or at step level in Sol 400). If no MASSSET is defined in the subcase then (like traditional non MMC analysis) the base mass is used as the mass for that subcase. Example for selecting mass combinations at the subcase level:

```nastran
SUBCASE 101
...
MASSSET = 11 $
...
SUBCASE 102
...
MASSSET = 12 $
```

2. The MASSSET bulk data entry defines a linear combination of incremental/base mass cases to form the subcase-dependent mass. The bulk data for the incremental mass case is preceded by “BEGIN MASSID=yyy”, where yyy > 0 is the integer ID of the mass increment case. The only data that will be used from the incremental mass bulk data section is element connections and element mass properties including materials (Parameters and grid data included in the incremental mass section will be ignored). The incremental mass will be computed based on the grid data supplied in the base mass bulk data section and the element properties supplied in the incremental mass section. Typically the user will construct the incremental mass by adding concentrated masses (e.g. CONM2, CMASS1 etc.) or by changing the material or element properties of the set of elements defined in incremental mass bulk data section.

```nastran
BEGIN massid=101 label='mass increment using conm2s'
BEGIN massid=102 label='mass increment using materials'
```

3. If Part SE are used in the model, mass increment related to these SEs can be specified in a separate bulk data section, “BEGIN SUPER=zzz MASSID=yyy”, where zzz > 0 is the Superelement ID and yyy is the mass increment ID.

```nastran
BEGIN SUPER=2 massid=101 label='mass increment using conm2s'
```
