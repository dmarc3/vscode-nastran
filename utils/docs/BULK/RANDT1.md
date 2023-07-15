## [RANDT1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RANDT1.xhtml) - Autocorrelation Function Time Lag

Defines time lag constants for use in random analysis autocorrelation function calculation.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RANDT1  SID     N       T0      TMAX                                            
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RANDT1  5       10      3.2     9.6                                             
```
```text
┌───────────┬───────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                   │
├───────────┼───────────────────────────────────────────────────────────┤
│ SID       │ Random analysis set identification number.  (Integer > 0) │
├───────────┼───────────────────────────────────────────────────────────┤
│ N         │ Number of time lag intervals.  (Integer > 0)              │
├───────────┼───────────────────────────────────────────────────────────┤
│ T0        │ Starting time lag.  (Real > 0.0)                          │
├───────────┼───────────────────────────────────────────────────────────┤
│ TMAX      │ Maximum time lag.  (Real > T0)                            │
└───────────┴───────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Time lag sets must be selected with the Case Control command RANDOM = SID.

2. At least one RANDPS entry must be present with the same set identification number.

3. The time   lags defined on this entry are given by

![bulkqrs07398.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07398.jpg?_LANG=enus)  

4. See the   MSC Nastran Dynamic Analysis User’s Guide   for a discussion of random analysis.

5. If Modules are present then this entry may only be specified in the main Bulk Data section.

