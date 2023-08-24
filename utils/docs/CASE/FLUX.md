## [FLUX (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.FLUX.Case.xhtml) - Heat Transfer Gradient and Flux Output Request

Requests the form and type of gradient and flux output in heat transfer analysis.

#### Format:

![casecontrol4a01002.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01002.jpg?_LANG=enus)  

#### Examples:

```nastran
FLUX=ALL
FLUX(PUNCH,PRINT)=17
FLUX=25
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT or     │                                                                                        │
│ (blank)      │                                                                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH        │                                                                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ PLOT         │                                                                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ * The .op2 binary database file will be generated with “PARAM,POST, X” (or the POST Case Control      │
│ command), while the .h5 binary database file will be generated with “HDF5OUT” entry specified in Bulk │
│ Data Section. Both .op2 and .h5 file can be created simultaneously. Note .xdb file is being           │
│ deprecated.                                                                                           │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Flux for all elements will be output.                                                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ Flux for no elements will be output.                                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of a previously appearing SET command. Only fluxes of elements with │
│              │ identification numbers that appear on this SET command will be output (Integer  >  0). │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. FLUX=ALL in SOL 159 may produce excessive output.
2. FLUX=NONE overrides an overall request.
