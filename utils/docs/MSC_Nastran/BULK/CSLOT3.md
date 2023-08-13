## [CSLOT3](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CSLOT3.xhtml) - Three Point Slot Element Connection

Defines an element connecting three points that solve the wave equation in two dimensions.  Used in the acoustic cavity analysis for the definition of evenly spaced radial slots.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CSLOT3  EID     IDS1    IDS2    IDS3            RHO     B       M               
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CSLOT3  100     1       3       2               3.0-3           6               
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)                                    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDSi      │ Identification number of connected GRIDS points. (Integer > 0)                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ RHO       │ Fluid density in mass units. (Real > 0.0; Default is the value of RHOD on the AXSLOT entry)   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ B         │ Fluid bulk modulus. (Real > 0.0; Default is the value of BD on the AXSLOT entry)              │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ M         │ Number of slots in circumferential direction. (Integer > 0; Default is the value of MD on the │
│           │ AXSLOT entry)                                                                                 │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. CSLOT3 is allowed only if an AXSLOT entry is also present.
2. This element identification number (EID) must be unique with respect to all other fluid or structural elements.
3. If RHO, B, or M are blank, then the RHOD, BD, or MD fields on the AXSLOT entry must be specified.
4. This element generates three plot elements, connecting points IDS1 to IDS2, IDS2 to IDS3, and IDS3 to IDS1.
5. If B=0.0, then the slot is considered to be an incompressible fluid.
6. If M=0, then no matrices for CSLOT3 elements are generated.
