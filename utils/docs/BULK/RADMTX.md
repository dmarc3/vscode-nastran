## [RADMTX](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RADMTX.xhtml) - Radiation Exchange Matrix

Provides the  ![bulkqrs07394.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07394.jpg?_LANG=enus)  exchange factors for all the faces of a radiation enclosure specified in the corresponding RADLST entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RADMTX  ICAVITY INDEX   Fi,j    Fi+1,j  Fi+2,j  Fi+3,j  Fi+4,j  Fi+5,j          
        Fi+6,j  -etc.-                                                          
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RADMTX  2       1       0.0     0.1     0.2     0.2     0.3     0.2             
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ICAVITY   │ Unique cavity identification number that links a radiation exchange matrix with its listing of    │
│           │ enclosure radiation surface elements.  (Integer > 0)                                              │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INDEX     │ Column number in the matrix.  (Integer > 0)                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Fk,j      │ If symmetric, the matrix values start on the diagonal (i = j) and continue down the column (k = i │
│           │ + 1, i + 2, etc.).  If unsymmetric, the values start in row (i = 1).  i refers to EIDi on the     │
│           │ RADLST entry.  (Real > 0)                                                                         │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. If the matrix is symmetric, only the lower triangle is input, and i = j = INDEX.  If the matrix is unsymmetric, i = 1, and j = INDEX.

2. Only one ICAVITY may be referenced for those faces that are to be included in a unique radiation matrix.

3. Coefficients are listed by column with the number of columns equal to the number of entries in the RADLST.

4. All faces involved in any radiation enclosure must be defined with an CHBDYi element.

5. If any RADMTX entry is changed or added on restart then a complete re-analysis may be performed. Therefore, RADMTX entry changes or additions are not recommended on restart.

6. Set NASTRAN SYSTEM (87) = 3 is a new option in MSC Nastran 2005 that prevents radiation energy from being lost to space.

