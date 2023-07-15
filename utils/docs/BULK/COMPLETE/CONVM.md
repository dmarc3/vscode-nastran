## [CONVM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CONVM.xhtml) - Heat Boundary Element Forced Convection Entry

Specifies a forced convection boundary condition for heat transfer analysis through connection to a surface element (CHBDYi entry).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CONVM   EID     PCONID  FLMND   CNTMDOT TA1     TA2     Mdot                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CONVM   101     1       201     301     20      21                              
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ CHBDYP element identification number. (0 < Integer < 100,000,000)                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PCONID    │ Convection property identification number of a PCONVM entry. (Integer > 0)                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FLMND     │ Point used for fluid film temperature. (Integer > 0; Default = 0)                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CNTMDOT   │ Control point used for controlling mass flow. (Integer ≥ 0 or Blank). Blank or zero is only        │
│           │ allowed when Mdot > 0.0. See Remark 3.                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TA1, TA2  │ Ambient points used for convection. (Integer > 0 for TA1 and Integer > 0 for TA2; Default for TA2  │
│           │ is TA1.)                                                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Mdot      │ A multiplier for mass flow rate in case there is no point associated with the CNTRLND field. (Real │
│           │ > 0.0; Default = 1.0 if CNTMDOT > 0). See Remark 3.)                                               │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. CONVM is used with an CHBDYP entry of type FTUBE having the same EID.
2. The temperature of the fluid film point may be specified to determine the material properties for the fluid.  If FLMND   =   0, the reference temperature has several options.  It can be the average of surface and ambient temperatures, the surface temperatures, or the ambient temperature, as defined in the FORM field of the PCONVM Bulk Data entry.
3. The CNTMDOT has a dual function. It can reference the ID of the CONTRLT Bulk Data entry to activate a thermostat controlled flux transfer.  It can also reference a GRID or a scalar point which is set to the desired mass flow rate (mdot) to effect the advection of energy downstream at an
mdot · Cp · T rate. If CNTMDOT is zero or is not specified (blank field), then the mass flow rate must be specified on the Mdot field (8th field).

#### Case 1: Define a thermostat controller using the CONTRLT Bulk Data entry.

Total mass flow rate = CONTRLT · Mdot · CNTMDOT

where
        CONTRLT is the grid ID on the 2nd field of the CONTRLT Bulk Data entry that ties the mass flow rate through this sensor grid.
        Mdot is the 8th field of the CONVM Bulk Data entry.
        CNTMDOT is the grid ID that has a mass flow rate associated with it.

Example: The thermostat controller controls GRID 5 (sensor grid) from 250 degrees to 300 degrees. If the temperature exceeds 300 degrees, then the mass flow is turned ON. If the temperature is below 250 degrees, then the mass flow is turned OFF.

```nastran
CONTRLT,5,2,T,TSTAT,250.0,300.0,1,1.0 +
+,0.0,0.0,0.0
CONVM,100001,1,,5,4
```

Note that GRID 5 is also specified on the 5th field of the CONVM Bulk Data entry.

#### Case 2: There is no CONTRLT Bulk Data entry (more general case).

Total mass flow rate = Mdot · CNTMDOT

If the CNTMDOT (the 5th field of the CONVM Bulk Data entry) is specified, then the default Mdot value is 1.0 and the mass flow rate is defined through CNTMDOT.

##### Example: Define a constant mass flow rate of 0.5 through CNTMDOT.

```nastran
CONVM,100001,1,,5,4
SPC,1,5,1,0.5
```

To specify a time-varying mass flow rate, replace the SPC Bulk Data entry by TEMPBC,TRAN for SOL 159 or by SPC1 and SPCD for SOL 400.

For SOL 159:

```nastran
TEMPBC,2,TRAN,1.0,5
DLOAD,700,1.0,1.0,9
TLOAD1,9,2,,,121
TABLED1,121
,0.0,0.3,100.0,0.5,endt
```

For SOL 400:

```nastran
SPC = 111 (Case Control command)
SPC1,111,,5
SPCD,2,5,,1.0
DLOAD,700,1.0,1.0,9
TLOAD1,9,2,,1,121
TABLED1,121
,0.0,0.3,100.0,0.5,endt
```

If the CNTMDOT is not specified (zero or blank), then the mass flow rate must be constant and must be defined on Mdot (the 8th field of the CONVM Bulk Data entry).

##### Example: Define a mass flow rate of 0.5 directly on Mdot without specifying CNTMDOT.

```nastran
CONVM,100001,1,,,99,,0.5
```

4. If only the first ambient point is specified then, the second ambient point is assumed to have the same temperature.
5. See the Bulk Data entry,  , for an explanation of the mathematical relationships available for forced convection and the reference temperature for fluid material properties.
