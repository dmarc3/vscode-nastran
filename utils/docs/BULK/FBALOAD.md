## [FBALOAD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FBALOAD.xhtml) - Load Scale Factor Specification for FRF Based Assembly (FBA) Process

Defines the scale factor for frequency dependent loads in an FRF Based Assembly (FBA) process.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FBALOAD SID     COMPID/ PNTID   C       A                                       
                COMPNAME                                                        
```
#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FBALOAD 10      WING    20      3       2.5                                     
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FBALOAD 20      30      25      1       1.5                                     
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Identification number. See Remark 1. (Integer > 0)                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COMPID    │ Identification number of the FRF component whose FRFs have been generated in a previous Nastran    │
│           │ execution. (Integer > 0)                                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COMPNAME  │ Optional name of the FRF component whose FRFs have been generated in a previous Nastran execution. │
│           │ (Up to 8 characters; no blank allowed).                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PNTID     │ Grid or scalar point identification number. See Remark 3. (Integer > 0)                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Component number. See Remark 3. (Integer 1 through 6 for grid point; blank or 0 for scalar point)  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ A         │ Scale factor. See Remark 4. (Real)                                                                 │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. SID is referenced by RLOAD1, RLOAD2 and ACSRCE entries.

2. This entry is ignored if the specified COMPID/COMPNAME is not part of the FBA process. A user warning message is issued in this case.

3. The component C of the point PNTID specified in this entry must be among the excitation degrees of freedom of the FBA process. If not, the program terminates the job with a user fatal message.

4. Refer to RLOAD1, RLOAD2 and ACSRCE entries for the formulas that define the scale factor A in frequency response analysis.

5. All FBALOAD entries specified in an FBA process are automatically converted internally by the program to equivalent DAREA entries by replacing the grid/scalar point IDs referenced in these entries by equivalent internal point IDs.

