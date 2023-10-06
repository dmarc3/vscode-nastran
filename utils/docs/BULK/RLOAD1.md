## [RLOAD1](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RLOAD1.xhtml) - Frequency Response Dynamic Excitation, Form 1

Defines a frequency-dependent dynamic load of the form

![bulkqrs07464.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07464.jpg?_LANG=enus)  

for use in frequency response problems.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RLOAD1  SID     EXCITEIDDELAYI/ DPHASEI/DPHASERTC/RC   TD/RD   TYPE     +              
+                       DELAYR                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RLOAD1  5       3       2.0     10      1                                       
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Set identification number. See Remarks 1. and 3. (Integer > 0)                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXCITEID  │ Identification number of a static or thermal load set or a DAREA or FBALOAD (in FRF Based Assembly │
│           │ or FBA process) or SPCD entry set that defines .  See Remarks 4. and 5. (Integer > 0)              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DELAYI    │ Identification number of DELAY or FBADLAY (in FRF Based Assembly or FBA process) Bulk Data entry   │
│           │ that defines time delay . See Remark 2. (Integer > 0 or blank)                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DELAYR    │ Value of time delay  that will be used for all degrees-of-freedom that are excited by this dynamic │
│           │ load entry. See Remark 2. (Real or blank)                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DPHASEI   │ Identification number DPHASE or FBAPHAS (in FRF Based Asseembly or FBA process) Bulk Data entry    │
│           │ that defines phase angle . (See Remark 2. (Integer > 0 or blank)                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DPHASER   │ Value of phase angle  (in degrees) that will be used for all degrees-of-freedom that are excited   │
│           │ by this dynamic load entry. See Remark 2. (Real or blank)                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TC        │ Set identification number of the TABLEDi entry that gives  .  See Remark 2. (Integer > 0 or blank) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RC        │ Value of C to be used for all frequencies.  See Remark 2..  (Real or blank)                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TD        │ Set identification number of the TABLEDi entry that gives  .  See Remark 2. (Integer > 0 or blank) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RD        │ Value of D to be used for all frequencies.  See Remark 2..  (Real or blank)                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Defines the type of the dynamic excitation. See Remarks 4. and 5. (Integer, character or blank;    │
│           │ Default = 0)                                                                                       │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Dynamic excitation sets must be selected with the Case Control command DLOAD = SID.
2. If any of DELAYI/DELAYR, DPHASEI/DPHASER, TC/RC, or TD/RD fields   are blank or zero, the corresponding  τ ,   θ ,   or     ![bulkqrs07482.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07482.jpg?_LANG=enus)  will be zero.  Either TC/RC or TD/RD may be blank or zero, but not both.
3. SID need not be unique for all ACSRCE, RLOAD1, RLOAD2, TLOAD1 and TLOAD2 dynamic load entries.  The DLOAD = SID Case Control command will select all dynamic load entries with the set identification of SID.
4. The type of the dynamic excitation is specified by TYPE (field 8) according to the following table:

     ```text
     ┌─────────────┬───────────────────────────────────────────┐
     │ TYPE        │ TYPE of Dynamic Excitation                │
     ├─────────────┼───────────────────────────────────────────┤
     │ 0, L, LO,   │ Applied load (force or moment) (Default)  │
     │ LOA or LOAD │                                           │
     ├─────────────┼───────────────────────────────────────────┤
     │ 1, D, DI,   │ Enforced displacement using SPC/SPCD data │
     │ DIS or DISP │                                           │
     ├─────────────┼───────────────────────────────────────────┤
     │ 2, V, VE,   │ Enforced velocity using SPC/SPCD data     │
     │ VEL or VELO │                                           │
     ├─────────────┼───────────────────────────────────────────┤
     │ 3, A, AC,   │ Enforced acceleration SPC/SPCD data       │
     │ ACC or ACCE │                                           │
     └─────────────┴───────────────────────────────────────────┘
     ```

     The enforced motion options (SPC/SPCD) defined by TYPE=1, 2, 3 are currently used for SOLs 108, 111, 146, 200, and 400. For other solution sequences such as SOL118 (Cyclic Frequency Response) the large mass method must still be used.

5. TYPE (field 8) also determines the manner in which EXCITEID (field 3) is used by the program as described below:

     Excitation specified by TYPE is applied load

     - There is no LOADSET request in Case Control

     EXCITEID may reference DAREA, FBALOAD (in FRF Based Asssembly or FBA process), static and thermal load set entries.

     - There is a LOADSET request in Case Control

     The program may reference DAREA entries as well as static and thermal load set entries specified by the LID and TID fields, respectively, in the selected LSEQ entry corresponding to EXCITEID.

     Excitation specified by TYPE is enforced motion

     - There is no LOADSET request in Case Control

     EXCITEID will reference SPCD entries.

     - There is a LOADSET request in Case Control

     The program will reference SPCD entries specified by the LID field in the selected LSEQ entry corresponding to EXCITEID.

6. If Modules are present then this entry may only be specified in the main Bulk Data section.
