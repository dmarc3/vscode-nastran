## [FRFXIT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FRFXIT.xhtml) - Unit Load Degree-of-Freedom Specification for Frequency Response Function (FRF) Computations

Specifies a single degree-of-freedom where unit loads are to be applied for Frequency Response Function (FRF) generation.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FRFXIT  PNTID   C       LABEL                                                   
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FRFXIT  10      3       UNIT ...                                
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PNTID     │ Grid or scalar point identification number. (Integer > 0)                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ A single component number. (Integer 0 or blank for a scalar point; any integer between 1 and 6 for │
│           │ a grid point.)                                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABEL     │ A string comprising no more than 48 characters (fields 4 through 9) that will be used in the label │
│           │ portion of the FRF output to identify this unit load specification. See Remarks 1. and 2.          │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The small field format must be employed for this entry. If the free field or large field format is employed, the results are unpredictable and in many cases may lead to fatal errors and subsequent termination of the job.

2. The LABEL data must have a non-blank entry in field 4.

3. The FRFXIT1 Bulk Data entry and the DLOAD Case Control request provide alternate means of unit load specification for FRF generation.

4. Redundant unit load specifications are ignored.

5. If Modules are present then this entry may only be specified in the main Bulk Data section.

