## [PBSH2DT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PBSH2DT.xhtml) - 2-D Linear/Nonlinear Connection Properties using Table Lookup

Defines frequency-dependent properties of a two-dimensional element (CBUSH2D) using TABLED1 lookup.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBSH2DT PID     “K”     K11     K22     K12     K21                             
                “B”     B11     B22     B12     B21                             
                “M”     M11     M22     M12     M21                             
                                                                                
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property id of a PBUSH2D entry (see Remark 1.)                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ K11       │ TABLED1 used to define frequency-dependent stiffness in the T1 direction (Integer >0 or blank) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ K22       │ TABLED1 used to define frequency-dependent stiffness in the T2 direction (Integer >0 or blank) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ K12       │ TABLED1 used to define frequency-dependent cross coupling stiffness (Integer >0 or blank)      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ K21       │ TABLED1 used to define frequency-dependent cross coupling stiffness (Integer >0 or blank)      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ B11       │ TABLED1 used to define frequency-dependent damping in the T1 direction (Integer >0 or blank)   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ B22       │ TABLED1 used to define frequency-dependent damping in the T2 direction (Integer >0 or blank)   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ B12       │ TABLED1 used to define frequency-dependent cross coupling damping (Integer >0 or blank)        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ B21       │ TABLED1 used to define frequency-dependent cross coupling damping (Integer >0 or blank)        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ M11       │ TABLED1 used to define frequency-dependent mass in the T1 direction (Integer >0 or blank)      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ M22       │ TABLED1 used to define frequency-dependent mass in the T2 direction (Integer >0 or blank)      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ M12       │ TABLED1 used to define frequency-dependent cross coupling mass (Integer >0 or blank)           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ M21       │ TABLED1 used to define frequency-dependent cross coupling mass (Integer >0 or blank)           │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. A PBUSH2D with the same PID must exist. The values from the PBUSH2D will be used as the nominal stiffness, damping, and mass. Linear statics, normal modes, reduction, and superelement processing will use the nominal values. The values from the selectedTABLED1 entries will be used in any frequency-dependent loop.

2. Any field left blank indicates that the associated stiffness, damping, or mass is not frequency-dependent and the nominal values will be used for that term in the solution.

3. PBSH2DT card will only work if there is rotor definition in the model. If PBSH2DT is used on non-rotordynamics model, a FATAL message will be issued.

