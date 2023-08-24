## [PDUMi](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PDUMi.xhtml) - Dummy Element Property

Defines the properties of a dummy element (3    <     i    <     7). Referenced by the CDUMi entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PDUMi   PID     MID     A1      A2      A3      A4      A5      A6      +       
+       A7      -etc.-                                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PDUM3   108     2       2.4     9.6     1.E4    15.     3.5
          5             2                                  
```

```text
┌───────────┬───────────────────────────────────────────────┐
│ Describer │ Meaning                                       │
├───────────┼───────────────────────────────────────────────┤
│ PID       │ Property identification number. (Integer > 0) │
├───────────┼───────────────────────────────────────────────┤
│ MID       │ Material identification number. (Integer > 0) │
├───────────┼───────────────────────────────────────────────┤
│ Aj        │ Additional fields. (Real or Integer)          │
└───────────┴───────────────────────────────────────────────┘
```

#### Remark:

1. The additional fields are defined in the user-written element subroutines.
2. The fields on this entry are required to be defined on the corresponding ADUMi entry. This entry requires a license for  "USER MODIFIABLE Nastran" Other than the PID field, all field checking is the responsibility of the user supplied code.
