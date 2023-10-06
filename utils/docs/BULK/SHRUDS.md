## [SHRUDS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SHRUDS.xhtml) - User-defined Shear Model for Elements.

Specifies that a user subroutine is being used to define the shear modulus. Use in SOL700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SHRUDS  SID     GROUP   UNAME                                                   
```

#### Example:

In FMS Section of the MSC Nastran input stream:

```text
CONNECT SERVICE mymat 'SCA.MDSolver.Obj.Uds.Dytran.Materials '
```

In Bulk Data:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SHRUDS  12      mymat   EXSHR                                                   
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Unique porosity model ID. (Integer > 0; Required)                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ GROUP     │ The group name used for the FMS section CONNECT SERVICE statement. (Character; no Default) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNAME     │ User subroutine name associated with the entry. (Character; default=EXSHR)                 │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────┘
```
