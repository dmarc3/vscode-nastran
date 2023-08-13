## [AXIC](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AXIC.xhtml) - Conical Shell Problem Flag

Defines the existence of an axisymmetric conical shell problem.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AXIC    H                                                                       
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AXIC    15                                                                      
```

```text
┌────────────┬──────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                          │
├────────────┼──────────────────────────────────────────────────────────────────┤
│ H          │ Highest harmonic defined for the problem.  (0 ≤ Integer < 998)   │
└────────────┴──────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Only one AXIC entry is allowed.  When the AXIC entry is present, most other entries are not allowed.  The types that are allowed with the AXIC entry are listed below:

```text
┌─────────┬─────────┬─────────┐
│ CCONEAX │ MATT1   │ SPCADD  │
├─────────┼─────────┼─────────┤
│ DAREA   │ MOMAX   │ SPCAX   │
├─────────┼─────────┼─────────┤
│ DELAY   │ MOMENT  │ SUPAX   │
├─────────┼─────────┼─────────┤
│ DLOAD   │ MPCADD  │ TABDMP1 │
├─────────┼─────────┼─────────┤
│ DMI     │ MPCAX   │ TABLED1 │
├─────────┼─────────┼─────────┤
│ DMIG    │ NOLIN1  │ TABLED2 │
├─────────┼─────────┼─────────┤
│ DPHASE  │ NOLIN2  │ TABLED3 │
├─────────┼─────────┼─────────┤
│ EIGB    │ NOLIN3  │ TABLED4 │
├─────────┼─────────┼─────────┤
│ EIGC    │ NOLIN4  │ TABLE11 │
├─────────┼─────────┼─────────┤
│ EIGP    │ NSM     │ TABLEM2 │
├─────────┼─────────┼─────────┤
│ EIGR    │ NSM1    │ TABLEM3 │
├─────────┼─────────┼─────────┤
│ EIGRL   │ NSMADD  │ TABLEM4 │
├─────────┼─────────┼─────────┤
│ EPOINT  │ OMITAX  │ TEMPAX  │
├─────────┼─────────┼─────────┤
│ FORCE   │ PARAM   │ TF      │
├─────────┼─────────┼─────────┤
│ FORCEAX │ PCONEAX │ TIC     │
├─────────┼─────────┼─────────┤
│ FREQ    │ POINTAX │ TLOAD1  │
├─────────┼─────────┼─────────┤
│ FREQ1   │ PRESAX  │ TLOAD2  │
├─────────┼─────────┼─────────┤
│ FREQ2   │ RINGAX  │ TSTEP   │
├─────────┼─────────┼─────────┤
│ GRAV    │ RFORCE  │         │
├─────────┼─────────┼─────────┤
│ LOAD    │ RLOAD1  │         │
├─────────┼─────────┼─────────┤
│ MAT1    │ RLOAD2  │         │
├─────────┼─────────┼─────────┤
│ MAT2    │ SECTAX  │         │
└─────────┴─────────┴─────────┘
```

2. For a discussion of the conical shell element, see the   in the  MSC Nastran Reference Guide.
