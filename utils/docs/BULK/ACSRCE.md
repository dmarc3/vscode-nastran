## [ACSRCE](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ACSRCE.xhtml) - Acoustic Source Specification

Defines acoustic source as a function of power vs. frequency.

![bulkab02031.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02031.jpg?_LANG=enus)  

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ACSRCE  SID     EXCITEIDDELAYI/ DPHASEI/DPHASERTP/RP   RHO     B        +              
+                       DELAYR                                                  
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ACSRCE  103     11      20      5.0     12      1.0     15.0                    
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Load set identification number. See Remarks 1. and 3. (Integer > 0)                               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXCITEID  │ Identification number of DAREA, FBALOAD (in FRF Based Assembly or FBA process) or SLOAD entry set │
│           │ the defines .  See Remark 6. (Integer > 0)                                                        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DELAYI    │ Identification number of DELAY or FBADLAY (in FRF Based Assembly or FBA process) Bulk Data entry  │
│           │ that defines time delay . See Remarks 4. and 5. (Integer > 0 or blank)                            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DELAYR    │ Value of time delay  that will be used for all fluid degrees-of-freedom that are excited by this  │
│           │ dynamic load entry. See Remark 5. (Real or blank)                                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DPHASEI   │ Identification number of DPHASE or FBAPHAS (in FRF Based Assembly or FBA process) Bulk Data entry │
│           │ that defines phase angle . (See Remarks 4. and 5. (Integer > 0 or blank)                          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DPHASER   │ Value of phase angle  (in degrees) that will be used for all fluid degrees-of-freedom that are    │
│           │ excited by this dynamic load entry. See Remark 5. (Real or blank)                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TP        │ Identification number of a TABLEDi entry that defines power versus frequency, .  (Integer > 0)    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RP        │ Value of power P to be used for all frequencies (Real, non-zero)                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RHO       │ Density of the fluid.  (Real > 0.0)                                                               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ B         │ Bulk modulus of the fluid.  (Real > 0.0)                                                          │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Acoustic sources must be selected in the Case Control Section with DLOAD = SID.
2. For additional remarks, see the RLOAD1 entry description.
3. SID need not be unique for all ACSRCE, RLOAD1, RLOAD2, TLOAD1 and TLOAD2 dynamic load entries.  The DLOAD = SID Case Control command will select all dynamic load entries with the set identification of SID.
4. The referenced EXCITEID, DELAY, and DPHASE entries must specify fluid points only.
5. If any of the DELAYI/DELAYR or DPHASEI/DPHASER fields are blank or zero, the corresponding  ![bulkab02045.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02045.jpg?_LANG=enus)  or  ![bulkab02047.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02047.jpg?_LANG=enus)  will be zero.
6. If there is no LOADSET Case Control command, then EXCITEID may reference DAREA and SLOAD entries.  If there is a LOADSET Case Control command, then EXCITEID may reference DAREA entries as well as SLOAD entries specified by the LID field in the selected LSEQ entry corresponding to EXCITEID.
7. If Modules are present then this entry may only be specified in the main Bulk Data section.
