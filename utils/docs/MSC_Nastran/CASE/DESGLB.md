## [DESGLB (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.DESGLB.Case.xhtml) - Request Design Constraints at the Global Level

Selects the design constraints to be applied at the global level in a design optimization task.

#### Format:

```nastran
DESGLB=n
```

#### Examples:

```nastran
DESGLB=10
```

DESG=25

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification of a set of DCONSTR or a DCONADD Bulk Data entry identification number (Integer │
│           │  >  0).                                                                                            │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If used, this command must occur before the first subcase.
2. The DESGLB Case Control command is optional and invokes constraints that are to be applied independently of a particular subcase. These constraints could be based on responses that are independent of subcases (e.g., WEIGHT, VOLUME, WMPID, FRMASS, and FATIGUE). The DESGLB command must be used when applying constraints to FRMASS, WMPID and FATIGUE responses.
3. The DESGLB Case Control command can be used to invoke constraints that are not functions of DRESP1 entries; e.g., DRESP2 responses that are not functions of DRESP1 responses are subcase independent.
4. Constraints that are applied to responses that span subcases through the use of the DRSPAN command must be invoked using the DESGLB command.
