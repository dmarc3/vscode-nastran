## [DLOAD (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.DLOAD.Case.xhtml) - Dynamic Load Set Selection

Selects a dynamic load or an acoustic source to be applied in a transient or frequency response problem.

#### Format:

```nastran
DLOAD=n
```

#### Example:

```nastran
DLOAD=73
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification of a DLOAD, RLOAD1, RLOAD2, TLOAD1, TLOAD2, or ACSRCE Bulk Data entry (Integer │
│           │  >  0).                                                                                           │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. RLOAD1 and RLOAD2 may only be selected in a frequency response problem.
2. TLOAD1 and TLOAD2 may be selected in a transient or frequency response problem.
3. Either an RLOADi or TLOADi entry (but not both) must be selected in an aeroelastic response problem. If RLOADi is selected, a frequency response is calculated. If TLOADi is selected, the transient response is computed by Fourier transform. When there are only gust loads (GUST Bulk Data entry), the DLOAD selects a TLOADi or RLOADi Bulk Data entry with zero load, along with field 3 of the GUST command.
4. The DLOAD command will be ignored if specified for upstream superelements in dynamic analysis. To apply loads to upstream superelements, refer to the LOADSET Case Control command.
5. For nonlinear dynamic analysis with SOL 400, TEMPERATURE load can't be applied by DLOAD/TEMP/TLOADi. TEMP (case control) and TTEMP (Bulk data) should be used to apply the temperature load. However, for pure linear analysis, DLOAD/TEMP has to be used for temperature load.
