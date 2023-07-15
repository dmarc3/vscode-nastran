## [MKAERO1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MKAERO1.xhtml) - Mach Number - Frequency Table

Provides a table of Mach numbers (m) and reduced frequencies (k) for aerodynamic matrix calculation.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MKAERO1 m1      m2      m3      m4      m5      m6      m7      m8              
        k1      k2      k3      k4      k5      k6      k7      k8              
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MKAERO1 .1      .7                                                              
        .3      .6      1.0                                                     
```
```text
┌───────────┬────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                        │
├───────────┼────────────────────────────────────────────────────────────────┤
│ mi        │ List of from 1 to 8 Mach numbers.  (Real > 0.0). See remark 8. │
├───────────┼────────────────────────────────────────────────────────────────┤
│ kj        │ List of from 1 to 8 reduced frequencies.  (Real > 0.0)         │
└───────────┴────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Blank fields end the list, and thus cannot be used for 0.0.

2. All combinations of (mi, kj) will be used.

3. The continuation entry is required.

4. Multiple MKAERO1 entries are permitted.

5. For the lifting surface theories (Doublet-Lattice and Mach Box), the maximum value of kj should be less than one quarter of the number of boxes on a representative chord (i.e.,  ![bulkno06004.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06004.jpg?_LANG=enus)  where  ![bulkno06006.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06006.jpg?_LANG=enus)  is the reference chord and  Δ x  is   a typical   box chord length).

6. In SOL 146, the program selects only one value of mi to use in computing the dynamic response solution and, by default, the lowest value is selected.  The PARAM,MACH,m entry may be specified to select a different value.  If PARAM,MACH,m is specified, then the value of mi closest to m will be selected.

7. The very low nonzero value of kj required for aeroelastic divergence analysis of restrained vehicles with the K- and KE-methods of flutter analysis must be included on this entry.

8. mi = 1.0 is not supported except when used in conjunction with   entry (Strip Theory).

