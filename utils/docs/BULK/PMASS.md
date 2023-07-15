## [PMASS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PMASS.xhtml) - Scalar Mass Property

Specifies the mass value of a scalar mass element (CMASS1 or CMASS3 entries).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PMASS   PID1    M1      PID2    M2      PID3    M3      PID4    M4              
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PMASS   7       4.29    6       13.2                                            
```
```text
┌───────────┬───────────────────────────────────────────────┐
│ Describer │ Meaning                                       │
├───────────┼───────────────────────────────────────────────┤
│ PIDi      │ Property identification number. (Integer > 0) │
├───────────┼───────────────────────────────────────────────┤
│ Mi        │ Value of scalar mass. (Real)                  │
└───────────┴───────────────────────────────────────────────┘
```
#### Remarks:

1. Mass values are defined directly on the CMASS2 and CMASS4 entries, and therefore do not require a PMASS entry.

2. Up to four mass values may be defined by this   entry.

3. For a discussion of scalar elements, see    in the  MSC Nastran Reference Guide .

4. PMASS is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PMASS property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PMASS entries.

