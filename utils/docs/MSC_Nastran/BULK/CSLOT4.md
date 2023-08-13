## [CSLOT4](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CSLOT4.xhtml) - Four Point Slot Element Connection

Defines an element connecting four points that solve the wave equation in two dimensions. Used in acoustic cavity analysis for the definition of evenly spaced radial slots.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CSLOT4  EID     IDS1    IDS2    IDS3    IDS4    RHO     B       M               
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CSLOT4  101     1       3       2       4               6.2+4   3               
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number.  (0 < Integer < 100,000,000)                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDSi      │ Identification number of connected GRIDS points.  (Integer > 0)                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RHO       │ Fluid density in mass units.  (Real > 0.0; Default is the value of RHOD on the AXSLOT entry.)  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ B         │ Fluid bulk modulus.  (Real > 0.0; Default is the value of BD on the AXSLOT entry.)             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ M         │ Number of slots in circumferential direction.  (Integer > 0; Default is the value of MD on the │
│           │ AXSLOT entry.)                                                                                 │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry is allowed only if an AXSLOT entry is also present.
2. This element identification number (EID) must be unique with respect to all other fluid or structural elements.
3. If RHO, B, or M are blank, then the RHOD, BD, or MD fields on the AXSLOT entry must be specified.
4. This element generates four plot elements connecting points IDS1 to IDS2, IDS2 to IDS3, IDS3 to IDS4, and IDS4 to IDS1.
5. If B = 0.0, then the slot is considered to be an incompressible fluid.
6. If M = 0, then no matrices for CSLOT4 elements are generated.
