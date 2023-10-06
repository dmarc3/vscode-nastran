## [FBAPHAS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FBAPHAS.xhtml) - Dynamic Load Phase Lead for FRF Based Assembly (FBA)

Defines the phase lead term  ![bulkfgil03624.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03624.jpg?_LANG=enus)  in the equations of motion of the dynamic loading function for frequency dependent loads in an FRF Based Assembly (FBA) process.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FBAPHAS SID     COMPID/ PNTID   C       PHASE                           +       
+               COMPNAME                                                        
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FBAPHAS 25      FRAME   40      1       10.0                                    
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FBAPHAS 30      50      10      2       5.0                                     
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
│ COMPNAME  │ Name of the FRF component whose FRFs have been generated in a previous Nastran execution. (Up to 8 │
│           │ characters; no blank allowed)                                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PNTIDi    │ Grid or scalar point identification numbers. See Remark 3. (Integer > 0)                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Component number. See Remark 3. (Integers 1 through 6 for grid points; blank or 0 for scalar       │
│           │ points.)                                                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHASE     │ Phase lead term . See Remark 4. (Real)                                                             │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. SID is referenced by RLOAD1, RLOAD2 and ACSRCE entries.
2. This entry is ignored if the specified COMPID/COMPNAME is not part of the FBA process. A user warning message is issued in this case.
3. The component C of the point PNTID specified in this entry must be among the excitation degrees of freedom of the FBA process. If not, the program terminates the job with a user fatal message.
4. Refer to RLOAD1, RLOAD2 and ACSRCE entries for the formulas that define the phase lead  term  ![bulkfgil03628.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03628.jpg?_LANG=enus)  in frequency response analysis.
5. All FBAPHAS entries specified in an FBA process are automatically converted internally by the program to equivalent DPHASE entries by replacing the grid/scalar point IDs referenced in these entries by equivalent internal point IDs.
