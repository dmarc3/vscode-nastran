## [SEDAMP (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SEDAMP.Case.xhtml) - Specifying Damping for Superelements

Requests parameter and hybrid damping for superelements.

#### Format:

```nastran
SEDAMP=n
```

#### Example:

```nastran
SEDAMP=25
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                            │
├───────────┼────────────────────────────────────────────────────────────────────┤
│ n         │ Identification number of a DAMPING Bulk Data entry (Integer  > 0). │
└───────────┴────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This command adds to the modal damping that may be specified by the Case Control command SDAMPING, used in conjunction with PARAM,SESDAMP,YES.
2. Multiple SEDAMP requests per superelement are not allowed. If more than one SEDAMP request is specified per superelement, the second and subsequent requests will be ignored.
