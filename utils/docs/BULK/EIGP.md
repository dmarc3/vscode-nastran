## [EIGP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.EIGP.xhtml) - Poles in Complex Plane

Defines poles that are used in complex eigenvalue extraction by the Determinant method.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EIGP    SID     ALPHA1  OMEGA1  M1      ALPHA2  OMEGA2  M2                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EIGP    15      -5.2    0.0     2       6.3     5.5     3                       
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID          │ Set identification number. (Integer > 0)                                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALPHAi,OMEGA │ Coordinates of point in complex plane. (Real)                                              │
│ i            │                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ Mi           │ Multiplicity of complex root at pole defined by point at ALPHAi and OMEGAi.  (Integer > 0) │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The EIGP entry defines poles in the complex plane that are used with an associated EIGC entry having the same set number.
2. The units of ALPHAi and OMEGAi are radians per unit time.
3. Poles are used only in the determinant method. (METHOD = “DET” on the EIGC entry).
4. One or two poles may be defined on a single entry.
5. See  The   NASTRAN Theoretical Manual , Section 10.3.4, for details.
6. If Modules are present then this entry may only be specified in the main Bulk Data section.
