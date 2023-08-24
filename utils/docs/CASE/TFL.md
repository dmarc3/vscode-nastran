## [TFL (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.TFL.Case.xhtml) - Transfer Function Set Selection

Selects the transfer function set(s) to be added to the direct input matrices.

#### Format:

```nastran
TFL=n
```

#### Example:

```nastran
TFL=77
TFL = 1, 25, 77
```

```text
┌───────────┬─────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                     │
├───────────┼─────────────────────────────────────────────────────────────┤
│ n         │ Set identification of a TF Bulk Data entry (Integer  >  0). │
└───────────┴─────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Transfer functions will not be used unless selected in the Case Control Section.
2. Transfer functions are supported in dynamics problems only.
3. Transfer functions are described in the  MSC Nastran Dynamic Analysis User’s Guide .
4. It is recommended that PARAM,AUTOSPC,NO be specified when using transfer functions. See    in the  MSC Nastran Reference Guide .
5. The transfer functions are additive if multiple TF values are referenced on the TFL command.
