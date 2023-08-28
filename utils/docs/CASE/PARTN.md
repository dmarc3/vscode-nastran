## [PARTN (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.PARTN.Case.xhtml) - Partitioning Vector Specifications

Specifies a list of   grid point identification numbers that will be partitioned with the DMAP module MATMOD (Option 17).

#### Format:

```nastran
PARTN=n
```

#### Example:

```nastran
PARTN=10
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a previously appearing SET command (Integer > 0). │
└───────────┴────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The PARTN command and the DMAP module MATMOD provide a convenient method for building a partitioning vector for use in DMAP modules such as PARTN and MERGE.
2. The PARTN command is no longer applicable to coupled fluid-structure analysis. It has been replaced by the FSLPOUT command.
