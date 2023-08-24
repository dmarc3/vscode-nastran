## [RGYRO](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RGYRO.xhtml) - Rotordynamic Analysis Parameters

Specifies synchronous or asynchronous analysis, reference rotor, and rotation speed of the reference rotor.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RGYRO   RID     SYNCFLG REFROTR SPDUNIT SPDLOW  SPDHIGH SPEED   ROTRSEID+       
+       WR3WRL  WR4WRL  WRHWRL                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RGYRO   100     SYNC    1       RPM     1000.0  5000.0          10              
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RID       │ Identification number of RGYRO entry. Selected by Case Control command, RGYRO. (Required; no       │
│           │ Default). See Remarks 1. and 4.                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SYNCFLG   │ Specifies whether the analysis is synchronous or asynchronous analysis.  Required input for        │
│           │ frequency response and complex modes analyses. Not required for static analyses. (Character:       │
│           │ ‘SYNC’, ‘ASYNC’, or blank). See Remarks 4. through 4.                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REFROTR   │ Specifies the reference rotor ID for the analysis. (Integer > 0; Required; no Default)             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SPDUNIT   │ Specifies whether the entries SPDLOW, SPDHIGH, and SPEED are given in terms of RPM                 │
│           │ (revolutions/minute) or frequency (revolutions (cycles)/unit time). (Character: ‘RPM’ or ‘FREQ’;   │
│           │ no Default). See Remark 4.                                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SPDLOW    │ Specifies the low speed for synchronous analysis. See Remark 4. (Real; Default = 0.0)              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SPDHIGH   │ Specifies the high speed for synchronous analysis. See Remark 4. (Real; Default = 99999.0)         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SPEED     │ Specifies reference rotor speed for asynchronous analysis. Also required for static analyses. See  │
│           │ Remark 4. (Default = 0)                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ROTRSEID  │ Identification number of the superelement in which the rotor specified in the REFROTR field is     │
│           │ defined.  (Integer >= 0, Default = 0).                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WR3WRL    │ Specifies whirl frequency for calculation of rotor damping and circulation terms for rotor         │
│           │ structural damping specified through GR field for asynchronous complex eigenvalue analysis. (Real, │
│           │ Default = 0.)                                                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WR4WRL    │ Specifies whirl frequency for calculation of rotor damping and circulation terms for rotor         │
│           │ structural damping specified through material entries for asynchronous complex eigenvalue          │
│           │ analysis. (Real, Default = 0.)                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WRHWRL    │ Specifies whirl frequency for calculation of rotor damping and circulation terms for rotor         │
│           │ structural hybrid damping specified through ROTHYBD card for asynchronous complex eigenvalue       │
│           │ analysis. (Real, Default = 0.)                                                                     │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Multiple RGYRO entries with the same RID value are allowed. All RGYROs with same RID will be analyzed for either SYNC (or) ASYNC option only.
2. For multiple RGYRO with same RID entries, reference rotors ID specified in REFROTR (4 th ) field are treated as individual rotors. Non-reference rotors (rotor ID not defined in RGYRO) will need REFROT (or) REFRTSE bulk data card to identify its reference rotor.
3. If single RGYRO entry with RID is used, then all rotors in the models will reference the rotor id specified in REFROTR (4 th ) field.
4. The required information on the RGYRO entries varies for different analyses. Values for the RID and SPDUNIT fields are always required. Values for SPDLOW, SPDHIGH and SPEED are analysis dependent as shown in the table below:

     ```text
     ┌───────────┬───────────────────────┬────────────────┬───────────────────────┬───────────────────┐
     │ Solution  │ Type of Analysis      │ PARAM, GYROAVG │ Required Entry        │ COMMENT           │
     │ Sequence  │                       │                │                       │                   │
     ├───────────┼───────────────────────┼────────────────┼───────────────────────┼───────────────────┤
     │ Frequency │ SYNC SYNC ASYNC ASYNC │ 0 -1 0 -1      │ None SPDLOW, SPDHIGH  │ -- a, b -- b      │
     │ Response  │                       │                │ SPEED SPEED           │                   │
     ├───────────┼───────────────────────┼────────────────┼───────────────────────┼───────────────────┤
     │ Complex   │ SYNC ASYNC            │ -- --          │ SPDLOW, SPDHIGH SPEED │ a, b b, Remark 4. │
     │ Modes     │                       │                │                       │                   │
     ├───────────┼───────────────────────┼────────────────┼───────────────────────┼───────────────────┤
     │ Static    │ --                    │ --             │ SPEED                 │ Remark 3.         │
     │ Analysis  │                       │                │                       │                   │
     └───────────┴───────────────────────┴────────────────┴───────────────────────┴───────────────────┘
     ```

     a. The relative rotor speeds will be treated as linearly dependent on the reference rotor speed
     
     ( Ω  = A0 + A1 Ω ). The scale factors A0 and A1 will be determined by a least-mean-square fit of the relative rotor speeds input on the RSPINR entries between SPDLOW and SPDHIGH of the reference rotor. If SPDLOW or SPDHIGH are outside the range specified on the RSPINR entry, the values will be extrapolated from the RSPINR entry values.
     
     b. Parameters (WR3, WR4 and WRH), RSPINR/RSPINT (WR3R, WR4R and WRHR), and RGYRO (WR3WRL, WR4WRL and WRHWRL) are required for rotor damping under different conditions.
     
5. For static analysis, the SYNCFLG field must be left blank or must have the ASYNC option specified in it. Otherwise, the program terminates the execution with an appropriate fatal message.
6. When there is a Case Control request for Campbell diagram, the selected RGYRO Bulk Data entry must have the ASYNC option specified in its SYNCFLG field. Otherwise, the program terminates the execution with an appropriate fatal message.
7. In the presence of GR field, the rotor damping matrix (BR) in complex eigenvalue analysis is given by:

     BR= KR.GR/|Ω(Ω_ref)–WR3WRL|
     
     where KR is the rotor stiffness matrix.
     
     GR is the structural damping parameters specified in the RSPINR entry
     
     Ω(Ω_ref) is the specified rotor speed.

8. If non-zero WR3WRL is specified in RGYRO, then PARAM,WR3 and WR3R (in RSPINR) cannot be specified. Appropriate FATAL message will be issued, in case these entries are specified.
9. WR3WRL/ WR3WRL/ WRHWRL affect both the rotor damping terms and the circulation terms. For the fixed reference frame, the circulation terms are generated from the rotating structure. For the rotating reference frame, the circulation terms are generated from the stator.
10. The units of WR3WRL, WR4WRL, and WRHWRL are radians per unit time.
11. Rotor speed is determined by SPEED and 'SPTID' of RSPINR/RSPINT.
