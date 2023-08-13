## [ACQUIRE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/TOC.ACQUIRE.xhtml) - Selects NDDL Schema

Selects the NDDL schema and MSC Nastran delivery database to be used for primary database creation.

#### Format:

![fms00605.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/../../../assets/fms00605.jpg?_LANG=enus)  

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NDDL      │ MSC Nastran NDDL schema.                                                                        │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ nddl-name │ Name of a user NDDL schema specified on a COMPILE NDDL statement when the user NDDL was stored. │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remark:

This statement is used to specify the delivery database when the user wishes to create a solution sequence, yet use the subDMAP objects or NDDL schema or both from the MSC-supplied delivery database.

#### Example:

The following requests the MSC Nastran NDDL schema to be used when creating a new database.

```nastran
ACQUIRE NDDL
SOL MYDMAP
COMPILE DMAP=MYDMAP,SOUOUT=USROBJ
.
.
.
LINK MYDMAP,SOLOUT=USROBJ
```
