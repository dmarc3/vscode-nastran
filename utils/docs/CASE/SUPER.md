## [SUPER (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SUPER.Case.xhtml) - Superelement Subcase Assignment

Assigns a subcase(s) to a superelement or set of superelements.

#### Format:

![casecontrol4a01382.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01382.jpg?_LANG=enus)  

#### Examples:

```nastran
SUPER=17, 3
SUPER=15
SUPER=ALL
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ i         │ Superelement identification number (Integer  >  0).                                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ The subcase is assigned to all superelements and all loading conditions (Default).              │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a previously appearing SET command. The subcase is assigned to all │
│           │ superelements with identification numbers that appear on this SET command (Integer  >  0).      │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ Load sequence number (Integer  >  0; Default = 1).                                              │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. All subcases with requests for specific superelement(s) must contain the SUPER command. If no SUPER command is specified in the Case Control Section, then all subcases will be assigned to all superelements; i.e., SUPER=ALL is the default.
2. All subcases associated with superelements must precede those for the residual structure except when SUPER=ALL or SUPER=n and the selected set includes the residual structure.
3. The load sequence number is only used in static analysis and frequency response analysis when there are multiple loading conditions. Also, the residual structure must have a subcase specified for each unique load condition. This is required because the number of residual structure subcases is used to determine the number of load conditions for all superelements.
4. The load sequence number is associated with the order of the subcases for the residual structure; i.e., the third loading condition is associated with the third subcase for the residual structure.
5. Subcases are required for superelements when there is a load, constraint, or output request.
6. If a set is referenced by n, then the SET identification number must be unique with respect to any superelement identification numbers. In addition, the same sets must be used for all loading conditions.
7. If the ALL option is used, it must be used for all loading conditions.
8. If there are no superelements in the model then the SUPER command will be ignored except in 3-step external superelement data recovery restarts in SOL 400. See Remarks 9 and 10 under the EXTDRIN Case Control command description.
