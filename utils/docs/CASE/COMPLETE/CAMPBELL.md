## [CAMPBELL (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.CAMPBELL.Case.xhtml) - Campbell Diagram Parameters

Specifies Campbell Diagram parameters.

#### Format:

```nastran
CAMPBELL= n
```

#### Example:

```nastran
CAMPBELL= 10
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                             │
├───────────┼─────────────────────────────────────────────────────────────────────┤
│ n         │ Identification number of a CAMPBLL Bulk Data entry (Integer  >  0). │
└───────────┴─────────────────────────────────────────────────────────────────────┘
```

#### Remark:

1. CAMPBELL option is supported for SOL 107, SOL110, SOL 200 and SOL 400 analysis.
2. When there is a Case Control request for Campbell diagram, the selected RGYRO Bulk Data entry must have the ASYNC option specified in its SYNCFLG field (Field 3). Otherwise, the program terminates the execution with an appropriate fatal message.
