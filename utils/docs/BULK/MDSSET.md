## [MDSSET](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDSSET.xhtml) - Set Definition for Structural Elements or Grid Points in Modules

Defines a set of structural grid points or element identification numbers in a Module to be referenced by the ACMODL Bulk Data entry.

#### Format:<span></span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDSSET  MODID   ID1     ID2     ID3     ID4     ID5     ID6     ID7     
        ID8     -etc.-                                                  
```
#### <span></span>

#### Example 1:<span style="color : #000000;"></span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDSSET  22      31      62      93      124     16      17      18      
        19                                                              
```
#### <span style="color : #000000;"></span>

#### Example 2:<span style="color : #000000;"></span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDSSET  22      29      32      THRU    50      61      THRU    70      
        17      57                                                      
```
#### <span style="color : #000000;"></span>

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODID     │ Module identification number (Integer ≥ 0)                                                       │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ List of structural grid point or element identification numbers. (Integer > 0 or “THRU”; for the │
│           │ “THRU” option: ID1 < ID2).                                                                       │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The MDSSET entry can only be used in the presence of Modules and can only be specified in the main Bulk Data section or Module 0.

2. The MDSSET entry is used when SSET is set to -1 on the ACMODL entry.

3. Multiple MDSSET entries may reference more than one Module.

