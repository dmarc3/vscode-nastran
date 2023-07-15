## [YLDUDS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.YLDUDS.xhtml) - User-defined Yield Model for Elements.

Specifies that a user subroutine is being used to define a simple yield model. Use in SOL700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
YLDUDS  YLD     GROUP   UNAME                                                   
```
#### Example:

In FMS Section of the MSC Nastran input stream:

CONNECT SERVICE myyld  ![bulktuv08249.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/../../../assets/bulktuv08249.jpg?_LANG=enus) SCA.MDSolver.Obj.Uds.Dytran.Materials ![bulktuv08251.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/../../../assets/bulktuv08251.jpg?_LANG=enus)

In Bulk Data:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
YLDUDS  12      myyld   EXYLD                                                   
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ YLD       │ Unique yield model ID. (Integer > 0; Required)                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ GROUP     │ The group name used for the FMS section CONNECT SERVICE statement. (Character; no Default) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNAME     │ User subroutine name associated with the entry. (Character; default=EXYLD)                 │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────┘
```
