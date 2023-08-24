## [DIVERG](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DIVERG.xhtml) - Divergence Analysis Data

Defines Mach numbers (m) for a static aeroelastic divergence analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DIVERG  SID     NROOT   M1      M2      M3      M4      M5      M6      +       
+       M7      M8      -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DIVERG  70      2       .5      .8      .9                                      
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Unique set identifier. (Integer > 0)                                                        │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ NROOT     │ Number of divergence roots that are to be output and their eigenvectors printed.  (Integer; │
│           │ Default = 1)                                                                                │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ Mi        │ Mach number. (Real > 0.0)                                                                   │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The DIVERG entry is referenced in Case Control by “DIVERG = SID”.
2. The NROOT lowest divergence dynamic pressures are printed. If there are fewer than NROOT pressures, all available dynamic pressures are printed.
3. Mi values must be distinct.
4. A blank Mach number field terminates the input.
