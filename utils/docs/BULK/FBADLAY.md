## [FBADLAY](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FBADLAY.xhtml) - Dynamic Load Time Delay for FRF Based Assembly (FBA)

Defines the time delay term  ![bulkfgil03618.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03618.jpg?_LANG=enus)  in the equations of motion of the dynamic loading function for frequency dependent loads in an FRF Based Assembly (FBA) process.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FBADLAY SID     COMPID/ PNTID   C       DELAY                                   
                COMPNAME                                                        
```
#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FBADLAY 15      BODY    10      3       0.5                                     
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FBADLAY 25      30      5       2       0.1                                     
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
│ COMPNAME  │ Name of the FRF component whose FRFs have been generated in a a previous Nastran execution. (Up to │
│           │ 8 characters; no blank allowed)                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PNTID     │ Grid or scalar point identification number. See Remark 3. (Integer > 0)                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Component number. See Remark 3. (Integer 1 through 6 for grid point; blank or 0 for scalar point)  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DELAY     │ Time delay term . See Remark 4. (Real)                                                             │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. SID is referenced by RLOAD1, RLOAD2 and ACSRCE entries.

2. This entry is ignored if the specified COMPID/COMPNAME is not part of the FBA process. A user warning message is issued in this case.

3. The component C of the point PNTID specified in this entry must be among the excitation degrees of freedom of the FBA process. If not, the program terminates the job with a user fatal message.

4. Refer to RLOAD1, RLOAD2 and ACSRCE entries for the formulas that define the time delay term  ![bulkfgil03622.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03622.jpg?_LANG=enus)  in frequency response analysis.

5. All FBADLAY entries specified in an FBA process are automatically converted internally by the program to equivalent DELAY entries by replacing the grid/scalar point IDs referenced in these entries by equivalent internal point IDs.

