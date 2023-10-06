## [PAERO3](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PAERO3.xhtml) - Aerodynamic Panel Property

Defines the number of Mach boxes in the flow direction and the location of cranks and control surfaces of a Mach box lifting surface.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PAERO3  PID     NBOX    NCTRL           X5      Y5      X6      Y6      +       
+       X7      Y7      X8      Y8      X9      Y9      X10     Y10     +       
+       X11     Y11     X12     Y12                                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PAERO3  2001    15      1               0.      65.                             
        78.     65.     108.    65.     82.     97.5    112.    97.5            
        86.     130.    116.    130.                                            
```

```text
┌────────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                         │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID        │ Property identification number. (Integer > 0)                                                   │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NBOX       │ Number of Mach boxes in the flow direction. (0 < Integer < 50)                                  │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NCTRL      │ Number of control surfaces. (Integer 0, 1, or 2)                                                │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X5 through │ Locations of points 5 through 12, which are in the aerodynamic coordinate system, to define the │
│ Y12        │ cranks and control surface geometry. (Real)                                                     │
└────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. For an illustration of the geometry, see the CAERO3 entry description.
2. If Y5  <  0.0, there is no leading edge crank. Also, if Y6  <  0.0, there is no trailing edge crank.
3. If NCTRL = 0, no continuations are required. If NCTRL = 1 or 2, then NCTRL continuations are required.
4. Y7  >  Y8, Y9  >  Y10, and Y11  >  Y12.
5. The number of Mach boxes in the spanwise direction (NSB) may be found from the following formula:

     ![bulkp06320.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06320.jpg?_LANG=enus)  

     where:

          See link for definitions.

     The number of Mach boxes in the streamwise direction may then be computed from:

     ![bulkp06330.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06330.jpg?_LANG=enus)  

     The number of chordwise boxes specified by the user (NBOX   >  50) will be replaced by a floating point number (usually slightly higher than NBOX). The method contracts the mesh equally in both dimensions until a box edge lies on the surface tip. This mesh size is then used to compute the number of chordwise boxes.

     ```text
     ┌───────┬────────────────────────────────────────────────────────────────────────────┐
     │ Note: │ A minimum of seven Mach boxes in the flow direction (NBOX) is recommended. │
     └───────┴────────────────────────────────────────────────────────────────────────────┘
     ```
