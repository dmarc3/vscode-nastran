## [TABLUDS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TABLUDS.xhtml) - User Defined Failure For Nonlinear Explicit Analysis.

Specifies that a user routine is being used to define an arbitrary function. Use in SOL700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLUDS TID     GROUP   UNAME                                                   
```
#### Example:

In FMS Section of the MSC Nastran input stream:

CONNECT SERVICE myfunc  ![bulktuv07943.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/../../../assets/bulktuv07943.jpg?_LANG=enus) SCA.MDSolver.Obj.Uds.Dytran.Loads ![bulktuv07945.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/../../../assets/bulktuv07945.jpg?_LANG=enus)

In Bulk Data:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLUDS 12      myfunc  EXFUNC                                                  
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ TID       │ Unique output number. (Integer > 0; Required)                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ GROUP     │ The group name used for the FMS section CONNECT SERVICE statement. (Character; no Default) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNAME     │ User subroutine name associated with the entry. (Character; default=EXFUNC)                │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────┘
```
