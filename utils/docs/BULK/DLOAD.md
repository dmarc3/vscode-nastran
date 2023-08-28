## [DLOAD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DLOAD.xhtml) - Dynamic Load Combination or Superposition

Defines a dynamic loading condition for frequency response or transient response problems as a linear combination of load sets defined via RLOAD1, RLOAD2, TLOAD1, TLOAD2 and ACSRCE entries for frequency response or TLOAD1 or TLOAD2 entries for transient response.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DLOAD   SID     S       S1      L1      S2      L2      S3      L3      +       
+       S4      L4      -etc.-  *                                               
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DLOAD   17      1.0     2.0     6       -2.0    7       2.0     8       +       
+       -2.0    9                                                               
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Load set identification number. See Remarks 1. and 4. (Integer > 0)                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ S         │ Scale factor.  See Remarks 2. and 8. (Real)                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Si        │ Scale factors. See Remarks 2., 7. and 8. (Real)                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Li        │ Load set identification numbers of RLOAD1, RLOAD2, TLOAD1, TLOAD2, and ACSRCE entries. See Remarks │
│           │ 3. and 7. (Integer > 0)                                                                            │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Dynamic load sets must be selected in the Case Control Section with DLOAD = SID.
2. The load vector being defined by this entry is given by

     ![bulkde03222.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03222.jpg?_LANG=enus)  

3. Each Li must be unique from any other Li on the same entry.
4. SID must be unique from all ACSRCE, RLOAD1, RLOAD2, TLOAD1 and TLOAD2 dynamic load entries.
5. Nonlinear transient load sets (NOLINi entries) may not be specified on DLOAD entries.  NOLINi entries are selected separately in the Case Control Section by the NONLINEAR command.
6. A DLOAD entry may not reference a set identification number defined by another DLOAD entry.
7. The scale factor Si will apply to all dynamic load entries with load set identification number of Li.
8. If Modules are present then this entry may only be specified in the main Bulk Data section.
