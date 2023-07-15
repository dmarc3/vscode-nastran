## [PRESPT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PRESPT.xhtml) - Fluid Pressure Point

Defines the location of pressure points in the fluid for recovery of pressure data.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PRESPT  IDF     IDP1    PHI1    IDP2    PHI2    IDP3    PHI3                    
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PRESPT  14      141     0.0                     142     90.0                    
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ IDF       │ Fluid point (RINGFL entry) identification number. (Integer > 0)                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ IDPi      │ Pressure point identification number. (Integer > 0)                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ PHIi      │ Azimuthal position on fluid point referenced by IDF in fluid coordinate system. (Real) │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. PRESPT is allowed only if an AXIF entry is also present.

2. All pressure point identification numbers must be unique with respect to other scalar, structural, and fluid points.

3. The pressure points are used primarily for the identification of output data. They may also be used as points at which to measure pressure for input to control devices.

4. One, two, or three pressure points may be defined per entry.

5. Output requests for velocity and acceleration of these degrees-of-freedom will result in derivatives of pressure with respect to time.

