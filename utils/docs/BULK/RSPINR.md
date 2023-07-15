## [RSPINR](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RSPINR.xhtml) - Relative Spin Rates Between Rotors

Specifies the relative spin rates between rotors for complex eigenvalue, frequency response, and static analysis and rotor damping parameters.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RSPINR  ROTORID GRIDA   GRIDB   SPDUNT  SPTID   ROTRSEID                        
        GR      ALPHAR1 ALPHAR2 WR3R    WR4R    WRHR                            
```
#### Example:<span></span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RSPINR  100     1001    1002    RPM     100     5                               
        0.02    1       3       1000.   1500.   1200.                           
```
#### <span></span>

```text
┌─────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ROTORID     │ Identification number of rotor. (Integer > 0; Required). See Remark 1.                             │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GRIDA/GRIDB │ Positive rotor spin direction is defined from GRIDA to GRIDB. See Remark 4. (Integer > 0;          │
│             │ Required)                                                                                          │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SPDUNIT     │ Specifies whether the listing of relative spin rates is given in terms of RPM (revolutions/minute) │
│             │ or frequency (revolutions (cycles)/sec). (Character; ‘RPM’ or ‘FREQ’; Required)                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SPTID       │ Table for relative rotor spin rates. See Remark 5. (Real or Integer, if integer, must be > 0;      │
│             │ Required)                                                                                          │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ROTRSEID    │ Identification number of the superelement in which the rotor specified in the ROTORID field is     │
│             │ defined. (Integer ≥ 0, Default = 0). See Remark 1.                                                 │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GR          │ Rotor structural damping factor. See Remarks 8. and 10. (Real; Default = 0.0)                      │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALPHAR1     │ Scale factor applied to the rotor mass matrix for Rayleigh damping. See Remarks 9. and 10. (Real;  │
│             │ Default = 0.0)                                                                                     │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALPHAR2     │ Scale factor applied to the rotor stiffness matrix for Rayleigh damping. See Remarks 9. and 10.    │
│             │ (Real; Default = 0.0)                                                                              │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WR3R        │ Specifies “average” excitation frequency, in radians per unit time, for calculation of rotor       │
│             │ damping and circulation terms for rotor structural damping specified through GR field. (Real,      │
│             │ Default = 0.)                                                                                      │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WR4R        │ Specifies “average” excitation frequency, in radians per unit time, for calculation of rotor       │
│             │ damping and circulation terms for rotor structural damping specified through material entries.     │
│             │ (Real, Default = 0.)                                                                               │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WRHR        │ Specifies “average” excitation frequency, in radians per unit time, for calculation of rotor       │
│             │ damping and circulation terms for rotor structural hybrid damping specified through ROTHYBD card.  │
│             │ (Real, Default = 0.)                                                                               │
└─────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
