## [MFLUID (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.MFLUID.Case.xhtml) - Fluid Boundary Element Selection

Selects the MFLUID Bulk Data entries to be used to specify the fluid-structure interface.

#### Format:

```nastran
MFLUID = n
```

#### Example:

```nastran
MFLUID = 919
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of one or more MFLUID Bulk Data entries (Integer  >  0). │
└───────────┴────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remark:

1. For additional discussion, see   in the  MSC Nastran Dynamic Analysis User’s Guide .
2. Use parameter PARAM,VMOPT controls how the virtual mass is processed.
3. Virtual mass is not supported with the following features:
    - Cyclic symmetry analysis (SOLs 114, 115, 116 and 118)
    - ADAMS MNF generation (ADAMSMNF Case Control command)
    - AVL/EXCITE TM  generation (AVLEXB Case Control command). Note that virtual mass can be supported for AVL/Excite by using the MASINVAR=NONE option on the AVLEXB case control command.
