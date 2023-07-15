## [PVISC1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PVISC1.xhtml) - Nonlinear Damper Property- SOL 700

Defines the properties of a nonlinear damper where the damping constant varies with the velocity. Used in SOL700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PVISC1  PID     TABLE                                                           
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PVISC1  8       236                                                             
```
```text
┌───────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Field │ Content                                                                                         │
├───────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID   │ Unique property number. (Integer > 0; required)                                                 │
├───────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TABLE │ TABLED1 ID defining the variation of the force (y-value) with velocity (x-value). (Integer > 0; │
│       │ required)                                                                                       │
└───────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. This entry defines the properties of a nonlinear damper. Use the PVISC entry to define linear dampers.

2. The values in the table are interpolated to get the force for a particular velocity.

