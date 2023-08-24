## [PORUDS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PORUDS.xhtml) - User-defined Porosity Model Specified by a User Defined Service.

Defines a porosity model of a COUPLE surface through a user-written subroutine. Use in SOL700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PORUDS  PID     GROUP   UNAME                                                   
```

#### Example:

In FMS Section of the MSC Nastran input stream:

```text
CONNECT SERVICE mypor  'SCA.MDSolver.Obj.Uds.Dytran.Flow '
```

In Bulk Data:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PORUDS  12      mypor   EXPOR                                                   
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Unique porosity model ID. (Integer > 0; Required)                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ GROUP     │ The group name used for the FMS section CONNECT SERVICE statement. (Character; no Default) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNAME     │ User subroutine name associated with the entry. (Character; default=EXPOR)                 │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Only can be used for SOL 700.
2. The porosity ID (PID) must be referenced by a LEAKAGE entry.
3. UNAME can be:
