## [EULFOR1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.EULFOR1.xhtml) - Body force for Eulerian Regions - SOL700

Alternative way to define an acceleration within a geometric region of the Euler model  regions are defined by geometric shapes which are defined by EULFREG entries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EULFOR1 SID     ESID                                                            
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EULFOR1 300     1                                                               
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Unique EULFOR1 number referenced from a PEULER1 entry .(Integer >0, required) │
├───────────┼───────────────────────────────────────────────────────────────────────────────┤
│ ESID      │ Group of geometric region EULFREG ID. (Integer > 0; Required)                 │
└───────────┴───────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. EULFOR1 and EULFREG are only available for the multi-material Euler solver.

2. The combination of Eulerian region and material ID determines where the acceleration field  is applied.

3. It is allowed to cover only part of the Euler domain with EULFOR1 definitions.

4. To increase the accuracy of the region definition parameter MICRO can be used.

