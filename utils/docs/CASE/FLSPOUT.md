## [FLSPOUT (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.FLSPOUT.Case.xhtml) - Control for Fluid-Structure Mode Participation Output

Control for fluid-structure mode participation output.

#### Format:

![casecontrol4a00994.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00994.jpg?_LANG=enus)  

#### Examples:

```nastran
SET 23  = ROOF, DRIVERSD
SET 211 = 1023, 4069, 56790
FLSPOUT   FLUIDMP = 30, STRUCTMP = 40, OUTSMP = 30, │
          PANELMP = 23, GRIDMP = 211
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FLUIDMP   │ Requests fluid participation calculation of fluid response on selected fluid points.               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Requests that all the fluid modes extracted be used.                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Requests that up to the first n fluid modes be used.                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE      │ Requests no participation calculation.                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GRIDFMP   │ Requests inclusion or exclusion of specific fluid grids to be used in all the requested types of   │
│           │ participation calculations. These are also the fluid grids that can be referred to on plot and     │
│           │ .op2 tables.                                                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Requests inclusion in all the requested types of the participation calculations of all fluid       │
│           │ points.                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ setf      │ Case Control set ID listing a selected set of fluid grids to be used in all the requested types of │
│           │ participation calculations.                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OUTFMP    │ Requests the FLUID FLUIDMP participation factors to be output for print.                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Requests that all FLUID FLUIDMP participation factors to be output for print.                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ p         │ Requests the p highest FLUIDMP participation factors to be output.                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOPRINT   │ Produces tables for plotting but do not print any results.                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FEPS      │ Filters threshold for fluid participation.                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ epsf      │ Threshold value.                                                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ARF       │ Acceptance ratio for fluid participation.                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ arf_v     │ Fluid participation values max_value in a column of the output matrix will be set to zero.         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STRUCTMP  │ Requests structural, load, and panel participation calculations on the selected fluid points.      │
│           │ FLUIDMP must be specified for this command to become active.                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Requests that all the structural modes extracted be used.                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ m         │ Requests that up to the first m structural modes be used.                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE      │ Requests no participation calculation.                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OUTSMP    │ Requests that structural STRUCTMP participation factors to be output for print.                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Request that all STRUCTMP participation factors be output.                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ q         │ Requests that the q highest STRUCTMP participation factors be output.                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOPRINT   │ Produces tables for plotting but does not print any results.                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PANELMP   │ Requests inclusion or exclusion of panel participation calculations on the selected fluid points.  │
│           │ FLUIDMP and STRUCTMP must both be specified for this command to become active.                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Requests all panels defined be included in the participation calculations on the selected fluid    │
│           │ points.                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ setp      │ Case Control set ID listing selected panels for panel participation calculations on the selected   │
│           │ fluid points. the set consists of the character names of the panels (new V2001)                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE      │ Requests exclusion from the participation calculations.                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GRIDMP    │ Requests inclusion or exclusion of a structural panel grid participation calculation on the        │
│           │ selected fluid points. FLUIDMP and STRUCTMP must both be specified for this command to become      │
│           │ active.                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Requests, for panels selected, that each and every individual panel grid be included as a separate │
│           │ calculation in the participation calculations on selected fluid points.                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ setg      │ Case Control set ID listing structural panel grids for grid mode participation on the selected     │
│           │ fluid points.                                                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE      │ Requests exclusion from the participation calculations.                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEPS      │ Filter threshold for structure participation.                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ epss      │ Threshold value.                                                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ARS       │ Acceptance ratio for structure related fluid participation.                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ars_v     │ Structure fluid participation values max_value in a column of the output matrix will be set to     │
│           │ zero.                                                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PSORT     │ Requests type of sort.                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ O2E       │ Controls generation of tables of mode participation versus natural frequency for excitation        │
│           │ frequencies. These tables are accessible in XYPLOT.                                                │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry represents a collection of PARAM,name,value entries and must appear above the subcase level. See   for detailed descriptions of the parameters collected on this entry. The value of any of these parameters may be given as either the character value given in this description, or the numeric value given in   on this guide.
2. If  n, m, p , or  q  are greater than the number computed, Nastran will invoke the ALL option for the current value.
3. PSORT values must occur in pairs such as (ABSOLUTE,DESCENDING).
4. The underlined item in the { } braces give the value of the keyword if the keyword and its describers are omitted from this entry. For example, if FLUIDMP is omitted from the FLSPOUT entry, then no fluid mode participation will be computed (unless a PARAM,FLUIDMP,value explicitly appears in a subcase or  ).
