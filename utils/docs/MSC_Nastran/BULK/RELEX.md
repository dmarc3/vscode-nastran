## [RELEX](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RELEX.xhtml) - External Definition of a Rigid Ellipsoid- SOL 700

Defines a rigid ellipsoid whose properties and motion are defined by either ATB. Used in SOL700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RELEX   NAME    PROG                                    etc                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RELEX   HEAD    ATB                                                             
```

```text
┌───────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Field │ Content                                                                                           │
├───────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NAME  │ This name is used within the input file to define the interactions between the external ellipsoid │
│       │ and grid points and rigid bodies. This name is also used in the output requests. When coupled to  │
│       │ ATB, the name must correspond to the name of the ATB segment. (Character; required)               │
├───────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PROG  │ Name of the external program. (Character; required) ATB SOL700 runs coupled with ATB              │
└───────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
