## [RSDAMP (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.RSDAMP.Case.xhtml) - Specifying Damping for the Residual Structure

Requests parameter and hybrid damping for the residual structure.

#### Format:

![casecontrol4a01290.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01290.jpg?_LANG=enus)  

#### Example:

```nastran
RSDAMP(STRUCTURE,FLUID, or BOTH) = n
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                           │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ n         │ Identification number of a DAMPING Bulk Data entry (Integer > 0). │
└───────────┴───────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. For modal solutions, this entry adds to the modal damping that may be specified by the SDAMPING Case Control command.
2. This command can be different in each residual structure subcase.
