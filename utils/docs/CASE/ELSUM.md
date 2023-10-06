## [ELSUM (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.ELSUM.Case.xhtml) - Element Summary Output Request

Requests that a summary of element properties grouped by element type and/or element property type are to be printed.

#### Format:

![casecontrol4a00912.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00912.jpg?_LANG=enus)  

#### Examples:

```nastran
ELSUM = 9
ELSUM (PID) = ALL
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element summary output is grouped by element type.                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Element summary output is grouped by element property type.                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BOTH      │ Both EID and PID groupings are produced.                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EIDSUM    │ Only a summary of the mass totals for the EID grouping is produced.                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PIDSUM    │ Only a summary of the mass totals for the PID grouping is produced.                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSMCONT   │ Nonstructural mass contributions from NSM, NSM1, NSML, and NSML1 Bulk Data entries are identified. │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SUMMARY   │ Only a summary of the mass totals is produced.                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Element summary output for all elements                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification of a previously appearing SET command. Produces output for only those elements  │
│           │ whose identification numbers appear in the list of this SET command.                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE      │ No element summary output is produced.                                                             │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The ELSUM Case Control command produces a summary of properties for elements. The properties include element ID, material ID, length or thickness, area, volume, structural mass, nonstructural mass, total mass, and the product of total mass * WTMASS. Total mass is the sum of the structural and nonstructural masses.
2. Certain element types produce only partial data. For these element types, no mass data is produced, and mass totals will not include any contributions from these element types. Mass data is computed for the following element types: CBAR, CBEAM, CBEND, CHEXA, CMASSi, CONM1, CONM2, CONROD, CPENTA, CQUAD4, CQUAD8, CQUADR, CRAC2D, CRAC3D, CROD, CSHEAR, CTETRA, CTRIA3, CTRIA6, CTRIAR, CTRIAX6, and CTUBE. The mass of elements with mid side nodes is approximated using only the geometry of the corner nodes. To get an accurate total mass, use the output from the Grid Point Weight Generator (PARAM,GRDPNT).
3. EIDSUM takes precedence over EID if both are present. Likewise, PIDSUM takes precedence over PID.
4. The ELSUM Case Control command is ignored in heat transfer solution sequences.
5. The NSMCONT describer produces various amounts of output depending upon whether the summary option is selected (SUMMARY, PIDSUM or EIDSUM requested). If NSMCONT is combined with PID, a table is produced that identifies the contribution of each NSM type Bulk Data entry to the total element nonstructural mass. If SUMMARY is included with PID and NSMCONT, an additional table is produced that identifies the mass contributions for each property type by property ID.
6. ELSUM output is only available for the PRINT option, not the PUNCH or PLOT options used in other commands.
7. ELSUM does not support advanced nonlinear elements.
