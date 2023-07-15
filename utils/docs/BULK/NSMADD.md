## [NSMADD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.NSMADD.xhtml) - Non Structural Mass Set Combination

Defines non structural mass as the sum of the sets listed.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NSMADD  SID     S1      S2      S3      S4      S5      S6      S7              
        S8      S9      S10     etc.    -                                       
```
#### Example(s):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NSMADD  3       17      18      19      20      22      23      24              
        25      26      27      28                                              
NSMADD  3       29      40      50      55                                      
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Identification number of non structural mass set.  (Integer > 0)                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Si        │ Identification numbers of non structural mass sets defined via NSM, NSML, NSM1, and NSML1 entries. │
│           │ (Integer > 0; )                                                                                    │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The non structural mass sets must be selected with the Case Control command NSM = SID.

2. No Si may be the identification number of a non structural mass set defined by another NSMADD entry.

3. NSMADD entries take precedence over NSM, NSML, NSM1 or NSML1 entries. If both have the same set ID, only the NSMADD entry will be used.

4. The ELSUM Case Control command will give a summary of both structural and nonstructural mass by element or property type.

