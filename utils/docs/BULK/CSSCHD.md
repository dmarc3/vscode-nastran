## [CSSCHD](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CSSCHD.xhtml) - Aerodynamic Control Surface Schedule Input

Defines a scheduled control surface deflection as a function of Mach number and angle of attack.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CSSCHD  SlD     AESID   LALPHA  LMACH   LSCHD                                   
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CSSCHD  5       50      12      15      25                                      
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Set identification number. (Integer > 0)                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AESID     │ ID of an AESURF Bulk Data entry to which the schedule is being attached.                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LALPHA    │ ID of an AEFACT Bulk Data entry containing a list of angles of attack (in radians) at which        │
│           │ schedule information is provided.  (Integer > 0: Default = no angle information provided.          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LMACH     │ ID of an AEFACT Bulk Data entry containing a list of Mach numbers at which schedule information is │
│           │ provided.  (Integer > 0; Default = no Mach information provided)                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LSCHD     │ ID of an AEFACT Bulk Data entry which contains the scheduling information.  See Remarks 4. and 5.  │
│           │ (Integer > 0; no Default)                                                                          │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Control system schedules must be selected with the Case Control command CSSCHD = SID.
2. The AESID cannot appear on an AELINK or TRIM Bulk Data entry for the same subcase.
3. The control surface deflection is computed using a linear interpolation for the Mach number provided on the associated TRIM entry and the angle of attack derived as part of the trim calculation.
4. The LSCHD data are provided as a list of deflections (in radians) as a function of Mach numbers and angles of attack.  If there are NMACH Mach numbers and NALPHA angles of attack, the first NALPHA deflections are for the first Mach number, the next NALPHA are for the second Mach number, and so on, until the last NALPHA deflections are for the final Mach number.
5. If LALPHA is blank, LSCHD contains NMACH deflections to define the Mach schedule.  If LMACH is blank, LSCHD contains NALPHA deflections to define the angle of attack schedule.
6. LALPHA and LMACH cannot be simultaneously blank.  If LALPHA or LMACH are not blank, at least two values of angle of attack or Mach number must be defined in order to perform interpolation.
7. If the Mach number or angle of attack is outside the range specified by the tabulated values, the value at the table end is used.  That is, data are not extrapolated.
