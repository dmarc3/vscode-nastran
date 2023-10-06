## [BCELIPS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCELIPS.xhtml) - Contact Ellipsoid List- SOL 700

Defines a list of ellipsoid names (character strings) for use of contact analysis. Used in SOL700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCELIPS CID     NAME1   NAME2   NAME3   NAME4   NAMEi   etc                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCELIPS 1       HUB     RIM     HEAD    CHEST                                   
```

```text
┌───────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Field │ Content                                                                                      │
├───────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID   │ Unique identification number of ellipsoid names which can be used for contact. (Integer > 0; │
│       │ required)                                                                                    │
├───────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ NAME  │ Name of an ellipsoid. (Character; required)                                                  │
└───────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Use as many continuations as required to define the complete list of names. A blank field terminates the list..
