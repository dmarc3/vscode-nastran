## [AERCONFIG (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.AERCONFIG.Case.xhtml) - Aerodynamic Model to be Used for the Rigid Aerodynamics

Enables the user to select a different mesh for the rigid portion of the aerodynamics than for the elastic portion.

#### Format:

```nastran
AERCONFIG=config-name
```

#### Examples:

```nastran
AERC=RAERO
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AERC      │ The configuration name. This is the aerodynamic supergroup name for the aerodynamic model that is │
│           │ used to create the rigid aerodynamics.                                                            │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. If the AERCONFIG Case Control command is not present in the subcase, the rigid portion of the aerodynamics is based on the same AECONFIG as the flexible aerodynamics.
2. The rigid aerodynamics must be precomputed and attached from an assigned database using FMS commands such as:

```nastran
ASSIGN RMASTER = “raero.master”
DBLOCATE WHERE(AECONFIG=’rconfig’) LOGICAL=RMASTER
```
