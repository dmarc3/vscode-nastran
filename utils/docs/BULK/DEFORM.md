## [DEFORM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DEFORM.xhtml) - Static Element Deformation

Defines enforced axial deformation for one-dimensional elements for use in statics problems.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DEFORM  SID     EID1    D1      EID2    D2      EID3    D3                      
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DEFORM  1       535     .05     536     -.10                                    
```
```text
┌───────────┬────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                    │
├───────────┼────────────────────────────────────────────────────────────┤
│ SID       │ Deformation set identification number. (Integer > 0)       │
├───────────┼────────────────────────────────────────────────────────────┤
│ EIDi      │ Element number. (Integer > 0)                              │
├───────────┼────────────────────────────────────────────────────────────┤
│ Di        │ Deformation. (Real; positive value represents elongation.) │
└───────────┴────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The referenced element must be one-dimensional (CROD, CONROD, CTUBE, CBAR, CBEAM).

2. Deformation sets must be selected in the Case Control Section with DEFORM = SID.

3. One to three enforced element deformations may be defined on a single entry.

4. The DEFORM entry, when called by the DEFORM Case Control command, is applicable to linear static, inertia relief, differential stiffness, and buckling (Solutions 101, 105, 114, and 200) and will produce fatal messages in other solution sequences. Use SPCD to apply enforced displacements in solution sequences for which DEFORM does not apply.

