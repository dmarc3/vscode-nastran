## [MDLPRM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDLPRM.xhtml) - Model Parameters

Specifies parameters which affect the solution of the structural model.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDLPRM  PARAM1  VAL1    PARAM2  VAL2    PARAM3  VAL3    -etc.-                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDLPRM  QR6ROT  2       QRSHEAR 1                                               
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PARAMi    │ Name of the parameter. Allowable names are given in Table 18. (Character)                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VALi      │ Value of the parameter. (Real or Integer; see Table 18)                                        │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remark:

1. Multiple entries of MDLPRM are allowed in the Bulk Data Section. However, multiple entries of a particular parameter PARAMi are illegal.
2. If Modules are present then this entry may only be specified in the main Bulk Data section.

    See link for table.
