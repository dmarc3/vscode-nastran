## [AECONFIG (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.AECONFIG.Case.xhtml) - Aeroelastic Configuration Name

Assigns the aerodynamic configuration parameter used to locate the associated datablocks on the aerodynamic and aeroelastic databases.

#### Format: Assign a DBset member name

```nastran
AECONFIG =config-name
```

#### Example:

Assign a MASTER file for the aerodynamic and aeroelastic DBsets

```nastran
AECONFIG =PROTO_A
```
```text
┌─────────────┬───────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                   │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ config-name │ The configuration name. This is the aerodynamic supergroup name identified as part of the │
│             │ aeroelastic model (Character; Default = AEROSG2D).                                        │
└─────────────┴───────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Typically, the aeroelastic configuration name is specified as the aerodynamic supergroup as part of the model generation in MSC FlightLoads.
2. If AECONFIG is not present, aerodynamic and aeroelastic datablocks will be created from the data in the Bulk Data Section and assigned the default value AECONFIG=AEROSG2D.
3. Multiple configuration names are supported.
4. AECONFIG is typically assigned above the subcase level. If it is overridden at the subcase level, it is necessary to attach an existing aerodynamic database.
