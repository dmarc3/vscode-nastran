## [MDFSET](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDFSET.xhtml) - Set Definition for Fluid Elements or Grid Points in Modules

Defines a set of fluid grid points or element identification numbers in a Module to be referenced by the ACMODL Bulk Data entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDFSET  MODID   ID1     ID2     ID3     ID4     ID5     ID6     ID7     +
+       ID8     -etc.-                                                  
```

#### Example 1:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDFSET  22      31      62      93      124     16      17      18      
        19                                                              
```

#### Example 2:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDFSET  22      29      32      THRU    50      61      THRU    70      
        17      57                                                      
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODID     │ Module identification number (Integer ≥ 0)                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ List of fluid grid point or element identification numbers. (Integer > 0 or "THRU"; for the “THRU” │
│           │ option: ID1 < ID2).                                                                                │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The MDFSET entry can only be used in the presence of Modules and can only be specified in the main Bulk Data section or Module 0.
2. The MDFSET entry is used when FSET is set to -1 on the ACMODL entry.
3. Multiple MDFSET entries may reference more than one Module.
