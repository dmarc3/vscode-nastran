## [FEMCHECK (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.FEMCHECK.Case.xhtml) - Specifies model checking options

Specifies model checking options at the start of the run. Specifically checks for RBE3 elements with unconnected independent (Gij) grids and RBE2 elements with unconnected dependent (GMi) grids. Also validates some other case controls in Frequency and Transient analysis before start of the run. RBE2 will only result in WARNING messages, and all other options will result in FATAL messages.

#### Format:

![casecontrol4a00982.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00982.jpg?_LANG=enus)

#### Examples:

```nastran
FEMCHECK=ALL 
FEMCHECK=RBE3, RBE2, DLOAD, FREQ, SDAMP, TSTEP
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE      │ No checking. This is the default.                                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Turns on all checking listed in the following.                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RBE3      │ To make sure every independent (Gij) grid on a RBE3 bulk data entry is attached to an element,     │
│           │ PLOTEL, or DMIG.                                                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RBE2      │ To give a WARNING message for each dependent (GMi) grid on a RBE2 bulk data entry that is not      │
│           │ attached to an element, PLOTEL, or DMIG.                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DLOAD     │ For frequency analysis, check if DLOAD case control is specified. For transient analysis. check if │
│           │ DLOAD or IC case control is specified. Make sure DLOAD case control refers to a valid bulk data    │
│           │ entry, i.e. DLOAD, RLOAD1, RLOAD2, TLOAD1, TLOAD2, ACSRCE, ACLOAD.                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FREQ      │ Check if FREQUENCY case control is specified for frequency analysis. FREQ case control must also   │
│           │ refer to a valid bulk data entry, i.e. FREQ, FREQ1, FREQ2, FREQ3, FREQ4, FREQ5.                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SDAMP     │ Check if SDAMPING Case Control references a valid Bulk Data entry. It must refer to a valid bulk   │
│           │ data entry, i.e. TABLED1, TABLED2, TABLED3, TABLED4, TABLED5, TABDMP1.                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TSTEP     │ For SOL 108/109/111/112, TSTEP case control must refer to a TSTEP bulk data entry. For SOL         │
│           │ 129/159, TSTEP case control should refer to a TSTEPNL bulk data entry.                             │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remark:

1. This command should be applied above all SUBCASEs.
