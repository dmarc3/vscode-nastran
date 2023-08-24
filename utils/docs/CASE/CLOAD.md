## [CLOAD (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.CLOAD.Case.xhtml) - Static Load Request for Upstream Superelement Loads

Requests a CLOAD Bulk Data entry that defines a list of superelement loads and their scale factors in nonlinear static analysis only.

#### Format:

```nastran
CLOAD=n
```

#### Example:

```nastran
CLOAD=15
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ n         │ Identification number of a unique CLOAD Bulk Data entry (Integer  >  0). │
└───────────┴──────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This command may only appear in the residual structure subcases (see the Case Control command,  ) and, if used, it must be specified in all of them.
2. The CLOAD Bulk Data entry must reference previously processed LSEQ (load sequence) Bulk Data that was requested by LOADSET Case Control commands on the upstream (SUPER != 0) subcases.
3. The resulting load is added to those produced by LOAD and TEMP(LOAD) Case Control commands in the residual structure subcases.
