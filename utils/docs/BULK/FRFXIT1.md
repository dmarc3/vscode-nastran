## [FRFXIT1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FRFXIT1.xhtml) - Unit Load Degrees-of-Freedom Specification for Frequency Response Function (FRF) Computations

Specifies degrees-of-freedom where unit loads are to be applied for Frequency Response Function (FRF) generation.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FRFXIT1 C       PNTID1  PNTID2  PNTID3  PNTID4  PNTID5  PNTID6  PNTID7          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FRFXIT1 123     10      20      30      40                                      
```

#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FRFXIT1 C       PNTID1  THRU    PNTID2                                          
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FRFXIT1 123     5       THRU    15                                              
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Component numbers. (Any unique combination of integers 1 through 6 with no embedded blanks for │
│           │ grid points; integer 0 or blank for scalar points.)                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PNTIDi    │ Grid or scalar point identification numbers. See Remark 1. (Integer > 0)                       │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Points in the THRU range need not all exist.
2. The FRFXIT Bulk Data entry and the DLOAD Case Control request provide alternate means of unit load specification for FRF generation.
3. Redundant unit load specifications are ignored.
4. If Modules are present then this entry may only be specified in the main Bulk Data section.
