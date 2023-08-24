## [PARAM (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.PARAM.Case.xhtml) - Parameter Specification

Specifies values for parameters. Parameters are described in  Parameters .

#### Format:

```nastran
PARAM,n,V1,V2
```

#### Examples:

```nastran
PARAM,GRDPNT,0
PARAM,K6ROT,1.0
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Parameter name (one to eight alphanumeric characters, the first of which is alphabetic). │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ V1, V2    │ Parameter value based on parameter type, as follows:                                     │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────┘
```

```text
┌──────────────┬────────────────────────┬────────────────────────┐
│ Type         │ V1                     │ V2                     │
├──────────────┼────────────────────────┼────────────────────────┤
│ Integer      │ Integer                │ Blank                  │
├──────────────┼────────────────────────┼────────────────────────┤
│ Real, single │ Real                   │ Blank                  │
│ precision    │                        │                        │
├──────────────┼────────────────────────┼────────────────────────┤
│ Character    │ Character              │ Blank                  │
├──────────────┼────────────────────────┼────────────────────────┤
│ Real, double │ Real, Double Precision │ Blank                  │
│ precision    │                        │                        │
├──────────────┼────────────────────────┼────────────────────────┤
│ Complex,     │ Real or Blank          │ Real or Blank          │
│ single       │                        │                        │
│ precision    │                        │                        │
├──────────────┼────────────────────────┼────────────────────────┤
│ Complex,     │ Real, Double Precision │ Real, Double Precision │
│ double       │                        │                        │
│ precision    │                        │                        │
└──────────────┴────────────────────────┴────────────────────────┘
```

#### Remarks:

1. The PARAM command is normally used in the Bulk Data Section and is described in the  .
2. The parameter values that may be defined in the Case Control Section are described in  . Case Control PARAM commands in user-written DMAPs requires the use of   the PVT module, described in the  MSC Nastran DMAP Programmer’s Guide .
