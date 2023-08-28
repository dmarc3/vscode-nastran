## [MONCNCM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MONCNCM.xhtml) - Nondimensional Normal Force and Pitching Moment

Provides a stripwise aerodynamic normal force and pitching moment coefficients for CAERO1 based aerodynamics.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MONCNCM NAME    LABEL                                                   +
+       MREF    CAERID1 CAERID2 ...     CAERIDn                                 
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MONCNCM LEFT    Norm for and pitching mom values for strips on left wing
                2001    3001                                                    
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NAME      │ Unique character string of up to 8 characters identifying the family of chord-wise strips.         │
│           │ (Character)                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABEL     │ A string comprising no more than 56 characters (fields 3 through 9) that identifies and labels the │
│           │ component. (Optional)                                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MREF      │ Fractional chord location of the aerodynamic strip about which the pitching moment is to be        │
│           │ calculated. (Real;<0.0MREF <1.0; Default = 0.25)                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CAERID1   │ ID of a CAER01 entry that contains aero boxes for which strip results are to be produced. (Integer │
│           │ > 0 or “ALL”). See Remarks 2. and 3.                                                               │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The LABEL is optional.
2. Output is produced for all chordwise strips on the referenced CAERO1 entries. If a strip spans CAERO1 panels, results are output for the total strip.
3. If CAERID1 is the character string “ALL”, then output will be produced for all strips.
4. Strips are identified based on the y and z coordinates in the aerodynamic coordinate system.
5. If strips from separate CAERO1’s have the same y and z coordinate and the same strip width and share an xlocation (i.e., the leading edge of one strip equals the trailing edge from another) then they are processed as a single strip.
6. The normal force component is normalized by the dynamic pressure times the surface area of the strip. The moment component is normalized by the dynamic pressure times the surface area of the strip times the chord length at the center of the strip. The moment is calculated about the MREF location of the strip with the quarter-chord of the strip as the default.
7. Only CAERO1 id’s are supported.
