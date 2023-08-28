## [DSAPRT (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.DSAPRT.Case.xhtml) - Design Sensitivity Output Parameters

Specifies design sensitivity output parameters.

#### Format:

![casecontrol4a00852.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00852.jpg?_LANG=enus)  

#### Examples:

```nastran
DSAPRT(FORMATTED,EXPORT)
DSAPRT(FORMATTED,START=FIRST,BY=3,END=LAST)=101
DSAPRT(UNFORMATTED,START=FIRST)
DSAPRT(UNFORMATTED,EXPORT)
DSAPRT(FORMATTED,END=4)=ALL
DSAPRT(UNFORMATTED,END=SENS)=ALL
DSAPRT(NOPRINT, EXPORT)
```

```text
┌─────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FORMATTED   │ Output will be presented with headings and labels.                                                 │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNFORMATTED │ Output will be printed as a matrix print (see description of the MATPRN module in the MSC Nastran  │
│             │ DMAP Programmer’s Guide).                                                                          │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOPRINT     │ No output will be printed.                                                                         │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXPORT      │ Output will be exported to an external binary file specified by PARAM,IUNIT.                       │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOEXPORT    │ Output will not be exported to an external binary file.                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ START=i     │ Specifies the first design cycle for output (Integer  >  0 or Character: “FIRST” or “LAST”;        │
│             │ Default  =  1 or “FIRST”).                                                                         │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BY=j        │ Specifies the design cycle interval for output. See Remark 2. (Integer  >  0; Default  =  0).      │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ END=k       │ Specifies the last design cycle for output. (Integer  >  0 or Character: “FIRST”, “LAST”, or       │
│             │ “SENS”; Default  =  “LAST”)                                                                        │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL         │ All retained design responses (defined on DRESP1, DRESP2 and DRESP3 entries) will be output.       │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n           │ Set identification of a previously appearing SET command. Only sensitivities of retained responses │
│             │ with identification numbers that appear on this SET command will be output (Integer  >  0).        │
└─────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Only one DSAPRT may appear in the Case Control Section and it must occur with or above the first SUBCASE command.
2. Sensitivity data will be output at design cycles i, i+j, i+2j, ..., k. Note that the BY=0 implies no sensitivity results will be output at the intermediate design cycles.
3. END   =   SENS requests design sensitivity analysis, and no optimization will be performed.
4. If both DSAPRT and PARAM,OPTEXIT, 4, -4, or 7 are specified, then DSAPRT overrides PARAM,OPTEXIT, 4, -4, or 7. PARAM,OPTEXIT values and the equivalent DSAPRT commands are described as follows:
```text
┌─────────┬───────────────────────────────────┐
│ OPTEXIT │ Equivalent DSAPRT Command         │
├─────────┼───────────────────────────────────┤
│ 4       │ DSAPRT(UNFORMATTED, END=SENS)     │
├─────────┼───────────────────────────────────┤
│ -4      │ DSAPRT(NOPRINT, EXPORT, END=SENS) │
├─────────┼───────────────────────────────────┤
│ 7       │ DSAPRT(UNFORMATTED, START=LAST)   │
└─────────┴───────────────────────────────────┘
```
5. The n and NONE options are not supported for UNFORMATTED output. Only the UNFORMATTED option is supported for EXPORT.
6. PARAM,DSZERO can be used to set a threshold for the absolute value of the formatted sensitivity prints.
7. Design Sensitivity analysis is never performed following a discrete design optimization. Therefore, no sensitivity output will be produced with DSAPRT(END=LAST) when discrete optimization is performed at the end of a job.
8. Formatted sensitivity data can also be written into Comma Separated Values(or CSV) file with following steps
     - DSAPRT(formatted,..) request in case control. Note that 'formatted' is a default option.
     - PARAM,XYUNIT,52 in bulk data. Unit 52 is simply chosen as an example.
     - file assignment statement, such as
     ASSIGN USERFILE='jobname.csv' FORM=formatted STATUS=new UNIT=52
